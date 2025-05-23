import Link from "next/link"
import { ArrowRight, Award, BookOpen, CheckCircle, ChevronRight, Lightbulb, Rocket, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 dark:from-primary/10 dark:to-background" />
        <div className="container relative grid items-center gap-6 py-12 md:grid-cols-2 md:py-24">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Turn Your Ideas Into <span className="text-primary">Successful Startups</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Ziain Ashour University Startup Incubator provides resources, mentorship, and support to help students
              transform innovative ideas into successful businesses.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/register">
                <Button size="lg" className="gap-2">
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/resources/courses">
                <Button size="lg" variant="outline" className="gap-2">
                  Explore Courses
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-primary/10 blur-3xl" />
              <div className="relative h-full w-full overflow-hidden rounded-xl border bg-background/50 shadow-xl backdrop-blur">
                <div className="grid h-full grid-cols-2 grid-rows-2 gap-2 p-4">
                  <div className="flex flex-col gap-2 rounded-lg bg-primary/10 p-4">
                    <Rocket className="h-8 w-8 text-primary" />
                    <h3 className="text-sm font-medium">Launch Your Startup</h3>
                    <p className="text-xs text-muted-foreground">Get the resources you need</p>
                  </div>
                  <div className="flex flex-col gap-2 rounded-lg bg-primary/10 p-4">
                    <Users className="h-8 w-8 text-primary" />
                    <h3 className="text-sm font-medium">Expert Mentorship</h3>
                    <p className="text-xs text-muted-foreground">Learn from professionals</p>
                  </div>
                  <div className="flex flex-col gap-2 rounded-lg bg-primary/10 p-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <h3 className="text-sm font-medium">Specialized Courses</h3>
                    <p className="text-xs text-muted-foreground">Develop your skills</p>
                  </div>
                  <div className="flex flex-col gap-2 rounded-lg bg-primary/10 p-4">
                    <Lightbulb className="h-8 w-8 text-primary" />
                    <h3 className="text-sm font-medium">Innovation Hub</h3>
                    <p className="text-xs text-muted-foreground">Collaborate and create</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/40">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-primary md:text-4xl">50+</span>
              <span className="mt-1 text-sm text-muted-foreground">Startups Launched</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-primary md:text-4xl">200+</span>
              <span className="mt-1 text-sm text-muted-foreground">Students Enrolled</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-primary md:text-4xl">30+</span>
              <span className="mt-1 text-sm text-muted-foreground">Expert Mentors</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-bold text-primary md:text-4xl">15+</span>
              <span className="mt-1 text-sm text-muted-foreground">Industry Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Comprehensive Support for Young Entrepreneurs
          </h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl">
            Our incubator provides everything students need to develop and launch successful startups.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Specialized Courses</CardTitle>
              <CardDescription>Access a library of courses designed specifically for startup founders.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Business model development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Marketing strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Financial planning</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/resources/courses" className="w-full">
                <Button variant="outline" className="w-full">
                  Explore Courses
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Expert Mentorship</CardTitle>
              <CardDescription>Get guidance from experienced entrepreneurs and industry professionals.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>One-on-one coaching</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Industry connections</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Feedback on your ideas</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/mentors" className="w-full">
                <Button variant="outline" className="w-full">
                  Meet Our Mentors
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Resources & Tools</CardTitle>
              <CardDescription>Access the tools and resources you need to build your startup.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Business model canvas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Patent submission support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Equipment and workspace</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/resources/tools" className="w-full">
                <Button variant="outline" className="w-full">
                  Explore Resources
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-muted/40 py-12 md:py-24">
        <div className="container">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Success Stories</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl">
              See how our incubator has helped students turn their ideas into successful businesses.
            </p>
          </div>
          <Tabs defaultValue="tech" className="mt-12">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="tech">Tech</TabsTrigger>
                <TabsTrigger value="health">Health</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="tech" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <div className="h-full w-full bg-primary/20" />
                    </div>
                    <CardTitle className="mt-4">EcoTrack</CardTitle>
                    <CardDescription>IoT solution for environmental monitoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Founded by computer science students, EcoTrack developed IoT devices that monitor air and water
                      quality. Now used by 5 municipalities.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">National Innovation Award 2023</span>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <div className="h-full w-full bg-primary/20" />
                    </div>
                    <CardTitle className="mt-4">StudyBuddy</CardTitle>
                    <CardDescription>AI-powered study assistant</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Created by a team of engineering students, StudyBuddy uses AI to help students organize study
                      materials and create personalized learning plans.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">10,000+ active users</span>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <div className="h-full w-full bg-primary/20" />
                    </div>
                    <CardTitle className="mt-4">LocalMarket</CardTitle>
                    <CardDescription>Connecting local farmers with consumers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      This platform helps local farmers sell directly to consumers, reducing food waste and supporting
                      the local economy.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Secured $500K in funding</span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="health" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <div className="h-full w-full bg-primary/20" />
                    </div>
                    <CardTitle className="mt-4">MediRemind</CardTitle>
                    <CardDescription>Medication reminder and health tracking app</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Developed by pharmacy students, MediRemind helps patients track medications and health metrics,
                      improving medication adherence.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Health Innovation Award 2022</span>
                    </div>
                  </CardFooter>
                </Card>
                {/* Add more health success stories */}
              </div>
            </TabsContent>
            {/* Add more tabs content */}
          </Tabs>
        </div>
      </section>

      {/* Partners Section */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Our Partners</h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl">
            We collaborate with leading companies and organizations to provide the best resources for our students.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="h-12 w-32 rounded-lg bg-muted" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-12 md:py-24">
        <div className="container">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Ready to Start Your Entrepreneurial Journey?
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl">
              Apply now to join our incubator and get the support you need to turn your idea into a successful business.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/register">
                <Button size="lg" className="gap-2">
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  Contact Us
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
