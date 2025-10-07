export function Testimonials() {
  const testimonials = [
    {
      name: "OLIVIA HOLMES",
      content:
        " Thank you so much for everything, I will certainly continue doing CUYODA-KAI ™️ after the session is over. I have found it empowering and healing - it has been such a blessing to me.",
      image: "/woman-professional-headshot.jpg",
    },
    {
      name: "JULIA MOORE",
      content:
        " Thank you so much for everything, I will certainly continue doing CUYODA-KAI ™️ after the session is over. I have found it empowering and healing - it has been such a blessing to me.",
      image: "/woman-business-headshot.jpg",
    },
    {
      name: "ROBERTO LOPEZ",
      content:
        "Thank you so much for the video of encouragement! It is strange to think that I've only been doing CUYODA-KAI ™️ for 14 days! It seems like part of my life already, and I really notice when I've forgotten to do them",
      image: "/man-professional-headshot.jpg",
    },
    {
      name: "MARIA ANNA",
      content:
        "Dignissim suspendisse donec in non in proin dolor massa cursus ac aliquet platea at aenean malesuada mauris amet ullamcorper sit amet elementum gravida quisque.",
      image: "/woman-headshot-outdoor.jpg",
    },
  ];

  return (
    <section className="py-24 bg-background]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-primary uppercase tracking-widest mb-4 font-semibold">
            TESTIMONIALS
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#1a1a1a]">
            What My Clients are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-6">
              <div className="text-primary">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="opacity-80"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              <p className="text-[#4a4a4a] leading-relaxed text-base">
                {testimonial.content}
              </p>

              {/* <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <p className="font-semibold text-[#1a1a1a] text-sm tracking-wide">
                  {testimonial.name}
                </p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
