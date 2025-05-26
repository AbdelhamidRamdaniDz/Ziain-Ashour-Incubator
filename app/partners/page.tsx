"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, Search, Filter, Globe, Mail, Phone, ExternalLink } from "lucide-react"

export default function PartnersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Mock partners data
  const partners = [
    {
      id: 1,
      name: "شركة التقنية المتقدمة",
      description: "شركة رائدة في مجال التكنولوجيا والابتكار",
      category: "تكنولوجيا",
      website: "https://example.com",
      email: "contact@example.com",
      phone: "+966 12 345 6789",
      logo: "/logos/partner1.png",
    },
    {
      id: 2,
      name: "مؤسسة التمويل الناشئة",
      description: "مؤسسة متخصصة في تمويل المشاريع الناشئة والشركات الصغيرة",
      category: "تمويل",
      website: "https://example.com",
      email: "info@example.com",
      phone: "+966 12 345 6789",
      logo: "/logos/partner2.png",
    },
    {
      id: 3,
      name: "مركز الابتكار والريادة",
      description: "مركز متخصص في دعم رواد الأعمال وتطوير المشاريع الابتكارية",
      category: "حاضنات",
      website: "https://example.com",
      email: "support@example.com",
      phone: "+966 12 345 6789",
      logo: "/logos/partner3.png",
    },
    {
      id: 4,
      name: "مجموعة الاستشارات الإدارية",
      description: "مجموعة متخصصة في تقديم الاستشارات الإدارية والاستراتيجية",
      category: "استشارات",
      website: "https://example.com",
      email: "consulting@example.com",
      phone: "+966 12 345 6789",
      logo: "/logos/partner4.png",
    },
    {
      id: 5,
      name: "شبكة المستثمرين العرب",
      description: "شبكة تجمع المستثمرين العرب وتدعم المشاريع الواعدة",
      category: "استثمار",
      website: "https://example.com",
      email: "investors@example.com",
      phone: "+966 12 345 6789",
      logo: "/logos/partner5.png",
    },
  ]

  const categories = ["all", "تكنولوجيا", "تمويل", "حاضنات", "استشارات", "استثمار"]

  const filteredPartners = partners.filter((partner) => {
    const matchesSearch =
      partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || partner.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">شركاؤنا</h1>
          <p className="text-muted-foreground">
            تعرف على شركائنا الذين يدعمون رواد الأعمال ويساهمون في تطوير المشاريع الناشئة
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ابحث عن شريك..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[200px]">
                <Filter className="h-4 w-4 ml-2" />
                <SelectValue placeholder="التصنيف" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع التصنيفات</SelectItem>
                {categories.slice(1).map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            عرض {filteredPartners.length} من {partners.length} شريك
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map((partner) => (
            <Card key={partner.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg leading-tight mb-2">{partner.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{partner.description}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {partner.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4" />
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {partner.website}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${partner.email}`} className="hover:underline">
                      {partner.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <a href={`tel:${partner.phone}`} className="hover:underline">
                      {partner.phone}
                    </a>
                  </div>
                </div>
                <Button className="w-full gap-2" asChild>
                  <a href={partner.website} target="_blank" rel="noopener noreferrer">
                    زيارة الموقع
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredPartners.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Building2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">لم يتم العثور على شركاء يطابقون البحث</p>
              <p className="text-sm">جرب تغيير كلمات البحث أو التصنيف</p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setCategoryFilter("all")
              }}
            >
              مسح المرشحات
            </Button>
          </div>
        )}
      </div>
    </div>
  )
} 