import { Star, ExternalLink } from "lucide-react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Goldschmiede+Wesenberg+Rezensionen&stick=H4sIAAAAAAAAAONgkxIxNDQ0NzC0MDQ0NTYGIRMjS-MNjIyvGJXc83NSipMzcjNTU1IVwlOLU_OSUovSFYJSq1LzijPz81LzFrESoQgA0Kvv72UAAAA&hl=de-DE#lkt=LocalPoiReviews";

const reviews = [
  {
    quote:
      "Kompetente Beratung und traumhaftes Ergebnis – unsere Eheringe sind ein Unikat geworden.",
    name: "Anja K.",
  },
  {
    quote:
      "Wunderschöne Handwerkskunst und sehr freundlicher Service. Absolute Empfehlung!",
    name: "Markus L.",
  },
  {
    quote:
      "Ein Erbstück meiner Mutter wurde liebevoll umgearbeitet. Ich bin überwältigt vom Ergebnis.",
    name: "Petra S.",
  },
  {
    quote:
      "Individuelle Anfertigung nach meinen Vorstellungen – präzise und mit viel Herzblut gemacht.",
    name: "Sebastian R.",
  },
  {
    quote:
      "Sehr persönliche Betreuung und höchste Qualität. Man merkt die jahrzehntelange Erfahrung.",
    name: "Christina W.",
  },
  {
    quote:
      "Meine alte Kette erstrahlt in neuem Glanz. Faire Preise und exzellentes Handwerk.",
    name: "Dr. Thomas H.",
  },
];

const GoogleG = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const ReviewCard = ({ quote, name }: { quote: string; name: string }) => (
  <figure className="mx-3 w-[320px] sm:w-[360px] shrink-0 bg-surface-raised border border-border p-6 flex flex-col hover:border-primary/40 transition-colors duration-500">
    <div className="flex gap-0.5 mb-4 text-primary">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-current" />
      ))}
    </div>
    <blockquote className="text-sm text-foreground/80 leading-relaxed mb-5 flex-1">
      „{quote}"
    </blockquote>
    <figcaption className="text-xs uppercase tracking-wider text-muted-foreground">
      {name}
    </figcaption>
  </figure>
);

const GoogleReviews = () => {
  const doubled = [...reviews, ...reviews];

  return (
    <section aria-label="Google Bewertungen" className="py-16 md:py-20 overflow-hidden">
      <div className="container">
        <div className="flex items-center justify-center gap-3 mb-10">
          <GoogleG />
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg text-foreground">4,9</span>
            <div className="flex gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Google Bewertungen
          </span>
        </div>
      </div>

      <div
        className="group relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {doubled.map((r, i) => (
            <ReviewCard key={i} quote={r.quote} name={r.name} />
          ))}
        </div>
      </div>

      <div className="container mt-10 flex justify-center">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary hover:text-primary-glow transition-colors"
        >
          Alle Bewertungen auf Google ansehen
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
};

export default GoogleReviews;
