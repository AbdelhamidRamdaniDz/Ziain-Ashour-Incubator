import Link from "next/link"
import { BarChart3, BookOpen, Calendar, FileText, Lightbulb, MessageSquare, Rocket, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function StudentPortalPage() {
  return (
    <div className="container py-6">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Ahmed!</h1>
        <p className="text-muted-foreground">"The best way to predict the future is to create it." — Peter Drucker</p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4/12</div>
            <Progress value={33} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8/15</div>
            <Progress value={53} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <div className="mt-2 text-xs text-muted-foreground">2 from mentors</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Project Status</CardTitle>
            <Rocket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Prototype</div>
            <div className="mt-2 text-xs text-muted-foreground">Next: MVP Development</div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <h2 className="mt-8 mb-4 text-xl font-semibold">Quick Links</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Link href="/student-portal/courses">
          <Button variant="outline" className="h-24 w-full flex-col justify-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span>Courses</span>
          </Button>
        </Link>
        <Link href="/student-portal/tasks">
          <Button variant="outline" className="h-24 w-full flex-col justify-center gap-2">
            <Calendar className="h-6 w-6" />
            <span>Tasks</span>
          </Button>
        </Link>
        <Link href="/student-portal/patent-submission">
          <Button variant="outline" className="h-24 w-full flex-col justify-center gap-2">
            <FileText className="h-6 w-6" />
            <span>Patent Submission</span>
          </Button>
        </Link>
        <Link href="/student-portal/tools">
          <Button variant="outline" className="h-24 w-full flex-col justify-center gap-2">
            <Lightbulb className="h-6 w-6" />
            <span>Business Tools</span>
          </Button>
        </Link>
      </div>

      {/* Recent Activity and Upcoming Events */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Completed "Business Model Canvas" course</p>
                  <p className="text-xs text-muted-foreground">Yesterday at 2:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Updated project description</p>
                  <p className="text-xs text-muted-foreground">2 days ago at 10:15 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Received feedback from Prof. Karim</p>
                  <p className="text-xs text-muted-foreground">3 days ago at 4:45 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full">
              View All Activity
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Workshops, deadlines, and meetings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Pitch Practice Workshop</p>
                  <p className="text-xs text-muted-foreground">Tomorrow at 2:00 PM • Room B12</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Mentor Meeting: Dr. Amina</p>
                  <p className="text-xs text-muted-foreground">May 25, 2025 at 11:30 AM • Online</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Quarterly Progress Review</p>
                  <p className="text-xs text-muted-foreground">May 30, 2025 at 10:00 AM • Conference Room</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full">
              View Calendar
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Inspiration Quote */}
      <Card className="mt-8 bg-primary/5">
        <CardContent className="pt-6">
          <blockquote className="border-l-4 border-primary pl-4 italic">
            "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is
            guaranteed to fail is not taking risks."
          </blockquote>
          <p className="mt-2 text-right text-sm font-medium">— Mark Zuckerberg</p>
        </CardContent>
      </Card>
    </div>
  )
}
