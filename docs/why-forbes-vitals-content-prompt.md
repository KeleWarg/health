# WhyForbesVitals — Content Rewrite

## CONTEXT

You are updating the content in the "Why people choose Forbes Vitals" section of the Forbes Vitals homepage. The component is `components/homepage/WhyForbesVitals.tsx`. The current card content reads like internal feature specs — generic bullet lists without emotional weight or specificity. We are replacing all card content with sharper, benefit-driven copy.

The section layout (3×2 grid, card styling, badge component, doctor quote header, "+More" CTA card) stays exactly the same. Only the **text content** inside each card changes.

**Read `.cursor/llms.txt` before writing any code.** All tokens, fonts, and spacing rules apply.

---

## TASK

Replace the card data array in `WhyForbesVitals.tsx` with the content below. Do not change the card component structure, styling, grid layout, badge styling, or the "+More" CTA card design.

---

## SECTION HEADER (unchanged layout, updated quote)

- **H2:** "Why people choose Forbes Vitals."
- **Quote:** "The standard of care most people receive misses the markers that matter most."
- **Attribution:** **Dr. James Liu, M.D.** · Chief Medical Officer, Forbes Vitals

---

## CARD DATA

```ts
const cards = [
  {
    headline: '87 markers. Not 14.',
    badge: 'Biomarker Testing',
    items: [
      'Your annual physical checks ~14 markers. We check 87.',
      'Metabolic, hormonal, thyroid, cardiovascular, inflammatory — all in one draw.',
      'The markers that explain why you\'re tired, not just that you are.',
      'Results in days, not weeks. Reviewed by a real clinician.',
      'One test gives you more data than most people get in a decade.',
    ],
  },
  {
    headline: 'Every prescription starts with a physician.',
    badge: 'Clinical Oversight',
    items: [
      'A board-certified physician reads your results before approving anything.',
      'Specialists in internal medicine, endocrinology, and preventive health.',
      'Your protocol gets adjusted as your body responds — not set and forgotten.',
      'Average review time: 24 hours from submission to approval.',
      'You can message your clinician directly. They respond.',
    ],
  },
  {
    headline: 'You don\'t pay until approved.',
    badge: '$0 Until Prescribed',
    items: [
      'A clinician reviews your profile first. If they don\'t prescribe, you owe nothing.',
      'No credit card required to take the quiz.',
      'No contracts. Cancel from your dashboard in two clicks.',
      'HSA and FSA eligible for both programs.',
      'The price you see is the price you pay. No add-on fees at checkout.',
    ],
  },
  {
    headline: 'A protocol that evolves with you.',
    badge: 'Personalized Therapy',
    items: [
      'Dosing based on your biomarkers, BMI, age, and goals — not a one-size formula.',
      'Your clinician adjusts as your labs improve. The protocol evolves with you.',
      'Free refills shipped monthly. You never have to remember to reorder.',
      'Compounded by U.S.-licensed pharmacies. Every batch tested before it ships.',
      'One subscription. Medication, clinician access, and tracking — all included.',
    ],
  },
  {
    headline: '92% feel measurably better within 90 days.',
    badge: 'Real Outcomes',
    items: [
      'Energy, recovery, sleep, and clarity — tracked through your dashboard.',
      'Not a survey. Real biomarker data showing what\'s actually changing.',
      'Most patients notice a difference within the first two weeks.',
      'Your Vitality Index or BioIQ score updates as your markers improve.',
      'The kind of results you can feel and prove.',
    ],
  },
];
```

---

## "+MORE" CTA CARD (Card 6)

Keep the existing "+More / Everything included." card exactly as it is — same layout, same CTA button ("See what's in your protocol"), same styling. Do not modify this card.

---

## REQUIREMENTS

- Replace only the card content data — headlines, badges, and bullet items
- Do not change the card component structure, grid layout, or visual styling
- Do not change the "+More" CTA card
- Keep the section header (H2, quote, attribution) — update the quote text to match above if it differs
- Each card must have exactly 5 bullet items
- Every bullet should be a complete, benefit-driven sentence (not a feature label)

---

## ACCEPTANCE CRITERIA

- [ ] All 5 content cards have updated headlines, badges, and 5 bullets each
- [ ] Card headlines: "87 markers. Not 14." / "Every prescription starts with a physician." / "You don't pay until approved." / "A protocol that evolves with you." / "92% feel measurably better within 90 days."
- [ ] "+More" CTA card is unchanged
- [ ] Section header quote matches: "The standard of care most people receive misses the markers that matter most."
- [ ] No layout, styling, or structural changes to the component
- [ ] Tone is confident and positive — no doubt-introducing negatives about competitors

---

## DO NOT

- Do not change the card component, grid, badge styling, or any visual code
- Do not change the "+More" card content or design
- Do not introduce competitor comparisons or "unlike others" framing
- Do not add new cards or remove cards
- Do not modify any other components or sections
