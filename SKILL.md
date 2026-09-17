---
name: ui-app-skill
description: Research real mobile product references, then design, generate, iterate, and review original app screens without requiring Sleek or another paid third-party API. Use for iOS or Android product flows, app UI mockups, mobile prototypes, portfolio case-study screens, or converting a mobile design direction into runnable HTML, React Native, or SwiftUI.
---

# UI App Design

Create a coherent mobile product experience grounded in real shipped interfaces that the user can see, evaluate, and continue editing. Work locally with the tools already available in Codex. Public web references may be used, but do not require a third-party account, API key, subscription, or hosted design service.

## Choose the Deliverable

Infer the lightest useful output from the request:

- For exploration, produce a concise screen map, design direction, and key screen specification.
- For a visible design, create a runnable mobile-width HTML prototype unless the user requested another format.
- For implementation, use the requested framework: React Native/Expo, SwiftUI, Flutter, or HTML/CSS/JS.
- For review, inspect the supplied screenshots, recording, prototype, or design link and return prioritized, actionable findings.
- For a portfolio, optimize both the product screens and how the design decisions are presented; do not merely decorate weak product logic.

Do not ask the user to choose a format when their intended output is already clear.

## Design Workflow

### 1. Establish the product model

Extract the primary user, their main job, the success moment, essential content, constraints, and platform. When details are missing, make conservative, reversible assumptions and label only assumptions that materially affect the design.

Turn the request into a small screen map. Include only screens and states needed to complete the core journey. Add empty, loading, error, permission, offline, or destructive-confirmation states when they are genuinely relevant.

### 2. Ground new designs in real products

For a new product, redesign, or unfamiliar interaction, research a small set of real mobile screens before committing to layout. Search by product category, user task, platform, and interaction rather than vague visual adjectives. Examples: `iOS document scanner result screen`, `habit tracker empty state`, or `mobile finance transaction filter`.

Prefer public, inspectable sources. For Chinese-market mobile products, check UI Notes first when it has a relevant public App or screenshot page, then supplement it with UIZZE, official App Store or Google Play listings, and other established reference libraries. Paid catalogue access may be used only when it is already available; never make membership a prerequisite.

Read [references/reference-research.md](references/reference-research.md) for source selection, comparison, attribution, and originality rules. Skip reference retrieval when the user supplies sufficient references or when the request is only a narrow change to an established design system.

Summarize the useful evidence before designing:

- the screen or flow question each reference answers;
- recurring structural and interaction patterns;
- meaningful differences between products;
- patterns to adopt, adapt, or reject for this product;
- source links and platform.

Do not select a single app as a template. Synthesize across references and preserve the target product's own content, brand, hierarchy, and interaction logic.

### 3. Commit to one visual direction

Write a short internal design contract before implementation:

- product personality in 2–3 adjectives;
- color strategy and semantic roles;
- typography character and hierarchy;
- spacing density and content rhythm;
- component geometry, elevation, borders, and navigation treatment;
- imagery or illustration behavior;
- one distinctive visual detail tied to the product.

Translate the reference findings into the design contract. Use references for principles and patterns, not copied branding, proprietary content, imagery, or a recognizably identical composition. Keep standard navigation and interaction recognizable unless experimentation is the product goal.

### 4. Design the system before duplicating screens

Define reusable tokens for color, typography, spacing, radii, strokes, elevation, motion, and safe-area behavior. Build repeated UI from shared components. The same semantic action must look and behave consistently across screens.

Respect platform ergonomics:

- minimum touch target: 44×44 pt on iOS, 48×48 dp on Android;
- preserve safe areas and keyboard avoidance;
- keep primary actions reachable and visually unambiguous;
- support dynamic text rather than relying on fixed-height text containers;
- provide visible focus, disabled, pressed, loading, success, and error states where applicable;
- avoid gesture conflicts with system back and home gestures.

Read [references/platform-checklist.md](references/platform-checklist.md) when designing native navigation, gestures, forms, system dialogs, or cross-platform variants.

### 5. Make a visible artifact

When producing a prototype, create real files in the current workspace and render or preview them. A static verbal description is not a completed visual-design request.

For HTML prototypes:

- use a mobile viewport and responsive bounds rather than a fixed screenshot canvas;
- keep each screen reachable through obvious navigation or a screen switcher;
- use semantic HTML and CSS variables for the design tokens;
- implement important interaction feedback and meaningful transitions;
- avoid fake phone chrome unless the user wants a presentation mockup.

For native code, reuse the project's existing navigation, component system, and asset conventions. Match the target platform before adding decorative polish.

Use generated imagery only when imagery is part of the requested design. The design must remain understandable with placeholders or local assets, so image generation is optional rather than a dependency.

### 6. Inspect and iterate

Render every new or changed key screen. Review the full scrollable content as well as the initial viewport before claiming content is missing or complete.

Check in this order:

1. Can the user identify the next action immediately?
2. Does the main journey complete without a dead end?
3. Are hierarchy, spacing, alignment, and component states consistent?
4. Does the design follow the target platform's interaction conventions?
5. Are contrast, text scaling, touch targets, and motion accessibility acceptable?
6. Does the result feel specific to this product rather than like a generic template?

Fix high-impact issues before presenting the result. For later user revisions, preserve accepted decisions and change only the requested area plus directly affected components.

## Review Output

When the request is a design review, organize findings by severity:

- P0: blocks task completion or creates serious misunderstanding;
- P1: major usability, hierarchy, accessibility, or platform-convention issue;
- P2: visible consistency or craft issue;
- P3: optional refinement.

For each finding, identify the screen or component, explain the user impact, and give a concrete correction. Prefer annotated visuals when the available tools make them practical.

## Completion Standard

A generation task is complete only when the requested key screens exist as a visible artifact, the core path works at prototype level, and the result has been visually checked. Report the output location, included screens, important assumptions, and any limitation that changes what the user can evaluate.

For reference-grounded work, also report the sources consulted and the specific design lessons transferred. If public reference retrieval is unavailable or yields nothing relevant, continue from platform conventions and the product model; do not block completion or imply that paid access is required.

Do not imply that this workflow uses Sleek, reproduces Sleek's proprietary model, or syncs to the Sleek editor. It is an independent local design workflow.
