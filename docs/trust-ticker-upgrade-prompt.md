# TrustTicker Upgrade — Stat-Bar Marquee

## CONTEXT

You are updating `components/homepage/TrustTicker.tsx` in the Forbes Vitals homepage. The current ticker is a single-line emoji marquee (e.g. "💰 Clear Pricing · 🚚 Free Delivery · ..."). We are replacing it with a **two-line stat-bar style** — each item has a bold headline on top and a muted supporting line below, separated by vertical dividers. The items still loop infinitely across the full viewport width, same as today. The press bar below the ticker is unchanged.

**Reference:** Function Health stat bar (dark bg, white bold headlines, muted sub-lines, thin vertical dividers between items).

**Read `.cursor/llms.txt` before writing any code.** All tokens, fonts, and spacing rules apply.

---

## TASK

Replace the single-line emoji ticker items in `TrustTicker.tsx` with the two-line stat-bar format described below. Keep the same `translateX(-50%)` infinite loop animation pattern. Keep the press bar section exactly as-is.

---

## TICKER DATA

Replace the current items array with this:

```ts
const tickerItems = [
  { headline: 'Licensed Clinicians', sub: 'Board-certified MDs' },
  { headline: '100% Online', sub: 'No office visits required' },
  { headline: 'HIPAA Compliant', sub: 'End-to-end encryption' },
  { headline: 'HSA/FSA Eligible', sub: 'Use pre-tax dollars' },
  { headline: 'Cancel Anytime', sub: 'No contracts. No calls.' },
  { headline: 'Free Delivery', sub: 'Shipped to your door' },
  { headline: 'Clear Pricing', sub: 'No hidden fees' },
  { headline: '$0 Due Until Prescribed', sub: 'Pay only if approved' },
  { headline: '12,000+ Patients', sub: 'Backed by Forbes Health' },
  { headline: '87+ Biomarkers', sub: 'Tested 2x per year' },
];
```

---

## REQUIREMENTS

### Layout per item
- Two lines stacked vertically, centered within each item block
- **Headline:** font-sans, 14px, font-weight 600, white (`rgba(255,255,255,0.92)`)
- **Supporting line:** font-sans, 12px, font-weight 400, muted white (`rgba(255,255,255,0.45)`)
- Line-height: headline 1.2, sub 1.3
- Gap between headline and sub: 2px
- Each item block: `padding: 0 36px` (horizontal breathing room between dividers)

### Dividers
- Thin vertical line between each item: `1px solid rgba(255,255,255,0.12)`
- Full height of the text block (not the full ticker strip)
- Implemented as `border-right` on each item or a dedicated `<span>` divider — whichever is cleaner

### Ticker strip
- Background: `var(--dark)` (same as current)
- Padding: `22px 0` (slightly taller than current `18px` to accommodate two lines)
- Overflow hidden, flex row, `white-space: nowrap`
- Animation: `translateX(-50%)` infinite linear — same pattern as current
- Duplicate the items array once for seamless loop (render `[...tickerItems, ...tickerItems]`)
- Animation duration: `45s` (slower than current `26s` because there are more/wider items)

### Mobile
- Same treatment, no changes — the marquee naturally handles narrow viewports
- If items feel too wide on mobile, reduce item `padding` to `0 24px` below `md` breakpoint

### No emojis
- Remove all emoji prefixes from ticker items
- No SVG icons either — the two-line format carries enough visual weight on its own

---

## ACCEPTANCE CRITERIA

- [ ] Ticker renders 10 items in two-line stat-bar format (headline + sub)
- [ ] Items loop infinitely left-to-right with no visible seam
- [ ] Vertical dividers between each item
- [ ] Dark background, white headline, muted sub-line
- [ ] Press bar below is completely unchanged
- [ ] No emojis, no SVG icons in the ticker
- [ ] Responsive — works on mobile without overflow or clipping

---

## DO NOT

- Do not change the press bar ("As seen on" + logos) — leave it exactly as-is
- Do not add icons or emojis to the new ticker items
- Do not use CSS modules or custom CSS files — Tailwind only
- Do not change the component file name or export
- Do not modify any other components
