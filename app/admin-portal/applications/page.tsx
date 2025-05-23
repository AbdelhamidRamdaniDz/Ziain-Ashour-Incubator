"use client"

import { useState } from "react"
import { Calendar, Check, ChevronDown, Download, Eye, Filter, Search, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function ApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [dateFilter, setDateFilter] = useState<string | null>(null)

  // Mock data for applications
  const applications = [
    {
      id: "APP-2025-0156",
      name: "Ahmed Khalid",
      email: "ahmed.k@example.com",
      department: "Computer Science",
      projectTitle: "AI-Powered Waste Sorting System",
      submissionDate: "May 23, 2025",
      status: "pending",
    },
    {
      id: "APP-2025-0155",
      name: "Fatima Benali",
      email: "fatima.b@example.com",
      department: "Biotechnology",
      projectTitle: "Sustainable Bioplastic from Agricultural Waste",
      submissionDate: "May 22, 2025",
      status: "pending",
    },
    {
      id: "APP-2025-0154",
      name: "Omar Mansouri",
      email: "omar.m@example.com",
      department: "Mechanical Engineering",
      projectTitle: "Solar-Powered Water Purification Device",
      submissionDate: "May 21, 2025",
      status: "reviewing",
    },
    {
      id: "APP-2025-0153",
      name: "Leila Amrani",
      email: "leila.a@example.com",
      department: "Business Administration",
      projectTitle: "Marketplace for Local Artisans",
      submissionDate: "May 20, 2025",
      status: "approved",
    },
    {
      id: "APP-2025-0152",
      name: "Karim Bouazizi",
      email: "karim.b@example.com",
      department: "Electrical Engineering",
      projectTitle: "Smart Home Energy Management System",
      submissionDate: "May 19, 2025",
      status: "rejected",
    },
    {
      id: "APP-2025-0151",
      name: "Yasmine Tazi",
      email: "yasmine.t@example.com",
      department: "Computer Science",
      projectTitle: "Blockchain-Based Academic Credential Verification",
      submissionDate: "May 18, 2025",
      status: "approved",
    },
    {
      id: "APP-2025-0150",
      name: "Mehdi Alaoui",
      email: "mehdi.a@example.com",
      department: "Mechanical Engineering",
      projectTitle: "Low-Cost Prosthetic Hand",
      submissionDate: "May 17, 2025",
      status: "reviewing",
    },
  ]

  // Filter applications based on search query and filters
  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      searchQuery === "" ||
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.department.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === null || app.status === statusFilter

    // Simple date filter for demo purposes
    const matchesDate = dateFilter === null || true // In a real app, implement proper date filtering

    return matchesSearch && matchesStatus && matchesDate
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            Pending
          </Badge>
        )
      case "reviewing":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            Reviewing
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            Approved
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

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Application Manager</h1>
        <p className="text-muted-foreground">Review and manage student applications to the incubator</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <CardTitle>Applications</CardTitle>
              <CardDescription>{filteredApplications.length} applications found</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Download className="h-3.5 w-3.5" />
                <span>Export</span>
              </Button>
              <Button size="sm" className="h-8">
                View All
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search applications..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-9 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    <span>Status</span>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => setStatusFilter(null)}>
                      <Check className={`mr-2 h-4 w-4 ${statusFilter === null ? "opacity-100" : "opacity-0"}`} />
                      All Statuses
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatusFilter("pending")}>
                      <Check className={`mr-2 h-4 w-4 ${statusFilter === "pending" ? "opacity-100" : "opacity-0"}`} />
                      Pending
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatusFilter("reviewing")}>
                      <Check className={`mr-2 h-4 w-4 ${statusFilter === "reviewing" ? "opacity-100" : "opacity-0"}`} />
                      Reviewing
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatusFilter("approved")}>
                      <Check className={`mr-2 h-4 w-4 ${statusFilter === "approved" ? "opacity-100" : "opacity-0"}`} />
                      Approved
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatusFilter("rejected")}>
                      <Check className={`mr-2 h-4 w-4 ${statusFilter === "rejected" ? "opacity-100" : "opacity-0"}`} />
                      Rejected
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-9 gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Date</span>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Filter by Date</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => setDateFilter(null)}>
                      <Check className={`mr-2 h-4 w-4 ${dateFilter === null ? "opacity-100" : "opacity-0"}`} />
                      All Dates
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setDateFilter("today")}>
                      <Check className={`mr-2 h-4 w-4 ${dateFilter === "today" ? "opacity-100" : "opacity-0"}`} />
                      Today
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setDateFilter("week")}>
                      <Check className={`mr-2 h-4 w-4 ${dateFilter === "week" ? "opacity-100" : "opacity-0"}`} />
                      This Week
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setDateFilter("month")}>
                      <Check className={`mr-2 h-4 w-4 ${dateFilter === "month" ? "opacity-100" : "opacity-0"}`} />
                      This Month
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline" size="sm" className="h-9 gap-1">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>More Filters</span>
              </Button>

              {(statusFilter !== null || dateFilter !== null) && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 gap-1"
                  onClick={() => {
                    setStatusFilter(null)
                    setDateFilter(null)
                  }}
                >
                  <X className="h-3.5 w-3.5" />
                  <span>Clear Filters</span>
                </Button>
              )}
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Application ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Department</TableHead>
                  <TableHead className="hidden lg:table-cell">Project Title</TableHead>
                  <TableHead className="hidden sm:table-cell">Submission Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell className="font-medium">{application.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{application.name}</p>
                        <p className="text-xs text-muted-foreground">{application.email}</p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{application.department}</TableCell>
                    <TableCell className="hidden lg:table-cell max-w-[200px] truncate">
                      {application.projectTitle}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">{application.submissionDate}</TableCell>
                    <TableCell>{getStatusBadge(application.status)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <ChevronDown className="h-4 w-4" />
                              <span className="sr-only">More</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Approve</DropdownMenuItem>
                            <DropdownMenuItem>Reject</DropdownMenuItem>
                            <DropdownMenuItem>Request More Info</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Download PDF</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
