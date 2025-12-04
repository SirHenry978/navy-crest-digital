import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, GraduationCap } from "lucide-react";

interface ApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ApplicationModal = ({ open, onOpenChange }: ApplicationModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    gradeLevel: "",
    parentName: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.studentName || !formData.email || !formData.phone || !formData.gradeLevel || !formData.parentName) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-application", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Thank you for your application. We'll be in touch soon!",
      });

      setFormData({
        studentName: "",
        email: "",
        phone: "",
        gradeLevel: "",
        parentName: "",
        message: "",
      });
      onOpenChange(false);
    } catch (error: any) {
      console.error("Error submitting application:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-accent" />
            <DialogTitle className="text-2xl font-display">Apply Now</DialogTitle>
          </div>
          <DialogDescription>
            Fill out the form below to start your application to Young and Wise Academy.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="studentName">Student Full Name *</Label>
            <Input
              id="studentName"
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              placeholder="Enter student's full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Enter phone number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gradeLevel">Grade Level Applying For *</Label>
            <Select
              value={formData.gradeLevel}
              onValueChange={(value) => setFormData({ ...formData, gradeLevel: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select grade level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9">Grade 9 (Freshman)</SelectItem>
                <SelectItem value="10">Grade 10 (Sophomore)</SelectItem>
                <SelectItem value="11">Grade 11 (Junior)</SelectItem>
                <SelectItem value="12">Grade 12 (Senior)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="parentName">Parent/Guardian Name *</Label>
            <Input
              id="parentName"
              value={formData.parentName}
              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
              placeholder="Enter parent/guardian name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Message (Optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Any additional information you'd like to share..."
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
