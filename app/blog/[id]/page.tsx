"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Share2, User, ArrowRight } from "lucide-react"
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share"

// Mock blog post data
const blogPost = {
  id: 1,
  title: "كيف تبدأ مشروعك الناشئ في 5 خطوات بسيطة",
  content: `
    <p>بدء مشروع ناشئ هو حلم يراود الكثير من رواد الأعمال، لكن الطريق قد يكون مليئاً بالتحديات. في هذا المقال، سنقدم لك دليلاً شاملاً لبدء مشروعك الناشئ في 5 خطوات بسيطة.</p>

    <h2>الخطوة الأولى: تحديد فكرة المشروع</h2>
    <p>قبل البدء في أي مشروع، يجب أن تكون لديك فكرة واضحة ومحددة. اسأل نفسك الأسئلة التالية:</p>
    <ul>
      <li>ما هي المشكلة التي يحلها مشروعك؟</li>
      <li>من هم العملاء المستهدفون؟</li>
      <li>ما هي الميزة التنافسية لمشروعك؟</li>
    </ul>

    <h2>الخطوة الثانية: إجراء دراسة السوق</h2>
    <p>دراسة السوق هي خطوة حيوية لفهم:</p>
    <ul>
      <li>حجم السوق المستهدف</li>
      <li>المنافسين الحاليين</li>
      <li>احتياجات العملاء</li>
      <li>الفرص والتحديات</li>
    </ul>

    <h2>الخطوة الثالثة: وضع خطة عمل</h2>
    <p>خطة العمل هي خارطة الطريق لمشروعك. يجب أن تتضمن:</p>
    <ul>
      <li>الرؤية والأهداف</li>
      <li>استراتيجية التسويق</li>
      <li>الخطة المالية</li>
      <li>هيكل العمل</li>
    </ul>

    <h2>الخطوة الرابعة: تأمين التمويل</h2>
    <p>هناك عدة مصادر للتمويل:</p>
    <ul>
      <li>التمويل الذاتي</li>
      <li>المستثمرين الملائكة</li>
      <li>الشركات الناشئة</li>
      <li>التمويل الجماعي</li>
    </ul>

    <h2>الخطوة الخامسة: البدء في التنفيذ</h2>
    <p>بعد إكمال الخطوات السابقة، حان وقت التنفيذ:</p>
    <ul>
      <li>تأسيس الشركة قانونياً</li>
      <li>بناء الفريق</li>
      <li>تطوير المنتج أو الخدمة</li>
      <li>بدء التسويق والبيع</li>
    </ul>

    <h2>الخاتمة</h2>
    <p>بدء مشروع ناشئ يتطلب الكثير من العمل والتفاني، لكن مع التخطيط الجيد والتنفيذ المنظم، يمكنك تحقيق النجاح. تذكر أن التعلم المستمر والتكيف مع التغييرات هما مفتاح النجاح في عالم ريادة الأعمال.</p>
  `,
  author: "أحمد محمد",
  date: "2024-03-15",
  readTime: "5 دقائق",
  category: "ريادة الأعمال",
  image: "/placeholder.svg?height=800&width=1600",
  tags: ["ريادة الأعمال", "بدء المشاريع", "التخطيط", "التمويل"],
}

// Mock related posts
const relatedPosts = [
  {
    id: 2,
    title: "أهمية التحليل المالي في المشاريع الناشئة",
    excerpt: "تعرف على أساسيات التحليل المالي وأهميته في اتخاذ القرارات الاستراتيجية لمشروعك",
    author: "سارة أحمد",
    date: "2024-03-10",
    readTime: "7 دقائق",
    category: "تمويل",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 3,
    title: "استراتيجيات التسويق الرقمي للمشاريع الناشئة",
    excerpt: "أحدث استراتيجيات التسويق الرقمي التي يمكنك تطبيقها لتعزيز نمو مشروعك",
    author: "محمد علي",
    date: "2024-03-05",
    readTime: "6 دقائق",
    category: "تسويق",
    image: "/placeholder.svg?height=400&width=800",
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false)
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareTitle = blogPost.title

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <article className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{blogPost.category}</Badge>
            <span className="text-sm text-muted-foreground">{blogPost.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold mb-6">{blogPost.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span>
                  {new Date(blogPost.date).toLocaleDateString("ar-SA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
            <div className="relative">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
              >
                <Share2 className="h-5 w-5" />
              </Button>
              {isShareMenuOpen && (
                <div className="absolute left-0 mt-2 p-2 bg-background border rounded-lg shadow-lg flex gap-2">
                  <FacebookShareButton url={shareUrl} quote={shareTitle}>
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <TwitterShareButton url={shareUrl} title={shareTitle}>
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <LinkedinShareButton url={shareUrl} title={shareTitle}>
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">الوسوم</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-8">مقالات ذات صلة</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("ar-SA", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Back to Blog */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <Link href="/blog">
            <Button variant="outline" className="group">
              العودة إلى المدونة
              <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </article>
    </div>
  )
} 