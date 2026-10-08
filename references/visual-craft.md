# Concrete Mobile Visual Decisions

Read for new designs or substantial visual revisions. Preserve established brand rules; these are decision aids rather than a fixed aesthetic.

## Start from content

Choose the composition from the task. Transaction histories favor scan-friendly aligned rows; image collections may need a grid; a capture tool may give most space to the camera; forms benefit from meaningful groups. Cards are useful for independently actionable or visually distinct groups, not as a wrapper for every label.

Decide what the first viewport must communicate and which action should dominate. Several navigation destinations may coexist, but competing primary actions need a reason. Use visual prominence proportional to task importance.

## Turn direction into tokens

Record actual values for semantic colors, a compact text hierarchy, spacing steps, and component geometry in the deliverable. Adapt values to the selected platform and content; avoid universal font sizes or radii. Typography should distinguish content roles, not merely introduce variety. Use Chinese-capable font fallbacks and inspect mixed Chinese/Latin text, numerals, punctuation, and multiline labels.

Use product-specific content, photography, diagrams, or typography to create identity. Keep familiar interactions discoverable. Choose imagery by subject, crop, and aspect ratio; generic decoration must not displace useful information. Do not substitute emoji for production controls unless that is an explicit design choice.

Treat iconography as two related layers. Utility icons need fast recognition and should come from one coherent family with comparable weight, optical size, joins, and alignment. Brand-bearing category or feature icons may be more expressive, but the set still needs a repeatable grammar: shared silhouette construction, corner style, depth/material treatment, palette logic, and consistent subject scale. Give each icon one domain cue that survives at actual size. A generic outline glyph placed in the same rounded square does not become distinctive through color alone. Selected states should change more than the container fill when necessary—such as foreground contrast, depth, or a small motif—without changing the icon's meaning.

Before accepting a prominent new icon set, compare it at actual size and use grayscale or hidden labels when useful to diagnose recognition. Each icon should remain distinguishable from its peers, the set should read as one family, and utility symbols should be familiar. Preserve approved assets. When newly authored brand-bearing category or feature icons need an illustrative identity, prefer a coordinated ImageGen raster set if generation is available; do not infer that need for every feature list. Generate from one shared art direction, then check crop, edges, object scale, and consistency. Existing vector families, explicit vector deliverables, and dynamic recoloring/system-symbol needs remain valid reasons to use vectors.

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

## Mobile composition and interaction affordance

Top-level tabs represent stable destinations; segmented controls switch related views inside one task. A filter sheet is useful when choices need more space, while a short common choice may stay visible. Pick from task frequency, choice count, and available width rather than copying desktop controls into a phone frame.

Give dense content a scan path: align comparable values, establish grouping, and reveal secondary actions where they are needed. Keep key actions reachable by touch; do not expose required actions only on hover, hidden swipes, or tiny chart marks. If a gesture accelerates a task, supply a discoverable alternate action where appropriate.

Use surface depth to communicate hierarchy. Glass, blur, oversized typography, and expressive illustrations are optional treatments, not indicators of current platform compliance. Check readability over the actual content and respect existing branding. Platform version alone is not a reason to redesign the app.

Treat motion as interaction feedback: relate source and destination, show a state change, and handle interruption. Prefer the existing platform/component behavior to arbitrary per-control effects. Preserve reduced-motion behavior and avoid replaying screen entrances when only a filter or counter changes.

## Representative-screen check

Inspect the primary screen at its intended size, then stress it with longer content and a narrower viewport. For a multi-screen system, inspect a different structure before expanding when one screen cannot test the reusable components adequately. Check density, hierarchy, content cropping, action reachability, and repeated component behavior. Update tokens centrally when a correction should propagate.

For requested visual alternatives, vary meaningful choices such as content density, image treatment, or typographic hierarchy. A palette swap alone is not a distinct design direction. Do not generate alternatives when the user requested one clear solution.

## Applying the design contract

Use the inline template in [SKILL.md §3](../SKILL.md#3-make-concrete-visual-decisions) as the canonical field list. Record actual values and brief reasons in the project artifact or notes, not unresolved placeholders. For an established system, reference existing tokens and record only changed decisions. This is an internal working record, not a user approval gate. The examples above help resolve the choices.

## Color token discipline

For authored HTML/CSS, define color values centrally in CSS custom properties. Component rules, pseudo-elements, states, gradients, shadows, and inline styles must reference semantic variables rather than introduce literal hex, RGB, or HSL values. SVG icons should normally inherit `currentColor`; `transparent` and inheritance keywords may be used directly. Existing images and third-party asset internals need not be rewritten into tokens.

Use roles such as `--surface`, `--surface-nav`, `--ink`, `--text-secondary`, `--action-primary`, `--border`, and applicable status colors. Name by role rather than an incidental color. Derive a suitable navigation surface and separator from the project's palette; do not impose the paper prototype's colors on other apps. Provide an opaque fallback when blur is unavailable. Tokenization does not prove contrast or visual distinction: inspect the resolved colors in each supported appearance.

For native implementations, use the existing theme or semantic color mechanism instead of prescribing CSS variables. Preserve user-specified branding and avoid unrelated token migrations during a local edit.
