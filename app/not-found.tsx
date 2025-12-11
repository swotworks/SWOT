"use client"

import { useEffect, useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function NotFound() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push("/")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Image
          src="/images/icons8-swot-analysis-400.png"
          alt="SWOT Works"
          width={120}
          height={120}
          className="mb-6 animate-pulse"
        />
        <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-2 max-w-md">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <p className="text-primary font-medium mb-8">
          Redirecting to home in {countdown} second{countdown !== 1 ? "s" : ""}...
        </p>
        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-1000 ease-linear"
            style={{ width: `${((5 - countdown) / 5) * 100}%` }}
          />
        </div>
      </div>
    </PageLayout>
  )
}
