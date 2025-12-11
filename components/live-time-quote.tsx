"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Clock, MapPin, Quote } from "lucide-react"

const quotes = [
  "Small steps lead to big success.",
  "Your business, your way – we just keep it organized.",
  "Clarity over chaos, always.",
  "One voice note at a time.",
  "Trust is built through consistency.",
  "Simple records, peaceful mind.",
  "Growth starts with good habits.",
  "Your numbers tell your story.",
  "We handle the books, you build the dream.",
  "Every rupee counts, every entry matters.",
]

export function LiveTimeQuote() {
  const [time, setTime] = useState<string>("")
  const [date, setDate] = useState<string>("")
  const [location, setLocation] = useState<string>("Loading...")
  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }))
      setDate(now.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    // Get location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`,
            )
            const data = await response.json()
            setLocation(data.city || data.locality || data.countryName || "Your Location")
          } catch {
            setLocation("Your Location")
          }
        },
        () => {
          setLocation("Your Location")
        },
      )
    }

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="bg-card border-border p-4 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-primary" />
          <div>
            <p className="text-sm font-mono text-foreground">{time}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
          <div className="hidden sm:flex items-center gap-1 ml-4 text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span className="text-xs">{location}</span>
          </div>
        </div>
        <div className="flex items-start gap-2 max-w-md">
          <Quote className="w-3 h-3 text-primary mt-1 shrink-0" />
          <p className="text-sm text-muted-foreground italic">{quote}</p>
        </div>
      </div>
    </Card>
  )
}
