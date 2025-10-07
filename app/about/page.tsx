import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header textColor="text-white" />

      {/* Hero Section */}
      <section className="bg-primary pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">
            Hi, I'm Peta-Gay Roberts
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            I'm passionate about spiritual transformation, breaking income
            blocks, and helping you discover your divine design. Let me tell you
            my story.
          </p>
          {/* </CHANGE> */}
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <p className="text-primary text-sm font-semibold tracking-wider mb-6">
                WHAT I'M PASSIONATE ABOUT
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                I'm passionate about helping you live the abundant life you were
                created for
              </h2>
              {/* </CHANGE> */}
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm Taiguey, Daca PETA-Gay ROBERTS, a Sacred-Warrior
                Transformational Coach rooted in the ancient wisdom of my Taíno
                (South Island Arawak First Nations/Amerindian) heritage. My
                coaching practice is spirit-centered and faith-based, grounded
                in the Creator/God.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I do this work because I've seen too many talented business
                owners stuck—trying everything to boost their income but hitting
                the same invisible walls. Through my CUYODA-KAI™ method (Sacred
                to Signature Sound), I help you remove those internal blocks so
                you can experience the abundance, peace, and purpose you were
                divinely designed for.
              </p>
              {/* </CHANGE> */}
            </div>
          </div>

          {/* Image and Details Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="/peta1.jpg"
                alt="Peta-Gay Roberts"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-3xl text-foreground mb-6">
                  Why I Do This Work
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm passionate about three things: spiritual transformation,
                  Indigenous wisdom, and helping people discover their authentic
                  voice. I do this so you can live powerfully in all areas of
                  life—faith, family, finances, freedom, and fitness—without
                  sacrifice or compromise.
                </p>
                {/* </CHANGE> */}
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      CUYODA-KAI™ Transformational Method
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      Taíno Indigenous Wisdom Integration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      Faith-Based Spiritual Coaching
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      Holistic Life & Business Transformation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-relaxed">
            "Working with Peta-Gay has been a truly transformative experience.
            Her spiritual guidance and Indigenous wisdom helped me discover my
            divine purpose and break through the barriers holding me back."
          </blockquote>
          <p className="text-muted-foreground text-lg">
            — Sarah Mitchell, Business Owner
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            <img
              src="/life-coach-speaking-at-conference.jpg"
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-l-[20px] border-l-primary border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-center text-foreground mb-12">
            The Six F's of Transformation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-foreground mb-2">
                Faith
              </h3>
              <p className="text-muted-foreground">
                Spirit-centered foundation rooted in the Creator
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-foreground mb-2">
                Family
              </h3>
              <p className="text-muted-foreground">
                Strengthening relationships and connections
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-foreground mb-2">
                Friends
              </h3>
              <p className="text-muted-foreground">
                Building meaningful community and support
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-foreground mb-2">
                Finances
              </h3>
              <p className="text-muted-foreground">
                Abundance without sacrifice or compromise
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-foreground mb-2">
                Freedom
              </h3>
              <p className="text-muted-foreground">
                Living in your divine design and purpose
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-foreground mb-2">
                Fitness/Health
              </h3>
              <p className="text-muted-foreground">
                Holistic well-being of body, mind, and spirit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            If you're ready to break through your income blocks and discover
            your divine design, I'd love to talk with you. Book a free
            consultation and let's see if we're a good fit.
          </p>
          {/* </CHANGE> */}
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
