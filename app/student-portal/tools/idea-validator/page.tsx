"use client"

import { useReducer, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, AlertCircle, XCircle, Lightbulb, Target, Users, DollarSign, TrendingUp } from "lucide-react"

// Types
type Question = {
  id: number
  category: string
  title: string
  description: string
  type: "radio" | "checkbox" | "text"
  options: {
    value: string
    label: string
    points: number
  }[]
}

type State = {
  currentStep: number
  answers: Record<string, any>
  score: number
  isComplete: boolean
}

type Action =
  | { type: "SET_ANSWER"; questionId: number; value: any }
  | { type: "NEXT_STEP" }
  | { type: "PREVIOUS_STEP" }
  | { type: "CALCULATE_SCORE" }
  | { type: "RESET" }

// Questions data
const questions: Question[] = [
  {
    id: 1,
    category: "السوق",
    title: "ما هو حجم السوق المستهدف؟",
    description: "حدد حجم السوق الذي تستهدفه لفكرتك",
    type: "radio",
    options: [
      { value: "small", label: "سوق صغير (أقل من 1 مليون مستخدم)", points: 2 },
      { value: "medium", label: "سوق متوسط (1-10 مليون مستخدم)", points: 5 },
      { value: "large", label: "سوق كبير (أكثر من 10 مليون مستخدم)", points: 8 }
    ]
  },
  {
    id: 2,
    category: "المنافسة",
    title: "ما هو مستوى المنافسة في السوق؟",
    description: "حدد مستوى المنافسة في السوق المستهدف",
    type: "radio",
    options: [
      { value: "high", label: "منافسة عالية", points: 2 },
      { value: "medium", label: "منافسة متوسطة", points: 5 },
      { value: "low", label: "منافسة منخفضة", points: 8 }
    ]
  },
  {
    id: 3,
    category: "التمويل",
    title: "ما هي متطلبات التمويل الأولية؟",
    description: "حدد المبلغ المطلوب لبدء المشروع",
    type: "radio",
    options: [
      { value: "low", label: "أقل من 50,000 ريال", points: 8 },
      { value: "medium", label: "50,000 - 200,000 ريال", points: 5 },
      { value: "high", label: "أكثر من 200,000 ريال", points: 2 }
    ]
  },
  {
    id: 4,
    category: "الفريق",
    title: "ما هي المهارات المتوفرة في فريقك؟",
    description: "اختر المهارات المتوفرة في فريقك",
    type: "checkbox",
    options: [
      { value: "technical", label: "مهارات تقنية", points: 5 },
      { value: "marketing", label: "مهارات تسويقية", points: 5 },
      { value: "business", label: "مهارات إدارية", points: 5 },
      { value: "design", label: "مهارات تصميم", points: 5 }
    ]
  }
]

// Reducer
const initialState: State = {
  currentStep: 1,
  answers: {},
  score: 0,
  isComplete: false
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_ANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.questionId]: action.value
        }
      }
    case "NEXT_STEP":
      if (state.currentStep < questions.length) {
        return {
          ...state,
          currentStep: state.currentStep + 1
        }
      }
      return state
    case "PREVIOUS_STEP":
      if (state.currentStep > 1) {
        return {
          ...state,
          currentStep: state.currentStep - 1
        }
      }
      return state
    case "CALCULATE_SCORE":
      const totalScore = Object.entries(state.answers).reduce((sum, [questionId, answer]) => {
        const question = questions.find(q => q.id === parseInt(questionId))
        if (!question) return sum

        if (question.type === "radio") {
          const option = question.options.find(opt => opt.value === answer)
          return sum + (option?.points || 0)
        } else if (question.type === "checkbox" && Array.isArray(answer)) {
          return sum + answer.reduce((optionSum, value) => {
            const option = question.options.find(opt => opt.value === value)
            return optionSum + (option?.points || 0)
          }, 0)
        }
        return sum
      }, 0)

      return {
        ...state,
        score: totalScore,
        isComplete: true
      }
    case "RESET":
      return initialState
    default:
      return state
  }
}

