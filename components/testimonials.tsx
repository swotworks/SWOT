"use client"

import { Card } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Ahmad",
    business: "Grocery Store Owner",
    location: "Lahore",
    quote: "I just send voice notes — Shoib does the rest. My books are cleaner than ever!",
    rating: 5,
  },
  {
    name: "Fatima",
    business: "Boutique Tailor",
    location: "Karachi",
    quote: "Getting a loan was impossible before. Now I have reports to show the bank anytime.",
    rating: 5,
  },
  {
    name: "Usman",
    business: "Auto Mechanic",
    location: "Islamabad",
    quote: "No apps to learn, no stress. WhatsApp is all I need to keep track of my income.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((item) => (
        <Card
          key={item.name}
          className="p-6 bg-card border-border/50 hover:border-primary/30 transition-all relative overflow-hidden group"
        >
          <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
          <div className="flex gap-1 mb-4">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-foreground mb-6 leading-relaxed">"{item.quote}"</p>
          <div className="pt-4 border-t border-border/50">
            <p className="font-semibold text-foreground">{item.name}</p>
            <p className="text-sm text-muted-foreground">
              {item.business} • {item.location}
            </p>
          </div>
        </Card>
      ))}
    </div>
  )
}
