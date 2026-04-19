import portrait from "@/assets/images/about_wesenberg.jpg";
import { useScrollFade } from "@/hooks/use-scroll-fade";

const About = () => {
  const { ref, style } = useScrollFade<HTMLElement>();
  return (
    <section ref={ref} id="about" className="py-28 md:py-36" style={style}>
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-4 border border-primary/20 -z-10" />
          <img
            src={portrait}
            alt="Goldschmiede Wesenberg"
            loading="lazy"
            className="w-full h-[600px] object-cover shadow-elegant"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">
            Wesenberg
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            Ein Leben für das <span className="italic text-gold">Edelmetall</span>
          </h2>
          <div className="divider-gold w-24 mb-8" />
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Unsere Goldschmiede ist seit über 5 Jahrzehnten in Cottbus ansässig. Von Vater Werner Wesenberg 1962 gegründet, übernahm Tochter Marion 1979 als Goldschmiedemeisterin und Schmuckdesignerin das Geschäft. Unser Team wird zudem durch einen Diplomdesigner und zwei Goldschmiedegesellinnen komplettiert.
            </p>
            <p>
              In unserer Meisterwerkstatt entstehen hochwertige Schmuckstücke mit künstlerisch anspruchsvollem Design, ebenso werden Ihre ganz persönlichen Wünsche fachgerecht umgesetzt. Auch für Umarbeitungen, Änderungen und Reparaturen sind wir der richtige Ansprechpartner, damit Ihre "alten Schätze" in neuem Glanz erstrahlen.
            </p>
            <p className="font-serif italic text-primary text-lg">
              „Qualität ist zeitlos“ – dieser Leitgedanke steht bei unserer Arbeit stets an erster Stelle.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
            <div>
              <div className="font-serif text-3xl text-gold mb-1">50+</div>
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
