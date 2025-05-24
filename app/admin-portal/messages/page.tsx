"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Search, MoreVertical } from "lucide-react"

export default function AdminMessagesPage() {
  const [selectedUser, setSelectedUser] = useState(1)
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  // Mock users data
  const users = [
    {
      id: 1,
      name: "أحمد محمد علي",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "شكراً لك على المساعدة",
      timestamp: "منذ 5 دقائق",
      isOnline: true,
      unreadCount: 2,
    },
    {
      id: 2,
      name: "فاطمة الزهراء",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "هل يمكنني الحصول على مساعدة؟",
      timestamp: "منذ 15 دقيقة",
      isOnline: true,
      unreadCount: 1,
    },
    {
      id: 3,
      name: "محمد الأمين",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "تم إرسال المشروع بنجاح",
      timestamp: "منذ ساعة",
      isOnline: false,
      unreadCount: 0,
    },
    {
      id: 4,
      name: "سارة أحمد",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "متى موعد العرض التقديمي؟",
      timestamp: "منذ ساعتين",
      isOnline: true,
      unreadCount: 0,
    },
    {
      id: 5,
      name: "يوسف الحسن",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "شكراً لكم على الدعم",
      timestamp: "أمس",
      isOnline: false,
      unreadCount: 0,
    },
  ]

  // Mock messages data
  const messages = [
    {
      id: 1,
      senderId: 1,
      senderName: "أحمد محمد علي",
      content: "السلام عليكم، أحتاج مساعدة في مشروعي",
      timestamp: "10:30 ص",
      isAdmin: false,
    },
    {
      id: 2,
      senderId: 0,
      senderName: "المشرف",
      content: "وعليكم السلام، بالطبع. ما هي المساعدة التي تحتاجها؟",
      timestamp: "10:32 ص",
      isAdmin: true,
    },
    {
      id: 3,
      senderId: 1,
      senderName: "أحمد محمد علي",
      content: "أواجه صعوبة في تطوير نموذج العمل التجاري",
      timestamp: "10:35 ص",
      isAdmin: false,
    },
    {
      id: 4,
      senderId: 0,
      senderName: "المشرف",
      content: "يمكنك استخدام أداة نموذج العمل التجاري في قسم الأدوات. سأرسل لك رابط مفيد",
      timestamp: "10:37 ص",
      isAdmin: true,
    },
    {
      id: 5,
      senderId: 1,
      senderName: "أحمد محمد علي",
      content: "شكراً لك على المساعدة",
      timestamp: "10:40 ص",
      isAdmin: false,
    },
  ]

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const selectedUserData = users.find((user) => user.id === selectedUser)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900" dir="rtl">
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">نظام الرسائل</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">تواصل مع الطلاب والمرشدين في الحاضنة</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Users List */}
          <Card className="lg:col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">المحادثات</CardTitle>
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="البحث عن مستخدم..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[500px]">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className={`p-4 border-b cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                      selectedUser === user.id ? "bg-[#18A39E]/10 border-r-4 border-r-[#18A39E]" : ""
                    }`}
                    onClick={() => setSelectedUser(user.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                          <AvatarFallback>{user.name.split(" ")[0][0]}</AvatarFallback>
                        </Avatar>
                        {user.isOnline && (
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900 dark:text-white truncate">{user.name}</h3>
                          {user.unreadCount > 0 && (
                            <Badge variant="destructive" className="text-xs">
                              {user.unreadCount}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{user.lastMessage}</p>
                        <p className="text-xs text-gray-400 mt-1">{user.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2 flex flex-col">
            {selectedUserData ? (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={selectedUserData.avatar || "/placeholder.svg"}
                            alt={selectedUserData.name}
                          />
                          <AvatarFallback>{selectedUserData.name.split(" ")[0][0]}</AvatarFallback>
                        </Avatar>
                        {selectedUserData.isOnline && (
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">{selectedUserData.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {selectedUserData.isOnline ? "متصل الآن" : "غير متصل"}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 p-0">
                  <ScrollArea className="h-[400px] p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.isAdmin ? "justify-start" : "justify-end"}`}>
                          <div
                            className={`max-w-[70%] rounded-lg p-3 ${
                              message.isAdmin
                                ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                                : "bg-[#18A39E] text-white"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${message.isAdmin ? "text-gray-500" : "text-white/80"}`}>
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="اكتب رسالتك هنا..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} className="bg-[#18A39E] hover:bg-[#16918A]">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">اختر محادثة</h3>
                  <p className="text-gray-500 dark:text-gray-400">اختر محادثة من القائمة لبدء المراسلة</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
