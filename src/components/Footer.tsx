import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-surface-deep pt-20 pb-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 h-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-surface-deep animate-divider-breathe" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-divider-shimmer" />
      </div>
      <div className="container">
        <div className="divider-gold mb-16" />

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-serif text-2xl tracking-wider text-gold mb-4">
              Wesenberg
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed max-w-xs">
              Goldschmiedeatelier für Schmuck, freie Arbeiten und Restaurierungen
              – seit 1976 in Cottbus.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Wesenberg
            </h4>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Burgstraße 9
              <br />
              03046 Cottbus
              <br />
              +49 355 25031
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Folgen
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="h-10 w-10 border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="h-10 w-10 border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="mailto:wesenberg@goldmail.de"
                aria-label="E-Mail"
                className="h-10 w-10 border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-border text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Wesenberg Goldschmiede. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Impressum</a>
            <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
