"use client";

import { Play } from "lucide-react";
import { useState } from "react";

interface VideoTestimonial {
  id: string;
  thumbnail: string;
  clientName: string;
  title: string;
  videoUrl: string;
}

const testimonials: VideoTestimonial[] = [
  {
    id: "1",
    thumbnail: "/professional-woman-smiling-testimonial-video.jpg",
    clientName: "Gerard Roberts",
    title: "From Stuck to Thriving",
    videoUrl:
      "https://app.groove.cm/groovevideo/videopage/280194/ibd6v469a90440879396cd75d6900b4a50d25",
  },
  {
    id: "2",
    thumbnail: "/business-owner-success-story-video.jpg",
    clientName: " Kim Lavigne",
    title: "Breaking Through Income Blocks",
    videoUrl:
      "https://app.groove.cm/groovevideo/videopage/283813/w5t9w2a99552b5b03eea644c5eea2be1646dd",
  },
  {
    id: "3",
    thumbnail: "/woman-spiritual-transformation-testimonial.jpg",
    clientName: "Matt Macleod",
    title: "Discovering My Divine Purpose",
    videoUrl:
      "https://app.groove.cm/groovevideo/videopage/260548/3vcb7a4b11efc91546d697e9b7a87ea113dfd",
  },
];

export function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
            CLIENT STORIES
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Witness the Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear directly from clients who have discovered their divine design
            and removed the blocks holding them back from abundance.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-primary/10 mb-4 shadow-lg hover:shadow-xl transition-shadow">
                {activeVideo === testimonial.id ? (
                  <iframe
                    src={testimonial.videoUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    {/* <img
                      src={testimonial.thumbnail || "/placeholder.svg"}
                      alt={`${testimonial.clientName} testimonial`}
                      className="w-full h-full object-cover"
                    /> */}
                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                      <button
                        onClick={() => setActiveVideo(testimonial.id)}
                        className="w-20 h-20 rounded-full bg-background/95 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform"
                        aria-label={`Play ${testimonial.clientName} testimonial`}
                      >
                        <Play
                          className="w-8 h-8 text-primary ml-1"
                          fill="currentColor"
                        />
                      </button>
                    </div>
                  </>
                )}
              </div>
              <h3 className="font-serif text-xl text-foreground mb-1">
                {testimonial.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {testimonial.clientName}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-foreground mb-6">
            Ready to write your own transformation story?
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            START YOUR JOURNEY
          </a>
        </div>
      </div>
    </section>
  );
}
