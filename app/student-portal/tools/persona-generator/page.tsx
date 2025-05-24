"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Download, Share, RefreshCw, User, Heart, Target, Smartphone } from "lucide-react"

export default function PersonaGeneratorPage() {
  const [currentPersona, setCurrentPersona] = useState({
    name: "",
    age: "",
    gender: "",
    occupation: "",
    location: "",
    income: "",
    education: "",
    familyStatus: "",
    bio: "",
    goals: "",
    frustrations: "",
    motivations: "",
    brands: "",
    channels: "",
    devices: "",
    quote: "",
  })

  const [personas, setPersonas] = useState([
    {
      id: 1,
      name: "أحمد المطور",
      age: "28",
      occupation: "مطور برمجيات",
      bio: "مطور برمجيات شاب يعمل في شركة تقنية، يحب التعلم والابتكار",
      goals: "تطوير مهاراته التقنية وبناء مشروع ناجح",
      frustrations: "قلة الوقت وصعوبة إيجاد فرص استثمارية",
      image: "/placeholder.svg?height=100&width=100",
    },
  ])

  const updatePersona = (field: string, value: string) => {
    setCurrentPersona((prev) => ({ ...prev, [field]: value }))
  }

  const savePersona = () => {
    if (currentPersona.name) {
      const newPersona = {
        id: personas.length + 1,
        ...currentPersona,
        image: "/placeholder.svg?height=100&width=100",
      }
      setPersonas([...personas, newPersona])
      setCurrentPersona({
        name: "",
        age: "",
        gender: "",
        occupation: "",
        location: "",
        income: "",
        education: "",
        familyStatus: "",
        bio: "",
        goals: "",
        frustrations: "",
        motivations: "",
        brands: "",
        channels: "",
        devices: "",
        quote: "",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">مولد الشخصيات</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            إنشاء شخصيات العملاء المستهدفين لفهم احتياجاتهم بشكل أفضل
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            إعادة تعيين
          </Button>
          <Button variant="outline">
            <Share className="w-4 h-4 mr-2" />
            مشاركة
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            تصدير
          </Button>
        </div>
      </div>

      <Tabs defaultValue="create" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="create">إنشاء شخصية جديدة</TabsTrigger>
          <TabsTrigger value="gallery">معرض الشخصيات</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-[#18A39E]" />
                    المعلومات الأساسية
                  </CardTitle>
                  <CardDescription>البيانات الديموغرافية الأساسية للشخصية</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">الاسم</label>
                      <Input
                        placeholder="مثال: سارة أحمد"
                        value={currentPersona.name}
                        onChange={(e) => updatePersona("name", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">العمر</label>
                      <Input
                        placeholder="مثال: 32"
                        value={currentPersona.age}
                        onChange={(e) => updatePersona("age", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">الجنس</label>
                      <Select value={currentPersona.gender} onValueChange={(value) => updatePersona("gender", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر الجنس" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">ذكر</SelectItem>
                          <SelectItem value="female">أنثى</SelectItem>
                          <SelectItem value="other">آخر</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">المهنة</label>
                      <Input
                        placeholder="مثال: مديرة تسويق"
                        value={currentPersona.occupation}
                        onChange={(e) => updatePersona("occupation", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">الموقع</label>
                      <Input
                        placeholder="مثال: الجزائر العاصمة"
                        value={currentPersona.location}
                        onChange={(e) => updatePersona("location", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">الدخل الشهري</label>
                      <Select value={currentPersona.income} onValueChange={(value) => updatePersona("income", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر الفئة" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">أقل من 50,000 دج</SelectItem>
                          <SelectItem value="medium">50,000 - 100,000 دج</SelectItem>
                          <SelectItem value="high">أكثر من 100,000 دج</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">نبذة شخصية</label>
                    <Textarea
                      placeholder="وصف مختصر عن الشخصية وخلفيتها..."
                      value={currentPersona.bio}
                      onChange={(e) => updatePersona("bio", e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#18A39E]" />
                    الأهداف والتحديات
                  </CardTitle>
                  <CardDescription>ما يسعى إليه العميل وما يواجهه من صعوبات</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">الأهداف</label>
                    <Textarea
                      placeholder="• تحسين الإنتاجية في العمل&#10;• توفير الوقت والجهد&#10;• تعلم مهارات جديدة"
                      value={currentPersona.goals}
                      onChange={(e) => updatePersona("goals", e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">الإحباطات والتحديات</label>
                    <Textarea
                      placeholder="• قلة الوقت المتاح&#10;• صعوبة في إيجاد حلول مناسبة&#10;• التكلفة العالية"
                      value={currentPersona.frustrations}
                      onChange={(e) => updatePersona("frustrations", e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">الدوافع</label>
                    <Textarea
                      placeholder="• الرغبة في النجاح المهني&#10;• تحسين جودة الحياة&#10;• مواكبة التطورات"
                      value={currentPersona.motivations}
                      onChange={(e) => updatePersona("motivations", e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#18A39E]" />
                    التفضيلات والسلوك
                  </CardTitle>
                  <CardDescription>العلامات التجارية المفضلة وسلوك الشراء</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">العلامات التجارية المفضلة</label>
                    <Input
                      placeholder="مثال: Apple, Samsung, Google"
                      value={currentPersona.brands}
                      onChange={(e) => updatePersona("brands", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">قنوات التواصل المفضلة</label>
                    <Input
                      placeholder="مثال: Instagram, LinkedIn, WhatsApp"
                      value={currentPersona.channels}
                      onChange={(e) => updatePersona("channels", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">الأجهزة المستخدمة</label>
                    <Input
                      placeholder="مثال: iPhone, MacBook, iPad"
                      value={currentPersona.devices}
                      onChange={(e) => updatePersona("devices", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">اقتباس مميز</label>
                    <Textarea
                      placeholder="اقتباس يعبر عن شخصية العميل وتفكيره..."
                      value={currentPersona.quote}
                      onChange={(e) => updatePersona("quote", e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-[#18A39E]" />
                    معاينة الشخصية
                  </CardTitle>
                  <CardDescription>نظرة سريعة على الشخصية المُنشأة</CardDescription>
                </CardHeader>
                <CardContent>
                  {currentPersona.name ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[#18A39E] rounded-full flex items-center justify-center text-white text-xl font-bold">
                          {currentPersona.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{currentPersona.name}</h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {currentPersona.age && `${currentPersona.age} سنة`}
                            {currentPersona.occupation && ` • ${currentPersona.occupation}`}
                          </p>
                        </div>
                      </div>
                      {currentPersona.bio && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">{currentPersona.bio}</p>
                      )}
                      {currentPersona.quote && (
                        <blockquote className="border-l-4 border-[#18A39E] pl-4 italic text-sm">
                          "{currentPersona.quote}"
                        </blockquote>
                      )}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">ابدأ بملء البيانات لرؤية معاينة الشخصية</p>
                  )}
                </CardContent>
              </Card>

              <Button
                onClick={savePersona}
                className="w-full bg-[#18A39E] hover:bg-[#16918A] text-white"
                disabled={!currentPersona.name}
              >
                <Save className="w-4 h-4 mr-2" />
                حفظ الشخصية
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="gallery" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((persona) => (
              <Card key={persona.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#18A39E] rounded-full flex items-center justify-center text-white font-bold">
                      {persona.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{persona.name}</CardTitle>
                      <CardDescription>
                        {persona.age} سنة • {persona.occupation}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{persona.bio}</p>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-sm">الأهداف:</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{persona.goals}</p>
                    </div>
                    <div>
                      <span className="font-medium text-sm">التحديات:</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{persona.frustrations}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline">
                      تحرير
                    </Button>
                    <Button size="sm" className="bg-[#18A39E] hover:bg-[#16918A]">
                      عرض
                    </Button>
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
