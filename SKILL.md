---
name: ui-app-skill
description: 设计、优化或评审 iOS/Android 手机 App 界面，交付可编辑设计稿、对话内交互原型或指定技术栈的工程代码。适用于单页、多页面流程、参考图转译和原型开发交接；沿用已有项目与设计系统，未指定工具的可编辑设计稿优先 Figma。普通网站、桌面后台和纯后端任务不使用。
---

# UI App Design

Create a mobile experience that people can inspect, continue editing, and operate when an interactive artifact is requested. Preserve the user's product, platform, accepted choices, and requested scope. Public references and other skills inform decisions; they do not replace the brief or require a paid service.

## Route the request and deliverable

Inspect supplied screens, files, and project conventions first. Treat the requested action and output as separate decisions:

| Action | Working path |
|---|---|
| New app or substantial redesign | Core journey → focused references → representative screen → shared system → remaining screens |
| Local revision or polish | Inspect the affected screen and components → targeted change → affected checks; preserve business relationships and accepted design decisions |
| Reference translation | Inspect supplied images → extract visual rules → original composition → compare |
| Review only | Evidence → prioritized findings and corrections; do not implement a rebuild |
| Prototype-to-code handoff | Inspect prototype source and behavior → map to existing components/state/data → implement and verify the requested scope |
| Portfolio | Improve product logic and screen selection before presentation; do not invent research or outcomes |

| Requested output | Delivery route |
|---|---|
| Editable design document | Use the specified editor or existing document. Otherwise prefer available Figma tools, then another available editable editor |
| Interactive preview in this conversation | Use the host's available inline visualization capability and its output contract. Do not substitute a Figma link or standalone site |
| Standalone web prototype | Runnable HTML or the requested web stack, with reachable screens and local interactions |
| Native or project implementation | Integrate with the existing framework and component system. A new runnable project is appropriate when requested |
| Exploration or review | Supply the requested directions, screen map, annotations, or findings; a full app is unnecessary |

Choose the medium by what the user needs to inspect. An existing project or design document establishes the destination. For an unspecified “optimize this page / show me a better version”, deliver an editable screen or an operable preview appropriate to the available environment; preserve any already accepted delivery format. Prefer Figma for editable design documents and HTML/the existing stack for runnable previews. Use a full-screen raster mockup when the user requests an image, visual exploration, or accepts that format; keep labels and controls editable for structured design/handoff work. Generating a picture is not completion of an editable or interactive page request.

A clear output choice needs no reconfirmation. If an output is not specified, infer it from the task and existing artifacts; use the Figma preference for editable design work, not as a reason to override code or inline requests. If a required capability is unavailable, complete independent work, explain the specific limit, and distinguish any fallback from the requested output. Do not silently call HTML a native app or an editable Figma file.

Read only the references for the chosen route:

- Editable document: [design-editor-delivery.md](references/design-editor-delivery.md), then [figma-delivery.md](references/figma-delivery.md) or [penpot-delivery.md](references/penpot-delivery.md).
- Standalone mobile HTML: [mobile-html-layout.md](references/mobile-html-layout.md). Inline previews use the host's embedding/layout rules instead; preserve the mobile usability checks that fit that surface.
- Native behavior: [platform-checklist.md](references/platform-checklist.md), then the applicable platform guide.
- Engineering output or requested developer handoff: [implementation-handoff.md](references/implementation-handoff.md).

Use another installed skill only for an applicable tool prerequisite or a focused implementation question. Do not stack entire design workflows or install a service merely because it is popular.

## 1. Model the core journey

Identify the user, primary task, success moment, essential content, and platform. Map only the necessary screens, including entry, main action, result, and back/cancel behavior. Use realistic Chinese/mixed-language text and domain data. For image-led products, identify product positioning and what the imagery must communicate.

Resolve ordinary gaps with conservative, reversible defaults and record material assumptions with the artifact. Ask only when missing information would materially change the result and cannot be inferred; continue independent work. A design contract is a working decision record, not an approval gate.

Read [interaction-model.md](references/interaction-model.md) when screens share data, filters affect other views, forms save, or operations run asynchronously. Define state ownership and visible effects before implementing handlers. Include loading, empty, error, permission, offline, or destructive states only where relevant. Keep demo operations distinguishable from live integrations.

## 2. Mandatory reference-first gate

Before generating or modifying any UI design artifact—including a single screen, raster mockup, editable document, prototype, or implementation—inspect relevant real reference screens and record how they inform the design. This is a prerequisite, not an optional enhancement. Do not call an image-generation tool or start visual authoring before this gate is satisfied. Review-only work may inspect the supplied target without searching for external examples.

