import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  MessageCircle,
  Cloud,
  Users,
  Shield,
  Target,
  Wrench,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Calculator,
  TrendingUp,
  Clock,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedStats } from "@/components/animated-stats"
import { Testimonials } from "@/components/testimonials"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ComparisonTable } from "@/components/comparison-table"
import { TrustBadges } from "@/components/trust-badges"

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp-Driven",
    description: "Easy updates via text, photo, or voice — no new app or platform needed.",
  },
  {
    icon: Cloud,
    title: "Cloud-Powered",
    description: "Clean records, mobile-friendly reports, and secure cloud backups.",
  },
  {
    icon: Users,
    title: "In-Person Support",
    description: "Personal visits build trust and ensure smooth onboarding.",
  },
  {
    icon: Shield,
    title: "Internal-Only Focus",
    description: "No tax stress — we focus purely on your day-to-day clarity.",
  },
]

const aboutMe = [
  {
    icon: Target,
    title: "Strategic Thinking",
    description: "I simplify your challenges using structured tools like SWOT & action plans.",
  },
  {
    icon: Wrench,
    title: "Micro-Business Advocacy",
    description: "I work for — and with — real entrepreneurs who run shops, not spreadsheets.",
  },
  {
    icon: MessageCircle,
    title: "Accessible Technology",
    description: "Voice notes + WhatsApp = no learning curve.",
  },
  {
    icon: BookOpen,
    title: "Applied Learning",
    description: "I test every strategy in my own startup journey before recommending it.",
  },
]

const whoWeHelp = [
  { type: "Retailers", examples: "Grocery shops, general stores" },
  { type: "Tailors", examples: "Boutique and local stitching businesses" },
  { type: "Pharmacies", examples: "Medical stores and home clinics" },
  { type: "Mechanics", examples: "Auto workshops and repair centers" },
  { type: "Service Pros", examples: "Freelancers, consultants, and tradespeople" },
]

const coreServices = [
  { title: "Daily Entries", description: "Record sales, expenses, and payments — managed for you" },
  { title: "Monthly Reports", description: "Simple bilingual PDFs via WhatsApp — ready to review or share" },
  { title: "Receipt Management", description: "Photos turned into organized cloud folders — no papers lost" },
  { title: "Voice-Based Input", description: "Just talk — I'll handle formatting, summaries, and updates" },
  { title: "Privacy Guaranteed", description: "Your data stays yours — 100% private, no third-party use" },
]

const impact = [
  "Secured loans with clear, shareable income reports",
  "Onboarded seamlessly through WhatsApp-based trials",
  "Got control over income and expenses in under a week",
  "Saved hours each week using voice-based bookkeeping",
  "Used AI tools to create content and generate leads",
]

const processSteps = [
  { step: "01", title: "Quick Chat", description: "Tell us about your business on WhatsApp", icon: MessageCircle },
  { step: "02", title: "Setup", description: "We create your personalized bookkeeping system", icon: Zap },
  { step: "03", title: "Send Updates", description: "Share receipts & sales via voice or photo", icon: Cloud },
  { step: "04", title: "Get Reports", description: "Receive clear monthly reports on WhatsApp", icon: TrendingUp },
]

