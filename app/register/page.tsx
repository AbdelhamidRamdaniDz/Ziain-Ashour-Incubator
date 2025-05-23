"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    department: "",
    year: "",
    projectTitle: "",
    projectDescription: "",
    innovationLevel: "",
    developmentStatus: "",
    goals: [],
    otherGoal: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
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
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Apply to Join Our Incubator</h1>
        <p className="mt-2 text-muted-foreground">
          Complete the application form to start your entrepreneurial journey with us.
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
                {i === 1 ? "Personal Info" : i === 2 ? "Project Details" : i === 3 ? "Goals" : "Review"}
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
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Tell us about yourself and your academic background.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="university">University</Label>
                  <Input
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    placeholder="Enter your university"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="Enter your department"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year of Study</Label>
                <Select value={formData.year} onValueChange={(value) => handleSelectChange("year", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your year of study" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">First Year</SelectItem>
                    <SelectItem value="2">Second Year</SelectItem>
                    <SelectItem value="3">Third Year</SelectItem>
                    <SelectItem value="4">Fourth Year</SelectItem>
                    <SelectItem value="5">Fifth Year</SelectItem>
                    <SelectItem value="graduate">Graduate Student</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/">
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
            <CardTitle>Project Details</CardTitle>
            <CardDescription>Tell us about your startup idea or project.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="projectTitle">Project Title</Label>
                <Input
                  id="projectTitle"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleChange}
                  placeholder="Enter your project title"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="projectDescription">Project Description</Label>
                <Textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Describe your project or startup idea in detail"
                  rows={5}
                  required
                />
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
                <Label>Development Status</Label>
                <RadioGroup
                  value={formData.developmentStatus}
                  onValueChange={(value) => handleSelectChange("developmentStatus", value)}
                  className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="idea" id="idea" />
                    <Label htmlFor="idea" className="font-normal">
                      Idea Stage
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="prototype" id="prototype" />
                    <Label htmlFor="prototype" className="font-normal">
                      Prototype
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mvp" id="mvp" />
                    <Label htmlFor="mvp" className="font-normal">
                      MVP
                    </Label>
                  </div>
                </RadioGroup>
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
            <CardTitle>Your Goals</CardTitle>
            <CardDescription>What do you hope to achieve by joining our incubator?</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <Label>Select your primary goals (select all that apply)</Label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "Launch a startup",
                    "Develop a prototype",
                    "Secure funding",
                    "Find co-founders",
                    "Learn entrepreneurship skills",
                    "Get mentorship",
                    "Network with industry professionals",
                    "Develop a patent",
                  ].map((goal) => (
                    <div key={goal} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={goal.replace(/\s+/g, "-").toLowerCase()}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        checked={formData.goals.includes(goal)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({
                              ...formData,
                              goals: [...formData.goals, goal],
                            })
                          } else {
                            setFormData({
                              ...formData,
                              goals: formData.goals.filter((g) => g !== goal),
                            })
                          }
                        }}
                      />
                      <Label htmlFor={goal.replace(/\s+/g, "-").toLowerCase()} className="font-normal">
                        {goal}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="otherGoal">Other Goals (Optional)</Label>
                <Textarea
                  id="otherGoal"
                  name="otherGoal"
                  value={formData.otherGoal}
                  onChange={handleChange}
                  placeholder="Tell us about any other goals you have"
                  rows={3}
                />
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
            <CardDescription>Please review your information before submitting your application.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-medium">Personal Information</h3>
                <div className="grid grid-cols-1 gap-4 rounded-lg border p-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Name</p>
                    <p>
                      {formData.firstName} {formData.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p>{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p>{formData.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">University</p>
                    <p>{formData.university}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Department</p>
                    <p>{formData.department}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Year of Study</p>
                    <p>{formData.year}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium">Project Details</h3>
                <div className="rounded-lg border p-4">
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground">Project Title</p>
                    <p>{formData.projectTitle}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground">Project Description</p>
                    <p>{formData.projectDescription}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground">Innovation Level</p>
                    <p>{formData.innovationLevel}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Development Status</p>
                    <p>{formData.developmentStatus}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium">Goals</h3>
                <div className="rounded-lg border p-4">
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground">Primary Goals</p>
                    <ul className="mt-1 list-inside list-disc">
                      {formData.goals.map((goal) => (
                        <li key={goal}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                  {formData.otherGoal && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Other Goals</p>
                      <p>{formData.otherGoal}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={handleSubmit}>Submit Application</Button>
          </CardFooter>
        </Card>
      )}

      {step === 5 && (
        <Card className="border-green-500">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-center">Application Submitted!</CardTitle>
            <CardDescription className="text-center">
              Thank you for applying to the Ziain Ashour University Startup Incubator.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="mb-4">
                We have received your application and will review it shortly. You will receive an email confirmation
                with further details.
              </p>
              <p className="text-sm text-muted-foreground">
                If you have any questions, please contact us at{" "}
                <a href="mailto:support@ziainashour-incubator.edu" className="text-primary underline">
                  support@ziainashour-incubator.edu
                </a>
              </p>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Link href="/">
              <Button>Return to Homepage</Button>
            </Link>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
