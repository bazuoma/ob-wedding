# Ogechi & Brandon — Wedding Design System

The brand system for **OB's Garden Party V1**: the wedding website for Ogechi & Brandon, November 2026. One product, one audience — guests reading event details on a phone and replying to an invitation.

The system is called the **Tulip Palette**, and its mood is **Structured & Formal**: a printed invitation suite rendered in HTML. Two script faces carry the ceremony; a light sans carries everything a guest actually has to read. Nothing is rounded, nothing floats.

## Sources

Everything here derives from three files the couple supplied. No codebase, Figma file, deck or photography was provided.

| Source | Where it lives now |
|---|---|
| `style-guide.md` — the written rationale | `guidelines/source-style-guide.md` (verbatim copy) |
| `design-tokens.css` — the declared source of truth | `guidelines/source-design-tokens.css` (verbatim copy) |
| `FleurDeLeah-Regular.ttf`, `Italianno-Regular.ttf` | `assets/fonts/` |

The tokens in `tokens/` are a faithful re-split of `design-tokens.css` into per-concern files — every value is unchanged. Where this system adds something the sources did not name (a `quiet` button variant, a `PhotoFrame` placeholder), it is listed under **Intentional additions** below.

The site described in the style guide spans four events — Anglican ceremony, white wedding, traditional wedding, and a cultural event — so the UI kit is built around a four-event structure. Event names, dates and copy in the kit are placeholders; replace them with the couple's real details.

---

## Content fundamentals

**Voice.** The couple speaking, in the first person plural. "We are marrying twice on two continents." Never a venue or a vendor talking about them in the third person, and never the passive voice of a form ("Your response has been recorded" → "Thank you, Ogechi").

**Address.** *We* for the couple, *you* for the guest. Requests are direct and unhedged: "Please reply by September 1 so we can give the caterers a number."

**Register.** Formal in structure, warm in wording. The invitation phrasing is traditional where tradition earns it — "Joyfully accepts" / "Regretfully declines" on the RSVP, "Kindly reply by September 1" — but the explanatory copy around it is plain modern English. No wedding-industry cliché ("your presence is the greatest gift", "tying the knot", "our special day").

**Casing.** Sentence case for headings, titles and labels. UPPERCASE only in three places: button labels, badges, and eyebrow kickers — always with 0.08–0.16em tracking. Never uppercase a heading; the script faces are lowercase-sensitive and break.

**Length.** Display strings are one line. Anything longer than roughly one line moves to Nunito Sans. Body paragraphs run two to four sentences and stop; practical facts go into a `DetailList`, not into prose.

**Numbers and dates.** Dates written out in full — "November 27, 2026", not 11/27/26. Times in lowercase with no space — "4:00pm". The separator between a date and a place is a middot with spaces: "November 27, 2026 · Hawthorne, CA".

**Emoji.** None, anywhere. Not in copy, not in headings, not as icons. The one decorative character permitted is the middot, plus the long dash ornament in a labelled divider.

**Examples of the voice:**
- Hero: "We're getting married" / "Ogechi & Brandon" / "November 27, 2026 · Hawthorne, CA"
- Events intro: "Four gatherings. Times, dress and directions for each are below."
- Registry: "Your presence at four events across two countries is already a great deal to ask."
- RSVP confirmation: "A confirmation is on its way. If anything changes, reply to that email and we will sort it out."

---

## Visual foundations

**Colour.** Six colours, four of them with exactly one job each. Crimson `#932F51` = display headings and button fills. Flower Stem green `#697452` = dates and locations, nothing else. Goldenrod `#F3B651` = button labels, and only ever on crimson (on ivory it fails contrast). Coral `#D67257` is the deliberate free accent — dividers, hover states, decorative highlights, used sparingly and never in a heading or a button. Ivory `#FBF6EE` grounds every page; a deeper ivory `#F2EADC` marks cards. Charcoal ink `#2B2926` is the only body-text colour. Error states reuse crimson so the palette stays closed — no new red.

**Type.** Three faces, three jobs. FleurDeLeah (script) for names, page titles and section titles only. Italianno (script) for dates and locations only. Nunito Sans for everything else — Light 300 for copy, Semi-Bold 600 for labels and buttons. The governing rule: if a string is longer than about one line, it is not set in a script. Body leading is generous (1.7); display leading is tight (1.2).

**Spacing.** 8px base unit: 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96. Sections take 96px of vertical padding, cards 32px of internal padding, stacks a 16px gap. Body copy is capped at 62ch; the content column at 1100px. No arbitrary numbers — the four event pages must read as one system, and shared spacing is what does that.

**Backgrounds.** Flat ivory, full stop. No gradients, no photographic hero, no repeating pattern, no texture or grain. A section changes tone by switching to the deeper ivory `--color-bg-alt` and adding a hairline top border, never by adding a colour wash. Full-bleed treatments are limited to those flat tone bands.

**Corners and elevation.** `--radius: 0px` everywhere — cards, buttons, photos, form fields, checkboxes, modals. `--shadow: none` everywhere. Separation comes from whitespace and 1px `#E4DDD3` hairlines. Rounded corners and drop shadows are the two fastest ways to break the formal feel, so they are simply absent from the token set.

**Cards.** Deeper-ivory fill, 1px hairline border, square corners, 32px padding, no shadow, no hover lift. A card is a rectangle of quieter paper on the page — it does not float above it.

**Borders and rules.** 1px is the only border width. Structural splits use border grey; decorative section breaks use coral. A labelled divider centres two or three words of Italianno between two coral rules.

