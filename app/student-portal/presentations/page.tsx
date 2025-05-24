"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Users, Video, FileText, Plus, Search, Filter } from "lucide-react"

export default function PresentationsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const presentations = [
    {
      id: 1,
      title: "AI-Powered Healthcare Solutions",
      presenter: "أحمد محمد",
      date: "2025-06-15",
      time: "10:00 AM",
      duration: "30 minutes",
      audience: "Investors & Mentors",
      status: "Scheduled",
      type: "Pitch Presentation",
      description: "عرض تقديمي حول حلول الذكاء الاصطناعي في الرعاية الصحية",
      attendees: 25,
      room: "Innovation Hall A",
    },
    {
      id: 2,
      title: "Sustainable Agriculture Platform",
      presenter: "فاطمة الزهراء",
      date: "2025-06-18",
      time: "2:00 PM",
      duration: "45 minutes",
      audience: "Technical Review",
      status: "Confirmed",
      type: "Technical Demo",
      description: "منصة رقمية للزراعة المستدامة والذكية",
      attendees: 15,
      room: "Tech Lab B",
    },
    {
      id: 3,
      title: "E-Learning Revolution",
      presenter: "محمد علي",
      date: "2025-06-20",
      time: "11:30 AM",
      duration: "25 minutes",
      audience: "Educational Partners",
      status: "Draft",
      type: "Business Proposal",
      description: "ثورة في التعليم الإلكتروني والتعلم عن بُعد",
      attendees: 30,
      room: "Conference Room C",
    },
  ]

  const upcomingEvents = [
    {
      title: "Presentation Skills Workshop",
      date: "2025-05-30",
      time: "9:00 AM",
      type: "Workshop",
    },
    {
      title: "Investor Pitch Day",
      date: "2025-06-10",
      time: "1:00 PM",
      type: "Event",
    },
  ]

  const filteredPresentations = presentations.filter(
    (presentation) =>
      presentation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      presentation.presenter.includes(searchQuery) ||
      presentation.description.includes(searchQuery),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">العروض التقديمية</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">إدارة وجدولة العروض التقديمية والمشاريع</p>
        </div>
        <Button className="bg-[#18A39E] hover:bg-[#16918A] text-white">
          <Plus className="w-4 h-4 mr-2" />
          عرض تقديمي جديد
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <Tabs defaultValue="my-presentations" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="my-presentations">عروضي التقديمية</TabsTrigger>
              <TabsTrigger value="scheduled">المجدولة</TabsTrigger>
              <TabsTrigger value="completed">المكتملة</TabsTrigger>
            </TabsList>

            <TabsContent value="my-presentations" className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="البحث في العروض التقديمية..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  تصفية
                </Button>
              </div>

              <div className="space-y-4">
                {filteredPresentations.map((presentation) => (
                  <Card key={presentation.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <CardTitle className="text-xl">{presentation.title}</CardTitle>
                          <CardDescription>{presentation.description}</CardDescription>
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {presentation.presenter}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {presentation.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {presentation.time}
                            </span>
                          </div>
                        </div>
                        <Badge
                          variant={
                            presentation.status === "Confirmed"
                              ? "default"
                              : presentation.status === "Scheduled"
                                ? "secondary"
                                : "outline"
                          }
                          className={presentation.status === "Confirmed" ? "bg-[#18A39E] hover:bg-[#16918A]" : ""}
                        >
                          {presentation.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="font-medium">النوع:</span>
                          <p className="text-gray-600 dark:text-gray-400">{presentation.type}</p>
                        </div>
                        <div>
                          <span className="font-medium">المدة:</span>
                          <p className="text-gray-600 dark:text-gray-400">{presentation.duration}</p>
                        </div>
                        <div>
                          <span className="font-medium">الحضور:</span>
                          <p className="text-gray-600 dark:text-gray-400">{presentation.attendees} شخص</p>
                        </div>
                        <div>
                          <span className="font-medium">القاعة:</span>
                          <p className="text-gray-600 dark:text-gray-400">{presentation.room}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" className="bg-[#18A39E] hover:bg-[#16918A]">
                          <Video className="w-4 h-4 mr-2" />
                          عرض
                        </Button>
                        <Button size="sm" variant="outline">
                          <FileText className="w-4 h-4 mr-2" />
                          تحرير
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="scheduled">
              <Card>
                <CardHeader>
                  <CardTitle>العروض المجدولة</CardTitle>
                  <CardDescription>العروض التقديمية المقررة في الأسابيع القادمة</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">لا توجد عروض مجدولة حالياً</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="completed">
              <Card>
                <CardHeader>
                  <CardTitle>العروض المكتملة</CardTitle>
                  <CardDescription>العروض التقديمية التي تم تقديمها سابقاً</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">لا توجد عروض مكتملة حالياً</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">الأحداث القادمة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-l-4 border-[#18A39E] pl-4">
                  <h4 className="font-medium">{event.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{event.date}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{event.time}</p>
                  <Badge variant="outline" className="mt-1">
                    {event.type}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">نصائح للعرض</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• ابدأ بقصة مقنعة</li>
                <li>• استخدم البيانات والإحصائيات</li>
                <li>• اجعل العرض تفاعلياً</li>
                <li>• تدرب على التوقيت</li>
                <li>• احضر للأسئلة المتوقعة</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
