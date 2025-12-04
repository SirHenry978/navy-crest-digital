import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ApplicationRequest {
  studentName: string;
  email: string;
  phone: string;
  gradeLevel: string;
  parentName: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { studentName, email, phone, gradeLevel, parentName, message }: ApplicationRequest = await req.json();

    console.log("Sending application email for:", studentName);

    // Send notification to school admin
    const adminEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Young and Wise Academy <onboarding@resend.dev>",
        to: ["henrymurinda@gmail.com"],
        subject: `New Application: ${studentName} - Grade ${gradeLevel}`,
        html: `
          <h1>New Application Received</h1>
          <h2>Student Information</h2>
          <p><strong>Student Name:</strong> ${studentName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Grade Level Applying For:</strong> ${gradeLevel}</p>
          <p><strong>Parent/Guardian Name:</strong> ${parentName}</p>
          <h2>Additional Message</h2>
          <p>${message || "No additional message provided."}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">This application was submitted through the Young and Wise Academy website.</p>
        `,
      }),
    });

    console.log("Admin email response:", await adminEmailResponse.text());

    // Send confirmation to applicant
    const confirmationEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Young and Wise Academy <onboarding@resend.dev>",
        to: [email],
        subject: "Application Received - Young and Wise Academy",
        html: `
          <h1>Thank you for your application, ${studentName}!</h1>
          <p>We have received your application to Young and Wise Academy for Grade ${gradeLevel}.</p>
          <p>Our admissions team will review your application and contact you within 5-7 business days.</p>
          <h2>What's Next?</h2>
          <ul>
            <li>Our admissions team will review your application</li>
            <li>We may reach out for additional information or documents</li>
            <li>You will be invited for an interview and campus tour</li>
          </ul>
          <p>If you have any questions, please don't hesitate to contact us.</p>
          <p>Best regards,<br>Young and Wise Academy Admissions Team</p>
        `,
      }),
    });

    console.log("Confirmation email sent");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-application function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
