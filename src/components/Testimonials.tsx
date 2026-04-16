import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Maximilian hat unsere Eheringe entworfen – jeder Blick darauf erinnert uns an die Sorgfalt und Liebe, mit der sie gefertigt wurden.",
    name: "Clara & Julian Berger",
    role: "München",
  },
  {
    quote:
      "Ein Erbstück meiner Großmutter wurde behutsam neu gefasst. Das Ergebnis ist atemberaubend – Tradition und Moderne in einem Stück.",
    name: "Dr. Helena Steinmann",
    role: "Wien",
  },
  {
    quote:
      "Eine Skulptur aus dem Atelier ist seit Jahren das Herzstück meiner Sammlung. Handwerk auf höchstem künstlerischem Niveau.",
    name: "Friedrich von Auer",
    role: "Sammler, Zürich",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 md:py-36 bg-surface-deep">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">
            Kundenstimmen
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
            Vertrauen, das <span className="italic text-gold">trägt</span>
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-surface-raised border border-border p-8 lg:p-10 flex flex-col hover:border-primary/40 transition-colors duration-500"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-serif text-lg leading-relaxed text-foreground/90 mb-8 flex-1">
                <span className="text-primary text-3xl leading-none mr-1">"</span>
                {t.quote}
              </blockquote>
              <figcaption className="pt-6 border-t border-border">
                <div className="font-medium text-foreground">{t.name}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
