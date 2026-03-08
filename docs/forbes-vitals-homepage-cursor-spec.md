# Forbes Vitals Homepage — Cursor Build Spec

## CONTEXT

You are building the Forbes Vitals homepage (`/`) in Next.js 14 with Tailwind CSS. This is a marketing landing page for two products:

1. **NAD+ Therapy** — peptide protocol, routes to `/peptides` (Vitality Index funnel)
2. **Biomarker Testing** — 87-marker blood panel, routes to `/biomarkers` (BioIQ funnel)

**Before writing any code, read `.cursor/llms.txt`.** All design tokens, fonts, colors, component patterns, animation specs, icon rules, spacing, and content tone rules are defined there and apply to this page without exception.

---

## TECH STACK

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS only — no custom CSS files, no CSS modules
- **Images:** `next/image` — solid color bg fallback on all images until real assets are provided
- **Icons:** Per llms.txt — SVG stroke only
- **Animations:** Tailwind utilities + `@keyframes` in `tailwind.config.ts`

---

## FILE STRUCTURE

```
app/
  page.tsx
  layout.tsx
  globals.css
components/
  homepage/
    Nav.tsx
    Hero.tsx
    NavCards.tsx
    TrustTicker.tsx
    ProductSection.tsx      ← reusable for NAD+ and Biomarkers
    BmiCalculator.tsx
    ExpertCare.tsx
    QualificationCards.tsx
    ExpertTeam.tsx
    ClinicalTrust.tsx
    CmoTrust.tsx
    WhyForbesVitals.tsx
    Faq.tsx
    Footer.tsx
    StickyQuizTray.tsx
```

---

## PAGE ORDER

```
1.  Nav (fixed)
2.  Hero
3.  NavCards
4.  TrustTicker
5.  ProductSection — NAD+
6.  ProductSection — Biomarkers
7.  BmiCalculator
8.  ExpertCare
9.  QualificationCards
10. ExpertTeam
11. ClinicalTrust
12. CmoTrust
13. WhyForbesVitals
14. Faq
15. Footer
16. StickyQuizTray (fixed)
```

---

## SECTION SPECS

---

### `Nav.tsx`

Fixed top, backdrop blur, semi-transparent bg.

- **Left:** Logo — "Forbes Vitals" wordmark
- **Center (hidden mobile):** Nav links — NAD+ Therapy · Biomarker Testing · How It Works · Our Team
- **Right:** "Get Started" primary button — onClick opens `StickyQuizTray`

---

### `Hero.tsx`

Full-viewport dark green gradient section. Centered text layout.

- **Eyebrow:** "Forbes Health · Clinician-Led Programs"
- **H1:** "Live with more [cycling word]"
  - Cycling word array: `['energy.', 'resilience.', 'clarity.', 'time.']`
  - Interval: 2400ms. Transition: fade + translateY on swap. Word in teal accent color.
- **Sub:** "Two clinician-led programs designed to help you feel better, age slower, and understand what's really going on inside your body."
- **CTAs:**
  - Primary (dark context white pill): "Discover Your Vitality Index →" → `/peptides`
  - Secondary (dark context ghost pill): "Discover Your BioIQ →" → `/biomarkers`
- **Social proof line:** "Trusted by 12,000+ patients · Backed by Forbes Health"
- All children stagger `fadeUp` entry animation — define in `tailwind.config.ts`

---

### `NavCards.tsx`

Two stacked tappable routing cards. Each card is a `<Link>`.

**Card anatomy (left → right):**
1. Icon thumb — category SVG icon
2. Body — label + one-line hook + inline routing links (`Take the Test · Learn More`)
3. Arrow SVG — right edge

**Card data:**
```ts
[
  { label: 'NAD+ Therapy', hook: 'Restore your energy at the cellular level.', quizHref: '/peptides', learnHref: '/nad' },
  { label: 'Biomarker Testing', hook: '87 markers. The test your physical never runs.', quizHref: '/biomarkers', learnHref: '/biomarkers-info' },
]
```

---

### `TrustTicker.tsx`

Two parts:

