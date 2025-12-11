import { PageLayout } from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    step: "1",
    title: "Discovery Chat",
    whatHappens: [
      "A 15-minute call on WhatsApp or Zoom",
      "You share your goals, pain points, or solutions you're curious about",
      "I'll recommend next steps—no pressure, no tech-speak",
    ],
    valueAdd:
      "Not only will we explore how I can help, but you'll also walk away with a personalized tip or resource you can use right away to kickstart improvements in your business. Even if we don't move forward, you've got something actionable in your pocket!",
  },
  {
    step: "2",
    title: "Onboarding & Setup",
    whatHappens: [
      "You send your data however it's easiest—voice notes, photos, messages, or files",
      "I build your custom solutions: bookkeeping systems, SWOT analyses, dashboards, templates, or AI support",
      "You review a preview before we finalize anything",
    ],
    valueAdd:
      "This isn't one-size-fits-all. I'll tailor everything to your unique needs and tech comfort level, ensuring the setup is seamless. Plus, you'll get a sneak peek to approve before we lock it in—peace of mind included!",
  },
  {
    step: "3",
    title: "Delivery & Updates",
    whatHappens: [
      "You receive polished summaries, visuals, or working solutions via WhatsApp or shared folders",
      "I'll walk you through how to use and maintain them",
      "Optional: weekly or monthly check-ins if you're on a service cycle",
    ],
    valueAdd:
      "Along with your deliverables, you'll get simple guides and tips to maximize their impact. Need help later? I'm just a message away with ongoing support to keep things running smoothly.",
  },
  {
    step: "4",
    title: "Feedback & Improvement",
    whatHappens: [
      "Share your thoughts anytime via a quick message",
      "We tweak solutions or schedules as needed",
      "Add-ons and upgrades available as your business grows",
    ],
    valueAdd:
      "This is a partnership! Your feedback shapes our work together, ensuring it evolves with your goals. As you scale, I'll suggest smart upgrades to keep you ahead—start small, grow big.",
  },
]

export default function ClientJourneyPage() {
  return (
    <PageLayout>
      <section className="py-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Client Journey</h1>
        <p className="text-xl text-muted-foreground mb-4">From Hello to Results: A Simple, Supportive Process</p>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Whether you&apos;re a shop owner, freelancer, or solo founder, working with me at Swot.works is all about
          making your life easier and your business stronger. From bookkeeping to digital solutions, my process is
          flexible, tailored, and designed to deliver real results. Here&apos;s how we&apos;ll get there together:
        </p>

        <div className="space-y-6">
          {steps.map((item) => (
            <Card key={item.step} className="p-6 bg-card border-border">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0 w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">What Happens:</h4>
                    <ul className="space-y-1">
                      {item.whatHappens.map((point, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-foreground mb-1">Value Add:</h4>
                    <p className="text-sm text-muted-foreground">{item.valueAdd}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="mt-12 p-8 bg-card border-border text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let&apos;s kick things off with a no-obligation discovery chat. I&apos;ll listen, offer insights, and share
            a valuable takeaway tailored to your business. Book your free call today and take the first step toward
            simpler operations and bigger results!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="https://wa.me/923286110776">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="mailto:info@swot.email">
                <Mail className="w-4 h-4 mr-2" />
                info@swot.email
              </Link>
            </Button>
          </div>
        </Card>
      </section>
    </PageLayout>
  )
}
