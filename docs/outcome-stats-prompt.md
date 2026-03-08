# Expert Care → Outcomes Stats Section (Eight Sleep Pattern)

## CONTEXT

You are replacing the `ExpertCare` section in the Forbes Vitals homepage with a new `OutcomeStats` section inspired by Eight Sleep's results layout. The current Expert Care section has a BioIQ screen mock, thumbnail strip, and a four-item checklist. We are removing all of that and replacing it with a dark-background stat section featuring 4 floating stat cards connected by vertical stems to a horizontal baseline — the pattern Eight Sleep uses on their homepage.

The component is currently `components/homepage/ExpertCare.tsx`. Rename it to `OutcomeStats.tsx` (and update the import in `page.tsx`).

**Read `.cursor/llms.txt` before writing any code.** All tokens, fonts, and spacing rules apply.

---

## TASK

Gut `ExpertCare.tsx` and rebuild it as `OutcomeStats.tsx` — a dark-background section with centered header text and 4 staggered stat cards connected to a horizontal baseline by thin vertical stems.

---

## VISUAL REFERENCE (Eight Sleep pattern)

```
┌─────────────────────────────────────────────────────────────────┐
│  (dark bg — var(--dark) or #1A1A2E)                             │
│                                                                 │
│         Real results. Measured, not promised.                   │
│     Outcomes tracked across 12,000+ Forbes Vitals patients.    │
│                                                                 │
│   ┌──────────┐                                                  │
│   │  92%     │              ┌──────────┐                        │
│   │  Feel    │              │  87      │         ┌──────────┐  │
│   │  measur- │  ┌────────┐  │  Biomark-│         │  4x      │  │
│   │  ably    │  │  78%   │  │  ers     │         │  More    │  │
│   │  better  │  │  See   │  │  tested  │         │  biomark-│  │
│   │  within  │  │  impro-│  │          │         │  er data │  │
│   │  90 days │  │  ved   │  │          │         │          │  │
│   └────┬─────┘  │  ener- │  └────┬─────┘         └────┬─────┘  │
│        │        │  gy... │       │                     │        │
│        │        └────┬───┘       │                     │        │
│        │             │           │                     │        │
│        ●             ●           ●                     ●        │
│   ─────┴─────────────┴───────────┴─────────────────────┴──────  │
│   (thin horizontal baseline with tick marks)                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

The cards are at **staggered heights** — not aligned. This creates visual rhythm. The vertical stems connect each card's bottom to a dot on the baseline.

---

## SECTION HEADER

- **H2:** "Real results. Measured, not promised."
  - Font: `font-display`, `clamp(28px, 4.5vw, 44px)`, weight 700, white
  - Center-aligned
- **Sub:** "Outcomes tracked across 12,000+ Forbes Vitals patients."
  - Font-sans, 16px, weight 400, `rgba(255,255,255,0.55)`
  - Center-aligned, max-width 480px
  - Margin-bottom: 64px

---

## STAT CARD DATA

```ts
const stats = [
  {
    value: '92%',
    label: 'Feel measurably better within 90 days',
  },
  {
    value: '78%',
    label: 'See improved energy levels within 2 weeks',
  },
  {
    value: '87',
    label: 'Biomarkers tested — 6x more than a standard physical',
  },
  {
    value: '4x',
    label: 'More biomarker data than a standard physical',
  },
];
```

---

## STAT CARD STYLING

Each card:
- Background: `rgba(255,255,255,0.08)` with `backdrop-filter: blur(12px)`
- Border: `1px solid rgba(255,255,255,0.1)`
- Border-radius: `16px`
- Padding: `24px 20px`
- Width: `200px` (fixed)
- **Value:** font-display, `clamp(32px, 4vw, 44px)`, weight 700, white
- **Label:** font-sans, 14px, weight 400, `rgba(255,255,255,0.6)`, line-height 1.5, margin-top 8px

---

## STAGGERED LAYOUT (Desktop)

Use a flex row with 4 columns evenly spaced. Each column contains:
1. The stat card (top)
2. A vertical stem line (middle)
3. A dot at the bottom sitting on the baseline

**Stagger heights using `margin-top` on each card:**
- Card 1: `margin-top: 0`
- Card 2: `margin-top: 48px`
- Card 3: `margin-top: 16px`
- Card 4: `margin-top: 64px`

This creates the cascading rhythm from the Eight Sleep reference.

**Vertical stems:**
- Width: `1px`
- Color: `rgba(255,255,255,0.2)`
- Height: stretches from card bottom to the baseline (use `flex: 1` in a column flex layout)
- Centered under each card

**Dots:**
- `8px` circles
- Background: `rgba(255,255,255,0.5)`
- Centered at the bottom of each stem

**Horizontal baseline:**
- Full-width line at the bottom of the stat area
- `1px solid rgba(255,255,255,0.12)`
- Small tick marks every ~40px along the line (decorative — use a repeating background or pseudo-elements)

---

## SECTION CONTAINER

- Background: `var(--dark)` (#1A1A2E)
- Padding: `96px 24px 64px`
- Overflow: hidden
- Full-width (no max-width constraint on the background)
- Inner content: `max-width: 1080px; margin: 0 auto;`

---

## SCROLL-TRIGGERED COUNT-UP ANIMATION

Each stat value should count up from 0 when the section scrolls into view:
- Use `IntersectionObserver` with `threshold: 0.3`
- Animate over 1.5s with easing
- `92%` counts from 0 → 92, then appends `%`
- `78%` counts from 0 → 78, then appends `%`
- `87` counts from 0 → 87
- `4x` counts from 0 → 4, then appends `x`
- Only trigger once (not on every scroll)

---

## MOBILE (below `md`)

- Cards stack in a 2×2 grid (not staggered)
- Remove vertical stems and baseline
- Cards: full width of their grid cell
- Grid gap: 16px
- Section padding reduces to `64px 20px 48px`

---

## FILE CHANGES

1. **Rename:** `ExpertCare.tsx` → `OutcomeStats.tsx`
2. **Update import in `page.tsx`:** change `ExpertCare` → `OutcomeStats`
3. **Keep the same position** in the page order (between QualificationCards/BMI and ExpertTeam)

---

## ACCEPTANCE CRITERIA

- [ ] Dark background section with centered H2 + sub-copy
- [ ] 4 frosted-glass stat cards at staggered heights
- [ ] Vertical stems connecting each card to a horizontal baseline
- [ ] Dots at stem/baseline intersection points
- [ ] Decorative tick marks along the baseline
- [ ] Count-up animation triggers on scroll (once)
- [ ] Mobile: 2×2 grid, no stems or baseline
- [ ] Component renamed from ExpertCare to OutcomeStats
- [ ] Import updated in page.tsx

---

## DO NOT

- Do not keep any of the old Expert Care content (BioIQ mock, thumbnail strip, checklist)
- Do not use light/cream background — this section is dark
- Do not align all cards at the same height — the stagger is essential
- Do not use CSS modules or custom CSS files — Tailwind only
- Do not modify any other components or sections
- Do not skip the count-up animation — it's the hero moment of this section
