"use client"

import type React from "react"

import { PageLayout } from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageCircle, Mail, Linkedin, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Fastest response — usually within minutes",
    action: "Chat Now",
    href: "https://wa.me/923286110776",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Email",
    description: "For detailed inquiries and attachments",
    action: "Send Email",
    href: "mailto:info@swot.email",
    highlight: false,
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect professionally",
    action: "View Profile",
    href: "https://linkedin.com/in/mshoib/",
    highlight: false,
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Redirect to WhatsApp with the message
    const whatsappMessage = `Hi, I'm ${formState.name}.\n\nEmail: ${formState.email}\nPhone: ${formState.phone || "Not provided"}\n\nMessage:\n${formState.message}`
    const whatsappUrl = `https://wa.me/923286110776?text=${encodeURIComponent(whatsappMessage)}`

    // Simulate brief loading then open WhatsApp
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      window.open(whatsappUrl, "_blank")

      // Reset form after a delay
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({ name: "", email: "", phone: "", message: "" })
      }, 3000)
    }, 500)
  }

  return (
    <PageLayout>
      <section className="py-10 sm:py-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-primary/10">
            <MessageCircle className="w-6 h-6 text-primary" />
          </div>
          <span className="text-sm font-medium text-primary">Get in Touch</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
          Let's Talk About Your Business
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Whether you have questions, want a demo, or are ready to start — I'm here to help.
        </p>
      </section>

      <div className="grid lg:grid-cols-5 gap-8 pb-12">
        {/* Contact Methods */}
        <div className="lg:col-span-2 space-y-4">
          {contactMethods.map((method) => (
            <Card
              key={method.title}
              className={`p-5 border-border/50 transition-all hover:border-primary/30 ${
                method.highlight ? "bg-gradient-to-br from-primary/10 to-transparent border-primary/20" : "bg-card"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-xl ${method.highlight ? "bg-primary/20" : "bg-secondary"}`}>
                  <method.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <Button
                    asChild
                    variant={method.highlight ? "default" : "outline"}
                    size="sm"
                    className={
                      method.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-transparent"
                    }
                  >
                    <Link href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined}>
                      {method.action}
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}

          {/* Info Cards */}
          <Card className="p-5 bg-card border-border/50">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-secondary">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Gujranwala, Pakistan
                  <br />
                  (Remote support available nationwide)
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-card border-border/50">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-secondary">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  WhatsApp: Within minutes
                  <br />
                  Email: Within 24 hours
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="lg:col-span-3 p-6 sm:p-8 bg-card border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-primary/10">
              <Send className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Send a Message</h2>
              <p className="text-sm text-muted-foreground">Fill out the form and I'll get back to you</p>
            </div>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">Redirecting you to WhatsApp for instant response...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm text-muted-foreground">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="e.g. Ahmed Khan"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="mt-1.5 bg-secondary/50 border-border/50 focus:border-primary/50"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm text-muted-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. ahmed@business.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="mt-1.5 bg-secondary/50 border-border/50 focus:border-primary/50"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm text-muted-foreground">
                  Phone Number (Optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="e.g. 0300-1234567"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="mt-1.5 bg-secondary/50 border-border/50 focus:border-primary/50"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm text-muted-foreground">
                  Your Message *
                </Label>
                <Textarea
                  id="message"
                  required
                  placeholder="Tell me about your business and how I can help..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="mt-1.5 bg-secondary/50 border-border/50 focus:border-primary/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Your message will be sent directly to WhatsApp for faster response
              </p>
            </form>
          )}
        </Card>
      </div>
    </PageLayout>
  )
}
