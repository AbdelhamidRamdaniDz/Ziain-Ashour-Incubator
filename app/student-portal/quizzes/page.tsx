"use client"

import { useState } from "react"
import { CheckCircle, Clock, Play, RotateCcw, Star, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DiagnosticQuizzesPage() {
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null)

  // Mock data for diagnostic quizzes
  const quizzes = [
    {
      id: 1,
      title: "Entrepreneurial Mindset Assessment",
      description: "Evaluate your entrepreneurial thinking patterns and identify areas for development",
      category: "Mindset",
      difficulty: "Beginner",
      duration: "15 minutes",
      questions: 25,
      completed: false,
      score: null,
      attempts: 0,
      icon: "🧠",
    },
    {
      id: 2,
      title: "Business Model Canvas Knowledge",
      description: "Test your understanding of the Business Model Canvas framework and its components",
      category: "Business Strategy",
      difficulty: "Intermediate",
      duration: "20 minutes",
      questions: 30,
      completed: true,
      score: 85,
      attempts: 2,
      icon: "📊",
    },
    {
      id: 3,
      title: "Financial Literacy for Startups",
      description: "Assess your knowledge of startup finances, funding, and financial planning",
      category: "Finance",
      difficulty: "Intermediate",
      duration: "25 minutes",
      questions: 35,
      completed: false,
      score: null,
      attempts: 0,
      icon: "💰",
    },
    {
      id: 4,
      title: "Market Research Fundamentals",
      description: "Evaluate your understanding of market research methods and customer validation",
      category: "Marketing",
      difficulty: "Beginner",
      duration: "18 minutes",
      questions: 28,
      completed: true,
      score: 92,
      attempts: 1,
      icon: "📈",
    },
    {
      id: 5,
      title: "Innovation and Creativity Assessment",
      description: "Discover your innovation style and creative problem-solving approaches",
      category: "Innovation",
      difficulty: "Beginner",
      duration: "12 minutes",
      questions: 20,
      completed: false,
      score: null,
      attempts: 0,
      icon: "💡",
    },
    {
      id: 6,
      title: "Leadership Skills Evaluation",
      description: "Assess your leadership capabilities and team management skills",
      category: "Leadership",
      difficulty: "Advanced",
      duration: "30 minutes",
      questions: 40,
      completed: true,
      score: 78,
      attempts: 1,
      icon: "👥",
    },
    {
      id: 7,
      title: "Digital Marketing Proficiency",
      description: "Test your knowledge of digital marketing strategies and tools",
      category: "Marketing",
      difficulty: "Intermediate",
      duration: "22 minutes",
      questions: 32,
      completed: false,
      score: null,
      attempts: 0,
      icon: "📱",
    },
    {
      id: 8,
      title: "Intellectual Property Awareness",
      description: "Evaluate your understanding of patents, trademarks, and IP protection",
      category: "Legal",
      difficulty: "Advanced",
      duration: "28 minutes",
      questions: 38,
      completed: false,
      score: null,
      attempts: 0,
      icon: "⚖️",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-blue-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  const completedQuizzes = quizzes.filter((quiz) => quiz.completed)
  const averageScore =
    completedQuizzes.length > 0
      ? Math.round(completedQuizzes.reduce((sum, quiz) => sum + (quiz.score || 0), 0) / completedQuizzes.length)
      : 0

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Diagnostic Quizzes</h1>
        <p className="text-muted-foreground">Assess your entrepreneurial skills and identify areas for improvement</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold">{completedQuizzes.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average Score</p>
                <p className={`text-2xl font-bold ${getScoreColor(averageScore)}`}>{averageScore}%</p>
              </div>
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Quizzes</p>
                <p className="text-2xl font-bold">{quizzes.length}</p>
              </div>
              <Trophy className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Progress</p>
                <p className="text-2xl font-bold">{Math.round((completedQuizzes.length / quizzes.length) * 100)}%</p>
              </div>
              <div className="h-8 w-8 flex items-center justify-center">
                <Progress value={(completedQuizzes.length / quizzes.length) * 100} className="h-2 w-8" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Quizzes</TabsTrigger>
          <TabsTrigger value="available">Available</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quizzes.map((quiz) => (
              <Card key={quiz.id} className={quiz.completed ? "border-green-200" : ""}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-2xl">{quiz.icon}</div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className={getDifficultyColor(quiz.difficulty)}>
                        {quiz.difficulty}
                      </Badge>
                      {quiz.completed && (
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        >
                          Completed
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{quiz.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{quiz.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{quiz.duration}</span>
                      </div>
                      <span>{quiz.questions} questions</span>
                    </div>

                    {quiz.completed && quiz.score !== null && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Best Score:</span>
                        <span className={`text-lg font-bold ${getScoreColor(quiz.score)}`}>{quiz.score}%</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Category:</span>
                      <Badge variant="secondary">{quiz.category}</Badge>
                    </div>

                    {quiz.attempts > 0 && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Attempts:</span>
                        <span>{quiz.attempts}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {quiz.completed ? (
                    <>
                      <Button variant="outline" size="sm" className="flex-1 gap-1">
                        <RotateCcw className="h-4 w-4" />
                        Retake
                      </Button>
                      <Button size="sm" className="flex-1">
                        View Results
                      </Button>
                    </>
                  ) : (
                    <Button size="sm" className="w-full gap-1">
                      <Play className="h-4 w-4" />
                      Start Quiz
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="available" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quizzes
              .filter((quiz) => !quiz.completed)
              .map((quiz) => (
                <Card key={quiz.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="text-2xl">{quiz.icon}</div>
                      <Badge variant="outline" className={getDifficultyColor(quiz.difficulty)}>
                        {quiz.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="line-clamp-2">{quiz.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{quiz.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{quiz.duration}</span>
                        </div>
                        <span>{quiz.questions} questions</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Category:</span>
                        <Badge variant="secondary">{quiz.category}</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" className="w-full gap-1">
                      <Play className="h-4 w-4" />
                      Start Quiz
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {completedQuizzes.map((quiz) => (
              <Card key={quiz.id} className="border-green-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-2xl">{quiz.icon}</div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className={getDifficultyColor(quiz.difficulty)}>
                        {quiz.difficulty}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      >
                        Completed
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{quiz.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{quiz.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Best Score:</span>
                      <span className={`text-lg font-bold ${getScoreColor(quiz.score!)}`}>{quiz.score}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Category:</span>
                      <Badge variant="secondary">{quiz.category}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Attempts:</span>
                      <span>{quiz.attempts}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-1">
                    <RotateCcw className="h-4 w-4" />
                    Retake
                  </Button>
                  <Button size="sm" className="flex-1">
                    View Results
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
