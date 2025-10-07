"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Users, Target, TrendingUp, CheckCircle2 } from "lucide-react"

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [step, setStep] = useState<"select" | "details">("select")

  const services = [
    {
      id: "personal-development",
      icon: Heart,
      title: "Personal Development",
      description: "Unlock your full potential with personalized coaching sessions.",
      duration: "60 minutes",
      price: "$150",
    },
    {
      id: "goal-setting",
      icon: Target,
      title: "Goal Setting & Achievement",
      description: "Learn proven strategies to set and achieve meaningful goals.",
      duration: "60 minutes",
      price: "$150",
    },
    {
      id: "relationship-coaching",
      icon: Users,
      title: "Relationship Coaching",
      description: "Improve your relationships through better communication.",
      duration: "60 minutes",
      price: "$150",
    },
    {
      id: "career-advancement",
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Navigate your career path with confidence and clarity.",
      duration: "60 minutes",
      price: "$150",
    },
  ]

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setStep("details")
  }

  const handleBack = () => {
    setStep("select")
    setSelectedService(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking submitted for service:", selectedService)
    onOpenChange(false)
    setStep("select")
    setSelectedService(null)
  }

  const selectedServiceData = services.find((s) => s.id === selectedService)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl text-foreground">
            {step === "select" ? "Select a Service" : "Book Your Appointment"}
          </DialogTitle>
        </DialogHeader>

        {step === "select" ? (
          <div className="grid md:grid-cols-2 gap-4 py-4">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className="text-left p-6 border-2 border-border rounded-lg hover:border-primary hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{service.duration}</span>
                    <span className="font-semibold text-primary">{service.price}</span>
                  </div>
                </button>
              )
            })}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 py-4">
            {/* Selected Service Summary */}
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">{selectedServiceData?.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{selectedServiceData?.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">{selectedServiceData?.duration}</span>
                    <span className="font-semibold text-primary">{selectedServiceData?.price}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details Form */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                  First Name *
                </label>
                <Input id="firstName" required placeholder="John" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                  Last Name *
                </label>
                <Input id="lastName" required placeholder="Doe" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <Input id="email" type="email" required placeholder="john@example.com" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <Input id="phone" type="tel" required placeholder="+1 (555) 000-0000" />
            </div>

            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-foreground mb-2">
                Preferred Date *
              </label>
              <Input id="preferredDate" type="date" required />
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-2">
                Preferred Time *
              </label>
              <Input id="preferredTime" type="time" required />
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-2">
                Additional Notes (Optional)
              </label>
              <Textarea id="notes" placeholder="Tell me about your goals and what you'd like to achieve..." rows={4} />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={handleBack} className="flex-1 bg-transparent">
                Back to Services
              </Button>
              <Button type="submit" className="flex-1 bg-primary text-white hover:bg-primary/90">
                Confirm Booking
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