Read [reference-research.md](references/reference-research.md). Start with supplied references or relevant existing project screens; otherwise prioritize UI Notes for mobile cases. Existing conventions, general design knowledge, search summaries, and textual descriptions alone do not satisfy the gate. Previously inspected relevant references may be reused within the same task; do not repeat research for minor iterations.

For a new screen or substantial redesign, inspect at least two relevant real screens, preferably from different products. For a targeted change or explicit reference translation, one supplied or existing screen is sufficient when it directly covers the decision. Inspect the actual screenshot or rendered page at a readable size; merely opening a text-only page is insufficient. Research by product task, platform, and state, not generic aesthetic adjectives. Do not copy branding or a recognizably identical composition.

Before authoring, retain a compact reference record: product and screen name, source URL or local image path, what was actually inspected, useful structural/visual decisions, limitations, and what to adopt or adapt. Share a concise user-facing update naming the inspected cases and the decisions they inform. Use those decisions in the design brief or image-generation prompt; a link list unrelated to the output is insufficient.

If UI Notes is locked or unavailable, continue with accessible official product screenshots, public reference libraries, supplied assets, or relevant project screens. Do not bypass access controls or require a subscription. If no valid visual reference can be inspected after feasible alternatives, complete independent brief/structure work and explain the exact gap; request only the missing reference or access needed. Do not silently generate an unreferenced concept. A current explicit user instruction to skip research overrides this gate; disclose that exception.

## 3. Make concrete visual decisions

For new designs or substantial visual changes, read [visual-craft.md](references/visual-craft.md). Record actual decisions in the artifact or existing project notes; for small changes, record only the changed decisions:

```text
Product / primary journey / platform / delivery format:
First-view priority / distinctive product detail:
Semantic colors / text roles / spacing / component geometry:
Navigation / content structure / list-vs-card rationale:
Image and icon system / source / crop / display size:
Shared components and variants / relevant state ownership:
Applicable acceptance criteria / simulation and integration boundaries:
```

Before authoring new designs or substantial visual revisions, write a compact visual plan in the existing notes or artifact: 4–6 semantic color values; named typefaces with Chinese/Latin/numeric roles and key sizes; a one-sentence layout concept plus a compact sketch when useful; and one product-specific source of identity. Review this plan against the brief before building: which decisions come from the product, which from inspected references, and which merely repeat a familiar template? Revise the generic choices and retain the final direction. For local polish, apply this check only to the affected choices. This is internal self-review, not a user approval step.

Do not leave placeholders unresolved or generate a separate specification for every minor edit. Prefer existing design tokens and components. New work should have a small coherent system, not an oversized catalog. Map recurring visual roles to actual tokens and component properties; a styled imitation is not proof that a named component library is used.

Build identity through content, hierarchy, typography, assets, and purposeful detail. Do not default to a hero, KPI row, rounded-card grid, or glass effect on every mobile screen. These treatments remain valid when the task supports them. Brand consistency should coexist with platform-appropriate controls and navigation.

## Reduce template bias and preserve iteration decisions

Separate verified product facts, working assumptions, and unknowns before composition. The skill supplies methods; project documents supply business facts. Use the task, real content, and existing design system to choose hierarchy and layout. Do not treat a preset aesthetic or an unrelated skill’s defaults as the product brief.

Record which reference contributes density, hierarchy, navigation, imagery, or interaction, and which features should not transfer. Preserve supplied brand assets and accepted decisions. Preserve business content, metric definitions, relationships, and access to detail; the original card boundaries, ordering, and table geometry are not binding unless the user or existing design system makes them so. If direction is genuinely open, compare meaningful alternatives internally; show multiple directions only when requested or when the choice materially needs user input. Do not make exploration an approval gate for routine work.

For feedback such as “too templated,” “more premium,” or “more polished,” first inspect the artifact and translate the feedback into specific problems: equal visual weights, generic content, repetitive grouping, weak typography, unsuitable density, or irrelevant decoration. Apply the smallest coherent correction while preserving accepted structure, palette, and typography unless they cause the problem. Do not answer vague feedback by automatically adding gradients, glass, shadows, or illustrations. Small edits need no separate report or repeat reference search.

