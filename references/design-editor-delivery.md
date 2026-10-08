# Editable Design Document Delivery

Read for Figma, Penpot, Sketch, MasterGo, or another editable visual-design tool. The selected editor changes implementation mechanics, not the product model or quality threshold.

## Choose the editor

Honor a user-specified tool and continue in an existing document when one establishes the destination. When the user requests an editable mobile design without choosing a tool, prefer Figma when its design capabilities are available. Otherwise use another available editor with an adapter, or an editable fallback the user can review.

## Build a maintainable document

- Map semantic color, typography, spacing, radius, border, elevation, and state roles to variables, styles, or tokens supported by the editor.
- Use the editor's responsive layout system for structured rows, columns, cards, lists, forms, and navigation. Reserve absolute positioning for deliberate overlays and freeform artwork.
- Turn repeated or expected-to-recur structures into components. Express meaningful size, state, theme, and content differences through named variants or properties when supported.
- Use one coherent icon family per functional level. Text characters, emoji, arbitrary dots, and improvised shapes do not count as finished functional icons unless the visual direction explicitly requires them.
- Name pages, frames, components, and important layers by product role. Avoid both meaningless defaults and excessive nesting.

## Asset completion

Image-led products such as commerce, food, fashion, travel, media, and lifestyle require credible final imagery or clearly identified provisional assets. A finished design must not use generic geometric placeholders where subject, crop, material, or product detail carries purchase or trust information.

Record image source/type and intended crop. Keep interface text, prices, labels, and controls editable rather than flattening the whole screen into an image.

## Verify

Export every changed key screen at intended size and inspect the export independently from the editor canvas. Check actual-size legibility, content cropping, icon recognition, repeated component consistency, text growth risk, and contrast. Use grayscale or slight blur when useful to diagnose hierarchy and visual weight, rather than repeating them for unrelated functional changes. A valid export, clean layer tree, or accessible file does not by itself establish visual quality.

A design-only request needs understandable navigation and state specifications, not a working backend or simulated application engine. Add prototype connections when interactive design is requested. Inspect actual connections and operate them where the editor supports it; screenshots alone cannot establish that a flow works.

Report whether layouts, tokens, components, variants, and assets were verified from document metadata or only inferred from screenshots.
