"use client"

import { useState } from "react"
import { Book, BookOpen, Download, Eye, Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function DigitalLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  // Mock data for library resources
  const libraryResources = [
    {
      id: 1,
      title: "The Lean Startup",
      author: "Eric Ries",
      type: "Book",
      category: "Business",
      description:
        "A methodology for developing businesses and products that aims to shorten product development cycles.",
      rating: 4.8,
      downloads: 1250,
      pages: 336,
      format: "PDF",
      size: "2.4 MB",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 2,
      title: "Zero to One",
      author: "Peter Thiel",
      type: "Book",
      category: "Business",
      description:
        "Notes on startups, or how to build the future. A guide to creating monopolies and building successful companies.",
      rating: 4.6,
      downloads: 980,
      pages: 224,
      format: "PDF",
      size: "1.8 MB",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 3,
      title: "Design Thinking Process",
      author: "IDEO",
      type: "Research Paper",
      category: "Design",
      description: "Comprehensive guide to the design thinking methodology and its application in innovation.",
      rating: 4.7,
      downloads: 756,
      pages: 45,
      format: "PDF",
      size: "3.2 MB",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 4,
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell, Peter Norvig",
      type: "Textbook",
      category: "Technology",
      description: "The leading textbook in Artificial Intelligence, used in over 1400 universities worldwide.",
      rating: 4.9,
      downloads: 2100,
      pages: 1152,
      format: "PDF",
      size: "15.6 MB",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 5,
      title: "Blockchain Technology Fundamentals",
      author: "Various Authors",
      type: "Research Paper",
      category: "Technology",
      description: "Collection of research papers on blockchain technology and its applications in various industries.",
      rating: 4.5,
      downloads: 634,
      pages: 78,
      format: "PDF",
      size: "4.1 MB",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 6,
      title: "Financial Modeling for Startups",
      author: "Financial Institute",
      type: "Guide",
      category: "Finance",
      description: "Step-by-step guide to creating financial models and projections for startup businesses.",
      rating: 4.4,
      downloads: 892,
      pages: 156,
      format: "PDF",
      size: "5.8 MB",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 7,
      title: "Marketing in the Digital Age",
      author: "Marketing Experts",
      type: "Book",
      category: "Marketing",
      description: "Comprehensive guide to digital marketing strategies for modern businesses and startups.",
      rating: 4.3,
      downloads: 567,
      pages: 289,
      format: "PDF",
      size: "3.7 MB",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 8,
      title: "Intellectual Property Law for Innovators",
      author: "Legal Experts",
      type: "Guide",
      category: "Legal",
      description:
        "Essential guide to understanding and protecting intellectual property for inventors and entrepreneurs.",
      rating: 4.6,
      downloads: 423,
      pages: 198,
      format: "PDF",
      size: "2.9 MB",
      cover: "/placeholder.svg?height=300&width=200",
    },
  ]

  const filteredResources = libraryResources.filter((resource) => {
    const matchesSearch =
      searchQuery === "" ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || resource.category === categoryFilter
    const matchesType = typeFilter === "all" || resource.type === typeFilter

    return matchesSearch && matchesCategory && matchesType
  })

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Book":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Research Paper":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Textbook":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Guide":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Digital Library</h1>
        <p className="text-muted-foreground">
          Access our comprehensive collection of books, research papers, and resources
        </p>
      </div>

      <Tabs defaultValue="browse" className="space-y-6">
        <TabsList>
          <TabsTrigger value="browse">Browse Library</TabsTrigger>
          <TabsTrigger value="favorites">My Favorites</TabsTrigger>
          <TabsTrigger value="recent">Recently Viewed</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-6">
          {/* Search and Filter */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search library..."
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
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Legal">Legal</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Book">Books</SelectItem>
                  <SelectItem value="Research Paper">Papers</SelectItem>
                  <SelectItem value="Textbook">Textbooks</SelectItem>
                  <SelectItem value="Guide">Guides</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={resource.cover || "/placeholder.svg"}
                      alt={resource.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <Badge variant="outline" className={getTypeColor(resource.type)}>
                      {resource.type}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{resource.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold line-clamp-2 mb-1">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{resource.author}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{resource.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{resource.pages} pages</span>
                    <span>{resource.size}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-1">
                    <Eye className="h-3 w-3" />
                    Preview
                  </Button>
                  <Button size="sm" className="flex-1 gap-1">
                    <Download className="h-3 w-3" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="space-y-6">
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No favorites yet</h3>
            <p className="text-muted-foreground mb-4">Start adding resources to your favorites to see them here</p>
            <Button variant="outline">Browse Library</Button>
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-6">
          <div className="text-center py-12">
            <Book className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No recent activity</h3>
            <p className="text-muted-foreground mb-4">Resources you view will appear here for quick access</p>
            <Button variant="outline">Browse Library</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
