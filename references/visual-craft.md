# Concrete Mobile Visual Decisions

Read for new designs or substantial visual revisions. Preserve established brand rules; these are decision aids rather than a fixed aesthetic.

## Start from content

Choose the composition from the task. Transaction histories favor scan-friendly aligned rows; image collections may need a grid; a capture tool may give most space to the camera; forms benefit from meaningful groups. Cards are useful for independently actionable or visually distinct groups, not as a wrapper for every label.

Decide what the first viewport must communicate and which action should dominate. Several navigation destinations may coexist, but competing primary actions need a reason. Use visual prominence proportional to task importance.

## Turn direction into tokens

Record actual values for semantic colors, a compact text hierarchy, spacing steps, and component geometry in the deliverable. Adapt values to the selected platform and content; avoid universal font sizes or radii. Typography should distinguish content roles, not merely introduce variety. Use Chinese-capable font fallbacks and inspect mixed Chinese/Latin text, numerals, punctuation, and multiline labels.

Use product-specific content, photography, diagrams, or typography to create identity. Keep familiar interactions discoverable. Choose imagery by subject, crop, and aspect ratio; generic decoration must not displace useful information. Use a coherent icon family with comparable weight and alignment. Do not substitute emoji for production controls unless that is an explicit design choice.

## Practical correction examples

| Weak result | User impact | Better decision |
|---|---|---|
| Every transaction is a large rounded card | Few records visible; comparison is slow | Group rows by date, align amounts, use restrained separators |
| All text is similarly sized and gray | Primary content and next action are hard to identify | Establish title/body/supporting roles and preserve contrast |
| Every section uses a different accent color | Meaning of color is unclear | Separate brand emphasis from status semantics and apply consistently |
| Large decorative header pushes a utility's action below the fold | Extra scrolling before the core task | Give the main action first-view priority and reduce decoration |
| All screens repeat the same hero and card grid | Layout ignores different tasks | Preserve tokens while giving lists, details, and forms suitable structures |
| Only short English placeholder text looks correct | Real Chinese names or long labels break layout | Use realistic content and define wrapping, truncation, and expansion deliberately |

These are contextual examples, not bans on cards, color, or large headers. Explain the product reason for a choice instead of following a trend mechanically.

## Representative-screen check

Inspect the primary screen at its intended size, then stress it with longer content and a narrower viewport. For a multi-screen system, inspect a different structure before expanding when one screen cannot test the reusable components adequately. Check density, hierarchy, content cropping, action reachability, and repeated component behavior. Update tokens centrally when a correction should propagate.

For requested visual alternatives, vary meaningful choices such as content density, image treatment, or typographic hierarchy. A palette swap alone is not a distinct design direction. Do not generate alternatives when the user requested one clear solution.

## Compact design contract template

Fill before building in project notes or the working artifact. Use actual values and brief reasons, not placeholders in the delivered result. For an established design system, reference its tokens and record only changes. This is an internal working record, not a user approval gate.

- Background: [semantic token and value]
- Primary action: [semantic token and value]
- Ink / secondary text: [tokens and values]
- Semantic roles: [success / warning / destructive, where relevant]
- Spacing rhythm: [selected spacing steps; for example 4 / 8 / 12 / 16 / 24]
- Component geometry: [radius, border, shadow]
- List vs card decision: [content and interaction reason]
- Navigation pattern: [selected pattern and reason]
- Product-specific detail: [useful expression of this product's identity]

## Color token discipline

For authored HTML/CSS, define color values centrally in CSS custom properties. Component rules, pseudo-elements, states, gradients, shadows, and inline styles must reference semantic variables rather than introduce literal hex, RGB, or HSL values. SVG icons should normally inherit `currentColor`; `transparent` and inheritance keywords may be used directly. Existing images and third-party asset internals need not be rewritten into tokens.

Use roles such as `--surface`, `--surface-nav`, `--ink`, `--text-secondary`, `--action-primary`, `--border`, and applicable status colors. Name by role rather than an incidental color. Derive a suitable navigation surface and separator from the project's palette; do not impose the paper prototype's colors on other apps. Provide an opaque fallback when blur is unavailable. Tokenization does not prove contrast or visual distinction: inspect the resolved colors in each supported appearance.

For native implementations, use the existing theme or semantic color mechanism instead of prescribing CSS variables. Preserve user-specified branding and avoid unrelated token migrations during a local edit.
