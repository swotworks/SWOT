import { PageLayout } from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { MessageCircle, Phone, Send, FileText, Heart, ClipboardList } from "lucide-react"

const onboardingSteps = [
  {
    icon: ClipboardList,
    title: "Fill the Onboarding Form",
    description: "Complete the simple form below with your business details. Takes just 5 minutes.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Setup",
    description: "Add me on WhatsApp. We create a simple group or chat just for your business updates.",
  },
  {
    icon: Phone,
    title: "Welcome Call",
    description: "A quick 15-minute call to understand your business, your needs, and how you like to communicate.",
  },
  {
    icon: Send,
    title: "First Updates",
    description: "Start sending your daily entries. Voice notes, messages, or photos – whatever is easiest for you.",
  },
  {
    icon: FileText,
    title: "First Report",
    description: "At the end of your first month, you get your first clear report. We review it together.",
  },
  {
    icon: Heart,
    title: "Ongoing Support",
    description: "From here, it's smooth sailing. I'm always available on WhatsApp when you need help.",
  },
]

export default function OnboardingPage() {
  return (
    <PageLayout>
      <section className="py-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">SWOT Onboarding</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Getting started is easy. Here&apos;s how new clients join SWOT Works – friendly and stress-free.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {onboardingSteps.map((step, index) => (
            <Card key={index} className="p-5 bg-card border-border">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-primary">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                    <step.icon className="w-4 h-4 text-primary" />
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 md:p-8 bg-card border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-2 text-center">Start Your Onboarding</h2>
          <p className="text-muted-foreground mb-6 text-center">
            Fill out the form below to get started. I&apos;ll reach out within 24 hours.
          </p>

          <div className="w-full flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd16zzCKsAfvpUhwyCE2tZGi_bbgL8PsGRFp_NwK1ZFMjvaGw/viewform?embedded=true"
              width="100%"
              height="1600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="max-w-2xl rounded-lg"
              title="SWOT Works Onboarding Form"
              loading="eager"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            >
              Loading form...
            </iframe>
          </div>
        </Card>

        <Card className="mt-8 p-6 bg-card border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">What You&apos;ll Need</h2>
          <ul className="grid gap-2 text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />A WhatsApp account
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              15 minutes for the welcome call
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Your business info (basic details)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              That&apos;s it! No complicated paperwork.
            </li>
          </ul>
        </Card>
      </section>
    </PageLayout>
  )
}
