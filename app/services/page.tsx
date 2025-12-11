import { PageLayout } from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Calendar, Receipt, MessageCircle, Target, Bot, BarChart3, Check } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: FileText,
    title: "Daily Financial Entries",
    description: "Record sales, expenses, and cash/bank activity for real-time financial tracking.",
    delivery: "WhatsApp-based workflow",
    benefits: "Real-time financial visibility, informed decision-making",
  },
  {
    icon: Calendar,
    title: "Monthly Summary Reports",
    description: "Bilingual (Urdu + English) 1-page PDF reports sent via WhatsApp for easy review.",
    delivery: "WhatsApp-based workflow",
    benefits: "Clear financial overview, actionable insights",
  },
  {
    icon: Receipt,
    title: "Receipt Management",
    description: "Organize digital receipts in cloud folders for easy access and audit preparation.",
    delivery: "WhatsApp-based workflow",
    benefits: "Easy access to receipts, simplified audits",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp-Based Workflow",
    description: "Collect data via voice notes, photos, or typed messages—no new app needed.",
    delivery: "WhatsApp-based workflow",
    benefits: "Convenient communication, seamless collaboration",
  },
  {
    icon: Target,
    title: "SWOT for Small Businesses",
    description: "1-on-1 strategy sessions with Urdu coaching, PDF/Notion report, and action plan.",
    delivery: "WhatsApp-based workflow, optional Zoom coaching",
    benefits: "Strategic clarity, actionable growth plan",
  },
  {
    icon: Bot,
    title: "AI-Powered Business Tools",
    description: "Custom assistants: chatbots, prompt packs, content generators, templates.",
    delivery: "WhatsApp-based workflow",
    benefits: "Increased efficiency, automated tasks",
  },
  {
    icon: BarChart3,
    title: "Visual Strategy Kits",
    description: "Infographics, dashboards, and reports (SWOT, PESTLE, 5 Forces) in Urdu/English.",
    delivery: "WhatsApp-based workflow",
    benefits: "Visualized strategies, simplified decision-making",
  },
]

const whyChoose = [
  {
    title: "Accessibility",
    description: "Our WhatsApp-based workflow makes our services easy to use, no matter your tech expertise.",
  },
  {
    title: "Personalization",
    description: "Each service is tailored to your business's unique needs and goals.",
  },
  {
    title: "Value Addition",
    description: "Beyond bookkeeping, our add-on solutions provide strategic insights and digital tools for growth.",
  },
  {
    title: "Local Expertise",
    description:
      "We understand the challenges of small businesses in Pakistan and offer relevant, effective solutions.",
  },
]

export default function ServicesPage() {
  return (
    <PageLayout>
      <section className="py-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Services & Solutions</h1>
        <p className="text-xl text-muted-foreground mb-4">Your Partner in Bookkeeping and Business Growth</p>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          At Swot.works, we provide a unique blend of traditional bookkeeping and modern digital solutions to empower
          small businesses. Our services are designed to simplify financial management while offering strategic insights
          and growth opportunities. Whether you&apos;re a shopkeeper, coach, real estate agent, eCommerce seller, or
          local founder, our solutions are tailored to help you thrive.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.title} className="p-6 bg-card border-border">
              <service.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Delivery: </span>
                  {service.delivery}
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Benefits: </span>
                  {service.benefits}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* No Tax Filing Note */}
        <Card className="p-6 bg-card border-border mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-2">No Tax Filing</h3>
          <p className="text-muted-foreground">
            Internal records only—no FBR involvement, allowing you to focus on operations. This means reduced tax burden
            and more focus on your business operations.
          </p>
        </Card>

        {/* Why Choose Us */}
        <h2 className="text-2xl font-semibold text-foreground mb-6">Why Choose Swot.works?</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {whyChoose.map((item) => (
            <Card key={item.title} className="p-5 bg-card border-border">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-base font-medium text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Service Delivery Style */}
        <Card className="p-8 bg-card border-border mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Service Delivery Style</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-foreground mb-2">WhatsApp-Based Communication</h3>
              <p className="text-sm text-muted-foreground">
                Share updates via voice notes, photos, or typed messages—whatever works best for you.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">Flexible Report Delivery</h3>
              <p className="text-sm text-muted-foreground">Choose between PDF or digital formats for your reports.</p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">Optional Coaching</h3>
              <p className="text-sm text-muted-foreground">
                Add Zoom or WhatsApp strategy sessions for hands-on guidance.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <Card className="p-8 bg-card border-border text-center">
          <h2 className="text-xl font-semibold text-foreground mb-2">Get Started Today</h2>
          <p className="text-muted-foreground mb-4">
            Ready to transform your business? Contact us for a free consultation. Let&apos;s build your path to
            financial clarity and strategic success together!
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="https://wa.me/923286110776">
              <MessageCircle className="w-4 h-4 mr-2" />
              Free Consultation on WhatsApp
            </Link>
          </Button>
        </Card>
      </section>
    </PageLayout>
  )
}
