import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight, Calendar, ChevronRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NewsPage() {
  // Mock data for news articles
  const newsArticles = [
    {
      id: 1,
      title: "Ziain Ashour Incubator Launches New AI Innovation Program",
      excerpt:
        "The university's startup incubator announces a specialized program focused on artificial intelligence applications.",
      date: "May 20, 2025",
      author: "Admin Team",
      category: "announcements",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Student Startup Secures $1.5M in Seed Funding",
      excerpt:
        "EcoTrack, a student-led environmental monitoring startup from our incubator, has secured significant investment.",
      date: "May 15, 2025",
      author: "Karim Hadad",
      category: "success-stories",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Upcoming Workshop: Business Model Canvas Masterclass",
      excerpt:
        "Join our expert mentors for a hands-on workshop on developing effective business models for your startup.",
      date: "May 12, 2025",
      author: "Events Team",
      category: "events",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "New Partnership with Global Tech Company Announced",
      excerpt:
        "Ziain Ashour Incubator partners with leading technology firm to provide advanced resources to student entrepreneurs.",
      date: "May 10, 2025",
      author: "Admin Team",
      category: "announcements",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "Student Startup Featured in National Innovation Magazine",
      excerpt:
        "MediRemind, a healthcare app developed by pharmacy students, receives national recognition for its innovative approach.",
      date: "May 5, 2025",
      author: "Yasmine Tazi",
      category: "success-stories",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "Entrepreneurship Summit: Registration Now Open",
      excerpt:
        "Register now for our annual Entrepreneurship Summit featuring keynote speakers, workshops, and networking opportunities.",
      date: "May 1, 2025",
      author: "Events Team",
      category: "events",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 7,
      title: "Incubator Expands Facilities with New Prototyping Lab",
      excerpt:
        "State-of-the-art prototyping equipment now available to all incubator members in our newly expanded facilities.",
      date: "April 28, 2025",
      author: "Admin Team",
      category: "announcements",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 8,
      title: "Alumni Startup Reaches 100,000 Users Milestone",
      excerpt:
        "StudyBuddy, an AI-powered study assistant developed by former incubator members, celebrates significant user growth.",
      date: "April 25, 2025",
      author: "Omar Mansouri",
      category: "success-stories",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 9,
      title: "Patent Workshop Series: Protecting Your Innovations",
      excerpt:
        "Learn how to protect your intellectual property with our comprehensive patent workshop series starting next month.",
      date: "April 20, 2025",
      author: "Events Team",
      category: "events",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">News & Blog</h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Stay updated with the latest news, events, and success stories from our incubator community.
        </p>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="all">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">All News</TabsTrigger>
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
              <TabsTrigger value="success-stories">Success Stories</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>
            <div className="hidden md:block">
              <Button variant="outline" size="sm" className="gap-2">
                Subscribe to Newsletter
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newsArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2 text-lg">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Link href={`/news/${article.id}`} className="w-full">
                      <Button variant="outline" className="w-full gap-1">
                        Read More
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="announcements" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newsArticles
                .filter((article) => article.category === "announcements")
                .map((article) => (
                  <Card key={article.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="p-4 pb-0">
                      <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {article.author}
                        </span>
                      </div>
                      <CardTitle className="line-clamp-2 text-lg">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Link href={`/news/${article.id}`} className="w-full">
                        <Button variant="outline" className="w-full gap-1">
                          Read More
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="success-stories" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newsArticles
                .filter((article) => article.category === "success-stories")
                .map((article) => (
                  <Card key={article.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="p-4 pb-0">
                      <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {article.author}
                        </span>
                      </div>
                      <CardTitle className="line-clamp-2 text-lg">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Link href={`/news/${article.id}`} className="w-full">
                        <Button variant="outline" className="w-full gap-1">
                          Read More
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newsArticles
                .filter((article) => article.category === "events")
                .map((article) => (
                  <Card key={article.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="p-4 pb-0">
                      <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {article.author}
                        </span>
                      </div>
                      <CardTitle className="line-clamp-2 text-lg">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Link href={`/news/${article.id}`} className="w-full">
                        <Button variant="outline" className="w-full gap-1">
                          Read More
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>

      <div className="mt-16 rounded-lg bg-primary/5 p-8 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Subscribe to Our Newsletter</h2>
          <p className="mt-2 text-muted-foreground">
            Stay updated with the latest news, events, and success stories from our incubator community.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Input type="email" placeholder="Enter your email address" className="max-w-md sm:min-w-[300px]" />
            <Button className="gap-2">
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our team.
          </p>
        </div>
      </div>
    </div>
  )
}
