"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, FileText, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"

export default function PatentSubmissionPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    innovationLevel: "",
    inventors: [{ name: "", role: "", contribution: "" }],
    files: [],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleInventorChange = (index: number, field: string, value: string) => {
    const updatedInventors = [...formData.inventors]
    updatedInventors[index] = { ...updatedInventors[index], [field]: value }
    setFormData((prev) => ({ ...prev, inventors: updatedInventors }))
  }

  const addInventor = () => {
    setFormData((prev) => ({
      ...prev,
      inventors: [...prev.inventors, { name: "", role: "", contribution: "" }],
    }))
  }

  const removeInventor = (index: number) => {
    const updatedInventors = [...formData.inventors]
    updatedInventors.splice(index, 1)
    setFormData((prev) => ({ ...prev, inventors: updatedInventors }))
  }

  const handleNext = () => {
    setStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    setStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would submit the form data to your backend here
    setStep(5) // Move to success step
    window.scrollTo(0, 0)
  }

  return (
    <div className="container max-w-4xl py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Patent Submission</h1>
        <p className="text-muted-foreground">
          Submit your innovation for patent review and get guidance from our experts
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-1 flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  step >= i
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted-foreground/30 text-muted-foreground"
                }`}
              >
                {step > i ? <CheckCircle className="h-5 w-5" /> : i}
              </div>
              <span className={`mt-2 text-xs ${step >= i ? "text-foreground" : "text-muted-foreground"}`}>
                {i === 1
                  ? "Basic Information"
                  : i === 2
                    ? "Detailed Description"
                    : i === 3
                      ? "Inventors & Documents"
                      : "Review"}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`h-1 flex-1 ${step > i ? "bg-primary" : "bg-muted-foreground/30"}`} />
          ))}
        </div>
      </div>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Provide the basic details about your innovation</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Patent Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter a descriptive title for your innovation"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software">Software & Applications</SelectItem>
                    <SelectItem value="hardware">Hardware & Devices</SelectItem>
                    <SelectItem value="biotech">Biotechnology</SelectItem>
                    <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                    <SelectItem value="chemical">Chemical Processes</SelectItem>
                    <SelectItem value="electrical">Electrical Engineering</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Innovation Level</Label>
                <RadioGroup
                  value={formData.innovationLevel}
                  onValueChange={(value) => handleSelectChange("innovationLevel", value)}
                  className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="incremental" id="incremental" />
                    <Label htmlFor="incremental" className="font-normal">
                      Incremental Innovation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="disruptive" id="disruptive" />
                    <Label htmlFor="disruptive" className="font-normal">
                      Disruptive Innovation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="radical" id="radical" />
                    <Label htmlFor="radical" className="font-normal">
                      Radical Innovation
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Brief Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Provide a brief overview of your innovation (max 500 characters)"
                  rows={4}
                  required
                />
                <p className="text-xs text-muted-foreground">{formData.description.length}/500 characters</p>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/student-portal">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button onClick={handleNext}>
              Next Step
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Detailed Description</CardTitle>
            <CardDescription>Provide comprehensive details about your innovation</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="problem">Problem Statement</Label>
                <Textarea
                  id="problem"
                  name="problem"
                  placeholder="What problem does your innovation solve?"
                  rows={3}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="solution">Solution Description</Label>
                <Textarea
                  id="solution"
                  name="solution"
                  placeholder="How does your innovation solve this problem?"
                  rows={3}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="uniqueness">Uniqueness & Novelty</Label>
                <Textarea
                  id="uniqueness"
                  name="uniqueness"
                  placeholder="What makes your innovation unique and novel compared to existing solutions?"
                  rows={3}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="applications">Potential Applications</Label>
                <Textarea
                  id="applications"
                  name="applications"
                  placeholder="What are the potential applications and use cases for your innovation?"
                  rows={3}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="development">Development Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select current development status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="concept">Concept/Idea Stage</SelectItem>
                    <SelectItem value="research">Research & Development</SelectItem>
                    <SelectItem value="prototype">Prototype</SelectItem>
                    <SelectItem value="testing">Testing & Validation</SelectItem>
                    <SelectItem value="production">Production Ready</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={handleNext}>
              Next Step
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Inventors & Documents</CardTitle>
            <CardDescription>Add all inventors and upload supporting documents</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Inventors</Label>
                  <Button type="button" variant="outline" size="sm" onClick={addInventor}>
                    Add Inventor
                  </Button>
                </div>

                {formData.inventors.map((inventor, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="font-medium">Inventor {index + 1}</h4>
                      {index > 0 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 text-destructive"
                          onClick={() => removeInventor(index)}
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor={`inventor-name-${index}`}>Full Name</Label>
                        <Input
                          id={`inventor-name-${index}`}
                          value={inventor.name}
                          onChange={(e) => handleInventorChange(index, "name", e.target.value)}
                          placeholder="Enter full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`inventor-role-${index}`}>Role</Label>
                        <Input
                          id={`inventor-role-${index}`}
                          value={inventor.role}
                          onChange={(e) => handleInventorChange(index, "role", e.target.value)}
                          placeholder="e.g., Lead Developer, Researcher"
                          required
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor={`inventor-contribution-${index}`}>Contribution</Label>
                        <Textarea
                          id={`inventor-contribution-${index}`}
                          value={inventor.contribution}
                          onChange={(e) => handleInventorChange(index, "contribution", e.target.value)}
                          placeholder="Describe their contribution to the innovation"
                          rows={2}
                          required
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Label>Supporting Documents</Label>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-dashed p-6">
                    <div className="flex flex-col items-center justify-center text-center">
                      <FileText className="mb-2 h-8 w-8 text-muted-foreground" />
                      <h4 className="mb-1 text-sm font-medium">Technical Documentation</h4>
                      <p className="mb-4 text-xs text-muted-foreground">
                        Upload detailed technical specifications (PDF, DOCX)
                      </p>
                      <Button type="button" variant="outline" size="sm" className="gap-2">
                        <Upload className="h-4 w-4" />
                        Upload File
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border border-dashed p-6">
                    <div className="flex flex-col items-center justify-center text-center">
                      <FileText className="mb-2 h-8 w-8 text-muted-foreground" />
                      <h4 className="mb-1 text-sm font-medium">Diagrams & Illustrations</h4>
                      <p className="mb-4 text-xs text-muted-foreground">
                        Upload diagrams, drawings, or illustrations (PNG, JPG, PDF)
                      </p>
                      <Button type="button" variant="outline" size="sm" className="gap-2">
                        <Upload className="h-4 w-4" />
                        Upload Files
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border border-dashed p-6">
                    <div className="flex flex-col items-center justify-center text-center">
                      <FileText className="mb-2 h-8 w-8 text-muted-foreground" />
                      <h4 className="mb-1 text-sm font-medium">Prior Art Research</h4>
                      <p className="mb-4 text-xs text-muted-foreground">
                        Upload research on existing patents and solutions (PDF)
                      </p>
                      <Button type="button" variant="outline" size="sm" className="gap-2">
                        <Upload className="h-4 w-4" />
                        Upload File
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border border-dashed p-6">
                    <div className="flex flex-col items-center justify-center text-center">
                      <FileText className="mb-2 h-8 w-8 text-muted-foreground" />
                      <h4 className="mb-1 text-sm font-medium">Additional Documents</h4>
                      <p className="mb-4 text-xs text-muted-foreground">
                        Upload any other relevant documents (PDF, DOCX, XLSX)
                      </p>
                      <Button type="button" variant="outline" size="sm" className="gap-2">
                        <Upload className="h-4 w-4" />
                        Upload Files
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={handleNext}>
              Next Step
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>Review & Submit</CardTitle>
            <CardDescription>Please review your patent submission before submitting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-medium">Basic Information</h3>
                <div className="rounded-lg border p-4">
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground">Patent Title</p>
                    <p>{formData.title || "Not provided"}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground">Category</p>
                    <p>{formData.category || "Not selected"}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground">Innovation Level</p>
                    <p>{formData.innovationLevel || "Not selected"}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Brief Description</p>
                    <p>{formData.description || "Not provided"}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium">Inventors</h3>
                <div className="rounded-lg border p-4">
                  {formData.inventors.map((inventor, index) => (
                    <div key={index} className={index > 0 ? "mt-4 pt-4 border-t" : ""}>
                      <p className="text-sm font-medium">Inventor {index + 1}</p>
                      <div className="mt-2 grid gap-2 md:grid-cols-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Name</p>
                          <p>{inventor.name || "Not provided"}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Role</p>
                          <p>{inventor.role || "Not provided"}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-xs text-muted-foreground">Contribution</p>
                          <p>{inventor.contribution || "Not provided"}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium">Uploaded Documents</h3>
                <div className="rounded-lg border p-4">
                  <p className="text-muted-foreground">No documents uploaded</p>
                </div>
              </div>

              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-950">
                <p className="text-sm">
                  By submitting this patent application, you confirm that all information provided is accurate and
                  complete. The university will review your submission and contact you with next steps.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={handleSubmit}>Submit Patent Application</Button>
          </CardFooter>
        </Card>
      )}

      {step === 5 && (
        <Card className="border-green-500">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-center">Patent Application Submitted!</CardTitle>
            <CardDescription className="text-center">
              Your patent application has been successfully submitted for review.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="mb-4">
                Our patent review team will evaluate your submission and provide feedback within 10 business days. You
                can track the status of your application in the dashboard.
              </p>
              <div className="mx-auto mb-6 max-w-md rounded-lg border p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">Application ID</span>
                  <span className="text-sm">PAT-2025-0142</span>
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">Submission Date</span>
                  <span className="text-sm">May 23, 2025</span>
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">Status</span>
                  <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    Pending Review
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-muted-foreground">Estimated review completion: June 6, 2025</p>
                  <Progress value={10} className="mt-2 h-1.5" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                If you have any questions, please contact the patent office at{" "}
                <a href="mailto:patents@ziainashour-incubator.edu" className="text-primary underline">
                  patents@ziainashour-incubator.edu
                </a>
              </p>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Link href="/student-portal">
              <Button>Return to Dashboard</Button>
            </Link>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
