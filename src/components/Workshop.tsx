import workshopImg from "@/assets/workshop.jpg";

const highlights = [
  { title: "Tradition", text: "Techniken aus Jahrhunderten – bewahrt, weitergegeben, beherrscht." },
  { title: "Präzision", text: "Jeder Schnitt, jede Lötstelle, jede Politur: bis ins kleinste Detail." },
  { title: "Unikate", text: "Kein Stück gleicht dem anderen – jedes Werk eine eigene Geschichte." },
];

const Workshop = () => {
  return (
    <section id="workshop" className="py-28 md:py-36 bg-surface-deep">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">
            Werkstatt & Handwerk
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            Wo aus <span className="italic text-gold">Material</span>
            <br /> Kunst wird
          </h2>
          <div className="divider-gold w-24 mb-8" />
          <p className="text-foreground/80 leading-relaxed mb-10">
            Meine Werkstatt ist ein Ort der Konzentration. Im warmen Schein der
            Werkbankleuchte begegnen sich Werkzeuge, deren Formen seit
            Jahrhunderten unverändert sind, und die Hand, die sie führt. Hier
            entstehen Schmuckstücke und Objekte, in denen das Material zur
            Sprache kommt.
          </p>

          <div className="space-y-6">
            {highlights.map((h) => (
              <div key={h.title} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="h-px w-12 bg-primary mt-3 group-hover:w-16 transition-all duration-500" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary mb-1">{h.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 border border-primary/20 -z-10" />
          <img
            src={workshopImg}
            alt="Atmosphärische Aufnahme der Goldschmiedewerkstatt mit Werkzeugen, Amboss und Esse"
            width={1280}
            height={1280}
            loading="lazy"
            className="w-full h-[600px] object-cover shadow-elegant"
          />
        </div>
      </div>
    </section>
  );
};

export default Workshop;
