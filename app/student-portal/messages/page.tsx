"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Plus, MoreVertical, Phone, Video, Paperclip } from "lucide-react"

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1)
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  // Mock chat data
  const chats = [
    {
      id: 1,
      name: "د. أحمد محمد",
      role: "مستشار تقني",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "سأراجع مشروعك وأرد عليك قريباً",
      lastMessageTime: "منذ 10 دقائق",
      unreadCount: 2,
      online: true,
      messages: [
        {
          id: 1,
          sender: "د. أحمد محمد",
          content: "مرحباً، كيف يمكنني مساعدتك في مشروعك؟",
          time: "10:30 ص",
          isOwn: false,
        },
        {
          id: 2,
          sender: "أنت",
          content: "أحتاج مساعدة في تطوير خطة العمل لمشروع التطبيق الذكي",
          time: "10:35 ص",
          isOwn: true,
        },
        {
          id: 3,
          sender: "د. أحمد محمد",
          content: "ممتاز! هل يمكنك إرسال الملف الحالي لخطة العمل؟",
          time: "10:40 ص",
          isOwn: false,
        },
        {
          id: 4,
          sender: "أنت",
          content: "بالطبع، سأرسله الآن",
          time: "10:42 ص",
          isOwn: true,
        },
        {
          id: 5,
          sender: "د. أحمد محمد",
          content: "سأراجع مشروعك وأرد عليك قريباً",
          time: "10:45 ص",
          isOwn: false,
        },
      ],
    },
    {
      id: 2,
      name: "أ. فاطمة علي",
      role: "مستشارة مالية",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "هل تحتاج مساعدة في التمويل؟",
      lastMessageTime: "منذ ساعة",
      unreadCount: 0,
      online: false,
      messages: [
        {
          id: 1,
          sender: "أ. فاطمة علي",
          content: "مرحباً، سمعت أنك تعمل على مشروع جديد",
          time: "9:15 ص",
          isOwn: false,
        },
        {
          id: 2,
          sender: "أنت",
          content: "نعم، أعمل على تطبيق للتجارة الإلكترونية",
          time: "9:20 ص",
          isOwn: true,
        },
        {
          id: 3,
          sender: "أ. فاطمة علي",
          content: "هل تحتاج مساعدة في التمويل؟",
          time: "9:25 ص",
          isOwn: false,
        },
      ],
    },
    {
      id: 3,
      name: "د. محمد حسن",
      role: "مستشار قانوني",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "تم إرسال الوثائق المطلوبة",
      lastMessageTime: "منذ 3 ساعات",
      unreadCount: 1,
      online: true,
      messages: [
        {
          id: 1,
          sender: "أنت",
          content: "أحتاج مساعدة في براءة الاختراع",
          time: "7:30 ص",
          isOwn: true,
        },
        {
          id: 2,
          sender: "د. محمد حسن",
          content: "تم إرسال الوثائق المطلوبة",
          time: "7:45 ص",
          isOwn: false,
        },
      ],
    },
    {
      id: 4,
      name: "أ. سارة أحمد",
      role: "مستشارة تسويق",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "لنناقش استراتيجية التسويق غداً",
      lastMessageTime: "أمس",
      unreadCount: 0,
      online: false,
      messages: [
        {
          id: 1,
          sender: "أ. سارة أحمد",
          content: "لنناقش استراتيجية التسويق غداً",
          time: "أمس 4:00 م",
          isOwn: false,
        },
      ],
    },
  ]

  const filteredChats = chats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const currentChat = chats.find((chat) => chat.id === selectedChat)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-8rem)]">
          {/* Chat List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>مركز الرسائل</CardTitle>
                <Button size="sm" className="bg-[#18A39E] hover:bg-[#16918A] text-white">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="ابحث في المحادثات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {filteredChats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                      selectedChat === chat.id ? "bg-[#18A39E]/10 border-r-2 border-[#18A39E]" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={chat.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {chat.online && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-sm truncate">{chat.name}</h3>
                          <span className="text-xs text-muted-foreground">{chat.lastMessageTime}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{chat.role}</p>
                        <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                      </div>
                      {chat.unreadCount > 0 && (
                        <Badge className="bg-[#18A39E] text-white text-xs">{chat.unreadCount}</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-2 flex flex-col">
            {currentChat ? (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={currentChat.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{currentChat.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {currentChat.online && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{currentChat.name}</h3>
                        <p className="text-sm text-muted-foreground">{currentChat.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Video className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  {currentChat.messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isOwn ? "bg-[#18A39E] text-white" : "bg-muted text-foreground"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${message.isOwn ? "text-white/70" : "text-muted-foreground"}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex items-end gap-2">
                    <Button size="sm" variant="outline">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Textarea
                      placeholder="اكتب رسالتك هنا..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1 min-h-[40px] max-h-32 resize-none"
                      onKeyPress={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault()
                          handleSendMessage()
                        }
                      }}
                    />
                    <Button
                      onClick={handleSendMessage}
                      className="bg-[#18A39E] hover:bg-[#16918A] text-white"
                      disabled={!newMessage.trim()}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <CardContent className="flex-1 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <p>اختر محادثة لبدء المراسلة</p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
