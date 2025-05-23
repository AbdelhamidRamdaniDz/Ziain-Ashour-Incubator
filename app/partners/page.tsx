import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PartnersPage() {
  // Mock data for partners
  const partners = [
    {
      name: "Algerian Ministry of Higher Education",
      type: "Government",
      description:
        "Supporting academic research and innovation through grants and policy initiatives to foster entrepreneurship in universities.",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
    },
    {
      name: "National Innovation Fund",
      type: "Government",
      description:
        "Providing seed funding and grants to promising startups and innovative projects developed by university students.",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
    },
    {
      name: "TechAlgeria",
      type: "Industry",
      description:
        "Leading technology company offering mentorship, internships, and technical resources to student entrepreneurs.",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
    },
    {
      name: "Algerian Startup Association",
      type: "Non-Profit",
      description:
        "Network of successful entrepreneurs providing mentorship, networking opportunities, and resources to student startups.",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
    },
    {
      name: "Global Entrepreneurship Network",
      type: "International",
      description:
        "International organization connecting entrepreneurs with global resources, mentors, and potential investors.",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
    },
    {
      name: "Jelfa Business Council",
      type: "Local",
      description:
        "Local business association providing networking opportunities and local market insights to student entrepreneurs.",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
    },
    {
      name: "MedTech Innovation Hub",
      type: "Industry",
      description:
        "Specialized hub for medical technology innovations, providing lab space, equipment, and industry connections.",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
    },
    {
      name: "Renewable Energy Alliance",
      type: "Industry",
      description:
        "Consortium of renewable energy companies supporting green technology innovations and sustainable startups.",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
    },
  ]

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Partners</h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          We collaborate with leading organizations from government, industry, and academia to provide the best
          resources and opportunities for our student entrepreneurs.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner, index) => (
          <Card key={index}>
            <CardHeader className="pb-4">
              <div className="mb-4 flex h-20 items-center justify-center rounded-md bg-muted/50 p-2">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <CardTitle className="line-clamp-1">{partner.name}</CardTitle>
              <CardDescription>{partner.type} Partner</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{partner.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={partner.website} className="w-full">
                <Button variant="outline" className="w-full gap-2">
                  Visit Website
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 rounded-lg bg-primary/5 p-8 text-center">
        <h2 className="text-2xl font-bold">Become a Partner</h2>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          Join our network of partners and help shape the future of innovation and entrepreneurship at Ziain Ashour
          University. We offer various partnership opportunities tailored to your organization's goals.
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
