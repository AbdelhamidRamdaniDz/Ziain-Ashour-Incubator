import { Clock, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function CoursesPage() {
  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Video Courses Library</h1>
        <p className="text-muted-foreground">Access specialized courses to develop your entrepreneurial skills</p>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <select className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background">
              <option>All Categories</option>
              <option>Business</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Technology</option>
            </select>
            <select className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background">
              <option>Sort by: Newest</option>
              <option>Sort by: Oldest</option>
              <option>Sort by: Popular</option>
            </select>
          </div>
        </div>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Course 1 */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Business
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.8</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">Business Model Canvas Masterclass</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  Learn how to create and analyze a business model canvas for your startup.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>3h 45m</span>
                  </div>
                  <span>12 lessons</span>
                </div>
                <Progress value={75} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full">Continue Learning</Button>
              </CardFooter>
            </Card>

            {/* Course 2 */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Marketing
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.6</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">Digital Marketing for Startups</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  Discover effective digital marketing strategies for early-stage startups with limited budgets.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>4h 20m</span>
                  </div>
                  <span>15 lessons</span>
                </div>
                <Progress value={30} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full">Continue Learning</Button>
              </CardFooter>
            </Card>

            {/* Course 3 */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Finance
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.9</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">Startup Financial Planning</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  Learn how to create financial projections, manage cash flow, and prepare for investor meetings.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>5h 15m</span>
                  </div>
                  <span>18 lessons</span>
                </div>
                <Progress value={0} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full">Start Course</Button>
              </CardFooter>
            </Card>

            {/* Course 4 */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Legal
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.7</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">Intellectual Property for Startups</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  Understand patents, trademarks, and copyrights to protect your startup's innovations.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>3h 30m</span>
                  </div>
                  <span>10 lessons</span>
                </div>
                <Progress value={100} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full" variant="outline">
                  View Certificate
                </Button>
              </CardFooter>
            </Card>

            {/* Course 5 */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Pitching
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.9</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">Perfect Pitch: Presenting to Investors</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  Learn how to create and deliver compelling investor pitches that get results.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>4h 10m</span>
                  </div>
                  <span>14 lessons</span>
                </div>
                <Progress value={100} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full" variant="outline">
                  View Certificate
                </Button>
              </CardFooter>
            </Card>

            {/* Course 6 */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Technology
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.8</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">MVP Development Strategies</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  Learn how to build a minimum viable product that validates your business idea efficiently.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>6h 20m</span>
                  </div>
                  <span>20 lessons</span>
                </div>
                <Progress value={50} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full">Continue Learning</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* In Progress Courses */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Business
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.8</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">Business Model Canvas Masterclass</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  Learn how to create and analyze a business model canvas for your startup.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>3h 45m</span>
                  </div>
                  <span>12 lessons</span>
                </div>
                <Progress value={75} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full">Continue Learning</Button>
              </CardFooter>
            </Card>
            {/* Add more in-progress courses */}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Completed Courses */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Legal
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.7</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">Intellectual Property for Startups</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  Understand patents, trademarks, and copyrights to protect your startup's innovations.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>3h 30m</span>
                  </div>
                  <span>10 lessons</span>
                </div>
                <Progress value={100} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full" variant="outline">
                  View Certificate
                </Button>
              </CardFooter>
            </Card>
            {/* Add more completed courses */}
          </div>
        </TabsContent>

        <TabsContent value="recommended" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Recommended Courses */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Finance
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.9</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">Startup Financial Planning</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  Learn how to create financial projections, manage cash flow, and prepare for investor meetings.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>5h 15m</span>
                  </div>
                  <span>18 lessons</span>
                </div>
                <Progress value={0} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full">Start Course</Button>
              </CardFooter>
            </Card>
            {/* Add more recommended courses */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
