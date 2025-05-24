"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Lock, Bell, Shield, Palette, Download } from "lucide-react"

export default function SettingsPage() {
  const [profileData, setProfileData] = useState({
    name: "أحمد محمد علي",
    email: "ahmed.mohamed@student.zau.dz",
    phone: "+213 555 123 456",
    university: "جامعة زين عاشور",
    major: "هندسة البرمجيات",
    year: "السنة الثالثة",
    language: "ar",
    timezone: "Africa/Algiers",
  })

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    projectUpdates: true,
    marketingEmails: false,
    weeklyDigest: true,
  })

  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    showEmail: false,
    showPhone: false,
    allowMessages: true,
  })

  const [theme, setTheme] = useState({
    mode: "system",
    primaryColor: "#18A39E",
    fontSize: "medium",
  })

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">إعدادات الحساب</h1>
          <p className="text-muted-foreground mt-2">إدارة معلوماتك الشخصية وتفضيلات الحساب</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="profile">الملف الشخصي</TabsTrigger>
            <TabsTrigger value="security">الأمان</TabsTrigger>
            <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
            <TabsTrigger value="privacy">الخصوصية</TabsTrigger>
            <TabsTrigger value="appearance">المظهر</TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-[#18A39E]" />
                  المعلومات الشخصية
                </CardTitle>
                <CardDescription>تحديث معلوماتك الشخصية وبيانات الاتصال</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback className="text-lg">أم</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline">تغيير الصورة</Button>
                    <p className="text-sm text-muted-foreground">JPG أو PNG. الحد الأقصى 2 ميجابايت</p>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university">الجامعة</Label>
                    <Input
                      id="university"
                      value={profileData.university}
                      onChange={(e) => setProfileData({ ...profileData, university: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="major">التخصص</Label>
                    <Input
                      id="major"
                      value={profileData.major}
                      onChange={(e) => setProfileData({ ...profileData, major: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">السنة الدراسية</Label>
                    <Select
                      value={profileData.year}
                      onValueChange={(value) => setProfileData({ ...profileData, year: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="السنة الأولى">السنة الأولى</SelectItem>
                        <SelectItem value="السنة الثانية">السنة الثانية</SelectItem>
                        <SelectItem value="السنة الثالثة">السنة الثالثة</SelectItem>
                        <SelectItem value="السنة الرابعة">السنة الرابعة</SelectItem>
                        <SelectItem value="السنة الخامسة">السنة الخامسة</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Language and Timezone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">اللغة المفضلة</Label>
                    <Select
                      value={profileData.language}
                      onValueChange={(value) => setProfileData({ ...profileData, language: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ar">العربية</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">المنطقة الزمنية</Label>
                    <Select
                      value={profileData.timezone}
                      onValueChange={(value) => setProfileData({ ...profileData, timezone: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Africa/Algiers">الجزائر (GMT+1)</SelectItem>
                        <SelectItem value="Europe/Paris">باريس (GMT+1)</SelectItem>
                        <SelectItem value="UTC">UTC (GMT+0)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="bg-[#18A39E] hover:bg-[#16918A] text-white">حفظ التغييرات</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#18A39E]" />
                  كلمة المرور والأمان
                </CardTitle>
                <CardDescription>إدارة كلمة المرور وإعدادات الأمان</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">كلمة المرور الحالية</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">كلمة المرور الجديدة</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">تأكيد كلمة المرور الجديدة</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>

                <Button className="bg-[#18A39E] hover:bg-[#16918A] text-white">تحديث كلمة المرور</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#18A39E]" />
                  المصادقة الثنائية
                </CardTitle>
                <CardDescription>تعزيز أمان حسابك بالمصادقة الثنائية</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">المصادقة عبر الرسائل النصية</h3>
                    <p className="text-sm text-muted-foreground">استقبال رمز التحقق عبر الرسائل النصية</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">تطبيق المصادقة</h3>
                    <p className="text-sm text-muted-foreground">استخدام تطبيق Google Authenticator أو مشابه</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-[#18A39E]" />
                  إعدادات الإشعارات
                </CardTitle>
                <CardDescription>تخصيص الإشعارات التي تريد استقبالها</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">إشعارات البريد الإلكتروني</h3>
                      <p className="text-sm text-muted-foreground">استقبال الإشعارات عبر البريد الإلكتروني</p>
                    </div>
                    <Switch
                      checked={notifications.emailNotifications}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, emailNotifications: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">الإشعارات الفورية</h3>
                      <p className="text-sm text-muted-foreground">إشعارات فورية على المتصفح أو التطبيق</p>
                    </div>
                    <Switch
                      checked={notifications.pushNotifications}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, pushNotifications: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">تحديثات المشاريع</h3>
                      <p className="text-sm text-muted-foreground">إشعارات حول تحديثات مشاريعك</p>
                    </div>
                    <Switch
                      checked={notifications.projectUpdates}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, projectUpdates: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">رسائل تسويقية</h3>
                      <p className="text-sm text-muted-foreground">أخبار وعروض من الحاضنة</p>
                    </div>
                    <Switch
                      checked={notifications.marketingEmails}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, marketingEmails: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">الملخص الأسبوعي</h3>
                      <p className="text-sm text-muted-foreground">ملخص أسبوعي بأهم الأنشطة</p>
                    </div>
                    <Switch
                      checked={notifications.weeklyDigest}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyDigest: checked })}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#18A39E]" />
                  إعدادات الخصوصية
                </CardTitle>
                <CardDescription>التحكم في من يمكنه رؤية معلوماتك</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>مستوى ظهور الملف الشخصي</Label>
                    <Select
                      value={privacy.profileVisibility}
                      onValueChange={(value) => setPrivacy({ ...privacy, profileVisibility: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">عام - يمكن للجميع رؤيته</SelectItem>
                        <SelectItem value="students">الطلاب فقط</SelectItem>
                        <SelectItem value="private">خاص - أنت فقط</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">إظهار البريد الإلكتروني</h3>
                      <p className="text-sm text-muted-foreground">السماح للآخرين برؤية بريدك الإلكتروني</p>
                    </div>
                    <Switch
                      checked={privacy.showEmail}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, showEmail: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">إظهار رقم الهاتف</h3>
                      <p className="text-sm text-muted-foreground">السماح للآخرين برؤية رقم هاتفك</p>
                    </div>
                    <Switch
                      checked={privacy.showPhone}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, showPhone: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">السماح بالرسائل</h3>
                      <p className="text-sm text-muted-foreground">السماح للطلاب الآخرين بإرسال رسائل لك</p>
                    </div>
                    <Switch
                      checked={privacy.allowMessages}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, allowMessages: checked })}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-[#18A39E]" />
                  إعدادات المظهر
                </CardTitle>
                <CardDescription>تخصيص مظهر المنصة حسب تفضيلاتك</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>وضع المظهر</Label>
                    <Select value={theme.mode} onValueChange={(value) => setTheme({ ...theme, mode: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">فاتح</SelectItem>
                        <SelectItem value="dark">داكن</SelectItem>
                        <SelectItem value="system">تلقائي (حسب النظام)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>حجم الخط</Label>
                    <Select value={theme.fontSize} onValueChange={(value) => setTheme({ ...theme, fontSize: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">صغير</SelectItem>
                        <SelectItem value="medium">متوسط</SelectItem>
                        <SelectItem value="large">كبير</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>اللون الأساسي</Label>
                    <div className="flex gap-2">
                      {["#18A39E", "#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"].map((color) => (
                        <button
                          key={color}
                          onClick={() => setTheme({ ...theme, primaryColor: color })}
                          className={`w-8 h-8 rounded-full border-2 ${
                            theme.primaryColor === color ? "border-foreground" : "border-muted"
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-[#18A39E]" />
                  تصدير البيانات
                </CardTitle>
                <CardDescription>تحميل نسخة من بياناتك الشخصية</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">يمكنك تحميل نسخة من جميع بياناتك المحفوظة في المنصة</p>
                  <Button variant="outline">
                    <Download className="w-4 h-4 ml-2" />
                    تحميل البيانات
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
