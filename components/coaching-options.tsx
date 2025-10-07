import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export function CoachingOptions() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest mb-4">
            COACHING OPTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Choose Your Path
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Flexible coaching programs designed to meet you where you are on
            your transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* One-on-One Coaching */}
          <Card className="p-8 bg-background border-border hover:border-primary/50 transition-all hover:shadow-lg">
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl text-foreground mb-2">
                One-on-One Coaching
              </h3>
              <p className="text-sm text-muted-foreground">
                Personalized transformation
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Private sessions tailored to your needs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Deep dive into your unique blocks
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Customized action plans
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Ongoing support and accountability
                </span>
              </li>
            </ul>
            <Link href="/contact" className="block">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </Card>

          {/* Live Online Sessions */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary hover:border-primary transition-all hover:shadow-xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
              POPULAR
            </div>
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Live Online Sessions
              </h3>
              <p className="text-sm text-muted-foreground">
                Group transformation experience
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Interactive group coaching
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Community support and connection
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Live Q&A and guidance
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Flexible scheduling options
                </span>
              </li>
            </ul>
            <Link href="/live-online-sessions" className="block">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Learn More
              </Button>
            </Link>
          </Card>

          {/* VIP Intensive */}
          <Card className="p-8 bg-background border-border hover:border-primary/50 transition-all hover:shadow-lg">
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl text-foreground mb-2">
                VIP Intensive
              </h3>
              <p className="text-sm text-muted-foreground">
                Accelerated breakthrough
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Full-day immersive experience
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Rapid transformation and clarity
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Strategic action roadmap
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  30-day follow-up support
                </span>
              </li>
            </ul>
            <Link href="/contact" className="block">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Apply Now
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}
