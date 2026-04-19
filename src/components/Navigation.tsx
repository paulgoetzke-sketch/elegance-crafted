import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#workshop", label: "Werkstatt" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Kontakt" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,border] duration-500",
        scrolled
          ? "bg-surface-deep/80 backdrop-blur-md border-b border-border/60"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl tracking-wider text-gold">Wesenberg</span>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Goldschmiede
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-[0.18em] text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Menü öffnen"
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-surface-deep/95 backdrop-blur-md">
          <div className="container flex flex-col py-6 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.18em] text-foreground/80 hover:text-primary transition-colors py-2"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
