import craft1 from "@/assets/craft-1.jpg";
import craft2 from "@/assets/craft-2.jpg";
import craft3 from "@/assets/craft-3.jpg";
import jewelry1 from "@/assets/jewelry-1.jpg";
import jewelry2 from "@/assets/jewelry-2.jpg";
import jewelry3 from "@/assets/jewelry-3.jpg";
import sculpture1 from "@/assets/sculpture-1.jpg";
import sculpture2 from "@/assets/sculpture-2.jpg";
import sculpture3 from "@/assets/sculpture-3.jpg";

export type PortfolioItem = {
  id: string;
  title: string;
  image: string;
  material: string;
  technique: string;
  description: string;
};

export type PortfolioCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: PortfolioItem[];
};

export const portfolio: PortfolioCategory[] = [
  {
    id: "goldschmiede",
    title: "Die Goldschmiede",
    subtitle: "Handwerk in seiner reinsten Form",
    items: [
      {
        id: "g1",
        title: "Filigrane Gravur",
        image: craft1,
        material: "750er Gelbgold",
        technique: "Handgravur",
        description:
          "Eine in Stunden konzentrierter Arbeit von Hand gravierte Medaille. Jede Linie wurde mit einem traditionellen Stichel geführt – ein Werk, das die Stille der Werkstatt in sich trägt.",
      },
      {
        id: "g2",
        title: "Der Guss",
        image: craft2,
        material: "Feingold 999",
        technique: "Wachsausschmelzverfahren",
        description:
          "Der Moment, in dem geschmolzenes Gold in die Form fließt. Hier verbinden sich Jahrhunderte alte Techniken mit der Präzision moderner Goldschmiedekunst.",
      },
      {
        id: "g3",
        title: "Vollendung",
        image: craft3,
        material: "585er Roségold",
        technique: "Politur & Finish",
        description:
          "Die letzte Politur entscheidet über den Charakter eines Schmuckstücks. Mit feinsten Tüchern wird die Oberfläche zum Spiegel poliert, bis das Gold zu leben beginnt.",
      },
    ],
  },
  {
    id: "schmuck",
    title: "Schmuck",
    subtitle: "Unikate für besondere Momente",
    items: [
      {
        id: "s1",
        title: "Solitär Lumière",
        image: jewelry1,
        material: "750er Roségold, 0,4 ct Brillant",
        technique: "Vier-Krappen-Fassung",
        description:
          "Ein klassischer Verlobungsring, neu interpretiert. Die schmale Schiene aus warmem Roségold lässt den Brillanten frei schweben und fängt jedes Licht ein.",
      },
      {
        id: "s2",
        title: "Halskette Nuit",
        image: jewelry2,
        material: "585er Gelbgold",
        technique: "Handgefertigte Ankerkette",
        description:
          "Eine zarte Ankerkette mit einem kugelförmigen Anhänger – minimalistisch, zeitlos, und doch unverwechselbar. Geschaffen, um täglich getragen zu werden.",
      },
      {
        id: "s3",
        title: "Ohrhänger Cascade",
        image: jewelry3,
        material: "750er Roségold, Bergkristall",
        technique: "Filigranarbeit",
        description:
          "Tropfenförmige Ohrhänger, deren feine Bögen dem Fall eines Wassertropfens nachempfunden sind. Jeder Stein wurde von Hand selektiert und gefasst.",
      },
    ],
  },
  {
    id: "skulpturen",
    title: "Skulpturen",
    subtitle: "Kunst in Gold gegossen",
    items: [
      {
        id: "sk1",
        title: "Infinitum",
        image: sculpture1,
        material: "Bronze, vergoldet",
        technique: "Modelliert & poliert",
        description:
          "Eine Skulptur ohne Anfang und Ende. Die geschwungenen Flächen verschmelzen zu einer Form, die Bewegung in Stille verwandelt – eine Hommage an das Unendliche.",
      },
      {
        id: "sk2",
        title: "Equilibrium",
        image: sculpture2,
        material: "Messing, hochglanzpoliert",
        technique: "Konstruktion aus Hand",
        description:
          "Geometrische Strenge und spielerische Leichtigkeit. Würfel und Sphären halten sich in einem fragilen Gleichgewicht – ein Sinnbild für Balance im Verborgenen.",
      },
      {
        id: "sk3",
        title: "Aufwind",
        image: sculpture3,
        material: "Bronze, blattvergoldet",
        technique: "Gegossen & geschmiedet",
        description:
          "Eine schlanke Form, die wie eine Flamme nach oben strebt. Das warme Gold reflektiert das Licht und verleiht der Skulptur eine fast unwirkliche Präsenz.",
      },
    ],
  },
];
