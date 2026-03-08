# CONTEXT
Replace the existing `WhyForbesVitals` section on the Forbes Vitals homepage. Read `.cursor/llms.txt` and match all existing section patterns before writing any code.

---

# TASK
Rebuild the Why Forbes Vitals section using a Function Health-style content grid. Each cell contains a pillar headline, a small category badge, and 5–6 specific bullet points. The bottom-right cell is a CTA cell, not a content cell.

---

# SECTION CONTENT

**Section headline:**
Why people choose *Forbes Vitals.*

The italic portion ("Forbes Vitals.") gets the teal accent color.

**Doctor pull quote (below headline, inline — not in a card):**
> "The standard of care most people receive misses the markers that matter most."
> — Dr. James Liu, MD · Chief Medical Officer, Forbes Vitals

Quote in a lighter weight. Attribution in mono font, muted, smaller.

---

# GRID CELLS (2 columns × 3 rows = 6 cells)

**Cell 1 — top left**
Headline: 87 markers. Not 14.
Badge: Biomarker Testing
List:
- Metabolic panel
- Full hormonal workup
- Cardiovascular risk markers
- Thyroid function
- Inflammatory markers
- Nutrient deficiencies

**Cell 2 — top right**
Headline: A clinician reviews everything.
Badge: Clinical Oversight
List:
- Board-certified physician
- Protocol approval required
- 24hr average review time
- Ongoing dosing adjustments
- Direct clinician access

**Cell 3 — middle left**
Headline: You don't pay until approved.
Badge: $0 Until Prescribed
List:
- No upfront commitment
- No charge if not approved
- No contracts to cancel
- HSA / FSA eligible
- Transparent pricing

**Cell 4 — middle right**
Headline: NAD+ protocols built for you.
Badge: Personalized Therapy
List:
- Based on your biomarker data
- Goal-specific dosing
- Delivered to your door
- Monthly check-ins
- Adjusts as you improve

**Cell 5 — bottom left**
Headline: The Forbes name means something.
Badge: Editorial Standard
List:
- Decades of health accountability
- Advisory board oversight
- No conflicts of interest
- Evidence-based protocols only
- Forbes Health editorial review

**Cell 6 — bottom right (CTA cell)**
No headline. No badge. No list.
Large italic display text: *Everything included.*
Below: ghost/outline CTA button — "See what's in your protocol →" links to `/vitality`
Background: slightly elevated — use teal at low opacity or a subtle warm cream tint to distinguish it from the content cells.

---

# LAYOUT & STYLING

- Section background: match existing dark bg used in the current WhyForbesVitals section
- Grid: 2 columns, 3 rows, consistent gap between all cells
- Each content cell: dark card with subtle border, rounded corners matching existing card radius in codebase
- Cell anatomy top to bottom:
  1. Category badge — mono font, small, teal, uppercase, letter-spacing
  2. Headline — display font, large, white
  3. Divider line — 1px, low opacity
  4. Bullet list — body font, small, muted white, no bullet icons — use a subtle teal dash or dot prefix
- Headline and badge sit above the divider. List sits below.
- No card hover states unless they already exist elsewhere in the codebase

**Mobile:** stack to single column, all 6 cells full width. CTA cell last.

---

# DO NOT
- Do not keep any content from the old WhyForbesVitals section
- Do not add animations unless they already exist in the codebase
- Do not use emoji or icon libraries — text and SVG stroke only
- Do not change the section's position in the page order
