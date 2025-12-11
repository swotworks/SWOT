import { PageLayout } from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, TrendingUp, Clock, DollarSign, FileText, Users, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const outcomes = [
  {
    client: "Retail Shop Owner",
    result: "Got a bank loan after 6 months of clean records",
    details: "Clear monthly reports helped prove income to the bank.",
    icon: DollarSign,
    metric: "PKR 500K+ Loan Approved",
  },
  {
    client: "Tailor Shop",
    result: "Saved 5 hours per week on bookkeeping",
    details: "Voice notes replaced manual register entries.",
    icon: Clock,
    metric: "20+ Hours Saved Monthly",
  },
  {
    client: "Pharmacy",
    result: "Finally understood monthly profit margins",
    details: "Simple reports showed where money was going.",
    icon: TrendingUp,
    metric: "15% Profit Increase",
  },
  {
    client: "Mechanic Workshop",
    result: "Organized receipts for the first time",
    details: "Digital receipt storage replaced paper chaos.",
    icon: FileText,
    metric: "1000+ Receipts Organized",
  },
  {
    client: "Home-Based Baker",
    result: "Scaled from hobby to real business",
    details: "Proper records helped plan growth and pricing.",
    icon: TrendingUp,
    metric: "3x Revenue Growth",
  },
  {
    client: "Mobile Phone Repair",
    result: "Tax filing became stress-free",
    details: "All records ready when tax season arrived.",
    icon: CheckCircle,
    metric: "100% Compliant",
  },
]

const industries = [
  { name: "Retail & Grocery", count: "4+" },
  { name: "Tailoring & Fashion", count: "2+" },
  { name: "Healthcare & Pharmacy", count: "2+" },
  { name: "Auto & Repair Services", count: "1+" },
  { name: "Food & Bakery", count: "1+" },
  { name: "Electronics & Tech", count: "1+" },
]

export default function PortfolioPage() {
  return (
    <PageLayout>
      <section className="py-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Portfolio</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          Real results from real businesses. Here&apos;s what clients have gained from working with SWOT Works.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <Card className="p-4 bg-primary/5 border-primary/20 text-center">
            <p className="text-3xl font-bold text-primary">10+</p>
            <p className="text-sm text-muted-foreground">Clients Served</p>
          </Card>
          <Card className="p-4 bg-card border-border/50 text-center">
            <p className="text-3xl font-bold text-foreground">100%</p>
            <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
          </Card>
          <Card className="p-4 bg-card border-border/50 text-center">
            <p className="text-3xl font-bold text-foreground">500+</p>
            <p className="text-sm text-muted-foreground">Reports Delivered</p>
          </Card>
          <Card className="p-4 bg-card border-border/50 text-center">
            <p className="text-3xl font-bold text-foreground">5+</p>
            <p className="text-sm text-muted-foreground">Industries</p>
          </Card>
        </div>

        <h2 className="text-xl font-semibold text-foreground mb-6">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {outcomes.map((item, index) => (
            <Card key={index} className="p-6 bg-card border-border/50 hover:border-primary/30 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-primary font-medium">{item.client}</p>
                    <span className="text-xs font-semibold text-foreground bg-secondary px-2 py-1 rounded-full">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.result}</h3>
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-foreground mb-6">Industries We Serve</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {industries.map((industry) => (
            <Card
              key={industry.name}
              className="p-4 bg-card border-border/50 text-center hover:border-primary/30 transition-all"
            >
              <p className="text-2xl font-bold text-primary mb-1">{industry.count}</p>
              <p className="text-xs text-muted-foreground">{industry.name}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6 sm:p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 text-center">
          <Users className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">Ready to Be Our Next Success Story?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Join 10+ businesses already experiencing financial clarity with SWOT Works.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="https://wa.me/923286110776">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Free Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/pricing">
                View Pricing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </Card>
      </section>
    </PageLayout>
  )
}