const valueProps = [
  { icon: Clock, title: "Save 5+ Hours/Week", description: "No more manual entries" },
  { icon: TrendingUp, title: "Grow Revenue", description: "Clear financial insights" },
  { icon: Shield, title: "100% Private", description: "Your data stays yours" },
]

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section - Enhanced */}
      <section className="py-10 sm:py-16">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Image
            src="/images/icons8-swot-analysis-400.png"
            alt="SWOT Works"
            width={56}
            height={56}
            className="rounded-xl"
          />
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Trusted by 10+ Pakistani Businesses
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
          Simple Bookkeeping for <span className="text-primary">Small Businesses</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          Hi, I&apos;m Shoib. I help shopkeepers and small business owners achieve financial clarity with modern tools
          and personal support — all through WhatsApp.
        </p>

        <div className="flex flex-wrap gap-6 mb-8">
          {valueProps.map((prop) => (
            <div key={prop.title} className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-primary/10">
                <prop.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{prop.title}</p>
                <p className="text-xs text-muted-foreground">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6">
            <Link href="https://wa.me/923286110776">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start on WhatsApp
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-6 bg-transparent">
            <Link href="/services">
              View Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
        <TrustBadges />
      </section>

      <section className="py-12">
        <AnimatedStats />
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold text-foreground mb-2">How It Works</h2>
        <p className="text-muted-foreground mb-8">Start in minutes, not days</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((item, index) => (
            <Card
              key={item.step}
              className="p-5 bg-card border-border/50 relative overflow-hidden group hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-2xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                  {item.step}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-semibold text-foreground">Your Financial Clarity Partner</h2>
        </div>
        <p className="text-muted-foreground mb-8">Not Complication — Just Clarity</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-5 bg-card border-border/50 hover:border-primary/30 transition-all group"
            >
              <div className="p-2.5 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Why Choose SWOT Works?</h2>
        <p className="text-muted-foreground mb-8">See how we compare to doing it yourself</p>
        <ComparisonTable />
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold text-foreground mb-2">What Clients Say</h2>
        <p className="text-muted-foreground mb-8">Real feedback from real business owners</p>
        <Testimonials />
      </section>

      {/* About Me */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold text-foreground mb-2">About Me</h2>
        <p className="text-muted-foreground mb-8">Clarity Over Complexity. Community Over Hype.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {aboutMe.map((item) => (
            <Card key={item.title} className="p-5 bg-card border-border/50 hover:border-primary/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-secondary">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Core Services</h2>
            <p className="text-muted-foreground">Everything you need to stay organized</p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex">
            <Link href="/services">
              See All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {coreServices.map((service) => (
            <Card key={service.title} className="p-5 bg-card border-border/50 hover:border-primary/30 transition-all">
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2 text-sm text-primary">
          <Sparkles className="w-4 h-4" />
          <span>Coming Soon: Inventory, payroll, and AI-integrated costing tools</span>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Who I Serve</h2>
        <p className="text-muted-foreground mb-8">Real people. Real businesses. Real challenges — solved.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {whoWeHelp.map((item) => (
            <Card
              key={item.type}
              className="p-4 bg-card border-border/50 hover:border-primary/30 transition-all text-center"
            >
              <h3 className="font-semibold text-foreground mb-1">{item.type}</h3>
              <p className="text-xs text-muted-foreground">{item.examples}</p>
            </Card>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-6 italic">
          If you run your business with hustle and heart — I&apos;m here to support it with structure.
        </p>
      </section>

      {/* Real-World Impact */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Real-World Impact</h2>
        <Card className="p-6 sm:p-8 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
          <p className="text-muted-foreground mb-6 font-medium">What My Clients Have Achieved:</p>
          <ul className="space-y-3">
            {impact.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="py-12">
        <Card className="p-6 sm:p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/20">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Free Business Tools</h3>
                <p className="text-muted-foreground">
                  12+ calculators for profit, GST, EMI, break-even, and more — no signup needed.
                </p>
              </div>
            </div>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/tools">
                Open Tools
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </Card>
      </section>

      {/* Vision */}
      <section className="py-12">
        <Card className="p-6 sm:p-8 bg-card border-border/50">
          <h2 className="text-2xl font-semibold text-foreground mb-4">My Vision</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            To build Pakistan&apos;s most trusted small business bookkeeping brand — one voice note at a time.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-secondary/50">
              <h4 className="font-medium text-foreground mb-1">Mobile App</h4>
              <p className="text-sm text-muted-foreground">Bookkeeping on-the-go, without needing to type or code</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50">
              <h4 className="font-medium text-foreground mb-1">Expanded Services</h4>
              <p className="text-sm text-muted-foreground">Costing, inventory, payroll, and staff training</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50">
              <h4 className="font-medium text-foreground mb-1">Trusted Network</h4>
              <p className="text-sm text-muted-foreground">Trained bookkeepers scaling services across cities</p>
            </div>
          </div>
          <p className="mt-6 text-primary text-sm font-medium">
            From Swot.works the bookkeeper to Swot.works the digital CFO.
          </p>
        </Card>
      </section>

      <section className="py-12">
        <NewsletterSignup />
      </section>

      {/* CTA */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Let&apos;s Connect</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Start your journey to clarity — and let me do the heavy lifting.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6">
            <Link href="https://wa.me/923286110776">
              <MessageCircle className="w-5 h-5 mr-2" />
              Message on WhatsApp
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-6 bg-transparent">
            <Link href="/pricing">See Pricing</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  )
}
