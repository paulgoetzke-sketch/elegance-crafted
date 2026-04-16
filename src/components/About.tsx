import portrait from "@/assets/portrait.jpg";

const About = () => {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-4 border border-primary/20 -z-10" />
          <img
            src={portrait}
            alt="Porträt von Maximilian Hartmann, Goldschmied"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full h-[600px] object-cover shadow-elegant"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">
            Über mich
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            Ein Leben für das <span className="italic text-gold">Edelmetall</span>
          </h2>
          <div className="divider-gold w-24 mb-8" />
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Mein Name ist Maximilian Hartmann. Seit über drei Jahrzehnten widme
              ich mich dem Goldschmiedehandwerk – einer Disziplin, die Geduld,
              Demut und ein tiefes Verständnis für Material verlangt.
            </p>
            <p>
              Ausgebildet in Pforzheim, verfeinert in Florenz, geprägt von
              Begegnungen mit Meistern aus aller Welt. In meinem Atelier
              entstehen Stücke, die nicht nur getragen, sondern erlebt werden.
            </p>
            <p className="font-serif italic text-primary text-lg">
              „Gold ist geduldig. Wer ihm zuhört, dem erzählt es Geschichten."
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
            <div>
              <div className="font-serif text-3xl text-gold mb-1">35+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Jahre Erfahrung
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl text-gold mb-1">800+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Unikate
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl text-gold mb-1">12</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Auszeichnungen
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
