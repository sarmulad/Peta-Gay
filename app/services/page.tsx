import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Heart, Sparkles, Target, Users, Zap } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-primary tracking-widest mb-4">
              HOW I CAN HELP YOU
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
              I Help You Remove Internal Blocks & Live Your Divine Design
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              I'm passionate about helping business owners break through income
              barriers and discover their authentic voice. Here's how we can
              work together.
            </p>
          </div>
        </section>

        {/* Main Coaching Program */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <p className="text-sm font-semibold text-primary tracking-widest mb-4">
                  MY SIGNATURE METHOD
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  The CUYODA-KAI™ Method: How I Help You Transform
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I created the CUYODA-KAI™ method (Sacred to Signature Sound)
                  by combining ancient Indigenous wisdom from my Taíno heritage
                  with contemporary coaching practices. I use this
                  spirit-centered, faith-based approach to help you discover
                  your authentic voice and divine purpose.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">
                      I help you align spiritually with your Creator-given
                      purpose
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">
                      I help you remove internal blocks to success and abundance
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">
                      I guide you through holistic transformation across all
                      life areas
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">
                      I show you how to live abundantly without sacrifice
                    </p>
                  </div>
                </div>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Let's Talk
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Sparkles className="h-24 w-24 text-primary/40" />
                </div>
              </div>
            </div>

            {/* The Six F's Framework */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-20">
              <div className="text-center mb-12">
                <p className="text-sm font-semibold text-primary tracking-widest mb-4">
                  HOLISTIC APPROACH
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  The Six F's Framework
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A comprehensive approach to transformation that addresses
                  every aspect of your life
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Heart,
                    title: "Faith",
                    description:
                      "Deepen your spiritual connection and divine alignment",
                  },
                  {
                    icon: Users,
                    title: "Family",
                    description:
                      "Strengthen relationships and create lasting bonds",
                  },
                  {
                    icon: Users,
                    title: "Friends",
                    description:
                      "Build meaningful connections and supportive community",
                  },
                  {
                    icon: Target,
                    title: "Finances",
                    description: "Remove income blocks and create abundance",
                  },
                  {
                    icon: Zap,
                    title: "Freedom",
                    description: "Live authentically aligned with your purpose",
                  },
                  {
                    icon: Heart,
                    title: "Fitness",
                    description: "Nurture physical and mental well-being",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-background border-border hover:border-primary/50 transition-colors"
                  >
                    <item.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Offerings */}
        <section className="py-16 px-4 bg-gradient-to-br from-background to-primary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-primary tracking-widest mb-4">
                COACHING OPTIONS
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Choose Your Path
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
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

        {/* Who This Is For */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-primary tracking-widest mb-4">
                IDEAL FOR
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Is This For You?
              </h2>
              <p className="text-muted-foreground">
                Sacred-Warrior Coaching is perfect for those ready to step into
                their divine design
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Business owners facing income blocks and seeking breakthrough",
                "Individuals desiring deeper spiritual connection and purpose",
                "Leaders wanting to align success with faith and values",
                "Those ready to remove internal barriers to abundance",
                "People seeking holistic transformation across all life areas",
                "Anyone called to discover their authentic voice and mission",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-primary/5"
                >
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              I'd love to help you break through your income blocks and discover
              the abundant life you were created for. Let's schedule a
              consultation and see if we're a good fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
