"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Lightbulb, Target, Users } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "أحمد محمد",
    role: "المدير التنفيذي",
    image: "/placeholder.svg?height=400&width=400",
    bio: "خبرة 15 عاماً في مجال ريادة الأعمال والابتكار",
  },
  {
    name: "سارة أحمد",
    role: "مدير العمليات",
    image: "/placeholder.svg?height=400&width=400",
    bio: "خبرة 10 أعوام في إدارة المشاريع وتطوير الأعمال",
  },
  {
    name: "محمد علي",
    role: "مدير التطوير",
    image: "/placeholder.svg?height=400&width=400",
    bio: "خبرة 12 عاماً في تطوير المنتجات والخدمات",
  },
  {
    name: "فاطمة الزهراء",
    role: "مدير التسويق",
    image: "/placeholder.svg?height=400&width=400",
    bio: "خبرة 8 أعوام في التسويق الرقمي وإدارة العلامات التجارية",
  },
]

const achievements = [
  {
    title: "مشاريع ناجحة",
    value: "100+",
    description: "تم دعم وتطوير أكثر من 100 مشروع ناشئ",
  },
  {
    title: "استثمارات",
    value: "50M+",
    description: "تم جذب استثمارات تزيد عن 50 مليون ريال",
  },
  {
    title: "وظائف",
    value: "500+",
    description: "تم خلق أكثر من 500 فرصة عمل",
  },
  {
    title: "شركاء",
    value: "30+",
    description: "شراكة مع أكثر من 30 مؤسسة وشركة",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">من نحن</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نسعى لتمكين رواد الأعمال وبناء مستقبل أفضل للابتكار وريادة الأعمال
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>رؤيتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                نسعى لأن نكون الوجهة الأولى لدعم وتمكين رواد الأعمال في المملكة العربية السعودية
                والمنطقة، وأن نساهم في بناء اقتصاد قائم على المعرفة والابتكار.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>مهمتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                نسعى لتمكين رواد الأعمال من خلال تقديم الدعم الكامل والموارد اللازمة لتحويل أفكارهم
                إلى مشاريع ناجحة، وبناء مجتمع ريادي قوي ومستدام.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">إنجازاتنا</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.title}>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.value}
                  </div>
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">فريقنا</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">قيمنا</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>الابتكار</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  نحن نشجع الأفكار الجديدة والتفكير خارج الصندوق، ونسعى دائماً لتطوير حلول مبتكرة
                  للتحديات.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>التميز</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  نسعى دائماً للتميز في كل ما نقوم به، ونلتزم بتقديم أفضل الخدمات والدعم لرواد
                  الأعمال.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>التعاون</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  نؤمن بقوة العمل الجماعي والتعاون، ونسعى لبناء شراكات قوية مع مختلف الجهات
                  والمؤسسات.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">انضم إلينا في رحلة الابتكار</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            سواء كنت رائد أعمال طموح أو شريكاً محتملاً، نحن هنا لمساعدتك في تحقيق أهدافك
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact">
              <Button>
                تواصل معنا
                <ArrowRight className="h-4 w-4 mr-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline">خدماتنا</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 