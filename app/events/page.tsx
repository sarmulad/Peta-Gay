import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const events = [
  {
    id: "warrior-up",
    title: "WARRIOR UP! - Pathways to Peace",
    subtitle: "Do Business Inside Out & Heaven Down",
    date: "September 20, 2025",
    time: "11AM-1PM EST",
    location: "Online Experience",
    image: "/warrior.webp",
    description:
      "For the Woman Who Knows She's Called to More. A transformational experience designed to bring peace in the turmoil, calm in the chaos, and divine order to your business and life.",
    featured: true,
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              UPCOMING EVENTS
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Transform Your Life & Business
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join Peta-Gay Roberts for powerful monthly events designed to
              align your spirit, soul, and body with your divine purpose.
            </p>
          </div>

          {/* Featured Event */}
          {events
            .filter((event) => event.featured)
            .map((event) => (
              <div
                key={event.id}
                className="mb-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl overflow-hidden border border-primary/20"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className=""
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4 w-fit">
                      FEATURED EVENT
                    </div>
                    <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-3">
                      {event.title}
                    </h2>
                    <p className="text-xl text-primary mb-6 italic">
                      {event.subtitle}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {event.description}
                    </p>

                    <Link href={`/events/${event.id}`}>
                      <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Learn More & Register
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          {/* All Events Grid */}
          <div>
            <h2 className="font-serif text-3xl text-foreground mb-8">
              All Events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="relative h-[250px] overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-fit group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-br from-primary/10 to-background rounded-2xl p-12 border border-primary/20">
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
              Stay Updated on Upcoming Events
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community to receive notifications about new events,
              workshops, and transformational experiences.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Notified
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
