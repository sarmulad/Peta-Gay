import { Award, Users, Target, Heart } from "lucide-react"

export function Certifications() {
  const certifications = [
    { icon: Award, label: "WHO" },
    { icon: Users, label: "Positive Psychology" },
    { icon: Target, label: "ICF" },
    { icon: Heart, label: "Mindfulness" },
    { icon: Award, label: "NLP" },
  ]

  return (
    <section className="py-12 border-b border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Certifications</p>
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
                <cert.icon className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">{cert.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
