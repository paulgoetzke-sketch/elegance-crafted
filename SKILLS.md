# SKILLS.md — Projekt-spezifische Skills & Tools

Diese Datei listet die konkreten Werkzeuge, Bibliotheken und Arbeits­muster, die in **Wesenberg Schmuck** eingesetzt werden. Ergänzt `CLAUDE.md` (Arbeitsplan) um operative Details.

---

## 🎨 Design-System

### Farbpalette (HSL in `src/styles/index.css`)

| Token        | Wert (HSL)       | Einsatz                       |
| ------------ | ---------------- | ----------------------------- |
| `background` | `240 6% 10%`     | Anthrazit-Grundfläche         |
| `foreground` | `36 30% 92%`     | Haupttext auf dunkel          |
| `primary`    | `38 45% 68%`     | Champagner-Gold (Akzent, CTA) |
| `muted`      | `240 5% 18%`     | Dezente Flächen               |
| `border`     | `240 5% 20%`     | Trennlinien                   |

### Typografie

- **Playfair Display** — Serif, Headings (`h1`–`h5`)
- **Inter** — Sans, Body / UI

Geladen via `@import url(...)` in `src/styles/index.css`.

### Utility-Klassen (projekt-spezifisch)

- `.text-gold` — Text mit Gold-Gradient
- `.bg-gold-gradient` — Hintergrund-Gradient
- `.divider-gold` — 1-px-Trennlinie mit Gold-Fade
- `.shadow-elegant` / `.shadow-gold` — projekt-spezifische Shadow-Tokens

---

## 🧰 Entwicklungs-Werkzeuge

### NPM Scripts

| Script               | Zweck                                         |
| -------------------- | --------------------------------------------- |
| `npm run dev`        | Dev-Server (`localhost:8080`)                 |
| `npm run build`      | Produktions-Build nach `dist/`                |
| `npm run build:dev`  | Build im Development-Modus                    |
| `npm run preview`    | Preview des Builds                            |
| `npm run lint`       | ESLint über das gesamte Projekt               |
| `npm run test`       | Vitest einmalig                               |
| `npm run test:watch` | Vitest im Watch-Mode                          |

### shadcn/ui

- Config: `components.json`
- Komponenten werden per CLI generiert und in `src/components/ui/` abgelegt
- Basis: Radix UI Primitive + Tailwind-Varianten via `class-variance-authority`

### Path-Alias

```ts
import { cn } from "@/lib/utils";
import Hero from "@/components/Hero";
import heroImg from "@/assets/images/hero-goldsmith.jpg";
```

---

## 📦 Wichtige Dependencies

| Paket                    | Zweck                                       |
| ------------------------ | ------------------------------------------- |
| `react-router-dom`       | Client-seitiges Routing                     |
| `@tanstack/react-query`  | Server-State / Data-Fetching                |
| `react-hook-form` + `zod`| Formulare mit schema-basierter Validierung  |
| `lucide-react`           | Icon-Set                                    |
| `embla-carousel-react`   | Karussells / Slider                         |
| `sonner`                 | Toast-Notifications                         |
| `next-themes`            | Dark/Light-Theme-Switch                     |
| `tailwind-merge` + `clsx`| Klassennamen-Merging (`cn`-Utility)         |

---

## ✅ Qualitäts-Checks vor Commit

1. `npm run lint` — keine Errors
2. `npm run test` — alle Tests grün
3. `npm run build` — Build läuft durch, keine TypeScript-Fehler
4. Dev-Server öffnen und betroffene Section manuell prüfen (Desktop + Mobile-Viewport)

---

## 🔌 MCP-Server (aktuell konfiguriert: –)

Falls später ergänzt:

- **GitHub MCP** — Commits, PRs, Issues
- **Browser MCP** — Live-Preview, Screenshots
- **Filesystem MCP** — Projektdateien verwalten

Einträge hier aktualisieren, sobald MCP-Server eingerichtet sind.
