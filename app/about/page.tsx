import Link from "next/link"
import { ArrowRight, Award, BookOpen, CheckCircle, Lightbulb, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary/5 py-12 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              About Ziain Ashour University Startup Incubator
            </h1>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Empowering the next generation of entrepreneurs to transform innovative ideas into successful businesses
              since 2018.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>What drives us every day</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To provide university students with the resources, mentorship, and support needed to transform
                innovative ideas into successful businesses, fostering a culture of entrepreneurship and innovation
                within the academic community.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                  <span>Nurture entrepreneurial mindsets among students</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                  <span>Bridge the gap between academic research and commercial applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                  <span>Provide practical business skills and knowledge</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Vision</CardTitle>
              <CardDescription>Where we're headed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be the leading university startup incubator in North Africa, recognized for cultivating innovative
                startups that address local and global challenges, contributing to economic growth and sustainable
                development in Algeria and beyond.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                  <span>Establish Ziain Ashour University as an innovation hub</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                  <span>Launch 100+ successful startups by 2030</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-primary" />
                  <span>Create a self-sustaining ecosystem of innovation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* History & Achievements */}
      <section className="bg-muted/40 py-12 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our History & Achievements</h2>
            <p className="mt-4 text-muted-foreground">
              Since our founding in 2018, we've grown from a small initiative to a comprehensive startup support
              program.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block md:absolute md:left-1/2 md:h-full md:w-0.5 md:-translate-x-1/2 md:bg-border" />

              <div className="relative md:flex">
                <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-bold">2018</h3>
                  <p className="text-muted-foreground">Founding Year</p>
                </div>
                <div className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary md:left-1/2 md:-translate-x-1/2">
                  <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-bold md:hidden">2018: Founding Year</h3>
                  <p className="mt-2">
                    Established with a small team of 5 mentors and 20 students, focusing on technology startups in a
                    single department.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="relative md:flex">
                <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                  <p className="mt-2">
                    Expanded to include 5 university departments and launched our first dedicated workspace with
                    prototyping equipment.
                  </p>
                </div>
                <div className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary md:left-1/2 md:-translate-x-1/2">
                  <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-bold md:hidden">2020: Expansion</h3>
                  <h3 className="hidden text-xl font-bold md:block">2020</h3>
                  <p className="hidden text-muted-foreground md:block">Expansion</p>
                </div>
              </div>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="relative md:flex">
                <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-bold">2022</h3>
                  <p className="text-muted-foreground">Major Milestone</p>
                </div>
                <div className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary md:left-1/2 md:-translate-x-1/2">
                  <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-bold md:hidden">2022: Major Milestone</h3>
                  <p className="mt-2">
                    Celebrated our first major exit when EcoTrack, an environmental monitoring startup founded by our
                    students, was acquired for $2.5 million.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="relative md:flex">
                <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                  <p className="mt-2">
                    Launched our comprehensive digital platform, expanded to all university departments, and established
                    partnerships with 15+ industry leaders.
                  </p>
                </div>
                <div className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary md:left-1/2 md:-translate-x-1/2">
                  <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-bold md:hidden">2025: Today</h3>
                  <h3 className="hidden text-xl font-bold md:block">2025</h3>
                  <p className="hidden text-muted-foreground md:block">Today</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">200+</h3>
                  <p className="text-sm text-muted-foreground">Students Enrolled</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">50+</h3>
                  <p className="text-sm text-muted-foreground">Startups Launched</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">12</h3>
                  <p className="text-sm text-muted-foreground">Innovation Awards</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">25+</h3>
                  <p className="text-sm text-muted-foreground">Specialized Courses</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our Leadership Team</h2>
          <p className="mt-4 text-muted-foreground">
            Meet the dedicated professors, industry experts, and administrators who guide our incubator.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            {
              name: "Prof. Amina Benali",
              role: "Director",
              department: "Computer Science",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Dr. Karim Hadad",
              role: "Head of Mentorship",
              department: "Business Administration",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Prof. Yasmine Tazi",
              role: "Innovation Lead",
              department: "Engineering",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Dr. Omar Mansouri",
              role: "Partnerships Director",
              department: "Economics",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Prof. Leila Amrani",
              role: "Research Coordinator",
              department: "Biotechnology",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Dr. Ahmed Khalid",
              role: "Patent Advisor",
              department: "Law",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Prof. Fatima Benali",
              role: "Curriculum Director",
              department: "Education",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Dr. Mehdi Alaoui",
              role: "Technology Lead",
              department: "Information Technology",
              image: "/placeholder.svg?height=300&width=300",
            },
          ].map((member, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 aspect-square h-32 w-32 overflow-hidden rounded-full">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.department}</p>
                </div>
              </CardContent>
            </Card>
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
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
