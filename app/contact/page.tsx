"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { AtSign, Building, CheckCircle, MapPin, MessageSquare, Phone, Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would submit the form data to your backend here
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
  }

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Us</h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Have questions about our incubator? Get in touch with our team and we'll be happy to help.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-2">
          {!formSubmitted ? (
            <>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                          <User className="h-4 w-4" />
                        </span>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                          <AtSign className="h-4 w-4" />
                        </span>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                        </span>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization (Optional)</Label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                          <Building className="h-4 w-4" />
                        </span>
                        <Input
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Your organization"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => handleSelectChange("inquiryType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="application">Application Question</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="mentorship">Mentorship Interest</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={5}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full gap-2">
                    Send Message
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </>
          ) : (
            <CardContent className="flex flex-col items-center justify-center py-12">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Message Sent!</h2>
              <p className="mb-6 text-center text-muted-foreground">
                Thank you for contacting us. We've received your message and will get back to you soon.
              </p>
              <Button onClick={() => setFormSubmitted(false)}>Send Another Message</Button>
            </CardContent>
          )}
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Reach out to us directly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-sm text-muted-foreground">
                  Ziain Ashour University
                  <br />
                  Innovation Center, Building B
                  <br />
                  Jelfa, Algeria
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-sm text-muted-foreground">+213 XX XXX XXXX</p>
                <p className="text-sm text-muted-foreground">Mon-Fri, 9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <AtSign className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">contact@ziainashour-incubator.edu</p>
                <p className="text-sm text-muted-foreground">support@ziainashour-incubator.edu</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Live Chat</h3>
                <p className="text-sm text-muted-foreground">
                  Available on our website
                  <br />
                  Mon-Fri, 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full rounded-lg bg-muted p-4">
              <h3 className="mb-2 font-medium">Office Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Monday - Thursday</div>
                <div>9:00 AM - 5:00 PM</div>
                <div>Friday</div>
                <div>9:00 AM - 3:00 PM</div>
                <div>Saturday - Sunday</div>
                <div>Closed</div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-medium">How do I apply to the incubator?</h3>
                <p className="text-sm text-muted-foreground">
                  You can apply through our online application form. Click on the "Apply Now" button on our homepage and
                  follow the instructions.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">What stage should my idea be at to apply?</h3>
                <p className="text-sm text-muted-foreground">
                  We accept applications at all stages, from early concept to prototype. Our program is designed to help
                  at any point in your entrepreneurial journey.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Do I need to be a student at Ziain Ashour University?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, our incubator is currently only available to enrolled students at Ziain Ashour University.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Is there a fee to join the incubator?</h3>
                <p className="text-sm text-muted-foreground">
                  No, there is no fee to join our incubator. We provide resources and support at no cost to accepted
                  students.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/faq" className="w-full">
              <Button variant="outline" className="w-full">
                View All FAQs
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
