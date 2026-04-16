
# Portfolio-Webseite für Goldschmied

## Design-Konzept
**Stil:** Dunkel, elegant, seriös – Anthrazit (#1a1a1d) als Basis mit warmen Champagner-Akzenten (#d4b896 / #e8d4a8). Großzügige Abstände, dezente Serif-Headlines (z.B. Playfair Display) kombiniert mit klarer Sans-Serif für Fließtext (Inter). Sanfte Hover-Effekte und subtile Goldverläufe.

## Seitenstruktur (One-Pager mit Anchor-Navigation)

**1. Sticky Navigation**
Logo links, Menü rechts: Über mich · Werkstatt · Portfolio · Stimmen · Kontakt

**2. Hero / Über mich**
Vollflächiges Hero-Bild eines Goldschmieds bei der Arbeit, dunkler Overlay, eleganter Titel ("Handwerkskunst aus Leidenschaft"), kurzer Untertext und CTA "Portfolio entdecken". Darunter ein "Über mich"-Block mit Porträt und Geschichte des Goldschmieds.

**3. Werkstatt / Handwerk**
Erzählerische Sektion über Philosophie, Materialien und Arbeitsprozess. Zwei Spalten: atmosphärisches Werkstatt-Bild + Text mit kleinen Highlight-Stichworten (Tradition, Präzision, Unikate).

**4. Portfolio – 3 Kategorien**
Drei elegante Untersektionen, jeweils mit Überschrift und 3 Werken im Grid:
- **Die Goldschmiede** – handwerkliche Detailaufnahmen
- **Schmuck** – Ringe, Ketten, Ohrringe
- **Skulpturen** – künstlerische Goldobjekte

Jedes Bild öffnet eine **Lightbox** mit großer Ansicht, Werktitel, Material, Technik und ausführlicher Beschreibung.

**5. Kundenstimmen**
3 Testimonial-Karten in dezent hervorgehobenen Boxen mit Zitat, Name und Stern-Rating in Champagner.

**6. Kontaktformular**
Zweispaltig: links Kontaktdaten (Adresse, Telefon, E-Mail, Öffnungszeiten), rechts Formular (Name, E-Mail, Betreff, Nachricht). Submit zeigt Toast-Bestätigung.

**7. Footer**
Logo, kurzer Claim, Social-Links, Copyright – in dunklerem Ton mit goldenem Trennstrich.

## Bilder (KI-generiert, 9 Portfolio + 2 Atmosphäre)
- 1 Hero-Bild (Goldschmied an der Werkbank)
- 1 Werkstatt-Bild (Werkzeuge, Atmosphäre)
- 3× Goldschmiede (Detailaufnahmen Handwerk)
- 3× Schmuck (Ring, Kette, Ohrringe)
- 3× Skulpturen (künstlerische Goldobjekte)

Alle Bilder im konsistenten dunklen Stil mit warmem Lichteinfall.

## Technische Umsetzung
- Design-Tokens in `index.css` und `tailwind.config.ts` (Anthrazit/Champagner als HSL-Variablen)
- Wiederverwendbare Komponenten: `Hero`, `About`, `Workshop`, `PortfolioSection`, `Lightbox`, `Testimonials`, `Contact`, `Footer`
- Lightbox via shadcn `Dialog`
- Smooth-Scroll-Navigation zwischen Sektionen
- Vollständig responsive (Mobile: 1 Spalte, Tablet: 2, Desktop: 3)
