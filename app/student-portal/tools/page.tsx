import Link from "next/link"
import { BarChart3, Calendar, FileText, Lightbulb, PenTool, PieChart, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ToolsPage() {
  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Business Tools</h1>
        <p className="text-muted-foreground">Access specialized tools to develop and refine your business model</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Business Model Canvas */}
        <Card>
          <CardHeader>
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <PieChart className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Business Model Canvas</CardTitle>
            <CardDescription>
              Create and iterate on your business model using the popular canvas framework
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Define your value proposition, customer segments, revenue streams, and more in an interactive canvas.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/student-portal/tools/business-model-canvas" className="w-full">
              <Button className="w-full">Open Tool</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* SWOT Analysis */}
        <Card>
          <CardHeader>
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>SWOT Analysis</CardTitle>
            <CardDescription>Identify Strengths, Weaknesses, Opportunities, and Threats</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Evaluate your business idea or startup with a comprehensive SWOT analysis framework.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/student-portal/tools/swot-analysis" className="w-full">
              <Button className="w-full">Open Tool</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Persona Generator */}
        <Card>
          <CardHeader>
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Persona Generator</CardTitle>
            <CardDescription>Create detailed customer personas to guide your product development</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Define your target customers with detailed personas including demographics, goals, pain points, and
              behaviors.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/student-portal/tools/persona-generator" className="w-full">
              <Button className="w-full">Open Tool</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Financial Projections */}
        <Card>
          <CardHeader>
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Financial Projections</CardTitle>
            <CardDescription>Create financial forecasts for your startup</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Generate revenue projections, expense forecasts, cash flow statements, and break-even analysis.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/student-portal/tools/financial-projections" className="w-full">
              <Button className="w-full">Open Tool</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Pitch Deck Builder */}
        <Card>
          <CardHeader>
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <PenTool className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Pitch Deck Builder</CardTitle>
            <CardDescription>Create compelling investor presentations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Build professional pitch decks with templates designed for startup fundraising and investor meetings.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/student-portal/tools/pitch-deck-builder" className="w-full">
              <Button className="w-full">Open Tool</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Market Research */}
        <Card>
          <CardHeader>
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Market Research</CardTitle>
            <CardDescription>Access market data and competitive analysis tools</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Research market size, trends, competitors, and customer preferences to validate your business idea.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/student-portal/tools/market-research" className="w-full">
              <Button className="w-full">Open Tool</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Project Timeline */}
        <Card>
          <CardHeader>
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Project Timeline</CardTitle>
            <CardDescription>Create and manage project timelines and milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Plan your startup roadmap with interactive Gantt charts and milestone tracking.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/student-portal/tools/project-timeline" className="w-full">
              <Button className="w-full">Open Tool</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Patent Search */}
        <Card>
          <CardHeader>
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Patent Search</CardTitle>
            <CardDescription>Search existing patents to validate your innovation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Access patent databases to research existing patents and ensure your innovation is unique.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/student-portal/tools/patent-search" className="w-full">
              <Button className="w-full">Open Tool</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Idea Validator */}
        <Card>
          <CardHeader>
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Idea Validator</CardTitle>
            <CardDescription>Test and validate your business ideas</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Evaluate your business idea against key criteria and get feedback on potential challenges and
              opportunities.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/student-portal/tools/idea-validator" className="w-full">
              <Button className="w-full">Open Tool</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
