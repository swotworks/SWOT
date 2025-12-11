"use client"

import type React from "react"

import { PageLayout } from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calculator,
  Percent,
  TrendingUp,
  PiggyBank,
  Receipt,
  BarChart3,
  Clock,
  ArrowRight,
  Sparkles,
  Wallet,
  Target,
  Users,
  FileText,
  Banknote,
  Scale,
  Calendar,
  Zap,
} from "lucide-react"
import { useState, useMemo } from "react"

function InputBox({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="p-4 rounded-xl bg-secondary/30 border border-border/30 space-y-4">
      {title && <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{title}</p>}
      {children}
    </div>
  )
}

function OutputBox({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 space-y-3">
      {title && <p className="text-xs font-medium text-primary uppercase tracking-wide">{title}</p>}
      {children}
    </div>
  )
}

function ProfitMarginCalculator() {
  const [cost, setCost] = useState("")
  const [selling, setSelling] = useState("")
  const profit = selling && cost ? Number(selling) - Number(cost) : 0
  const margin = selling && cost && Number(selling) > 0 ? (profit / Number(selling)) * 100 : 0
  const markup = cost && Number(cost) > 0 ? (profit / Number(cost)) * 100 : 0
  const marginColor = margin >= 30 ? "text-green-400" : margin >= 15 ? "text-yellow-400" : "text-red-400"

  return (
    <Card className="p-6 bg-card/80 backdrop-blur border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20">
          <Percent className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Profit Margin</h3>
          <p className="text-xs text-muted-foreground">Calculate your margins instantly</p>
        </div>
      </div>
      <div className="space-y-4">
        <InputBox title="Enter Values">
          <div>
            <Label className="text-xs text-muted-foreground">Cost Price (PKR)</Label>
            <Input
              type="number"
              placeholder="e.g. 1000"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
            />
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">Selling Price (PKR)</Label>
            <Input
              type="number"
              placeholder="e.g. 1500"
              value={selling}
              onChange={(e) => setSelling(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
            />
          </div>
        </InputBox>
        <OutputBox title="Results">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Profit:</span>
            <span className={`font-bold text-lg ${profit >= 0 ? "text-primary" : "text-red-400"}`}>
              PKR {profit.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Margin:</span>
            <span className={`font-semibold ${marginColor}`}>{margin.toFixed(1)}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Markup:</span>
            <span className="font-medium text-foreground">{markup.toFixed(1)}%</span>
          </div>
          {margin > 0 && (
            <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500"
                style={{ width: `${Math.min(margin, 100)}%` }}
              />
            </div>
          )}
        </OutputBox>
      </div>
    </Card>
  )
}

function GSTCalculator() {
  const [amount, setAmount] = useState("")
  const [rate, setRate] = useState("18")
  const [isInclusive, setIsInclusive] = useState(false)

  const calculations = useMemo(() => {
    const amt = Number(amount) || 0
    const r = Number(rate) || 0
    if (isInclusive) {
      const exclusive = amt / (1 + r / 100)
      const gst = amt - exclusive
      return { base: exclusive, gst, total: amt }
    } else {
      const gst = (amt * r) / 100
      return { base: amt, gst, total: amt + gst }
    }
  }, [amount, rate, isInclusive])

  return (
    <Card className="p-6 bg-card/80 backdrop-blur border-border/50 hover:border-chart-2/40 hover:shadow-lg hover:shadow-chart-2/5 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-chart-2/20 to-chart-2/5 ring-1 ring-chart-2/20">
          <Receipt className="w-5 h-5 text-chart-2" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">GST Calculator</h3>
          <p className="text-xs text-muted-foreground">Pakistan Sales Tax (17-18%)</p>
        </div>
      </div>
      <div className="space-y-4">
        <InputBox title="Enter Values">
          <div className="flex gap-2">
            <Button
              variant={!isInclusive ? "default" : "outline"}
              size="sm"
              onClick={() => setIsInclusive(false)}
              className="flex-1 text-xs"
            >
              Add GST
            </Button>
            <Button
              variant={isInclusive ? "default" : "outline"}
              size="sm"
              onClick={() => setIsInclusive(true)}
              className="flex-1 text-xs"
            >
              Extract GST
            </Button>
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">
              {isInclusive ? "Amount (Incl. GST)" : "Amount (Excl. GST)"} (PKR)
            </Label>
            <Input
              type="number"
              placeholder="e.g. 10000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50"
            />
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">GST Rate (%)</Label>
            <Input
              type="number"
              placeholder="18"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50"
            />
          </div>
        </InputBox>
        <OutputBox title="Results">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Base Amount:</span>
            <span className="font-medium text-foreground">
              PKR {calculations.base.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">GST ({rate}%):</span>
            <span className="font-bold text-lg text-chart-2">
              PKR {calculations.gst.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg bg-chart-2/10">
            <span className="text-sm font-medium text-foreground">Total:</span>
            <span className="font-bold text-foreground">
              PKR {calculations.total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
        </OutputBox>
      </div>
    </Card>
  )
}

function BreakEvenCalculator() {
  const [fixedCost, setFixedCost] = useState("")
  const [variableCost, setVariableCost] = useState("")
  const [sellingPrice, setSellingPrice] = useState("")

  const calculations = useMemo(() => {
    const fixed = Number(fixedCost) || 0
    const variable = Number(variableCost) || 0
    const selling = Number(sellingPrice) || 0
    const contribution = selling - variable
    const units = contribution > 0 ? Math.ceil(fixed / contribution) : 0
    const revenue = units * selling
    return { units, revenue, contribution }
  }, [fixedCost, variableCost, sellingPrice])

  return (
    <Card className="p-6 bg-card/80 backdrop-blur border-border/50 hover:border-chart-3/40 hover:shadow-lg hover:shadow-chart-3/5 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-chart-3/20 to-chart-3/5 ring-1 ring-chart-3/20">
          <Target className="w-5 h-5 text-chart-3" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Break-Even Point</h3>
          <p className="text-xs text-muted-foreground">Find when you start profiting</p>
        </div>
      </div>
      <div className="space-y-4">
        <InputBox title="Enter Values">
          <div>
            <Label className="text-xs text-muted-foreground">Monthly Fixed Costs (PKR)</Label>
            <Input
              type="number"
              placeholder="Rent, salaries, bills..."
              value={fixedCost}
              onChange={(e) => setFixedCost(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50"
            />
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">Variable Cost per Unit (PKR)</Label>
            <Input
              type="number"
              placeholder="Material, packaging..."
              value={variableCost}
              onChange={(e) => setVariableCost(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50"
            />
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">Selling Price per Unit (PKR)</Label>
            <Input
              type="number"
              placeholder="Your selling price"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50"
            />
          </div>
        </InputBox>
        <OutputBox title="Results">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Contribution/Unit:</span>
            <span className="font-medium text-foreground">PKR {calculations.contribution.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg bg-chart-3/10">
            <span className="text-sm font-medium text-foreground">Break-Even Units:</span>
            <span className="font-bold text-lg text-chart-3">{calculations.units.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Break-Even Revenue:</span>
            <span className="font-semibold text-foreground">PKR {calculations.revenue.toLocaleString()}</span>
          </div>
        </OutputBox>
      </div>
    </Card>
  )
}

function EMICalculator() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("20")
  const [months, setMonths] = useState("12")

  const calculations = useMemo(() => {
    const p = Number(principal) || 0
    const r = (Number(rate) || 0) / 100 / 12
    const n = Number(months) || 0
    if (p === 0 || r === 0 || n === 0) return { emi: 0, totalPayment: 0, totalInterest: 0 }
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    const totalPayment = emi * n
    const totalInterest = totalPayment - p
    return { emi, totalPayment, totalInterest }
  }, [principal, rate, months])

  return (
    <Card className="p-6 bg-card/80 backdrop-blur border-border/50 hover:border-chart-4/40 hover:shadow-lg hover:shadow-chart-4/5 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-chart-4/20 to-chart-4/5 ring-1 ring-chart-4/20">
          <PiggyBank className="w-5 h-5 text-chart-4" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Loan EMI</h3>
          <p className="text-xs text-muted-foreground">Calculate monthly payments</p>
        </div>
      </div>
      <div className="space-y-4">
        <InputBox title="Enter Values">
          <div>
            <Label className="text-xs text-muted-foreground">Loan Amount (PKR)</Label>
            <Input
              type="number"
              placeholder="e.g. 500000"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs text-muted-foreground">Interest Rate (%/year)</Label>
              <Input
                type="number"
                placeholder="20"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="mt-1.5 bg-background/50 border-border/50"
              />
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Tenure (months)</Label>
              <Input
                type="number"
                placeholder="12"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                className="mt-1.5 bg-background/50 border-border/50"
              />
            </div>
          </div>
        </InputBox>
        <OutputBox title="Results">
          <div className="flex justify-between items-center p-2 rounded-lg bg-chart-4/10">
            <span className="text-sm font-medium text-foreground">Monthly EMI:</span>
            <span className="font-bold text-lg text-chart-4">
              PKR {calculations.emi.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Total Interest:</span>
            <span className="font-medium text-red-400">
              PKR {calculations.totalInterest.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Total Payment:</span>
            <span className="font-medium text-foreground">
              PKR {calculations.totalPayment.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
        </OutputBox>
      </div>
    </Card>
  )
}

function DailySalesTracker() {
  const [sales, setSales] = useState<{ amount: number; time: string }[]>([])
  const [newSale, setNewSale] = useState("")

  const stats = useMemo(() => {
    const amounts = sales.map((s) => s.amount)
    const total = amounts.reduce((a, b) => a + b, 0)
    const average = amounts.length > 0 ? total / amounts.length : 0
    const max = amounts.length > 0 ? Math.max(...amounts) : 0
    return { total, average, max, count: amounts.length }
  }, [sales])

  const addSale = () => {
    if (newSale && Number(newSale) > 0) {
      setSales([
        ...sales,
        {
          amount: Number(newSale),
          time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
        },
      ])
      setNewSale("")
    }
  }

  return (
    <Card className="p-6 bg-card/80 backdrop-blur border-border/50 hover:border-chart-5/40 hover:shadow-lg hover:shadow-chart-5/5 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-chart-5/20 to-chart-5/5 ring-1 ring-chart-5/20">
          <BarChart3 className="w-5 h-5 text-chart-5" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Daily Sales Tracker</h3>
          <p className="text-xs text-muted-foreground">Track your sales in real-time</p>
        </div>
      </div>
      <div className="space-y-4">
        <InputBox title="Add Sale">
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Enter sale amount"
              value={newSale}
              onChange={(e) => setNewSale(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addSale()}
              className="bg-background/50 border-border/50"
            />
            <Button onClick={addSale} size="sm" className="px-4 shrink-0">
              <Zap className="w-4 h-4" />
            </Button>
          </div>
          {sales.length > 0 && (
            <div className="max-h-20 overflow-y-auto space-y-1">
              {sales.map((sale, i) => (
                <div key={i} className="flex justify-between text-xs p-1.5 rounded bg-background/50">
                  <span className="text-muted-foreground">{sale.time}</span>
                  <span className="text-foreground">PKR {sale.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
          )}
        </InputBox>
        <OutputBox title="Summary">
          <div className="flex justify-between items-center p-2 rounded-lg bg-chart-5/10">
            <span className="text-sm font-medium text-foreground">Total Sales:</span>
            <span className="font-bold text-lg text-chart-5">PKR {stats.total.toLocaleString()}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 rounded-lg bg-background/50">
              <p className="text-xs text-muted-foreground">Count</p>
              <p className="font-semibold text-foreground">{stats.count}</p>
            </div>
            <div className="p-2 rounded-lg bg-background/50">
              <p className="text-xs text-muted-foreground">Average</p>
              <p className="font-semibold text-foreground">{stats.average.toFixed(0)}</p>
            </div>
            <div className="p-2 rounded-lg bg-background/50">
              <p className="text-xs text-muted-foreground">Highest</p>
              <p className="font-semibold text-foreground">{stats.max.toLocaleString()}</p>
            </div>
          </div>
        </OutputBox>
        {sales.length > 0 && (
          <Button variant="ghost" size="sm" className="w-full text-xs" onClick={() => setSales([])}>
            Clear All
          </Button>
        )}
      </div>
    </Card>
  )
}

function TimeValueCalculator() {
  const [hours, setHours] = useState("8")
  const [rate, setRate] = useState("")

  const calculations = useMemo(() => {
    const h = Number(hours) || 0
    const r = Number(rate) || 0
    const daily = h * r
    const weekly = daily * 6
    const monthly = daily * 26
    const yearly = monthly * 12
    return { daily, weekly, monthly, yearly }
  }, [hours, rate])

  return (
    <Card className="p-6 bg-card/80 backdrop-blur border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20">
          <Clock className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Time Value</h3>
          <p className="text-xs text-muted-foreground">Know your time's worth</p>
        </div>
      </div>
      <div className="space-y-4">
        <InputBox title="Enter Values">
          <div>
            <Label className="text-xs text-muted-foreground">Hours Worked per Day</Label>
            <Input
              type="number"
              placeholder="8"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50"
            />
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">Your Hourly Rate (PKR)</Label>
            <Input
              type="number"
              placeholder="e.g. 500"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50"
            />
          </div>
        </InputBox>
        <OutputBox title="Your Earnings">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-background/50 text-center">
              <p className="text-xs text-muted-foreground">Daily</p>
              <p className="font-semibold text-foreground">PKR {calculations.daily.toLocaleString()}</p>
            </div>
            <div className="p-3 rounded-lg bg-background/50 text-center">
              <p className="text-xs text-muted-foreground">Weekly</p>
              <p className="font-semibold text-foreground">PKR {calculations.weekly.toLocaleString()}</p>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-primary/10 text-center">
            <p className="text-xs text-muted-foreground">Monthly (26 days)</p>
            <p className="font-bold text-lg text-primary">PKR {calculations.monthly.toLocaleString()}</p>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            Yearly: <span className="font-semibold text-foreground">PKR {calculations.yearly.toLocaleString()}</span>
          </div>
        </OutputBox>
      </div>
    </Card>
  )
}

function SalaryCalculator() {
  const [gross, setGross] = useState("")
  const [providentFund, setProvidentFund] = useState("8.33")
  const [eobi, setEobi] = useState("1")

  const calculations = useMemo(() => {
    const g = Number(gross) || 0
    const pf = (g * Number(providentFund)) / 100
    const eo = (g * Number(eobi)) / 100
    const tax = g > 100000 ? (g - 100000) * 0.05 : 0
    const net = g - pf - eo - tax
    return { gross: g, pf, eobi: eo, tax, net }
  }, [gross, providentFund, eobi])

  return (
    <Card className="p-6 bg-card/80 backdrop-blur border-border/50 hover:border-chart-2/40 hover:shadow-lg hover:shadow-chart-2/5 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-chart-2/20 to-chart-2/5 ring-1 ring-chart-2/20">
          <Wallet className="w-5 h-5 text-chart-2" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Salary Calculator</h3>
          <p className="text-xs text-muted-foreground">Calculate take-home pay</p>
        </div>
      </div>
      <div className="space-y-4">
        <InputBox title="Enter Values">
          <div>
            <Label className="text-xs text-muted-foreground">Gross Salary (PKR)</Label>
            <Input
              type="number"
              placeholder="e.g. 80000"
              value={gross}
              onChange={(e) => setGross(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs text-muted-foreground">Provident Fund (%)</Label>
              <Input
                type="number"
                placeholder="8.33"
                value={providentFund}
                onChange={(e) => setProvidentFund(e.target.value)}
                className="mt-1.5 bg-background/50 border-border/50"
              />
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">EOBI (%)</Label>
              <Input
                type="number"
                placeholder="1"
                value={eobi}
                onChange={(e) => setEobi(e.target.value)}
                className="mt-1.5 bg-background/50 border-border/50"
              />
            </div>
          </div>
        </InputBox>
        <OutputBox title="Deductions & Net">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Provident Fund:</span>
            <span className="text-red-400">
              - PKR {calculations.pf.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">EOBI:</span>
            <span className="text-red-400">
              - PKR {calculations.eobi.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Tax (if applicable):</span>
            <span className="text-red-400">
              - PKR {calculations.tax.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg bg-chart-2/10">
            <span className="font-medium text-foreground">Net Salary:</span>
            <span className="font-bold text-lg text-chart-2">
              PKR {calculations.net.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
        </OutputBox>
      </div>
    </Card>
  )
}

function InvoiceCalculator() {
  const [items, setItems] = useState<{ desc: string; qty: number; rate: number }[]>([])
  const [desc, setDesc] = useState("")
  const [qty, setQty] = useState("")
  const [rate, setRate] = useState("")
  const [discount, setDiscount] = useState("0")

  const calculations = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.qty * item.rate, 0)
    const discountAmt = (subtotal * Number(discount)) / 100
    const afterDiscount = subtotal - discountAmt
    const gst = afterDiscount * 0.18
    const total = afterDiscount + gst
    return { subtotal, discountAmt, afterDiscount, gst, total }
  }, [items, discount])

  const addItem = () => {
    if (desc && qty && rate) {
      setItems([...items, { desc, qty: Number(qty), rate: Number(rate) }])
      setDesc("")
      setQty("")
      setRate("")
    }
  }

  return (
    <Card className="p-6 bg-card/80 backdrop-blur border-border/50 hover:border-chart-3/40 hover:shadow-lg hover:shadow-chart-3/5 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-chart-3/20 to-chart-3/5 ring-1 ring-chart-3/20">
          <FileText className="w-5 h-5 text-chart-3" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Invoice Calculator</h3>
          <p className="text-xs text-muted-foreground">Quick invoice totals</p>
        </div>
      </div>
      <div className="space-y-4">
        <InputBox title="Add Items">
          <div className="grid grid-cols-3 gap-2">
            <Input
              placeholder="Item"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="bg-background/50 border-border/50 text-sm"
            />
            <Input
              type="number"
              placeholder="Qty"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="bg-background/50 border-border/50 text-sm"
            />
            <Input
              type="number"
              placeholder="Rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addItem()}
              className="bg-background/50 border-border/50 text-sm"
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={addItem} size="sm" className="flex-1">
              Add Item
            </Button>
            <div className="flex items-center gap-1">
              <Input
                type="number"
                placeholder="0"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                className="w-16 bg-background/50 border-border/50 text-sm text-center"
              />
              <span className="text-xs text-muted-foreground">% off</span>
            </div>
          </div>
          {items.length > 0 && (
            <div className="max-h-20 overflow-y-auto space-y-1">
              {items.map((item, i) => (
                <div key={i} className="flex justify-between text-xs p-1.5 rounded bg-background/50">
                  <span className="text-muted-foreground">
                    {item.desc} x{item.qty}
                  </span>
                  <span className="text-foreground">PKR {(item.qty * item.rate).toLocaleString()}</span>
                </div>
              ))}
            </div>
          )}
        </InputBox>
        <OutputBox title="Invoice Total">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal:</span>
            <span className="text-foreground">PKR {calculations.subtotal.toLocaleString()}</span>
          </div>
          {Number(discount) > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Discount ({discount}%):</span>
              <span className="text-green-400">- PKR {calculations.discountAmt.toFixed(0)}</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">GST (18%):</span>
            <span className="text-foreground">+ PKR {calculations.gst.toFixed(0)}</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg bg-chart-3/10">
            <span className="font-medium text-foreground">Total:</span>
            <span className="font-bold text-lg text-chart-3">
              PKR {calculations.total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
        </OutputBox>
        {items.length > 0 && (
          <Button variant="ghost" size="sm" className="w-full text-xs" onClick={() => setItems([])}>
            Clear Items
          </Button>
        )}
      </div>
    </Card>
  )
}

function CurrencyConverter() {
  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("USD")

  const rates: Record<string, number> = {
    USD: 278.5,
    EUR: 302.8,
    GBP: 354.2,
    AED: 75.85,
    SAR: 74.25,
    CNY: 38.45,
  }

  const converted = useMemo(() => {
    const amt = Number(amount) || 0
    return amt * (rates[from] || 0)
  }, [amount, from])

  return (
    <Card className="p-6 bg-card/80 backdrop-blur border-border/50 hover:border-chart-4/40 hover:shadow-lg hover:shadow-chart-4/5 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-chart-4/20 to-chart-4/5 ring-1 ring-chart-4/20">
          <Banknote className="w-5 h-5 text-chart-4" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Currency to PKR</h3>
          <p className="text-xs text-muted-foreground">Quick forex conversion</p>
        </div>
      </div>
      <div className="space-y-4">
        <InputBox title="Enter Values">
          <div>
            <Label className="text-xs text-muted-foreground">Amount</Label>
            <Input
              type="number"
              placeholder="e.g. 100"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50"
            />
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">From Currency</Label>
            <div className="grid grid-cols-3 gap-2 mt-1.5">
              {Object.keys(rates).map((currency) => (
                <Button
                  key={currency}
                  variant={from === currency ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFrom(currency)}
                  className="text-xs"
                >
                  {currency}
                </Button>
              ))}
            </div>
          </div>
        </InputBox>
        <OutputBox title="Converted Amount">
          <div className="text-center p-4 rounded-xl bg-chart-4/10">
            <p className="text-xs text-muted-foreground mb-1">
              {amount || "0"} {from} =
            </p>
            <p className="text-2xl font-bold text-chart-4">
              PKR {converted.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Rate: 1 {from} = {rates[from].toFixed(2)} PKR
            </p>
          </div>
        </OutputBox>
      </div>
    </Card>
  )
}

function DiscountCalculator() {
  const [original, setOriginal] = useState("")
  const [discountPercent, setDiscountPercent] = useState("")

  const calculations = useMemo(() => {
    const orig = Number(original) || 0
    const disc = Number(discountPercent) || 0
    const savings = (orig * disc) / 100
    const final = orig - savings
    return { original: orig, savings, final, percent: disc }
  }, [original, discountPercent])

  return (
    <Card className="p-6 bg-card/80 backdrop-blur border-border/50 hover:border-chart-5/40 hover:shadow-lg hover:shadow-chart-5/5 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-chart-5/20 to-chart-5/5 ring-1 ring-chart-5/20">
          <Scale className="w-5 h-5 text-chart-5" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Discount Calculator</h3>
          <p className="text-xs text-muted-foreground">Calculate sale prices</p>
        </div>
      </div>
      <div className="space-y-4">
        <InputBox title="Enter Values">
          <div>
            <Label className="text-xs text-muted-foreground">Original Price (PKR)</Label>
            <Input
              type="number"
              placeholder="e.g. 5000"
              value={original}
              onChange={(e) => setOriginal(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50"
            />
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">Discount (%)</Label>
            <Input
              type="number"
              placeholder="e.g. 20"
              value={discountPercent}
              onChange={(e) => setDiscountPercent(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50"
            />
          </div>
          <div className="flex gap-2">
            {[10, 15, 20, 25, 30, 50].map((d) => (
              <Button
                key={d}
                variant="outline"
                size="sm"
                onClick={() => setDiscountPercent(String(d))}
                className="flex-1 text-xs px-1"
              >
                {d}%
              </Button>
            ))}
          </div>
        </InputBox>
        <OutputBox title="Final Price">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">You Save:</span>
            <span className="font-semibold text-green-400">PKR {calculations.savings.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg bg-chart-5/10">
            <span className="font-medium text-foreground">Final Price:</span>
            <span className="font-bold text-xl text-chart-5">PKR {calculations.final.toLocaleString()}</span>
          </div>
        </OutputBox>
      </div>
    </Card>
  )
}

function BusinessAgeCalculator() {
  const [startDate, setStartDate] = useState("")

  const age = useMemo(() => {
    if (!startDate) return { years: 0, months: 0, days: 0, totalDays: 0 }
    const start = new Date(startDate)
    const now = new Date()
    const diff = now.getTime() - start.getTime()
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24))
    const years = Math.floor(totalDays / 365)
    const months = Math.floor((totalDays % 365) / 30)
    const days = totalDays % 30
    return { years, months, days, totalDays }
  }, [startDate])

  return (
    <Card className="p-6 bg-card/80 backdrop-blur border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20">
          <Calendar className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Business Age</h3>
          <p className="text-xs text-muted-foreground">Track your journey</p>
        </div>
      </div>
      <div className="space-y-4">
        <InputBox title="Select Date">
          <div>
            <Label className="text-xs text-muted-foreground">Business Start Date</Label>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50"
            />
          </div>
        </InputBox>
        {startDate && (
          <OutputBox title="Business Age">
            <div className="text-center p-4 rounded-xl bg-primary/10">
              <p className="text-xs text-muted-foreground mb-2">Your business is</p>
              <div className="flex justify-center gap-4">
                <div>
                  <p className="text-2xl font-bold text-primary">{age.years}</p>
                  <p className="text-xs text-muted-foreground">Years</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">{age.months}</p>
                  <p className="text-xs text-muted-foreground">Months</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">{age.days}</p>
                  <p className="text-xs text-muted-foreground">Days</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                That&apos;s <span className="font-semibold text-foreground">{age.totalDays.toLocaleString()}</span> days
                of hard work!
              </p>
            </div>
          </OutputBox>
        )}
      </div>
    </Card>
  )
}

function StaffingCalculator() {
  const [employees, setEmployees] = useState("")
  const [avgSalary, setAvgSalary] = useState("")

  const calculations = useMemo(() => {
    const emp = Number(employees) || 0
    const sal = Number(avgSalary) || 0
    const baseSalaries = emp * sal
    const eobi = baseSalaries * 0.06
    const benefits = baseSalaries * 0.1
    const total = baseSalaries + eobi + benefits
    const perEmployee = emp > 0 ? total / emp : 0
    return { baseSalaries, eobi, benefits, total, perEmployee }
  }, [employees, avgSalary])

  return (
    <Card className="p-6 bg-card/80 backdrop-blur border-border/50 hover:border-chart-2/40 hover:shadow-lg hover:shadow-chart-2/5 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-chart-2/20 to-chart-2/5 ring-1 ring-chart-2/20">
          <Users className="w-5 h-5 text-chart-2" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Staffing Cost</h3>
          <p className="text-xs text-muted-foreground">Total employee expenses</p>
        </div>
      </div>
      <div className="space-y-4">
        <InputBox title="Enter Values">
          <div>
            <Label className="text-xs text-muted-foreground">Number of Employees</Label>
            <Input
              type="number"
              placeholder="e.g. 5"
              value={employees}
              onChange={(e) => setEmployees(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50"
            />
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">Average Salary (PKR)</Label>
            <Input
              type="number"
              placeholder="e.g. 50000"
              value={avgSalary}
              onChange={(e) => setAvgSalary(e.target.value)}
              className="mt-1.5 bg-background/50 border-border/50"
            />
          </div>
        </InputBox>
        <OutputBox title="Total Costs">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Base Salaries:</span>
            <span className="text-foreground">PKR {calculations.baseSalaries.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">EOBI (6%):</span>
            <span className="text-foreground">PKR {calculations.eobi.toFixed(0)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Benefits (~10%):</span>
            <span className="text-foreground">PKR {calculations.benefits.toFixed(0)}</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg bg-chart-2/10">
            <span className="font-medium text-foreground">Total Monthly:</span>
            <span className="font-bold text-lg text-chart-2">
              PKR {calculations.total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            Cost per employee:{" "}
            <span className="font-semibold text-foreground">
              PKR {calculations.perEmployee.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
        </OutputBox>
      </div>
    </Card>
  )
}

export default function ToolsPage() {
  return (
    <PageLayout>
      <section className="py-10 sm:py-14">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20">
            <Sparkles className="w-7 h-7 text-primary" />
          </div>
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full ring-1 ring-primary/20">
            100% Free Forever
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
          Free Business <span className="text-primary">Toolkit</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          12 powerful calculators for your daily bookkeeping needs. No signup required, no hidden costs — just instant
          results optimized for Pakistani businesses.
        </p>
      </section>

      <section className="py-8">
        <Tabs defaultValue="finance" className="w-full">
          <TabsList className="w-full flex-wrap h-auto gap-1 bg-secondary/50 p-1.5 mb-8">
            <TabsTrigger
              value="finance"
              className="flex-1 min-w-[100px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Calculator className="w-4 h-4 mr-1.5" />
              Finance
            </TabsTrigger>
            <TabsTrigger
              value="sales"
              className="flex-1 min-w-[100px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <TrendingUp className="w-4 h-4 mr-1.5" />
              Sales & Tax
            </TabsTrigger>
            <TabsTrigger
              value="business"
              className="flex-1 min-w-[100px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Users className="w-4 h-4 mr-1.5" />
              Business
            </TabsTrigger>
          </TabsList>

          <TabsContent value="finance" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <ProfitMarginCalculator />
              <EMICalculator />
              <SalaryCalculator />
              <CurrencyConverter />
            </div>
          </TabsContent>

          <TabsContent value="sales" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <GSTCalculator />
              <DiscountCalculator />
              <InvoiceCalculator />
              <DailySalesTracker />
            </div>
          </TabsContent>

          <TabsContent value="business" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <BreakEvenCalculator />
              <TimeValueCalculator />
              <StaffingCalculator />
              <BusinessAgeCalculator />
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="py-12">
        <Card className="p-8 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 border-primary/20">
          <h2 className="text-xl font-semibold text-foreground mb-8">Why Small Businesses Love These Tools</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
              <div className="p-2 rounded-lg bg-primary/10 mt-0.5">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm">Instant Results</h4>
                <p className="text-xs text-muted-foreground mt-1">No waiting, calculations update as you type</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
              <div className="p-2 rounded-lg bg-primary/10 mt-0.5">
                <Banknote className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm">PKR Optimized</h4>
                <p className="text-xs text-muted-foreground mt-1">Built specifically for Pakistani businesses</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
              <div className="p-2 rounded-lg bg-primary/10 mt-0.5">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm">Save Hours</h4>
                <p className="text-xs text-muted-foreground mt-1">Quick decisions without spreadsheets</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
              <div className="p-2 rounded-lg bg-primary/10 mt-0.5">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm">Always Free</h4>
                <p className="text-xs text-muted-foreground mt-1">No hidden costs, no signup required</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="py-10">
        <Card className="p-8 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-chart-2/10 border-primary/20">
          <h2 className="text-xl font-semibold text-foreground mb-3">Need More Than Just Calculators?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Let me handle your complete bookkeeping while you focus on growing your business.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
          >
            <a href="https://wa.me/923286110776">
              Start on WhatsApp
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </Card>
      </section>
    </PageLayout>
  )
}