**Ticker strip (dark bg):** Infinite scrolling marquee. 7 items duplicated for seamless loop:
Clear Pricing · Free Delivery · Licensed Clinicians · 100% Online · HIPAA Compliant · HSA/FSA Eligible · Cancel Anytime

Each item preceded by a small SVG utility icon. Animation: `translateX(-50%)` infinite linear.

**Press bar (light bg):** "As seen on" label + logo names: Forbes · Bloomberg · Healthline · WebMD

---

### `ProductSection.tsx`

Reusable. Props drive all content. Used twice — once for NAD+, once for Biomarkers. Alternate section backgrounds per llms.txt.

**Flow (top → bottom):**
1. Eyebrow + H2 (with italic teal accent phrase)
2. Horizontal-scroll carousel — cards with gradient photo zone + white overlay (goal label, marker name, 2 bullets)
3. H3 + body copy
4. Routing buttons — primary quiz CTA + text learn link
5. Product image card — solid bg placeholder for `next/image`
6. Checklist — teal circle checkmark icons + items
7. Pill CTA — "Learn More"
8. Legal disclaimer

**NAD+ data:**
```ts
eyebrow: 'Clinician-Prescribed NAD+ Therapy'
h2: 'What if your body could feel '
h2Accent: 'ten years younger?'
h3: 'A clinician-guided protocol built around your biology.'
body: 'NAD+ is the molecule behind your energy, your recovery, and your immune system — and it\'s one of the few things science can actually restore. Our protocols bring it back.'
checklistTitle: 'Everything you need — included:'
checklist: [
  'Prescription to clinician-prescribed NAD+ therapy',
  '1:1 physician guidance throughout your protocol',
  'Dosing personalized as your body responds',
  'Free refills shipped on time, every month',
  '$0 due until your clinician approves',
]
quizHref: '/peptides'
learnHref: '/nad'
legal: 'Prescriptions are issued only after an online consultation with an independent licensed provider. Compounded medications are dispensed by state-licensed pharmacies but are not FDA-approved.'
carousel: [
  { goalLabel: 'Goal', goalValue: 'Restore energy', markerName: 'NAD+', markerLabel: 'Cellular Energy', bullets: ['Mitochondrial support', 'Sustained daily energy'], gradientFrom: '#c8ddd7', gradientTo: '#8ebfb4' },
  { goalLabel: 'Goal', goalValue: 'Strengthen immunity', markerName: 'IL-6', markerLabel: 'Immune Marker', bullets: ['Reduce chronic inflammation', 'Improve immune response'], gradientFrom: '#d4cfe8', gradientTo: '#a89fc4' },
  { goalLabel: 'Goal', goalValue: 'Faster recovery', markerName: 'CRP', markerLabel: 'Recovery Marker', bullets: ['Reduce soreness', 'Bounce back faster'], gradientFrom: '#d9e8d4', gradientTo: '#9fc4a8' },
  { goalLabel: 'Goal', goalValue: 'Mental clarity', markerName: 'BDNF', markerLabel: 'Brain Health', bullets: ['Sharper focus', 'Reduced brain fog'], gradientFrom: '#e8dfd4', gradientTo: '#c4b09f' },
]
```

