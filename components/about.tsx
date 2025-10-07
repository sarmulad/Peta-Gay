import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <>
      {/* Main About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-tight text-balance">
                I believe you were created with divine design and purpose
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm passionate about spiritual transformation, Indigenous
                wisdom, and helping people discover their authentic voice. I do
                this because I've seen too many talented business owners
                stuck—trying to boost their income but hitting the same
                invisible walls over and over.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through my CUYODA-KAI™ method (Sacred to Signature Sound), I
                help you uncover the lies holding you back, discover the truths
                that set you free, and step into the abundant life you were
                meant to live—in faith, family, finances, freedom, and fitness.
              </p>
              {/* </CHANGE> */}
            </div>
            <div className="relative">
              <img
                src="/hero-bg.jpg"
                alt="Woman celebrating in sunflower field"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-0 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            <div className="bg-primary p-8 lg:p-10 text-primary-foreground">
              <h3 className="font-serif text-2xl mb-4">Uncover the Lies</h3>
              <p className="text-sm leading-relaxed mb-6 opacity-90">
                Break free from limiting beliefs and negative mindsets that have
                tied you to the past and held you back from success.
              </p>
            </div>
            <div className="bg-primary/90 p-8 lg:p-10 text-primary-foreground">
              <h3 className="font-serif text-2xl mb-4">Discover the Truths</h3>
              <p className="text-sm leading-relaxed mb-6 opacity-90">
                Find the truths that can break you free from unhealthy patterns
                and unlock abundance in life, love, and relationships.
              </p>
            </div>
            <div className="bg-primary/80 p-8 lg:p-10 text-primary-foreground">
              <h3 className="font-serif text-2xl mb-4">Sacred-Warrior Way</h3>
              <p className="text-sm leading-relaxed mb-6 opacity-90">
                Step into a spirit-filled life guided by ancient teachings and
                the good way of abundant living.
              </p>
            </div>
            <div className="bg-primary/70 p-8 lg:p-10 text-primary-foreground">
              <h3 className="font-serif text-2xl mb-4">Transform Your Life</h3>
              <Button
                variant="link"
                className="text-primary-foreground p-0 h-auto font-normal hover:no-underline group"
              >
                SCHEDULE A CALL
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-primary mb-4">
              My Story
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <img
                src="/peta1.jpg"
                alt="Peta-Gay Roberts"
                className="w-full h-auto rounded-sm"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6 leading-tight text-balance">
                I'm Taiguey, Daca PETA-Gay ROBERTS—a Sacred-Warrior
                Transformational Coach rooted in Taíno Indigenous wisdom
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm passionate about helping you get to know your Creator on a
                deeper level and partner with Him to discover your divine
                design. I do this so you can remove the internal blocks holding
                you back from unpacking the treasures within your spirit.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                My approach combines ancient Indigenous wisdom with contemporary
                coaching practices. I show you how to live a life of abundance
                without sacrificing the Six F's: Faith, Family, Friends,
                Finances, Freedom, and Fitness. When you work with me, you'll
                experience transformation that touches every area of your life.
              </p>
              <a href="/about">
                <Button
                  variant="link"
                  className="text-primary p-0 h-auto font-normal hover:no-underline group"
                >
                  READ MORE
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <div className="mt-12 pt-8 border-t border-border">
                <blockquote className="text-lg text-primary italic mb-4 leading-relaxed">
                  "Wisdom and peace come when you start living the life the
                  Creator intended for you."
                </blockquote>
                <div className="font-serif text-xl text-foreground italic mb-1">
                  Geronimo
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">
                  Native American Leader
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
