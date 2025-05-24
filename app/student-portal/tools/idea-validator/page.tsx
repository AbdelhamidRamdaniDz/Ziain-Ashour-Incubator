"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, AlertCircle, XCircle, Lightbulb, Target, Users, DollarSign, TrendingUp } from "lucide-react"

export default function IdeaValidatorPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [score, setScore] = useState(0)

  const questions = [
    {
      id: 1,
      category: "المشكلة",
      title: "هل تحل فكرتك مشكلة حقيقية؟",
      description: "الأفكار الناجحة تحل مشاكل حقيقية يواجهها الناس",
      type: "radio",
      options: [
        { value: "yes_validated", label: "نعم، وقد تأكدت من ذلك من خلال البحث", points: 10 },
        { value: "yes_assumed", label: "نعم، لكن هذا مجرد افتراض", points: 6 },
        { value: "maybe", label: "ربما، لست متأكداً", points: 3 },
        { value: "no", label: "لا، إنها مجرد فكرة جيدة", points: 0 },
      ],
    },
    {
      id: 2,
      category: "السوق",
      title: "ما حجم السوق المستهدف؟",
      description: "حجم السوق يحدد إمكانية نمو مشروعك",
      type: "radio",
      options: [
        { value: "large", label: "كبير (أكثر من مليون شخص)", points: 10 },
        { value: "medium", label: "متوسط (100 ألف - مليون شخص)", points: 7 },
        { value: "small", label: "صغير (10-100 ألف شخص)", points: 4 },
        { value: "very_small", label: "صغير جداً (أقل من 10 آلاف)", points: 1 },
      ],
    },
    {
      id: 3,
      category: "المنافسة",
      title: "كم عدد المنافسين المباشرين؟",
      description: "المنافسة تدل على وجود سوق، لكن الكثير منها قد يكون مشكلة",
      type: "radio",
      options: [
        { value: "none", label: "لا يوجد منافسون", points: 3 },
        { value: "few", label: "1-3 منافسين", points: 8 },
        { value: "some", label: "4-10 منافسين", points: 6 },
        { value: "many", label: "أكثر من 10 منافسين", points: 2 },
      ],
    },
    {
      id: 4,
      category: "الميزة التنافسية",
      title: "ما الذي يميز فكرتك عن المنافسين؟",
      description: "الميزة التنافسية ضرورية للنجاح",
      type: "checkbox",
      options: [
        { value: "technology", label: "تقنية متقدمة", points: 3 },
        { value: "price", label: "سعر أفضل", points: 2 },
        { value: "quality", label: "جودة أعلى", points: 3 },
        { value: "service", label: "خدمة عملاء ممتازة", points: 2 },
        { value: "speed", label: "سرعة في التنفيذ", points: 2 },
        { value: "innovation", label: "ابتكار في الحل", points: 4 },
        { value: "none", label: "لا يوجد ميزة واضحة", points: -5 },
      ],
    },
    {
      id: 5,
      category: "نموذج العمل",
      title: "كيف ستحقق الأرباح؟",
      description: "نموذج عمل واضح ضروري للاستدامة",
      type: "radio",
      options: [
        { value: "clear_tested", label: "لدي نموذج واضح ومختبر", points: 10 },
        { value: "clear_untested", label: "لدي نموذج واضح لكن غير مختبر", points: 7 },
        { value: "ideas", label: "لدي أفكار متعددة", points: 4 },
        { value: "unclear", label: "غير واضح بعد", points: 1 },
      ],
    },
    {
      id: 6,
      category: "الفريق",
      title: "هل لديك فريق مناسب؟",
      description: "الفريق المناسب عامل مهم في نجاح المشروع",
      type: "radio",
      options: [
        { value: "complete", label: "فريق كامل بالمهارات المطلوبة", points: 10 },
        { value: "partial", label: "فريق جزئي، نحتاج أعضاء إضافيين", points: 6 },
        { value: "founder_only", label: "المؤسس فقط حالياً", points: 3 },
        { value: "no_team", label: "لا يوجد فريق بعد", points: 0 },
      ],
    },
    {
      id: 7,
      category: "التمويل",
      title: "ما مقدار التمويل المطلوب للبداية؟",
      description: "التمويل المطلوب يؤثر على سهولة تنفيذ المشروع",
      type: "radio",
      options: [
        { value: "minimal", label: "أقل من 10 آلاف دولار", points: 8 },
        { value: "moderate", label: "10-50 ألف دولار", points: 6 },
        { value: "substantial", label: "50-200 ألف دولار", points: 4 },
        { value: "large", label: "أكثر من 200 ألف دولار", points: 2 },
      ],
    },
    {
      id: 8,
      category: "التحقق",
      title: "هل اختبرت فكرتك مع العملاء المحتملين؟",
      description: "التحقق من السوق أمر بالغ الأهمية",
      type: "radio",
      options: [
        { value: "extensive", label: "نعم، اختبار شامل مع ردود إيجابية", points: 10 },
        { value: "some", label: "نعم، اختبار محدود مع ردود مختلطة", points: 6 },
        { value: "minimal", label: "اختبار بسيط فقط", points: 3 },
        { value: "none", label: "لم أختبرها بعد", points: 0 },
      ],
    },
  ]

  const handleAnswer = (questionId: number, value: any) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const calculateScore = () => {
    let totalScore = 0
    questions.forEach((question) => {
      const answer = answers[question.id]
      if (question.type === "radio" && answer) {
        const option = question.options.find((opt) => opt.value === answer)
        if (option) totalScore += option.points
      } else if (question.type === "checkbox" && answer) {
        answer.forEach((val: string) => {
          const option = question.options.find((opt) => opt.value === val)
          if (option) totalScore += option.points
        })
      }
    })
    setScore(totalScore)
  }

  const getScoreLevel = (score: number) => {
    if (score >= 70) return { level: "ممتاز", color: "text-green-600", icon: CheckCircle }
    if (score >= 50) return { level: "جيد", color: "text-yellow-600", icon: AlertCircle }
    if (score >= 30) return { level: "يحتاج تحسين", color: "text-orange-600", icon: AlertCircle }
    return { level: "ضعيف", color: "text-red-600", icon: XCircle }
  }

  const getRecommendations = (score: number) => {
    if (score >= 70) {
      return [
        "فكرتك تبدو واعدة جداً! ابدأ في تطوير النموذج الأولي",
        "ركز على بناء فريق قوي وجمع التمويل",
        "استمر في التحقق من السوق وتحسين المنتج",
        "ابدأ في وضع خطة عمل مفصلة",
      ]
    } else if (score >= 50) {
      return [
        "فكرتك لها إمكانيات، لكنها تحتاج تطوير",
        "ركز على تحسين نقاط الضعف المحددة",
        "اجر المزيد من البحوث السوقية",
        "فكر في تطوير ميزة تنافسية أقوى",
      ]
    } else if (score >= 30) {
      return [
        "فكرتك تحتاج عمل كبير قبل التنفيذ",
        "ارجع للبحث والتخطيط مرة أخرى",
        "تحقق من وجود مشكلة حقيقية تحلها",
        "ادرس السوق والمنافسين بعمق أكبر",
      ]
    } else {
      return [
        "فكرتك تحتاج إعادة تفكير جذرية",
        "ابدأ من جديد بتحديد مشكلة واضحة",
        "اجر بحث سوق شامل",
        "فكر في فكرة مختلفة أو طور هذه بشكل كبير",
      ]
    }
  }

  const progress = (currentStep / questions.length) * 100

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

        {currentStep <= questions.length ? (
          /* Question Card */
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#18A39E] text-white flex items-center justify-center font-bold">
                  {currentStep}
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">
                    {questions[currentStep - 1].category}
                  </Badge>
                  <CardTitle className="text-xl">{questions[currentStep - 1].title}</CardTitle>
                  <CardDescription className="mt-2">{questions[currentStep - 1].description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {questions[currentStep - 1].type === "radio" ? (
                <RadioGroup
                  value={answers[currentStep] || ""}
                  onValueChange={(value) => handleAnswer(currentStep, value)}
                >
                  {questions[currentStep - 1].options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2 space-x-reverse">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                        {option.label}
                      </Label>
                      <Badge variant="secondary" className="text-xs">
                        {option.points} نقطة
                      </Badge>
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <div className="space-y-3">
                  {questions[currentStep - 1].options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2 space-x-reverse">
                      <Checkbox
                        id={option.value}
                        checked={answers[currentStep]?.includes(option.value) || false}
                        onCheckedChange={(checked) => {
                          const currentAnswers = answers[currentStep] || []
                          if (checked) {
                            handleAnswer(currentStep, [...currentAnswers, option.value])
                          } else {
                            handleAnswer(
                              currentStep,
                              currentAnswers.filter((v: string) => v !== option.value),
                            )
                          }
                        }}
                      />
                      <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                        {option.label}
                      </Label>
                      <Badge variant="secondary" className="text-xs">
                        {option.points > 0 ? `+${option.points}` : option.points} نقطة
                      </Badge>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                >
                  السؤال السابق
                </Button>
                <Button
                  onClick={() => {
                    if (currentStep === questions.length) {
                      calculateScore()
                      setCurrentStep(currentStep + 1)
                    } else {
                      setCurrentStep(currentStep + 1)
                    }
                  }}
                  disabled={!answers[currentStep]}
                  className="bg-[#18A39E] hover:bg-[#16918A]"
                >
                  {currentStep === questions.length ? "احسب النتيجة" : "السؤال التالي"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Results */
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
                          <span className="text-sm">{question.category}</span>
                          <Badge variant={points >= 7 ? "default" : points >= 4 ? "secondary" : "destructive"}>
                            {points} نقطة
                          </Badge>
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
                        <div className="w-2 h-2 rounded-full bg-[#18A39E] mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{recommendation}</span>
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
              <Button
                variant="outline"
                onClick={() => {
                  setCurrentStep(1)
                  setAnswers({})
                  setScore(0)
                }}
              >
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
