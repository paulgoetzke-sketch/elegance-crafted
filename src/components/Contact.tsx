import { useState, FormEvent } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Nachricht versendet", {
        description: "Vielen Dank – ich melde mich in Kürze persönlich bei Ihnen.",
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">
            Kontakt
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
            Lassen Sie uns <span className="italic text-gold">sprechen</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mb-6" />
          <p className="text-foreground/70 leading-relaxed">
            Ob Anfertigung, Beratung oder Ankauf – ich nehme mir Zeit für Ihr
            Anliegen.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
          <div className="md:col-span-2 space-y-8">
            <div className="flex gap-4">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg mb-1">Wesenberg</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Burgstraße 9
                  <br />
                  03046 Cottbus
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg mb-1">Telefon</h3>
                <a
                  href="tel:+4935525031"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  +49 355 25031
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg mb-1">E-Mail</h3>
                <a
                  href="mailto:wesenberg@goldmail.de"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  wesenberg@goldmail.de
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg mb-1">Öffnungszeiten</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Di – Fr: 10:00 – 18:00
                  <br />
                  Sa: 11:00 – 16:00
                  <br />
                  Termine auf Anfrage
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-surface-raised border border-border p-8 lg:p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-border py-2 text-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2"
                >
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-border py-2 text-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2"
              >
                Betreff
              </label>
              <input
                id="subject"
                name="subject"
                required
                className="w-full bg-transparent border-b border-border py-2 text-foreground focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2"
              >
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-transparent border-b border-border py-2 text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] hover:shadow-gold transition-[box-shadow,transform] duration-500 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Wird gesendet…" : "Nachricht senden"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
