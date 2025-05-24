"use client"

import { useState } from "react"
import { Calendar, Clock, Package, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
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

export default function EquipmentRequestPage() {
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Mock data for available equipment
  const availableEquipment = [
    {
      id: 1,
      name: "3D Printer - Ultimaker S3",
      category: "Manufacturing",
      description: "Professional 3D printer for prototyping and small-scale production",
      availability: "Available",
      location: "Innovation Lab A",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Arduino Starter Kit",
      category: "Electronics",
      description: "Complete kit with microcontroller, sensors, and components",
      availability: "Available",
      location: "Electronics Lab",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Oscilloscope - Tektronix",
      category: "Electronics",
      description: "Digital oscilloscope for electronic circuit analysis",
      availability: "In Use",
      location: "Electronics Lab",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      name: "Laser Cutter",
      category: "Manufacturing",
      description: "Precision laser cutting machine for various materials",
      availability: "Available",
      location: "Fabrication Lab",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      name: "Microscope - Digital",
      category: "Research",
      description: "High-resolution digital microscope with imaging capabilities",
      availability: "Available",
      location: "Research Lab B",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      name: "Soldering Station",
      category: "Electronics",
      description: "Professional soldering station with temperature control",
      availability: "Available",
      location: "Electronics Lab",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  // Mock data for user's requests
  const userRequests = [
    {
      id: "REQ-2025-0023",
      equipment: "3D Printer - Ultimaker S3",
      requestDate: "May 22, 2025",
      startDate: "May 25, 2025",
      endDate: "May 30, 2025",
      status: "approved",
      purpose: "Prototype development for IoT device housing",
    },
    {
      id: "REQ-2025-0024",
      equipment: "Oscilloscope - Tektronix",
      requestDate: "May 23, 2025",
      startDate: "May 26, 2025",
      endDate: "May 28, 2025",
      status: "pending",
      purpose: "Circuit testing for sensor module",
    },
    {
      id: "REQ-2025-0025",
      equipment: "Laser Cutter",
      requestDate: "May 20, 2025",
      startDate: "May 22, 2025",
      endDate: "May 24, 2025",
      status: "completed",
      purpose: "Cutting acrylic panels for prototype",
    },
  ]

  const filteredEquipment = availableEquipment.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            Pending
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            Approved
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            Completed
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
            Rejected
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case "Available":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            Available
          </Badge>
        )
      case "In Use":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
            In Use
          </Badge>
        )
      case "Maintenance":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            Maintenance
          </Badge>
        )
      default:
        return <Badge variant="outline">{availability}</Badge>
    }
  }

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Equipment Request</h1>
        <p className="text-muted-foreground">Request access to lab equipment and tools for your projects</p>
      </div>

      <Tabs defaultValue="browse" className="space-y-6">
        <TabsList>
          <TabsTrigger value="browse">Browse Equipment</TabsTrigger>
          <TabsTrigger value="requests">My Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-6">
          {/* Search and Filter */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search equipment..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Electronics">Electronics</SelectItem>
                  <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="Research">Research</SelectItem>
                  <SelectItem value="Computing">Computing</SelectItem>
                </SelectContent>
              </Select>
              <Dialog open={isRequestDialogOpen} onOpenChange={setIsRequestDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Request Equipment
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Request Equipment</DialogTitle>
                    <DialogDescription>Fill out the form to request access to equipment</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="equipment">Equipment</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select equipment" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableEquipment.map((item) => (
                            <SelectItem key={item.id} value={item.name}>
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="start-date">Start Date</Label>
                        <Input id="start-date" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="end-date">End Date</Label>
                        <Input id="end-date" type="date" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="purpose">Purpose</Label>
                      <Textarea id="purpose" placeholder="Describe how you plan to use this equipment" rows={3} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project">Project</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="iot-project">IoT Environmental Monitor</SelectItem>
                          <SelectItem value="app-project">Mobile Health App</SelectItem>
                          <SelectItem value="hardware-project">Smart Home Device</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={() => setIsRequestDialogOpen(false)}>
                      Submit Request
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEquipment.map((item) => (
              <Card key={item.id}>
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold line-clamp-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    {getAvailabilityBadge(item.availability)}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{item.description}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Package className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    className="w-full"
                    disabled={item.availability !== "Available"}
                    onClick={() => setIsRequestDialogOpen(true)}
                  >
                    {item.availability === "Available" ? "Request" : "Unavailable"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="requests" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">My Equipment Requests</h2>
            <Button className="gap-2" onClick={() => setIsRequestDialogOpen(true)}>
              <Plus className="h-4 w-4" />
              New Request
            </Button>
          </div>

          <div className="space-y-4">
            {userRequests.map((request) => (
              <Card key={request.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{request.equipment}</h3>
                        {getStatusBadge(request.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">Request ID: {request.id}</p>
                      <p className="text-sm">{request.purpose}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Requested: {request.requestDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>
                            Period: {request.startDate} - {request.endDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {request.status === "pending" && (
                        <Button variant="outline" size="sm">
                          Cancel
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
