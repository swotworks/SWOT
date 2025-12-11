import { PageLayout } from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, MessageCircle, Zap, TrendingUp, Crown, ArrowRight, Shield } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Foundation",
    price: "5,000",
    period: "PKR/month",
    idealFor: "New ventures and solopreneurs",
    icon: Zap,
    features: [
      "1 User included",
      "Daily record-keeping",
      "Monthly summaries",
      "WhatsApp support",
      "Cloud backup",
      "Auto-upgrade when you grow",
    ],
  },
  {
    name: "Growth",
    price: "7,500",
    period: "PKR/month",
    idealFor: "Growing businesses with teams",
    icon: TrendingUp,
    features: [
      "Everything in Foundation",
      "Team collaboration",
      "Custom dashboards",
      "Priority support",
      "Automated invoicing",
      "Unlimited transactions",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "10,000",
    period: "PKR/month",
    idealFor: "Established businesses scaling up",
    icon: Crown,
    features: [
      "Everything in Growth",
      "Advanced analytics",
      "Weekly strategic reports",
      "Dedicated account manager",
      "24/7 direct support",
      "Real-time insights",
    ],
  },
]

const guarantees = [
  { title: "7-Day Free Trial", description: "Try before you commit" },
  { title: "No Long Contracts", description: "Cancel anytime" },
  { title: "100% Data Privacy", description: "Your data stays yours" },
  { title: "Money-Back Guarantee", description: "Not satisfied? Full refund" },
]

export default function PricingPage() {
  return (
    <PageLayout>
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business. Start with a free consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-6 bg-card border-border/50 relative flex flex-col ${plan.popular ? "ring-2 ring-primary border-primary/50" : ""}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${plan.popular ? "bg-primary/20" : "bg-secondary"}`}>
                  <plan.icon className={`w-5 h-5 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground">{plan.idealFor}</p>
                </div>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <Link href="https://wa.me/923286110776">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {guarantees.map((item) => (
            <Card key={item.title} className="p-4 bg-card border-border/50 text-center">
              <Shield className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 text-center">
          <h2 className="text-xl font-semibold text-foreground mb-2">Not Sure Which Plan?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Book a free 15-minute consultation. We&apos;ll understand your needs and recommend the perfect plan.
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
