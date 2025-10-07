import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

export function SignatureMethod() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-primary tracking-widest mb-4">
              MY SIGNATURE METHOD
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              The CUYODA-KAI™ Method
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
              I created the CUYODA-KAI™ method (Sacred to Signature Sound) by
              combining ancient Indigenous wisdom from my Taíno heritage with
              contemporary coaching practices. I use this spirit-centered,
              faith-based approach to help you discover your authentic voice and
              divine purpose.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  Align spiritually with your Creator-given purpose
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  Remove internal blocks to success and abundance
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  Experience holistic transformation across all life areas
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  Live abundantly without sacrifice
                </p>
              </div>
            </div>
            <Link href="/services">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Learn More About My Method
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center p-12">
              <Sparkles className="h-32 w-32 text-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
