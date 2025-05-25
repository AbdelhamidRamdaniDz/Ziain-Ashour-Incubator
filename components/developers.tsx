"use client"

import Link from "next/link"
import { Github } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const developers = [
  {
    name: "رمضاني عبدالحميد",
    role: "Full-stack Developer",
    avatar: "مأ",
    github: "https://github.com/AbdelhamidRamdaniDz",
    phone: "0666564435",
  },
  {
    name: "مزيود علي سفيان",
    role: "Front-end Developer",
    avatar: "فز",
    github: "https://github.com/Corupe",
    phone: "0549600502",
  },
  {
    name: "أوشفون محمد هشام",
    role: "UI/UX Designer",
    avatar: "يع",
    github: "https://github.com",
    phone: "0655919776",
  },
  {
    name: "برابح اياد حاتم",
    role: "Back-end Developer",
    avatar: "أس",
    github: "https://github.com/iyadber",
    phone: "0699993047",
  },
  {
    name: "طارق لباز",
    role: "Front-end Developer",
    avatar: "أس",
    github: "https://github.com",
    phone: "0667587718",
  },
]

export default function DevelopersSection() {
  return (
    <div className="mb-16">
      <h3 className="text-3xl font-extrabold text-center mb-10 text-[#18A39E] tracking-tight">مطورو المنصة</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {developers.map((dev, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl shadow-md bg-white/80 border border-[#18A39E]/10 hover:shadow-lg transition-all min-w-[220px] max-w-[240px]"
          >
            <Avatar className="w-16 h-16 mb-2 ring-2 ring-[#18A39E]/40">
              <AvatarImage src="/placeholder.svg?height=64&width=64" />
              <AvatarFallback className="text-lg font-bold">{dev.avatar}</AvatarFallback>
            </Avatar>
            <h4 className="font-bold text-lg text-foreground">{dev.name}</h4>
            <p className="text-[#18A39E] text-sm font-medium">{dev.role}</p>
            <div className="flex gap-3 mt-2">
              <Link
                href={dev.github}
                className="text-muted-foreground hover:text-[#18A39E] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <a
                href={`tel:${dev.phone}`}
                className="text-muted-foreground hover:text-[#18A39E] transition"
              >
                <span className="inline-block w-5 h-5 text-center font-bold text-base">📞</span>
                <span className="sr-only">Phone</span>
              </a>
            </div>
            <span className="text-xs text-muted-foreground mt-1">{dev.phone}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
