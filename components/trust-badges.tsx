import { Shield, Lock, Clock, Award } from "lucide-react"

const badges = [
  { icon: Shield, label: "100% Secure", desc: "Your data stays private" },
  { icon: Lock, label: "No Third-Party", desc: "Internal use only" },
  { icon: Clock, label: "Quick Setup", desc: "Start in 24 hours" },
  { icon: Award, label: "Trusted", desc: "10+ happy clients" },
]

export function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
      {badges.map((badge) => (
        <div key={badge.label} className="flex items-center gap-2.5 text-muted-foreground">
          <div className="p-2 rounded-lg bg-primary/10">
            <badge.icon className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{badge.label}</p>
            <p className="text-xs text-muted-foreground">{badge.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
