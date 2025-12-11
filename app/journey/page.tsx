import { PageLayout } from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail } from "lucide-react"
import Link from "next/link"

const phases = [
  {
    phase: "Phase 1",
    title: "Learning the Foundations",
    description:
      "While studying Business Administration at Virtual University, I explored concepts like SWOT analysis and modern financial management systems. I noticed local shopkeepers struggling with basic record-keeping and realized there was a gap between business education and real-world small business needs.",
    value:
      "This phase gave me a deep understanding of the unique challenges you face as a small business owner. Now, I use that insight to create practical, tailored solutions—helping you overcome hurdles with systems that actually work.",
  },
  {
    phase: "Phase 2",
    title: "Testing the Idea",
    description:
      "I helped my first local client (a grocery store) track daily sales using custom sheets and WhatsApp for updates. I tested a 7-day free trial model to build trust.",
    value:
      "This hands-on approach proved that simple processes and personal attention deliver real results. For you, it means I've already refined a method that saves time and stress—giving you clear, actionable insights from the start.",
  },
  {
    phase: "Phase 3",
    title: "Launching the Service",
    description:
      "I officially launched my record-keeping and strategy service, using flyers, a WhatsApp Business profile, and pre-built templates. I managed 5 trial clients with voice notes, photos, and reports.",
    value:
      "This phase was about clarity, simplicity, and support—values I still bring to every client. You'll get a service that's been tested and trusted, designed to make your life easier from day one.",
  },
  {
    phase: "Phase 4",
    title: "Expanding Offerings",
    description:
      "I added SWOT coaching, visual strategy kits, and AI-based tools, and trained a helper to assist with data collection and client visits.",
    value:
      "As your business grows, so can my support. Whether you need basic bookkeeping or advanced solutions like AI assistants, I've got the flexibility to scale with you—keeping things simple, no matter how big you get.",
  },
  {
    phase: "Phase 5",
    title: "Scaling Smart",
    description:
      "I standardized client onboarding and reporting, segmented clients by type (retail, service, eCommerce), added testimonials, and introduced add-ons like inventory, costing, and digital toolkits.",
    value:
      "You'll get an organized, efficient service tailored to your industry. With proven systems and happy clients backing it up, you can trust me to handle the details—so you can focus on growth.",
  },
  {
    phase: "Today",
    title: "Serving & Improving",
    description:
      "I'm serving small businesses with affordable, custom support—mixing bookkeeping, AI solutions, and strategic thinking. I'm still learning, growing, and building, one client at a time.",
    value:
      "When you work with me, you're joining a journey of continuous improvement. I'm always adding new solutions and insights to help your business stay ahead.",
  },
]

export default function JourneyPage() {
  return (
    <PageLayout>
      <section className="py-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">My Startup Journey</h1>
        <p className="text-xl text-muted-foreground mb-4">From Business Student to Service Founder</p>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          This is the story of how I turned a university idea into a growing, client-ready service—balancing practical
          experience, digital solutions, and a clear mission to help small businesses like yours grow. Each step of this
          journey has shaped the way I support entrepreneurs today, and I&apos;m excited to share it with you.
        </p>

        <div className="space-y-6">
          {phases.map((item, index) => (
            <Card key={index} className="p-6 bg-card border-border">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="shrink-0 w-24">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{item.phase}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Why It Matters: </strong>
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="mt-12 p-8 bg-card border-border text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            This Journey Is Just Getting Started—And You Can Be Part of It!
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            My story is about turning challenges into opportunities, and I&apos;d love to help you do the same. Whether
            you&apos;re just starting out or ready to scale, let&apos;s connect and explore how I can support your
            business.
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
