"use client"

import { useState } from "react"
import { Lightbulb, MessageSquare, Plus, Search, ThumbsUp, Users, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function InnovationHubPage() {
  const [isIdeaDialogOpen, setIsIdeaDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Mock data for innovation ideas
  const innovationIdeas = [
    {
      id: 1,
      title: "Smart Campus Navigation System",
      description:
        "An AR-based navigation system to help students and visitors navigate the university campus more efficiently.",
      author: "Ahmed Khalid",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "Technology",
      stage: "Concept",
      likes: 24,
      comments: 8,
      collaborators: 3,
      postedDate: "2 days ago",
      tags: ["AR", "Mobile App", "Navigation"],
    },
    {
      id: 2,
      title: "Sustainable Food Packaging Solution",
      description: "Biodegradable packaging made from agricultural waste to reduce plastic pollution in food industry.",
      author: "Fatima Benali",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "Sustainability",
      stage: "Research",
      likes: 31,
      comments: 12,
      collaborators: 5,
      postedDate: "1 week ago",
      tags: ["Sustainability", "Packaging", "Environment"],
    },
    {
      id: 3,
      title: "AI-Powered Study Assistant",
      description:
        "Personalized learning platform that adapts to individual student learning patterns and preferences.",
      author: "Omar Mansouri",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "Education",
      stage: "Prototype",
      likes: 45,
      comments: 18,
      collaborators: 7,
      postedDate: "3 days ago",
      tags: ["AI", "Education", "Machine Learning"],
    },
    {
      id: 4,
      title: "Telemedicine Platform for Rural Areas",
      description:
        "Mobile health platform connecting rural patients with healthcare professionals through video consultations.",
      author: "Leila Amrani",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "Healthcare",
      stage: "Development",
      likes: 38,
      comments: 15,
      collaborators: 4,
      postedDate: "5 days ago",
      tags: ["Healthcare", "Telemedicine", "Mobile"],
    },
    {
      id: 5,
      title: "Blockchain-Based Voting System",
      description: "Secure and transparent voting system using blockchain technology for student government elections.",
      author: "Karim Bouazizi",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "Technology",
      stage: "Concept",
      likes: 22,
      comments: 9,
      collaborators: 2,
      postedDate: "1 week ago",
      tags: ["Blockchain", "Security", "Voting"],
    },
    {
      id: 6,
      title: "Smart Water Management System",
      description:
        "IoT-based system for monitoring and optimizing water usage in university buildings and dormitories.",
      author: "Yasmine Tazi",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "Sustainability",
      stage: "Research",
      likes: 29,
      comments: 11,
      collaborators: 6,
      postedDate: "4 days ago",
      tags: ["IoT", "Water Management", "Smart City"],
    },
  ]

  const filteredIdeas = innovationIdeas.filter((idea) => {
    const matchesSearch =
      searchQuery === "" ||
      idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = categoryFilter === "all" || idea.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Concept":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Research":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Prototype":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "Development":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Innovation Hub</h1>
        <p className="text-muted-foreground">Share ideas, collaborate with peers, and turn concepts into reality</p>
      </div>

      <Tabs defaultValue="explore" className="space-y-6">
        <TabsList>
          <TabsTrigger value="explore">Explore Ideas</TabsTrigger>
          <TabsTrigger value="my-ideas">My Ideas</TabsTrigger>
          <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
        </TabsList>

        <TabsContent value="explore" className="space-y-6">
          {/* Search and Filter */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search ideas..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Sustainability">Sustainability</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                </SelectContent>
              </Select>
              <Dialog open={isIdeaDialogOpen} onOpenChange={setIsIdeaDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Share Idea
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Share Your Innovation Idea</DialogTitle>
                    <DialogDescription>Share your idea with the community and find collaborators</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Idea Title</Label>
                      <Input id="title" placeholder="Enter a catchy title for your idea" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="sustainability">Sustainability</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stage">Development Stage</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="concept">Concept</SelectItem>
                          <SelectItem value="research">Research</SelectItem>
                          <SelectItem value="prototype">Prototype</SelectItem>
                          <SelectItem value="development">Development</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your idea, its purpose, and potential impact"
                        rows={4}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags</Label>
                      <Input id="tags" placeholder="Add tags separated by commas (e.g., AI, Mobile, Healthcare)" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={() => setIsIdeaDialogOpen(false)}>
                      Share Idea
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Ideas Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredIdeas.map((idea) => (
              <Card key={idea.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={idea.authorAvatar || "/placeholder.svg"} alt={idea.author} />
                        <AvatarFallback>
                          {idea.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{idea.author}</p>
                        <p className="text-xs text-muted-foreground">{idea.postedDate}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className={getStageColor(idea.stage)}>
                      {idea.stage}
                    </Badge>
                  </div>
                  <CardTitle className="line-clamp-2">{idea.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{idea.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {idea.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{idea.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{idea.comments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{idea.collaborators}</span>
                      </div>
                    </div>
                    <Badge variant="outline">{idea.category}</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-1">
                    <Eye className="h-4 w-4" />
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1 gap-1">
                    <Users className="h-4 w-4" />
                    Collaborate
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-ideas" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">My Innovation Ideas</h2>
            <Button className="gap-2" onClick={() => setIsIdeaDialogOpen(true)}>
              <Plus className="h-4 w-4" />
              Share New Idea
            </Button>
          </div>

          <div className="text-center py-12">
            <Lightbulb className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No ideas shared yet</h3>
            <p className="text-muted-foreground mb-4">Share your first innovation idea with the community</p>
            <Button onClick={() => setIsIdeaDialogOpen(true)}>Share Your First Idea</Button>
          </div>
        </TabsContent>

        <TabsContent value="collaborations" className="space-y-6">
          <div className="text-center py-12">
            <Users className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No active collaborations</h3>
            <p className="text-muted-foreground mb-4">
              Join other students' projects or invite others to collaborate on your ideas
            </p>
            <Button variant="outline">Explore Ideas</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
