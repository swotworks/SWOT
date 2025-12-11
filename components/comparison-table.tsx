import { Check, X } from "lucide-react"
import { Card } from "@/components/ui/card"

const comparisons = [
  { feature: "Track daily sales & expenses", diy: true, swot: true },
  { feature: "Cloud backups & security", diy: false, swot: true },
  { feature: "Professional monthly reports", diy: false, swot: true },
  { feature: "Voice/WhatsApp input", diy: false, swot: true },
  { feature: "Personal support & visits", diy: false, swot: true },
  { feature: "No learning curve", diy: false, swot: true },
  { feature: "Time spent per week", diy: "5+ hrs", swot: "0 hrs" },
  { feature: "Stress level", diy: "High", swot: "None" },
]

export function ComparisonTable() {
  return (
    <Card className="overflow-hidden border-border/50">
      <div className="grid grid-cols-3 bg-secondary/50 p-4 border-b border-border/50">
        <div className="text-sm font-medium text-muted-foreground">Feature</div>
        <div className="text-sm font-medium text-center text-muted-foreground">DIY Bookkeeping</div>
        <div className="text-sm font-medium text-center text-primary">SWOT Works</div>
      </div>
      <div className="divide-y divide-border/50">
        {comparisons.map((row) => (
          <div key={row.feature} className="grid grid-cols-3 p-4 items-center hover:bg-secondary/30 transition-colors">
            <div className="text-sm text-foreground">{row.feature}</div>
            <div className="flex justify-center">
              {typeof row.diy === "boolean" ? (
                row.diy ? (
                  <Check className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <X className="w-5 h-5 text-destructive/60" />
                )
              ) : (
                <span className="text-sm text-destructive">{row.diy}</span>
              )}
            </div>
            <div className="flex justify-center">
              {typeof row.swot === "boolean" ? (
                row.swot ? (
                  <Check className="w-5 h-5 text-primary" />
                ) : (
                  <X className="w-5 h-5 text-destructive/60" />
                )
              ) : (
                <span className="text-sm text-primary font-medium">{row.swot}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
