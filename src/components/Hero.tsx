import heroImage from "@/assets/hero-goldsmith.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Goldschmied bei der Arbeit an einem Ring"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-deep/70 via-surface-deep/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-deep/90 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 pt-24">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">
            Atelier seit 1987
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8">
            Handwerkskunst
            <br />
            aus <span className="italic text-gold">Leidenschaft</span>
          </h1>
          <p className="text-lg text-foreground/80 mb-10 max-w-xl leading-relaxed">
            Im Atelier Aurum entstehen Schmuckstücke und Skulpturen von Hand –
            jedes Stück ein Unikat, geprägt von Tradition, Material und einem
            Auge für das Wesentliche.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] hover:shadow-gold transition-[box-shadow,transform] duration-500 hover:-translate-y-0.5"
            >
              Portfolio entdecken
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-primary/40 text-primary px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-primary/10 transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in">
        <div className="h-12 w-px bg-gradient-to-b from-transparent to-primary/60" />
      </div>
    </section>
  );
};

export default Hero;
