import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import {
  LogOut,
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  Bell,
  Plus,
  UserPlus,
} from "lucide-react";
import { z } from "zod";

const gradeSchema = z.object({
  student_id: z.string().min(1, "Student is required"),
  subject_id: z.string().min(1, "Subject is required"),
  term: z.string().min(1, "Term is required"),
  score: z.number().min(0).max(100),
  letter_grade: z.string().optional(),
  teacher_comment: z.string().optional(),
});

const attendanceSchema = z.object({
  student_id: z.string().min(1, "Student is required"),
  date: z.string().min(1, "Date is required"),
  status: z.enum(["present", "absent", "late", "excused"]),
  notes: z.string().optional(),
});

const announcementSchema = z.object({
  title: z.string().min(1, "Title is required").max(200),
  content: z.string().min(1, "Content is required").max(2000),
  priority: z.enum(["low", "normal", "high"]),
});

interface Student {
  id: string;
  first_name: string;
  last_name: string;
  student_id: string;
  grade_level: string;
}

interface Subject {
  id: string;
  name: string;
}

const AdminPortal = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  // Grade form
  const [gradeStudentId, setGradeStudentId] = useState("");
  const [gradeSubjectId, setGradeSubjectId] = useState("");
  const [gradeTerm, setGradeTerm] = useState("");
  const [gradeScore, setGradeScore] = useState("");
  const [letterGrade, setLetterGrade] = useState("");
  const [teacherComment, setTeacherComment] = useState("");

  // Attendance form
  const [attendanceStudentId, setAttendanceStudentId] = useState("");
  const [attendanceDate, setAttendanceDate] = useState("");
  const [attendanceStatus, setAttendanceStatus] = useState("present");
  const [attendanceNotes, setAttendanceNotes] = useState("");

  // Announcement form
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementContent, setAnnouncementContent] = useState("");
  const [announcementPriority, setAnnouncementPriority] = useState("normal");

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      // Check if user is admin
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin");

      if (!roles || roles.length === 0) {
        toast({
          title: "Access Denied",
          description: "You don't have admin permissions",
          variant: "destructive",
        });
        navigate("/parent");
        return;
      }

      setUser(session.user);
      await fetchStudents();
      await fetchSubjects();
    } catch (error) {
      console.error("Error:", error);
      navigate("/auth");
    } finally {
      setLoading(false);
    }
  };

  const fetchStudents = async () => {
    const { data } = await supabase
      .from("students")
      .select("*")
      .order("first_name");
    if (data) setStudents(data);
  };

  const fetchSubjects = async () => {
    const { data } = await supabase
      .from("subjects")
      .select("*")
      .order("name");
    if (data) setSubjects(data);
  };

  const handleAddGrade = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = gradeSchema.parse({
        student_id: gradeStudentId,
        subject_id: gradeSubjectId,
        term: gradeTerm,
        score: parseFloat(gradeScore),
        letter_grade: letterGrade || undefined,
        teacher_comment: teacherComment || undefined,
      });

      const { error } = await supabase.from("grades").insert([{
        student_id: validated.student_id,
        subject_id: validated.subject_id,
        term: validated.term,
        score: validated.score,
        letter_grade: validated.letter_grade || null,
        teacher_comment: validated.teacher_comment || null,
      }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Grade added successfully",
      });

      // Reset form
      setGradeStudentId("");
      setGradeSubjectId("");
      setGradeTerm("");
      setGradeScore("");
      setLetterGrade("");
      setTeacherComment("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to add grade",
          variant: "destructive",
        });
      }
    }
  };

  const handleAddAttendance = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = attendanceSchema.parse({
        student_id: attendanceStudentId,
        date: attendanceDate,
        status: attendanceStatus as any,
        notes: attendanceNotes || undefined,
      });

      const { error } = await supabase.from("attendance").insert([{
        student_id: validated.student_id,
        date: validated.date,
        status: validated.status,
        notes: validated.notes || null,
      }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Attendance recorded successfully",
      });

      // Reset form
      setAttendanceStudentId("");
      setAttendanceDate("");
      setAttendanceStatus("present");
      setAttendanceNotes("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to record attendance",
          variant: "destructive",
        });
      }
    }
  };

  const handleAddAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = announcementSchema.parse({
        title: announcementTitle,
        content: announcementContent,
        priority: announcementPriority as any,
      });

      const { error } = await supabase
        .from("announcements")
        .insert([{
          title: validated.title,
          content: validated.content,
          priority: validated.priority,
          created_by: user.id,
        }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Announcement published successfully",
      });

      // Reset form
      setAnnouncementTitle("");
      setAnnouncementContent("");
      setAnnouncementPriority("normal");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to publish announcement",
          variant: "destructive",
        });
      }
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-white dark:bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-accent" />
              <div>
                <h1 className="text-xl font-display font-bold">Admin Portal</h1>
                <p className="text-sm text-muted-foreground">
                  {user?.user_metadata?.first_name} {user?.user_metadata?.last_name}
                </p>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="grades" className="space-y-6">
          <TabsList>
            <TabsTrigger value="grades">
              <BookOpen className="h-4 w-4 mr-2" />
              Add Grades
            </TabsTrigger>
            <TabsTrigger value="attendance">
              <ClipboardCheck className="h-4 w-4 mr-2" />
              Record Attendance
            </TabsTrigger>
            <TabsTrigger value="announcements">
              <Bell className="h-4 w-4 mr-2" />
              Post Announcement
            </TabsTrigger>
          </TabsList>

          <TabsContent value="grades">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Add Student Grade
              </h3>
              <form onSubmit={handleAddGrade} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="grade-student">Student *</Label>
                    <select
                      id="grade-student"
                      value={gradeStudentId}
                      onChange={(e) => setGradeStudentId(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-white dark:bg-card"
                      required
                    >
                      <option value="">Select student...</option>
                      {students.map((student) => (
                        <option key={student.id} value={student.id}>
                          {student.first_name} {student.last_name} ({student.student_id})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="grade-subject">Subject *</Label>
                    <select
                      id="grade-subject"
                      value={gradeSubjectId}
                      onChange={(e) => setGradeSubjectId(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-white dark:bg-card"
                      required
                    >
                      <option value="">Select subject...</option>
                      {subjects.map((subject) => (
                        <option key={subject.id} value={subject.id}>
                          {subject.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="grade-term">Term *</Label>
                    <Input
                      id="grade-term"
                      value={gradeTerm}
                      onChange={(e) => setGradeTerm(e.target.value)}
                      placeholder="e.g., Fall 2024"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="grade-score">Score (0-100) *</Label>
                    <Input
                      id="grade-score"
                      type="number"
                      min="0"
                      max="100"
                      step="0.01"
                      value={gradeScore}
                      onChange={(e) => setGradeScore(e.target.value)}
                      placeholder="85.5"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="letter-grade">Letter Grade</Label>
                    <Input
                      id="letter-grade"
                      value={letterGrade}
                      onChange={(e) => setLetterGrade(e.target.value)}
                      placeholder="A, B+, etc."
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="teacher-comment">Teacher Comment</Label>
                  <Textarea
                    id="teacher-comment"
                    value={teacherComment}
                    onChange={(e) => setTeacherComment(e.target.value)}
                    placeholder="Optional feedback for the student..."
                    rows={3}
                  />
                </div>
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Grade
                </Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="attendance">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Record Attendance
              </h3>
              <form onSubmit={handleAddAttendance} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="attendance-student">Student *</Label>
                    <select
                      id="attendance-student"
                      value={attendanceStudentId}
                      onChange={(e) => setAttendanceStudentId(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-white dark:bg-card"
                      required
                    >
                      <option value="">Select student...</option>
                      {students.map((student) => (
                        <option key={student.id} value={student.id}>
                          {student.first_name} {student.last_name} ({student.student_id})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="attendance-date">Date *</Label>
                    <Input
                      id="attendance-date"
                      type="date"
                      value={attendanceDate}
                      onChange={(e) => setAttendanceDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="attendance-status">Status *</Label>
                  <select
                    id="attendance-status"
                    value={attendanceStatus}
                    onChange={(e) => setAttendanceStatus(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-white dark:bg-card"
                    required
                  >
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                    <option value="late">Late</option>
                    <option value="excused">Excused</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="attendance-notes">Notes</Label>
                  <Textarea
                    id="attendance-notes"
                    value={attendanceNotes}
                    onChange={(e) => setAttendanceNotes(e.target.value)}
                    placeholder="Optional notes..."
                    rows={2}
                  />
                </div>
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Record Attendance
                </Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="announcements">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Post Announcement
              </h3>
              <form onSubmit={handleAddAnnouncement} className="space-y-4">
                <div>
                  <Label htmlFor="announcement-title">Title *</Label>
                  <Input
                    id="announcement-title"
                    value={announcementTitle}
                    onChange={(e) => setAnnouncementTitle(e.target.value)}
                    placeholder="Announcement title"
                    required
                    maxLength={200}
                  />
                </div>
                <div>
                  <Label htmlFor="announcement-priority">Priority *</Label>
                  <select
                    id="announcement-priority"
                    value={announcementPriority}
                    onChange={(e) => setAnnouncementPriority(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-white dark:bg-card"
                    required
                  >
                    <option value="low">Low</option>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="announcement-content">Content *</Label>
                  <Textarea
                    id="announcement-content"
                    value={announcementContent}
                    onChange={(e) => setAnnouncementContent(e.target.value)}
                    placeholder="Announcement content..."
                    rows={6}
                    required
                    maxLength={2000}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {announcementContent.length}/2000 characters
                  </p>
                </div>
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  <Bell className="h-4 w-4 mr-2" />
                  Publish Announcement
                </Button>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPortal;
