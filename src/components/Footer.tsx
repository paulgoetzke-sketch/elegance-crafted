import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-deep pt-20 pb-10">
      <div className="container">
        <div className="divider-gold mb-16" />

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-serif text-2xl tracking-wider text-gold mb-4">
              Aurum
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed max-w-xs">
              Goldschmiedeatelier für Schmuck, freie Arbeiten und Restaurierungen
              – seit 1987 in München.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Atelier
            </h4>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Goldgasse 14
              <br />
              80331 München
              <br />
              +49 89 1234 5678
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
                href="mailto:atelier@aurum-goldschmiede.de"
                aria-label="E-Mail"
                className="h-10 w-10 border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-border text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Aurum Goldschmiede. Alle Rechte vorbehalten.</p>
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
