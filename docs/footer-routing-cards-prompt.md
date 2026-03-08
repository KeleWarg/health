# Pre-Footer Routing Cards — Copy Update

## CONTEXT

You are updating the two side-by-side routing cards that sit between the FAQ section and the footer on the Forbes Vitals homepage. These are last-chance conversion cards — the visitor has scrolled the entire page. The copy should be specific and action-oriented, not introductory.

Currently the cards only have a title and one sub-line each. We are adding two more lines of copy to each card.

**Read `.cursor/llms.txt` before writing any code.** All tokens, fonts, and spacing rules apply.

---

## TASK

Update the content in the two pre-footer routing cards. Keep the existing card layout, styling, product images, and arrow buttons exactly as they are. Only update the text content and add the additional lines.

---

## CARD CONTENT

### Card 1: NAD+ Therapy (teal/dark green card)

```ts
{
  title: 'NAD+ Therapy',
  line1: 'Restore your energy at the cellular level.',
  line2: 'Clinician-prescribed. Personalized to your biology. $0 due until approved.',
  line3: 'From $199/mo · Free delivery · Cancel anytime',
  href: '/peptides',
}
```

### Card 2: Biomarker Testing (warm/brown card)

```ts
{
  title: 'Biomarker Testing',
  line1: '87 markers. The test your physical never runs.',
  line2: 'Metabolic, hormonal, cardiovascular, thyroid, and inflammatory — one draw, full picture.',
  line3: '$399/yr · HSA/FSA eligible · Results in days',
  href: '/biomarkers',
}
```

---

## REQUIREMENTS

### Text hierarchy per card

- **Title:** Keep existing styling (font-display, large, white, bold)
- **Line 1:** Keep existing sub-copy styling (font-sans, ~15px, `rgba(255,255,255,0.7)`)
- **Line 2:** Same font-sans, 14px, weight 400, `rgba(255,255,255,0.6)`, line-height 1.5. Add `margin-top: 8px` above this line.
- **Line 3:** font-sans, 13px, weight 500, `rgba(255,255,255,0.45)`, letter-spacing `0.02em`. Separator dots (`·`) between items. Add `margin-top: 12px` above this line.

### Layout

- Text block should stay left-aligned within each card
- Product image / arrow button stays right-aligned (unchanged)
- If the card height needs to grow slightly to accommodate the extra lines, that's fine — let it grow naturally
- Both cards should remain equal height (use `min-height` or flex stretch)

### Mobile

- Cards stack vertically (if not already)
- All three lines visible — no truncation
- Product image can sit below the text block on mobile if needed

---

## ACCEPTANCE CRITERIA

- [ ] NAD+ card shows title + 3 lines of copy
- [ ] Biomarker card shows title + 3 lines of copy
- [ ] Line 3 contains pricing and logistics with dot separators
- [ ] Text hierarchy is visually distinct across all 3 lines (size + opacity stepping down)
- [ ] Card layout, images, arrow buttons, and link behavior unchanged
- [ ] Cards are equal height on desktop
- [ ] Mobile: cards stack, all text visible

---

## DO NOT

- Do not change card background colors, images, or arrow buttons
- Do not change the card component structure or grid layout
- Do not modify the footer below these cards
- Do not modify any other components or sections
- Do not use CSS modules or custom CSS files — Tailwind only
