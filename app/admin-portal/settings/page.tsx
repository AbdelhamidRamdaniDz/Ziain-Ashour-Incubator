"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Save, Upload, Settings, Globe, Phone, Mail, ImageIcon } from "lucide-react"

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    defaultLanguage: "ar",
    platformName: "حاضنة جامعة زين عاشور للشركات الناشئة",
    contactEmail: "info@ziainashour-incubator.edu.dz",
    contactPhone: "+213 21 123 456",
    address: "جامعة زين عاشور، الجزائر العاصمة، الجزائر",
    description: "حاضنة الشركات الناشئة الرائدة في الجزائر، نساعد الطلاب على تحويل أفكارهم إلى مشاريع ناجحة",
    features: {
      forum: true,
      marketplace: true,
      messaging: true,
      patents: true,
      analytics: true,
      resources: true,
    },
  })

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleFeatureToggle = (feature, enabled) => {
    setSettings((prev) => ({
      ...prev,
      features: {
        ...prev.features,
        [feature]: enabled,
      },
    }))
  }

  const handleSaveSettings = () => {
    // Here you would typically save settings to your backend
    console.log("Saving settings:", settings)
    // Show success message
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900" dir="rtl">
      <div className="container mx-auto p-6 max-w-4xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">إعدادات النظام</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">إدارة إعدادات المنصة والميزات المتاحة</p>
        </div>

        <div className="space-y-6">
          {/* الإعدادات العامة */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                الإعدادات العامة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="defaultLanguage">اللغة الافتراضية</Label>
                  <Select
                    value={settings.defaultLanguage}
                    onValueChange={(value) => handleSettingChange("defaultLanguage", value)}
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
                  <Label htmlFor="platformName">اسم المنصة</Label>
                  <Input
                    id="platformName"
                    value={settings.platformName}
                    onChange={(e) => handleSettingChange("platformName", e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">وصف المنصة</Label>
                <Textarea
                  id="description"
                  value={settings.description}
                  onChange={(e) => handleSettingChange("description", e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* معلومات التواصل */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                معلومات التواصل
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactEmail" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    البريد الإلكتروني الرسمي
                  </Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={settings.contactEmail}
                    onChange={(e) => handleSettingChange("contactEmail", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    رقم الهاتف
                  </Label>
                  <Input
                    id="contactPhone"
                    value={settings.contactPhone}
                    onChange={(e) => handleSettingChange("contactPhone", e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">العنوان</Label>
                <Input
                  id="address"
                  value={settings.address}
                  onChange={(e) => handleSettingChange("address", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* شعار المنصة */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5" />
                شعار المنصة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ImageIcon className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">اسحب وأفلت الشعار هنا أو انقر للتحديد</p>
                  <Button variant="outline">
                    <Upload className="h-4 w-4 ml-2" />
                    تحميل شعار
                  </Button>
                </div>
                <p className="text-sm text-gray-500">
                  الحد الأقصى لحجم الملف: 2 ميجابايت. الصيغ المدعومة: PNG, JPG, SVG
                </p>
              </div>
            </CardContent>
          </Card>

          {/* إعدادات الميزات */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                إعدادات الميزات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="forum-toggle" className="text-base font-medium">
                      المنتدى الطلابي
                    </Label>
                    <p className="text-sm text-gray-500">السماح للطلاب بالمشاركة في المنتدى والنقاشات</p>
                  </div>
                  <Switch
                    id="forum-toggle"
                    checked={settings.features.forum}
                    onCheckedChange={(checked) => handleFeatureToggle("forum", checked)}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="marketplace-toggle" className="text-base font-medium">
                      سوق المشاريع
                    </Label>
                    <p className="text-sm text-gray-500">عرض وتسويق مشاريع الطلاب في السوق الرقمي</p>
                  </div>
                  <Switch
                    id="marketplace-toggle"
                    checked={settings.features.marketplace}
                    onCheckedChange={(checked) => handleFeatureToggle("marketplace", checked)}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="messaging-toggle" className="text-base font-medium">
                      نظام المراسلة
                    </Label>
                    <p className="text-sm text-gray-500">التواصل المباشر بين الطلاب والمشرفين</p>
                  </div>
                  <Switch
                    id="messaging-toggle"
                    checked={settings.features.messaging}
                    onCheckedChange={(checked) => handleFeatureToggle("messaging", checked)}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="patents-toggle" className="text-base font-medium">
                      براءات الاختراع
                    </Label>
                    <p className="text-sm text-gray-500">تقديم وإدارة طلبات براءات الاختراع</p>
                  </div>
                  <Switch
                    id="patents-toggle"
                    checked={settings.features.patents}
                    onCheckedChange={(checked) => handleFeatureToggle("patents", checked)}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="analytics-toggle" className="text-base font-medium">
                      التحليلات والإحصائيات
                    </Label>
                    <p className="text-sm text-gray-500">عرض إحصائيات الاستخدام والأداء</p>
                  </div>
                  <Switch
                    id="analytics-toggle"
                    checked={settings.features.analytics}
                    onCheckedChange={(checked) => handleFeatureToggle("analytics", checked)}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="resources-toggle" className="text-base font-medium">
                      الموارد التعليمية
                    </Label>
                    <p className="text-sm text-gray-500">مشاركة الكتب والمواد التعليمية</p>
                  </div>
                  <Switch
                    id="resources-toggle"
                    checked={settings.features.resources}
                    onCheckedChange={(checked) => handleFeatureToggle("resources", checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button onClick={handleSaveSettings} className="bg-[#18A39E] hover:bg-[#16918A]" size="lg">
              <Save className="h-4 w-4 ml-2" />
              حفظ التغييرات
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
