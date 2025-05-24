"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, Users, Trophy, Building, Search, Filter } from "lucide-react"

export default function OpportunitiesCalendarPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Mock data for opportunities
  const opportunities = [
    {
      id: 1,
      title: "Startup Pitch Competition 2025",
      type: "Competition",
      category: "Entrepreneurship",
      description: "Annual startup pitch competition with $50,000 in prizes for the best business ideas.",
      organizer: "Ziain Ashour University",
      date: "June 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "University Auditorium",
      deadline: "May 30, 2025",
      prize: "$50,000",
      participants: "150+ expected",
      status: "Open",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Tech Innovation Workshop",
      type: "Workshop",
      category: "Technology",
      description: "Hands-on workshop covering emerging technologies and their applications in startups.",
      organizer: "TechAlgeria",
      date: "May 28, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Innovation Lab",
      deadline: "May 25, 2025",
      prize: "Certificate",
      participants: "30 spots",
      status: "Open",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Summer Internship Program",
      type: "Internship",
      category: "Career",
      description: "3-month paid internship program with leading tech companies in Algeria.",
      organizer: "National Innovation Fund",
      date: "July 1 - September 30, 2025",
      time: "Full-time",
      location: "Various Companies",
      deadline: "June 1, 2025",
      prize: "Paid Position",
      participants: "50 positions",
      status: "Open",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "Green Innovation Challenge",
      type: "Competition",
      category: "Sustainability",
      description: "Competition focused on sustainable solutions and environmental innovations.",
      organizer: "Renewable Energy Alliance",
      date: "June 20, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Green Tech Center",
      deadline: "June 5, 2025",
      prize: "$25,000",
      participants: "100+ expected",
      status: "Open",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "AI & Machine Learning Bootcamp",
      type: "Workshop",
      category: "Technology",
      description: "Intensive 5-day bootcamp covering AI fundamentals and practical applications.",
      organizer: "AI Algeria",
      date: "July 10-14, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Tech Hub Algiers",
      deadline: "June 25, 2025",
      prize: "Certification",
      participants: "40 spots",
      status: "Open",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "Women in Tech Mentorship",
      type: "Mentorship",
      category: "Career",
      description: "6-month mentorship program connecting female students with industry leaders.",
      organizer: "Women Tech Algeria",
      date: "August 1, 2025",
      time: "Flexible",
      location: "Online & In-person",
      deadline: "July 15, 2025",
      prize: "Mentorship",
      participants: "25 mentees",
      status: "Open",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 7,
      title: "Blockchain Innovation Summit",
      type: "Conference",
      category: "Technology",
      description: "Two-day summit exploring blockchain applications in various industries.",
      organizer: "Blockchain Algeria",
      date: "September 5-6, 2025",
      time: "8:00 AM - 6:00 PM",
      location: "Algiers Convention Center",
      deadline: "August 20, 2025",
      prize: "Networking",
      participants: "500+ attendees",
      status: "Open",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 8,
      title: "Social Impact Startup Grant",
      type: "Grant",
      category: "Social Impact",
      description: "Funding opportunity for startups addressing social and environmental challenges.",
      organizer: "Social Innovation Fund",
      date: "Rolling Applications",
      time: "N/A",
      location: "Various",
      deadline: "December 31, 2025",
      prize: "$100,000",
      participants: "Unlimited",
      status: "Open",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  // Filter opportunities based on search and filters
  const filteredOpportunities = opportunities.filter((opportunity) => {
    const matchesSearch =
      opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opportunity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opportunity.organizer.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = typeFilter === "all" || opportunity.type === typeFilter
    const matchesCategory = categoryFilter === "all" || opportunity.category === categoryFilter

    return matchesSearch && matchesType && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Closed":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "Coming Soon":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Competition":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Workshop":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Internship":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "Conference":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
      case "Grant":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Mentorship":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Opportunities Calendar</h1>
        <p className="text-muted-foreground">
          Discover competitions, workshops, internships, and other opportunities to advance your entrepreneurial
          journey.
        </p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Search & Filter Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search opportunities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Competition">Competition</SelectItem>
                <SelectItem value="Workshop">Workshop</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
                <SelectItem value="Conference">Conference</SelectItem>
                <SelectItem value="Grant">Grant</SelectItem>
                <SelectItem value="Mentorship">Mentorship</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Entrepreneurship">Entrepreneurship</SelectItem>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Career">Career</SelectItem>
                <SelectItem value="Sustainability">Sustainability</SelectItem>
                <SelectItem value="Social Impact">Social Impact</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="text-sm text-muted-foreground">
            Showing {filteredOpportunities.length} of {opportunities.length} opportunities
          </div>
        </CardContent>
      </Card>

      {/* Opportunities Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredOpportunities.map((opportunity) => (
          <Card key={opportunity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={opportunity.image || "/placeholder.svg"}
                alt={opportunity.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className={getStatusColor(opportunity.status)}>{opportunity.status}</Badge>
                <Badge className={getTypeColor(opportunity.type)}>{opportunity.type}</Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">{opportunity.title}</CardTitle>
              <CardDescription className="line-clamp-3">{opportunity.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building className="h-4 w-4" />
                  <span>{opportunity.organizer}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{opportunity.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{opportunity.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{opportunity.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{opportunity.participants}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Trophy className="h-4 w-4" />
                  <span>{opportunity.prize}</span>
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Deadline:</span>
                  <span className="font-medium">{opportunity.deadline}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 bg-[#18A39E] hover:bg-[#16918A]">Apply Now</Button>
                <Button variant="outline" size="sm">
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredOpportunities.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Search className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No opportunities found</h3>
            <p className="text-muted-foreground text-center">
              Try adjusting your search terms or filters to find more opportunities.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("")
                setTypeFilter("all")
                setCategoryFilter("all")
              }}
            >
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