**Biomarker data:**
```ts
eyebrow: 'Comprehensive Biomarker Testing'
h2: 'The most empowering thing you can do for your health '
h2Accent: 'takes one blood draw.'
h3: '87 markers. The test your annual physical was never designed to give you.'
body: 'Metabolic, hormonal, cardiovascular, thyroid, and inflammatory — the markers that explain how you feel, why you feel it, and what you can do about it. One test gives you the full picture.'
checklistTitle: 'One test. Answers you\'ve never had:'
checklist: [
  '87 biomarkers across 5 categories your physical doesn\'t cover',
  'Your BioIQ score — one number showing what to prioritize',
  'A health signal map showing exactly where to focus',
  'Clinician-reviewed results with actionable next steps',
  'HSA/FSA eligible — $1.09/day for 87 markers',
]
quizHref: '/biomarkers'
learnHref: '/biomarkers-info'
legal: 'Biomarker testing provided by CLIA-certified laboratories. Results reviewed by board-certified clinicians.'
carousel: [
  { goalLabel: 'Category', goalValue: 'Metabolic', markerName: 'HbA1c', markerLabel: 'Blood Sugar Control', bullets: ['Insulin sensitivity', 'Long-term glucose trends'], gradientFrom: '#c8ddd7', gradientTo: '#7aab99' },
  { goalLabel: 'Category', goalValue: 'Hormonal', markerName: '23 ng/dL', markerLabel: 'Free Testosterone', bullets: ['Energy & libido', 'Muscle & mood balance'], gradientFrom: '#e8d4d9', gradientTo: '#c49fa8' },
  { goalLabel: 'Category', goalValue: 'Cardiovascular', markerName: 'Lp(a)', markerLabel: 'Heart Risk Marker', bullets: ['Genetic cardiac risk', 'Cholesterol subtype analysis'], gradientFrom: '#d4d9e8', gradientTo: '#9fa8c4' },
  { goalLabel: 'Category', goalValue: 'Thyroid', markerName: 'TSH', markerLabel: 'Thyroid Function', bullets: ['Weight & fatigue link', 'T3/T4 conversion'], gradientFrom: '#e8e4c8', gradientTo: '#c4b87a' },
  { goalLabel: 'Category', goalValue: 'Inflammatory', markerName: 'hs-CRP', markerLabel: 'Inflammation Level', bullets: ['Silent inflammation', 'Longevity risk signal'], gradientFrom: '#dce8d4', gradientTo: '#a8c49f' },
]
```

---

### `BmiCalculator.tsx`

Interactive qualifier. Computes live on any input change.

**Inputs:** Height (ft + in), Weight (lbs), Age (yrs) — 3-column grid

**BMI logic:**
```ts
const totalInches = (ft * 12) + inches
const bmi = ((lbs / (totalInches ** 2)) * 703).toFixed(1)

bmi < 18.5  → label: 'Underweight',        cta: 'See Your Full Vitality Report'
bmi < 25    → label: 'Healthy Range',       cta: "See What Your BMI Isn't Telling You"
bmi < 30    → label: 'Worth Investigating', cta: 'Find Out What\'s Driving This'
bmi >= 30   → label: 'High Risk Zone',      cta: 'See Your Full Vitality Report'
```

**Result card** (hidden until valid input, teal bg):
- Large BMI number + category badge
- Animated progress bar with sliding marker — per llms.txt BMI gauge animation spec (800ms ease-out)
- Bar zone labels: Under · Normal · Over · Obese
- Contextual insight paragraph (range-specific, ties to NAD+ or biomarkers):
  - Underweight: "A BMI of {bmi} suggests your body may be under-resourced. Low NAD+ levels are common in underweight individuals and can affect energy and immune function. Your biomarkers would tell us more."
  - Healthy Range: "A BMI of {bmi} is within the healthy range — but BMI doesn't capture metabolic health, hormone balance, or inflammation. 80% of people in a 'healthy' BMI range have at least one out-of-range biomarker."
  - Worth Investigating: "A BMI of {bmi} often correlates with reduced NAD+ levels, elevated inflammatory markers, and hormonal shifts that go undetected in standard panels. A full biomarker picture would show exactly what's driving this."
  - High Risk Zone: "A BMI of {bmi} is associated with significantly depleted NAD+ and elevated metabolic and cardiovascular markers. This is exactly the range where clinician-guided intervention makes the largest measurable difference."
- CTA (range-specific text from above) → `/vitality?bmi={bmi}&age={age}`

**Disclaimer:** "BMI is one indicator among many. Forbes Vitals looks at 87 markers — because one number was never the whole story."

---

### `ExpertCare.tsx`

**BioIQ screen mock** (dark card, cream bg section):
- White inner card showing: Forbes Vitals wordmark + user avatar "KC", score "74/100", dot grid (20 dots: 4 teal optimal, 8 green in-range, 2 orange out-of-range, 6 empty), color legend
- Thumbnail strip below mock: Biomarkers (active) · Protocol · Tracking · Activity