**Buttons.** Crimson fill, goldenrod uppercase label at 13px / 0.08em tracking, 14px × 28px padding, 1px border matching its own fill so the shape stays crisp against ivory. Hover darkens the fill to `#7C2743` (~12% darker) and the label stays goldenrod. Outline is the secondary variant: transparent with a crimson border and label, inverting to the filled treatment on hover.

**Interaction states.** Hover changes colour, never geometry — no scaling, no lifting, no shadow appearing. Links shift from crimson to coral. Nav items gain a coral 1px underline when active. Press states reuse the hover colour; there is no shrink or depress transform. Disabled controls drop to 45% opacity with `cursor: not-allowed`. Focus is a 2px crimson outline at 1px offset — visible and square, never a soft glow.

**Animation.** Minimal and functional: `0.2s ease` colour transitions on interactive elements. No entrance animations, no parallax, no bounce, no spring easing, no scroll-triggered reveals. A printed invitation does not animate.

**Transparency and blur.** Not used. No frosted panels, no scrim overlays, no protection gradients over imagery — because there is no imagery behind text. A sticky header sits on solid ivory with a hairline bottom border rather than a blurred translucent bar. The only opacity value in the system is the 0.45 disabled state.

**Imagery.** No photography shipped with the sources, so `PhotoFrame` renders a labelled empty rectangle with a hairline border. When real photographs arrive they should be warm and natural — the palette is warm-toned throughout — presented square-cornered, unfiltered, with no rounding, vignette, duotone or grain overlay. Captions go below the frame in 12px muted text.

**Layout.** A single centred column, max 1100px, 24px gutters. The header is sticky; nothing else is fixed. Grids are two-up for event cards and three-up for hotels, registry items and photo frames. Page structure is consistent across all four event pages: header block → detail grid → divider → next section.

---

## Iconography

**The brand is almost entirely typographic.** The sources define no icon set, no icon font, and no SVG assets, and the formal invitation register does not want them. Prefer a word, a rule, or a label over a glyph.

- **Typographic separators do most of the work.** The middot `·` separates date from location everywhere. A 1px coral rule separates sections. A labelled divider uses two rules around a short Italianno phrase. These are the brand's "icons".
- **No emoji, ever** — in copy, headings, buttons, or as icon substitutes.
- **No custom illustration.** Nothing hand-drawn, no floral vector ornaments, no monogram crest. The wordmark is the couple's names set in FleurDeLeah; a nav monogram is "O & B" in the same face. **No logo file was supplied and none has been invented** — see `guidelines/wordmark.card.html`.
- **Where an icon is genuinely unavoidable** (a map pin next to an address, a calendar affordance, a mail glyph on a confirmation), use **Lucide** at 1.5px stroke, `currentColor`, square line caps where the shape allows, sized 20–24px, coloured crimson or muted grey. **This is a substitution** — Lucide is not specified by the sources; it was chosen because its thin, geometric, unrounded stroke is the closest match to the system's hairline borders. Load from CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.js`. Flagged for the couple's confirmation.
- Checkboxes and radios draw their own marks (a 1.6px check, a solid square dot) rather than importing icons, so they inherit the 0px radius rule.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | Global entry point. Consumers link this one file. Imports only. |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `fonts.css` |
| `base/base.css` | Base element mapping — the reference implementation from the source tokens |
| `assets/fonts/` | FleurDeLeah-Regular.ttf, Italianno-Regular.ttf |
| `components/` | React primitives, grouped by concern |
| `ui_kits/wedding-site/` | Click-through recreation of the guest site — see its own README |
| `guidelines/` | Foundation specimen cards + verbatim copies of the source style guide and tokens |
| `SKILL.md` | Agent-skill entry point for use outside this project |

### Components

**`components/core/`** — `Button`, `Card`, `Divider`, `Badge`
**`components/typography/`** — `SectionTitle`, `DateLocation`, `Eyebrow`
**`components/forms/`** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`
**`components/navigation/`** — `NavBar`, `Footer`
**`components/content/`** — `Hero`, `PageHeader`, `EventCard`, `DetailList`, `PhotoFrame`

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and one `@dsCard` HTML showing its variants.

### UI kits

- **`ui_kits/wedding-site/`** — Home, Events, Travel & Stay, Registry, and a working RSVP flow with a confirmation state.

### Intentional additions

The sources are brand guidelines, not a component library, so the inventory below was authored to cover what the described site needs. Each maps to something the style guide names:

- `Button` **quiet** variant — the guide defines filled and outline only; a third, near-invisible tertiary action was needed inside forms ("Add another guest") where an outline button would compete with submit.
- `Badge` — the guide calls for dress codes and access notes per event; this gives them a consistent square, uppercase treatment instead of ad-hoc text.
- `PhotoFrame` — a placeholder frame, because no photography was supplied. It renders a labelled empty rectangle rather than substituting stock imagery.
- `Eyebrow` — a way to label a section without spending a script face on it, given the one-line rule.
- `Divider` **ornament / labelled** variants — an extension of the guide's coral `.divider`.
- `Hero`, `PageHeader`, `EventCard`, `DetailList` — page-level compositions of the above, sized to the four-event structure the guide describes.

### Known gaps

- No logo or brand mark exists. Nothing has been drawn to fill the gap.
- No photography, illustration or texture assets were supplied.
- Icon usage is a flagged Lucide substitution (see Iconography).
- Nunito Sans loads from Google Fonts; no local file ships with the system.
