import { useState } from "react";
import { portfolio, type PortfolioItem } from "@/data/portfolio";
import Lightbox from "./Lightbox";

const PortfolioSection = () => {
  const [active, setActive] = useState<PortfolioItem | null>(null);
  const [open, setOpen] = useState(false);

  const openItem = (item: PortfolioItem) => {
    setActive(item);
    setOpen(true);
  };

  return (
    <section id="portfolio" className="relative py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 h-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-surface-deep/0 to-background animate-divider-breathe" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-divider-shimmer" />
      </div>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
            Werke aus dem <span className="italic text-gold">Atelier</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mb-6" />
          <p className="text-foreground/70 leading-relaxed">
            Eine Auswahl aus drei Welten: dem täglichen Handwerk, getragenem
            Schmuck und freien skulpturalen Arbeiten.
          </p>
        </div>

        <div className="space-y-24">
          {portfolio.map((cat) => (
            <div key={cat.id}>
              <div className="flex items-end justify-between mb-10 pb-6 border-b border-border">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl mb-2">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground italic">{cat.subtitle}</p>
                </div>
                <span className="hidden sm:block font-serif text-5xl text-primary/30">
                  0{portfolio.indexOf(cat) + 1}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {cat.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => openItem(item)}
                    className="group relative overflow-hidden bg-surface-raised text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-deep via-surface-deep/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                        Ansehen
                      </p>
                      <h4 className="font-serif text-xl text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">{item.material}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox item={active} open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default PortfolioSection;
