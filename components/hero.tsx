import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative py-20 md:py-0 md:min-h-screen flex items-center pt-30 md:pt-20"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/peta.jpg"
          alt="Life Coach"
          className="w-full h-full object-cover object-[center_left]"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl lg:text-8xl text-white mb-6 leading-tight">
            I'm Peta-Gay Roberts
          </h1>
          {/* <h2 className="text-2xl lg:text-3xl text-white/95 mb-8 leading-relaxed font-light">
            I Help You Break Through Income Blocks & Discover Your Divine Design
          </h2> */}
          <p className="text-white/95 text-[16px] md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            I'm passionate about helping business owners remove the internal
            barriers keeping them from the abundant life they deserve. I do this
            so you can live powerfully in faith, family, finances, and
            freedom—without sacrifice or compromise.
          </p>
          <Button
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground transition-colors"
          >
            Schedule a Free Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
}
