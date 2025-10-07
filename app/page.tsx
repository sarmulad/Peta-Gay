import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Certifications } from "@/components/certifications";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { VideoTestimonials } from "@/components/video-testimonials";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { SignatureMethod } from "@/components/signature-method";
import { SixFsFramework } from "@/components/six-fs-framework";
import { CoachingOptions } from "@/components/coaching-options";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header textColor="text-white" />
      <Hero />
      <Services />
      <About />
      <SignatureMethod />
      <SixFsFramework />
      <CoachingOptions />
      <Testimonials />
      <VideoTestimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