// Components
const QuestionCard = ({ question, answer, onAnswer }: {
  question: Question
  answer: any
  onAnswer: (value: any) => void
}) => (
  <Card className="max-w-4xl mx-auto">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#18A39E] text-white flex items-center justify-center font-bold">
          {question.id}
        </div>
        <div>
          <Badge variant="outline" className="mb-2">
            {question.category}
          </Badge>
          <CardTitle className="text-xl">{question.title}</CardTitle>
          <CardDescription className="mt-2">{question.description}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-6">
      {question.type === "radio" ? (
        <RadioGroup
          value={answer || ""}
          onValueChange={onAnswer}
          className="space-y-4"
        >
          {question.options.map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <Label htmlFor={option.value} className="flex-1 cursor-pointer text-right">
                {option.label}
              </Label>
              <RadioGroupItem value={option.value} id={option.value} />
              <Badge variant="secondary" className="text-xs">
                {option.points} نقطة
              </Badge>
            </div>
          ))}
        </RadioGroup>
      ) : (
        <div className="space-y-3">
          {question.options.map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <Label htmlFor={option.value} className="flex-1 cursor-pointer text-right">
                {option.label}
              </Label>
              <Checkbox
                id={option.value}
                checked={answer?.includes(option.value) || false}
                onCheckedChange={(checked) => {
                  const currentAnswers = answer || []
                  if (checked) {
                    onAnswer([...currentAnswers, option.value])
                  } else {
                    onAnswer(currentAnswers.filter((v: string) => v !== option.value))
                  }
                }}
              />
              <Badge variant="secondary" className="text-xs">
                {option.points > 0 ? `+${option.points}` : option.points} نقطة
              </Badge>
            </div>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
)

const StepNavigation = ({ currentStep, totalSteps, onNext, onPrevious, isNextDisabled }: {
  currentStep: number
  totalSteps: number
  onNext: () => void
  onPrevious: () => void
  isNextDisabled: boolean
}) => (
  <div className="flex justify-between pt-6">
    <Button
      variant="outline"
      onClick={onPrevious}
      disabled={currentStep === 1}
    >
      السؤال السابق
    </Button>
    <Button
      onClick={onNext}
      disabled={isNextDisabled}
      className="bg-[#18A39E] hover:bg-[#16918A]"
    >
      {currentStep === totalSteps ? "احسب النتيجة" : "السؤال التالي"}
    </Button>
  </div>
)

export default function IdeaValidatorPage() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { currentStep, answers, score, isComplete } = state

  const progress = (currentStep / questions.length) * 100

  const handleAnswer = useCallback((questionId: number, value: any) => {
    dispatch({ type: "SET_ANSWER", questionId, value })
  }, [])

  const handleNext = useCallback(() => {
    if (currentStep === questions.length) {
      dispatch({ type: "CALCULATE_SCORE" })
    } else {
      dispatch({ type: "NEXT_STEP" })
    }
  }, [currentStep])

  const handlePrevious = useCallback(() => {
    dispatch({ type: "PREVIOUS_STEP" })
  }, [])

  const resetQuiz = useCallback(() => {
    dispatch({ type: "RESET" })
  }, [])

  const getRecommendations = (score: number): string[] => {
    if (score >= 60) {
      return [
        "فكرتك قوية جداً! يمكنك البدء في تطوير نموذج أولي",
        "ركز على بناء فريق قوي",
        "ابدأ في البحث عن تمويل"
      ]
    } else if (score >= 40) {
      return [
        "فكرتك جيدة ولكن تحتاج إلى بعض التحسينات",
        "قم بإجراء المزيد من البحث السوقي",
        "حدد نقاط القوة والضعف في فكرتك"
      ]
    } else {
      return [
        "فكرتك تحتاج إلى إعادة نظر",
        "قم بتحليل المنافسين بشكل أعمق",
        "ابحث عن نقاط تميز إضافية"
      ]
    }
  }

  const getScoreLevel = (score: number) => {
    if (score >= 60) {
      return {
        level: "ممتاز",
        color: "text-green-500",
        icon: CheckCircle
      }
    } else if (score >= 40) {
      return {
        level: "جيد",
        color: "text-yellow-500",
        icon: AlertCircle
      }
    } else {
      return {
        level: "يحتاج تحسين",
        color: "text-red-500",
        icon: XCircle
      }
    }
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">مُقيم الأفكار</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اختبر فكرة مشروعك الناشئ واحصل على تقييم شامل مع توصيات للتحسين
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-sm text-muted-foreground">التقدم:</span>
            <Progress value={progress} className="w-64" />
            <span className="text-sm font-medium">{Math.round(progress)}%</span>
          </div>
        </div>

        {!isComplete ? (
          <>
            <QuestionCard
              question={questions[currentStep - 1]}
              answer={answers[currentStep]}
              onAnswer={(value) => handleAnswer(currentStep, value)}
            />
            <StepNavigation
              currentStep={currentStep}
              totalSteps={questions.length}
              onNext={handleNext}
              onPrevious={handlePrevious}
              isNextDisabled={!answers[currentStep]}
            />
          </>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Score Card */}
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">نتيجة تقييم فكرتك</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="space-y-4">
                  <div className="text-6xl font-bold text-[#18A39E]">{score}</div>
                  <div className="text-xl text-muted-foreground">من أصل 80 نقطة</div>
                  {(() => {
                    const { level, color, icon: Icon } = getScoreLevel(score)
                    return (
                      <div className="flex items-center justify-center gap-2">
                        <Icon className={`h-6 w-6 ${color}`} />
                        <span className={`text-xl font-semibold ${color}`}>{level}</span>
                      </div>
                    )
                  })()}
                </div>
                <Progress value={(score / 80) * 100} className="w-full max-w-md mx-auto" />
              </CardContent>
            </Card>

            {/* Detailed Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-[#18A39E]" />
                    تحليل النقاط
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {questions.map((question) => {
                      const answer = answers[question.id]
                      let points = 0

                      if (question.type === "radio" && answer) {
                        const option = question.options.find((opt) => opt.value === answer)
                        if (option) points = option.points
                      } else if (question.type === "checkbox" && answer) {
                        points = answer.reduce((sum: number, val: string) => {
                          const option = question.options.find((opt) => opt.value === val)
                          return sum + (option ? option.points : 0)
                        }, 0)
                      }

                      return (
                        <div key={question.id} className="flex justify-between items-center">
                          <Badge variant={points >= 7 ? "default" : points >= 4 ? "secondary" : "destructive"}>
                            {points} نقطة
                          </Badge>
                          <span className="text-sm text-right">{question.category}</span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-[#18A39E]" />
                    التوصيات
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {getRecommendations(score).map((recommendation, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-sm text-right">{recommendation}</span>
                        <div className="w-2 h-2 rounded-full bg-[#18A39E] mt-2 flex-shrink-0"></div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-[#18A39E]" />
                  الخطوات التالية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Users className="h-8 w-8 text-[#18A39E] mx-auto mb-2" />
                    <h4 className="font-medium mb-2">بحث السوق</h4>
                    <p className="text-sm text-muted-foreground">ادرس السوق والعملاء المحتملين بعمق أكبر</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Target className="h-8 w-8 text-[#18A39E] mx-auto mb-2" />
                    <h4 className="font-medium mb-2">النموذج الأولي</h4>
                    <p className="text-sm text-muted-foreground">طور نموذج أولي لاختبار فكرتك</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <DollarSign className="h-8 w-8 text-[#18A39E] mx-auto mb-2" />
                    <h4 className="font-medium mb-2">خطة العمل</h4>
                    <p className="text-sm text-muted-foreground">ضع خطة عمل مفصلة ونموذج تمويل</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={resetQuiz}>
                إعادة التقييم
              </Button>
              <Button className="bg-[#18A39E] hover:bg-[#16918A]">حفظ النتائج</Button>
              <Button variant="outline">مشاركة النتائج</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
