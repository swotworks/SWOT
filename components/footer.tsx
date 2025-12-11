import { MessageCircle, Mail, Linkedin, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/tools", label: "Free Tools" },
  { href: "/contact", label: "Contact" },
  { href: "/onboarding", label: "Get Started" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-16 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/icons8-swot-analysis-400.png"
                alt="SWOT Works Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-foreground">
                SWOT <span className="text-primary">Works</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pakistan&apos;s trusted small business bookkeeping — built one voice note at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://wa.me/923286110776"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@swot.email"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@swot.email
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/mshoib/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Ready to Start?</h4>
            <p className="text-sm text-muted-foreground mb-4">Get your free consultation today.</p>
            <a
              href="https://wa.me/923286110776"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat Now
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Swot.works. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Made with clarity for Pakistani small businesses</p>
        </div>
      </div>
    </footer>
  )
}