**Two-level checklist** (bold title + 2-sentence description, hairline dividers between items):
1. "A clinician who reviews your profile — not a checkbox" / "Every prescription is a medical decision made by a real, board-certified physician who reads your results before approving anything."
2. "Unlimited access to your care team" / "Message anytime. Video calls same-day. No queues, no gatekeeping — just direct access to the people managing your care."
3. "A protocol that evolves with you" / "Dosing and recommendations adjust based on how your body actually responds — not a one-size-fits-all starting point."
4. "You don't pay unless your doctor says yes" / "$0 due until your clinician approves your protocol. If it's not right for you, you owe nothing."

---

### `QualificationCards.tsx`

Two stacked full-bleed gradient cards with dashed arc detail (top-right, pseudo-element).

**NAD+ card (teal gradient):**
- Eyebrow: "NAD+ Therapy"
- H2: "Feel like you're running on empty?"
- Sub: "Most people accept fatigue, brain fog, and slow recovery as normal. They're not. They're signals — and they're measurable."
- Primary CTA: "Take the Quiz →" → `/peptides`
- Secondary CTA: "Do I have low vitality?" → `/peptides?entry=qualify`

**Biomarker card (blue-slate gradient):**
- Eyebrow: "Biomarker Testing"
- H2: "Something feels off. Your labs say you're fine."
- Sub: "Standard blood panels miss 80% of what matters. 87 markers gives you the full picture — including the ones your doctor never ordered."
- Primary CTA: "Take the Quiz →" → `/biomarkers`
- Secondary CTA: "Why do I feel this way?" → `/biomarkers?entry=qualify`

---

### `ExpertTeam.tsx`

- Section H2: "Built in collaboration with industry experts."
- Sub: "Our protocols are built on clinically reviewed frameworks developed in partnership with leading physicians, researchers, and specialists."
- Institution name strip: Johns Hopkins · Mayo Clinic · Stanford Medicine · Cleveland Clinic
- Horizontal-scroll doctor cards (5 cards, 210px wide each):
  - Tall photo zone with solid bg color — `next/image` when src ready
  - Credential badge overlay (shield SVG icon + name + "Board Certified")
  - Name + teal underlined specialty below

```ts
[
  { name: 'Dr. Sarah Chen, MD', specialty: 'Endocrinology & Longevity', bg: '#E8F2EE' },
  { name: 'Dr. Marcus Reid, MD', specialty: 'Internal Medicine', bg: '#EDE9E1' },
  { name: 'Dr. Priya Nair, MD', specialty: 'Preventive Health', bg: '#EAE4F0' },
  { name: 'Dr. James Liu, MD', specialty: 'Cardiovascular Medicine', bg: '#E4EAE8' },
  { name: 'Dr. Aisha Osei, PhD', specialty: 'Metabolic Research', bg: '#F0EBE4' },
]
```

---

### `ClinicalTrust.tsx`

- H2: "Clinician-reviewed. *Forbes-backed.*"
- Sub: "Every NAD+ protocol is reviewed by a board-certified physician before it ships. Every biomarker panel is processed by a CLIA-certified lab."
- "Learn more" ghost CTA
- 3-panel photo collage with badge overlays on center panel:
  - Round badge: "BOARD / MD / REVIEWED"
  - Diamond badge: "CLIA / certified / LABS"

---

### `CmoTrust.tsx`

Rounded card, inset from page edges.

- H2: "Products you can trust. *Science you can verify.*"
- Sub: "Our NAD+ therapy and biomarker panels are built on peer-reviewed science and reviewed by board-certified physicians. If a clinician doesn't approve your protocol, you pay nothing."
- Primary CTA: "Take the Quiz →" → `/vitality`
- Doctor photo with credential badge overlay — Dr. James Liu, MD / Chief Medical Officer
- Legal: "Forbes Vitals products require an online consultation with a licensed healthcare provider who will determine if treatment is appropriate. Results may vary. Biomarker testing is not intended to diagnose, treat, cure, or prevent any disease."

---

### `WhyForbesVitals.tsx`

Dark bg. 2×2 teal stat card grid.

