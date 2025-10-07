import { Heart, Sparkles, TrendingUp, Music } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Heart,
      title: "Spirit-Centered Coaching",
      description: "Healing and building tools rooted in the foundational wisdom and principles of the Creator.",
    },
    {
      icon: Sparkles,
      title: "Divine Design Discovery",
      description: "Uncover your unique purpose and the treasures hidden within your human spirit.",
    },
    {
      icon: TrendingUp,
      title: "Abundance Mindset",
      description: "Break free from income blocks and step into financial freedom without sacrificing your values.",
    },
    {
      icon: Music,
      title: "CUYODA-KAI™ Method",
      description: "Sacred to Signature Sound meditation with healing frequencies from Indigenous music.",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-4 text-balance">What You'll Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            As you enter into this Sacred Circle of the Creator, you will have the blessing of access to realms you may
            never have before encountered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
