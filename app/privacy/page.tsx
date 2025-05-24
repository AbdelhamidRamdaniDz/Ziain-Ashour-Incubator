import Link from "next/link"
import { ArrowRight, Shield, FileText, Users, Lock, Eye, Mail, Cookie, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="gap-2 mb-6">
              <ArrowRight className="h-4 w-4" />
              العودة للرئيسية
            </Button>
          </Link>

          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#18A39E]/10 rounded-full">
                <Shield className="h-8 w-8 text-[#18A39E]" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">سياسة الخصوصية</h1>
            <p className="text-lg text-muted-foreground">نحن ملتزمون بحماية خصوصيتك وبياناتك الشخصية</p>
            <p className="text-sm text-muted-foreground mt-2">آخر تحديث: 15 يناير 2024</p>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#18A39E]" />
              مقدمة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              تحترم حاضنة جامعة زيان عاشور خصوصيتك وتلتزم بحماية معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع
              واستخدام وحماية المعلومات التي تقدمها لنا عند استخدام منصتنا وخدماتنا.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#18A39E]" />
              المعلومات التي نجمعها
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">المعلومات الشخصية:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>الاسم الكامل ورقم الطالب</li>
                <li>عنوان البريد الإلكتروني</li>
                <li>معلومات الكلية والتخصص</li>
                <li>تفاصيل المشروع والفريق</li>
                <li>الملفات والوثائق المرفوعة</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">معلومات الاستخدام:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>عنوان IP وبيانات المتصفح</li>
                <li>أوقات الدخول والأنشطة</li>
                <li>الصفحات المزارة والميزات المستخدمة</li>
                <li>تفضيلات النظام والإعدادات</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-[#18A39E]" />
              كيف نستخدم معلوماتك
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
              <li>تقديم وتحسين خدمات الحاضنة</li>
              <li>معالجة طلبات التسجيل والمشاريع</li>
              <li>التواصل معك بشأن برامجنا وفعالياتنا</li>
              <li>تقديم الدعم الفني والأكاديمي</li>
              <li>تحليل الاستخدام لتطوير المنصة</li>
              <li>ضمان أمان وسلامة النظام</li>
              <li>الامتثال للمتطلبات القانونية والأكاديمية</li>
            </ul>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#18A39E]" />
              مشاركة المعلومات
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك في الحالات التالية:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
              <li>مع أعضاء هيئة التدريس والمشرفين الأكاديميين</li>
              <li>مع الشركاء والمرشدين المعتمدين</li>
              <li>عند الحصول على موافقتك الصريحة</li>
              <li>للامتثال للقوانين والأنظمة</li>
              <li>لحماية حقوق وسلامة المستخدمين</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-[#18A39E]" />
              أمان البيانات
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">نتخذ تدابير أمنية صارمة لحماية معلوماتك:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
              <li>تشفير البيانات أثناء النقل والتخزين</li>
              <li>أنظمة مصادقة متعددة العوامل</li>
              <li>مراقبة مستمرة للأنشطة المشبوهة</li>
              <li>نسخ احتياطية منتظمة ومؤمنة</li>
              <li>تدريب الموظفين على أمان المعلومات</li>
              <li>تحديثات أمنية دورية للأنظمة</li>
            </ul>
          </CardContent>
        </Card>

        {/* User Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-[#18A39E]" />
              حقوقك
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
              <li>الوصول إلى معلوماتك الشخصية</li>
              <li>تصحيح أو تحديث البيانات غير الصحيحة</li>
              <li>حذف حسابك ومعلوماتك</li>
              <li>تقييد معالجة بياناتك</li>
              <li>نقل بياناتك إلى خدمة أخرى</li>
              <li>الاعتراض على معالجة معينة</li>
              <li>سحب الموافقة في أي وقت</li>
            </ul>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-[#18A39E]" />
              ملفات تعريف الارتباط
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">نستخدم ملفات تعريف الارتباط لتحسين تجربتك:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
              <li>ملفات ضرورية لتشغيل الموقع</li>
              <li>ملفات لحفظ تفضيلاتك وإعداداتك</li>
              <li>ملفات لتحليل الاستخدام وتحسين الأداء</li>
              <li>ملفات لتخصيص المحتوى والإعلانات</li>
            </ul>
            <p className="text-muted-foreground mt-4">يمكنك إدارة إعدادات ملفات تعريف الارتباط من خلال متصفحك.</p>
          </CardContent>
        </Card>

        {/* Changes to Policy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-[#18A39E]" />
              تغييرات السياسة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإشعارك بأي تغييرات مهمة عبر البريد الإلكتروني أو من
              خلال إشعار على المنصة. ننصحك بمراجعة هذه الصفحة بانتظام للاطلاع على أحدث المعلومات.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-[#18A39E]" />
              تواصل معنا
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارسات البيانات لدينا، يرجى التواصل معنا:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <strong>البريد الإلكتروني:</strong> privacy@incubator.univ-djelfa.dz
              </p>
              <p>
                <strong>الهاتف:</strong> +213 27 87 XX XX
              </p>
              <p>
                <strong>العنوان:</strong> جامعة زيان عاشور، الجلفة، الجزائر
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center pt-8 border-t">
          <p className="text-sm text-muted-foreground">© 2024 حاضنة جامعة زيان عاشور. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </div>
  )
}
