import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Check, Sparkles } from "lucide-react";
import Image from "next/image";

export default function WarriorUpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/cosmic-pattern.svg')] bg-repeat"></div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-semibold">
                  Warrior up in your Business!
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                Do Business Inside Out & Heaven Down
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 italic">
                For the Woman Who Knows She's Called to More.
              </p>
              <p className="text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
                You've built a successful business. You've had some success in
                life. But deep down... you know there's another level. A way to
                be bold with purpose, power, AND peace. A way to partner with
                Heaven's vision instead of grinding through your own.
              </p>
              <p className="text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
                Welcome to a space where success isn't just about strategy –
                it's about alignment, authority, and divine assignment.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold"
              >
                Get CUYODA-KAI™ + Save My Spot
              </Button>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <Calendar className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Date</h3>
                  <p className="text-muted-foreground">September 20, 2025</p>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Time</h3>
                  <p className="text-muted-foreground">11AM-1PM EST</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Location
                  </h3>
                  <p className="text-muted-foreground">Online Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                Introducing: CUYODA-KAI™ Life Model
              </h2>
              <p className="text-lg text-muted-foreground mb-2 italic">
                Hisaca-Soma-Anisasa™ Movement Sequence
              </p>
              <p className="text-muted-foreground">
                (A Mindful Movement Meditation Experience)
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 lg:p-12 border border-border mb-12">
              <p className="text-lg text-center text-muted-foreground mb-8 leading-relaxed">
                A sacred practice designed to realign your spirit, soul and body
                with the Creator. This is not just a meditation, a journaling
                prompt, or breathwork. This is a whole-being (transformation)
                that gently guides you to:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">
                      (Re)Member Your Maker
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Recall Your Magnificence
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Relax Your Muscle
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Manifest Your Best
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Release Your Emotions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Renew Your Mind
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:col-span-2 justify-center">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Restore Your Memories
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground text-center mb-12">
                When You Sign Up, You'll Receive:
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-card p-6 rounded-xl border border-border">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground leading-relaxed">
                      <strong>CUYODA-KAI™ Life Model Masterclass</strong> (Video
                      Guide and Reflective Meditation). This is where divine
                      downloads meet bold execution. This is where legacy
                      begins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card p-6 rounded-xl border border-border">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground leading-relaxed">
                      Instant access to a sacred space to begin realignment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card p-6 rounded-xl border border-border">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground leading-relaxed">
                      Upcoming live virtual event in September
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/warrior.webp"
                  alt="Warrior Up Event"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground text-center mb-4">
                WARRIOR UP! "Pathways to Peace"
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                NOT JUST FOR BUSINESS OWNERS
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Peace in the Turmoil",
                  "Kerfuffle to Calm",
                  "Chaos to Divine Order",
                  "Better Sleep",
                  "Reduced Anxiety",
                  "Hope for the Future",
                  "Master Your Emotions",
                  "Make More Money",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border"
                  >
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <p className="text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-12">
              <h2 className="font-serif text-3xl lg:text-4xl mb-6">
                Unlock the Business-Life you were born to design
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Enter your details below to receive CUYODA-KAI™ and be the first
                to know when the September experience goes live.
              </p>
              <div className="max-w-md mx-auto space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  YES, I WANT CUYODA-KAI™ TO SAVE MY SPOT
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