Read the correction and diagnosis guidance in [visual-craft.md](references/visual-craft.md#diagnose-template-bias-and-iterate) when template bias persists. Retain useful decisions in existing project notes or the artifact so later stages use the current design rather than reconstructing it from chat. New business claims and outcomes require evidence.

## 4. Validate one screen before expanding

For multi-screen work, build and inspect one representative screen before propagating styles. Add a structurally different screen when needed to test the system, such as a dense list alongside a form. Correct weak hierarchy, unrealistic density, and inflexible components before expansion. This is internal iteration, not a request for approval.

Define applicable acceptance criteria before claiming a pass. Mobile HTML baselines and conditional compact-layout limits live in [mobile-html-layout.md](references/mobile-html-layout.md); native targets use platform units and conventions. Explicit user requirements take precedence. Text growth must remain possible; do not satisfy a density limit by clipping or shrinking readable content.

Extract shared tokens and recurring components from the working design, then build the remaining requested screens. Repeated structures use the deliverable's reusable mechanism unless this is explicitly low-fidelity exploration. Share semantic actions and data, while choosing a layout appropriate to each screen's task. Preserve current project architecture and supported SDKs; check official documentation before using version-sensitive APIs.

## 5. Produce an operable artifact

For design/build requests, create a visible artifact and preview or render it. A description alone is insufficient. For interactive prototypes and implemented apps, make screens reachable through the real journey; a development state switcher may supplement navigation but cannot replace it. Enabled controls perform their advertised action. Local state is sufficient for a prototype; an empty handler or generic success toast is not. For design-only documents, specify navigation and relevant states without claiming runtime behavior; wire prototype connections when requested.

- **Web:** use semantic controls, tokens, responsive layout, and reachable actions during scrolling and overlays. Apply the inline host contract or standalone HTML contract as appropriate. Avoid fake phone chrome unless requested.
- **Native:** use the project's components, navigation, assets, and supported APIs. Build in the actual runtime when available; browser rendering cannot verify native behavior. Do not deliver isolated snippets in place of requested integrated code.
- **Editable design:** use responsive layout, semantic styles/variables, reusable components and relevant variants. Keep text and controls editable. Export and inspect key frames at intended size. Absolute positioning is appropriate for deliberate artwork or overlays, not every structured row.

For campaign art, prominent merchandising images, or branded illustrations, read [raster-assets.md](references/raster-assets.md). Reuse suitable supplied/project assets first. When a prominent image needs a new medium decision, inspect relevant category examples where available. Decide subject, medium, crop, material, and detail from the product purpose; no universal illustration or photography default. Keep unavailable final assets explicitly provisional.

Keep utility icons familiar and coherent. Brand-bearing category or feature icons may use a coordinated generated raster set when that visual direction is needed; preserve established assets and system-dependent vector behavior. Define a shared visual grammar and verify the set at its actual size. Do not generate decorative assets solely to fill a standard list or settings screen. Follow the available image tool's instructions and report only verifiable tool/model claims.

## 6. Verify and deliver

Read [quality-gate.md](references/quality-gate.md). Inspect changed key screens, including scrollable content, and exercise the primary journey and relevant recovery. For standalone HTML, run the layout measurement and repair procedure; for inline or native work, use the corresponding environment's checks. No runtime errors does not establish visual quality.

For substantial visual work, inspect first-view focus, realistic content, image crop, icon coherence, repeated components, and text contrast at actual size. Grayscale/blur can help diagnose hierarchy; they need not be repeated for an unrelated functional edit. Compare against the recorded reference decisions, not a generic taste score.

Fix introduced blocking and major defects, then rerun affected checks. Diagnose repeated failures rather than accumulating CSS overrides; after two unsuccessful attempts at the same repair, revisit the layout/state constraints. Do not hide overflow or silently relax acceptance criteria to claim success. Stop expanding validation once relevant checks pass and no unresolved failure justifies more.

Keep evidence proportional: record the criterion, configuration, result, and evidence or exact gap. Distinguish **exercised**, **inspected**, and **unverified**. A screenshot cannot prove storage, gestures, or successful API writes. Environment limits are reported as limits, not passes.

Deliver the artifact or inline preview, included scope, concise validation evidence, and material assumptions. Name and link the inspected reference cases (or local image paths), with a brief explanation of what each contributed. Do not claim search-only sources as visual references. When code handoff was requested, identify what runs independently, which components are real library components, and what data/runtime work remains; do not claim production readiness from a working mockup. Preserve accepted choices in later revisions.

## Review findings

Use P0 for blocked task completion or serious misunderstanding, P1 for major usability/accessibility/platform issues, P2 for visible consistency or craft defects, and P3 for optional refinement. Each finding includes location, evidence, impact, and a concrete correction. Separate observed defects from hypotheses. Annotate when useful; do not assign unsupported numerical quality scores.
