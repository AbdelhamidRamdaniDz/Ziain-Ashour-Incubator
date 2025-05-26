"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useCountUp } from "react-countup"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  label: string
  icon: React.ReactNode
}

function Counter({ end, duration = 2.5, suffix = "", prefix = "", label, icon }: CounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  const { update } = useCountUp({
    ref: "counter",
    end,
    duration,
    suffix,
    prefix,
    start: 0,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  })

  useEffect(() => {
    if (isInView) {
      update(end)
      setCount(end)
    }
  }, [isInView, end, update])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors"
    >
      <div className="p-3 rounded-full bg-primary/10 text-primary">{icon}</div>
      <div className="text-4xl font-bold text-primary">
        <span id="counter">{count}</span>
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground text-center">{label}</div>
    </motion.div>
  )
}

export function AnimatedCounters() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            إحصائياتنا
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نحن نفخر بإنجازاتنا ومساهماتنا في دعم ريادة الأعمال والابتكار في جامعة زيان عاشور
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter
            end={85}
            suffix="+"
            label="مشروع محتضن"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M2 9V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v4" />
                <path d="M2 9v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9" />
                <path d="M6 14h.01" />
                <path d="M10 14h.01" />
                <path d="M14 14h.01" />
                <path d="M18 14h.01" />
              </svg>
            }
          />
          <Counter
            end={45}
            suffix="+"
            label="مرشد ومدرب"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />
          <Counter
            end={120}
            suffix="+"
            label="فعالية وورشة"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M12 2v4" />
                <path d="M12 18v4" />
                <path d="m4.93 4.93 2.83 2.83" />
                <path d="m16.24 16.24 2.83 2.83" />
                <path d="M2 12h4" />
                <path d="M18 12h4" />
                <path d="m4.93 19.07 2.83-2.83" />
                <path d="m16.24 7.76 2.83-2.83" />
              </svg>
            }
          />
          <Counter
            end={25}
            suffix="+"
            label="براءة اختراع"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M12 2v4" />
                <path d="M12 18v4" />
                <path d="m4.93 4.93 2.83 2.83" />
                <path d="m16.24 16.24 2.83 2.83" />
                <path d="M2 12h4" />
                <path d="M18 12h4" />
                <path d="m4.93 19.07 2.83-2.83" />
                <path d="m16.24 7.76 2.83-2.83" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  )
} 