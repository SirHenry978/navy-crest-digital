import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import {
  LogOut,
  User,
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  Calendar,
  Bell,
} from "lucide-react";

interface Student {
  id: string;
  first_name: string;
  last_name: string;
  grade_level: string;
  student_id: string;
}

interface Grade {
  id: string;
  term: string;
  score: number;
  letter_grade: string;
  teacher_comment: string;
  subjects: { name: string };
}

interface Attendance {
  id: string;
  date: string;
  status: string;
  notes: string;
}

interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: string;
  published_at: string;
}

const ParentPortal = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<string>("");
  const [grades, setGrades] = useState<Grade[]>([]);
  const [attendance, setAttendance] = useState<Attendance[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (selectedStudent) {
      fetchStudentData();
    }
  }, [selectedStudent]);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      setUser(session.user);
      await fetchStudents(session.user.id);
      await fetchAnnouncements();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStudents = async (userId: string) => {
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .eq("parent_id", userId);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to load students",
        variant: "destructive",
      });
    } else if (data && data.length > 0) {
      setStudents(data);
      setSelectedStudent(data[0].id);
    }
  };

  const fetchStudentData = async () => {
    if (!selectedStudent) return;

    // Fetch grades
    const { data: gradesData } = await supabase
      .from("grades")
      .select("*, subjects(name)")
      .eq("student_id", selectedStudent)
      .order("created_at", { ascending: false });

    if (gradesData) setGrades(gradesData as any);

    // Fetch attendance
    const { data: attendanceData } = await supabase
      .from("attendance")
      .select("*")
      .eq("student_id", selectedStudent)
      .order("date", { ascending: false })
      .limit(30);

    if (attendanceData) setAttendance(attendanceData);
  };

  const fetchAnnouncements = async () => {
    const { data } = await supabase
      .from("announcements")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(10);

    if (data) setAnnouncements(data);
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

  const selectedStudentData = students.find((s) => s.id === selectedStudent);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-white dark:bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-accent" />
              <div>
                <h1 className="text-xl font-display font-bold">Parent Portal</h1>
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
        {students.length === 0 ? (
          <Card className="p-8 text-center">
            <User className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">No Students Found</h2>
            <p className="text-muted-foreground">
              No students are currently linked to your account. Please contact the school
              administrator.
            </p>
          </Card>
        ) : (
          <>
            {/* Student Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Select Student</label>
              <select
                value={selectedStudent}
                onChange={(e) => setSelectedStudent(e.target.value)}
                className="w-full md:w-auto px-4 py-2 border border-border rounded-lg bg-white dark:bg-card"
              >
                {students.map((student) => (
                  <option key={student.id} value={student.id}>
                    {student.first_name} {student.last_name} - Grade {student.grade_level}
                  </option>
                ))}
              </select>
            </div>

            <Tabs defaultValue="grades" className="space-y-6">
              <TabsList>
                <TabsTrigger value="grades">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Grades
                </TabsTrigger>
                <TabsTrigger value="attendance">
                  <ClipboardCheck className="h-4 w-4 mr-2" />
                  Attendance
                </TabsTrigger>
                <TabsTrigger value="announcements">
                  <Bell className="h-4 w-4 mr-2" />
                  Announcements
                </TabsTrigger>
              </TabsList>

              <TabsContent value="grades">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Subject Grades</h3>
                  {grades.length === 0 ? (
                    <p className="text-muted-foreground">No grades available yet.</p>
                  ) : (
                    <div className="space-y-4">
                      {grades.map((grade) => (
                        <div key={grade.id} className="border-b border-border pb-4 last:border-0">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold">{grade.subjects.name}</h4>
                              <p className="text-sm text-muted-foreground">Term: {grade.term}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-accent">{grade.letter_grade || grade.score}</div>
                              <div className="text-sm text-muted-foreground">{grade.score}%</div>
                            </div>
                          </div>
                          {grade.teacher_comment && (
                            <p className="text-sm text-muted-foreground mt-2">
                              <span className="font-medium">Teacher's Note:</span> {grade.teacher_comment}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </TabsContent>

              <TabsContent value="attendance">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Attendance Record</h3>
                  {attendance.length === 0 ? (
                    <p className="text-muted-foreground">No attendance records available.</p>
                  ) : (
                    <div className="space-y-2">
                      {attendance.map((record) => (
                        <div
                          key={record.id}
                          className="flex justify-between items-center py-2 border-b border-border last:border-0"
                        >
                          <div>
                            <Calendar className="inline h-4 w-4 mr-2" />
                            {new Date(record.date).toLocaleDateString()}
                          </div>
                          <div>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                record.status === "present"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                  : record.status === "absent"
                                  ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                  : record.status === "late"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                  : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                              }`}
                            >
                              {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </TabsContent>

              <TabsContent value="announcements">
                <div className="space-y-4">
                  {announcements.length === 0 ? (
                    <Card className="p-6">
                      <p className="text-muted-foreground">No announcements available.</p>
                    </Card>
                  ) : (
                    announcements.map((announcement) => (
                      <Card key={announcement.id} className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold">{announcement.title}</h3>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              announcement.priority === "high"
                                ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                : announcement.priority === "normal"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                            }`}
                          >
                            {announcement.priority}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-3">{announcement.content}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(announcement.published_at).toLocaleDateString()}
                        </p>
                      </Card>
                    ))
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </div>
  );
};

export default ParentPortal;
