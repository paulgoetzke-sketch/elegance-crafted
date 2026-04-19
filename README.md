# Wesenberg Schmuck

Portfolio-Website für einen Goldschmiedemeister. Einseitige, elegante Landingpage mit Hero, Werkstatt-Einblick, Portfolio-Galerie, About-Bereich und Kontakt.

## Tech-Stack

- **Vite 5** + **React 18** + **TypeScript 5**
- **Tailwind CSS 3** mit HSL-basierten Design-Tokens (Anthrazit + Champagner-Gold)
- **shadcn/ui** (Radix UI-Primitive) + `lucide-react`
- `react-router-dom` v6
- `@tanstack/react-query`
- `react-hook-form` + `zod`
- **Vitest** + `@testing-library/react`

## Setup

```bash
# Dependencies installieren
npm install
# oder
bun install

# Dev-Server starten (http://localhost:8080)
npm run dev

# Build erzeugen
npm run build

# Build lokal ansehen
npm run preview
```

## Scripts

| Script               | Zweck                            |
| -------------------- | -------------------------------- |
| `npm run dev`        | Dev-Server mit HMR               |
| `npm run build`      | Produktions-Build nach `dist/`   |
| `npm run build:dev`  | Build im Development-Modus       |
| `npm run preview`    | Build lokal servieren            |
| `npm run lint`       | ESLint über gesamtes Projekt     |
| `npm run test`       | Vitest einmalig                  |
| `npm run test:watch` | Vitest im Watch-Mode             |

## Umgebungsvariablen

Siehe `.env.example` für die vollständige Liste. Lokal:

```bash
cp .env.example .env
# Werte eintragen
```

## Projekt-Struktur

```
src/
├── main.tsx            React-Entry
├── App.tsx             Root-Komponente + Router
├── assets/
│   └── images/         Große Bildquellen (Schmiede, Portraits ...)
├── components/         UI-Komponenten (Hero, Workshop, Portfolio, About, ...)
│   └── ui/             shadcn/ui-Primitive
├── data/               Statische Daten (z. B. Portfolio-Einträge)
├── hooks/              Custom React Hooks
├── lib/                Hilfsfunktionen (`cn`, API-Wrapper)
├── pages/              Routen (Index, NotFound)
├── styles/             Globale Styles (`index.css` mit Design-Tokens)
├── test/               Vitest-Setup + Tests
└── types/              Geteilte TypeScript-Typen
```

Path-Alias: `@/…` → `src/…`

## Design-Tokens

Alle Farben als HSL in `src/styles/index.css`. Kernpalette:

- `--background`: Anthrazit (`240 6% 10%`)
- `--primary`: Champagner-Gold (`38 45% 68%`)
- `--foreground`: Warmes Weiß (`36 30% 92%`)

Typografie via Google Fonts (Playfair Display + Inter).

## Deployment

Build mit `npm run build` → statische Dateien in `dist/`. Kompatibel mit Vercel, Netlify, Lovable oder jedem Static-Host.

## Weiterführende Dokumente

- [`CLAUDE.md`](./CLAUDE.md) — Arbeitsplan für den KI-Agenten
- [`SKILLS.md`](./SKILLS.md) — Projekt-spezifische Tools & Konventionen