- H2: "Why people choose *Forbes Vitals.*"
- Sub: "Not because it's the cheapest option. Because it's the one backed by the name that's spent decades holding health companies accountable."

```ts
[
  { num: '87', label: 'biomarkers tested', desc: 'Your annual physical covers 14 on a good day. We test 87 — including the hormonal, metabolic, and inflammatory markers that explain how you actually feel.' },
  { num: '92%', label: 'feel measurably better', desc: 'Within 90 days of starting their protocol, 92% of Forbes Vitals patients report a meaningful, measurable improvement in energy, recovery, or mental clarity.' },
  { num: '$0', label: 'due until approved', desc: 'A clinician reviews your profile before you\'re charged anything. If treatment isn\'t right for you, you owe nothing. No fine print, no exceptions.' },
  { num: '24hr', label: 'to clinician review', desc: 'From the moment you complete your quiz to the moment a physician reviews your protocol — most patients hear back within one business day.' },
]
```

---

### `Faq.tsx`

Accordion. One item open at a time. Smooth height animation on open/close.

- H2: "Everything you want to know before you start."
- 10 questions (answers `''` — to be filled later):
  1. What is NAD+ therapy?
  2. What is biomarker testing?
  3. How much do the programs cost?
  4. Do I need insurance?
  5. What is a Vitality Index?
  6. What is a BioIQ score?
  7. How are prescriptions handled?
  8. Can I do both programs?
  9. What states do you serve?
  10. What if I'm not approved for NAD+ therapy?
- Two routing cards below (match NavCards anatomy):
  - "Curious what your body could tell you?" — Biomarker testing
  - "Ready to feel the difference?" — NAD+ therapy

---

### `Footer.tsx`

Dark bg. 3-column link grid + legal.

Columns: NAD+ Therapy (How It Works · Our Protocols · Pricing · FAQs) · Biomarker Testing (How It Works · What We Test · Pricing · FAQs) · Company (About · Expert Team · Contact · Careers)

Footer links: Privacy · Terms · Accessibility · Sitemap

Legal: "Forbes Vitals is a Forbes Health product. All programs are for informational purposes. Results may vary. Please consult a licensed healthcare professional before starting any health program."

---

### `StickyQuizTray.tsx`

Fixed bottom. Always visible.

State: `open` / `closed`

**Closed state:** White pill button — "Take the Quiz" + `+` icon
**Open state:** `+` rotates 45° to `×`, blurred backdrop, two journey option cards spring up above the pill

Journey label: "CHOOSE YOUR JOURNEY"

Option cards (each a `<Link>`):
- NAD+ Vitality Index / "3 min · Peptide therapy quiz" → `/peptides`
- Biomarker BioIQ / "3 min · 87-marker panel quiz" → `/biomarkers`

Dismiss: re-tap pill or tap backdrop.

---

## DO NOT

- Do not read design tokens, fonts, or colors from this file — read them from `.cursor/llms.txt` only
- Do not add any CSS files or CSS modules — Tailwind only
- Do not use `localStorage` or `sessionStorage`
- Do not add third-party UI libraries
- Do not wire any API calls — all data is static
- Do not add FAQ answers — leave as `''`
- Do not add a mobile hamburger menu — sticky tray handles mobile conversion
- Do not use `<img>` — use `next/image` with solid color bg fallback

---

## ACCEPTANCE CRITERIA

- [ ] All 16 sections render in correct order
- [ ] Design tokens, fonts, colors, icon rules, and spacing match `.cursor/llms.txt` exactly
- [ ] Hero word cycler runs every 2400ms with smooth transition
- [ ] Both product carousels scroll horizontally, scrollbars hidden
- [ ] BMI result card appears on valid input, insight and CTA copy are range-specific
- [ ] BMI CTA deep links to `/vitality?bmi={value}&age={value}`
- [ ] Sticky tray opens/closes with backdrop, `+` rotates, option cards animate in
- [ ] FAQ accordion opens one item at a time with smooth height animation
- [ ] All CTAs link to correct `href` values
- [ ] Responsive at 375px, 768px, 1280px — no layout breaks
- [ ] No TypeScript errors, no console warnings
