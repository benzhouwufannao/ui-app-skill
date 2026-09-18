---
name: ui-app-skill
description: 当用户想要设计、生成、改版或评审手机端 App 界面时使用，适用于 iOS、Android 的单页设计、多页面流程、交互原型，以及在现有框架中实现移动端设计。当用户说“设计一个 App”“做几张手机界面”“生成移动端 UI”“优化这个 App 页面”“参考这张图设计”“做可点击原型”“检查手机界面”或“让页面更有原生感”时触发。结合真实 App 参考，明确视觉层级、组件样式、平台交互和关键状态，交付原创、可查看、可继续编辑的页面；需要实现时沿用用户指定的 HTML、React Native、SwiftUI、Flutter 等技术栈。已有页面的局部修改沿用现有设计系统。普通网站、桌面后台、营销文案，以及不涉及界面设计的纯后端或构建配置任务不使用此 Skill。
---

# UI App Design

Create a coherent mobile experience that the user can see, operate, and continue editing. Work with available local tools; public references may inform the design, but no paid design service, account, or API key is required.

## Route the request

Inspect supplied artifacts and existing project conventions first. Preserve the user's framework, design system, accepted decisions, and requested scope. Infer missing details conservatively; ask only when an unresolved choice materially changes the result.

| Request | Workflow |
|---|---|
| New app or substantial redesign | Product model → relevant references → representative screen → shared system → remaining screens → verification |
| Local revision | Inspect current screen and shared components → targeted change → verify affected screens; research only for an unresolved design question |
| Design from references | Inspect supplied images → extract transferable rules → original composition → compare and verify |
| Review | Inspect available evidence → prioritized findings and corrections; do not rebuild unless requested |
| Native implementation | Inspect framework and target versions → load applicable platform guidance → implement and run relevant checks |
| Portfolio | Improve product logic and screen selection, then presentation; do not invent research, metrics, or user outcomes |

For exploration, a screen map and design direction may suffice. For a requested visible design, default to an interactive mobile HTML prototype unless another format or an existing app project establishes the deliverable. Native implementation requests require the requested native deliverable. Do not ask users to reconfirm a clear output choice.

## 1. Model the core journey

Identify the primary user, main task, success moment, essential content, and platform. Map only the screens needed for that journey. Specify entry, primary action, result, back/cancel behavior, and relevant failure recovery. Use credible domain content and realistic text lengths.

Include loading, empty, failure, offline, permission, or destructive states only when the journey needs them. Distinguish initial loading from a genuinely empty result. Do not expand a narrow request into an entire app.

## 2. Research decisions that need evidence

For a new design or unfamiliar interaction, inspect a small, diverse set of real product screens. Existing project rules and user references take precedence. Skip new retrieval for a narrow revision or when supplied evidence is sufficient.

Read [reference-research.md](references/reference-research.md) when researching. Search by user task and platform; UI Notes is a useful first discovery source for Chinese-market products, not a mandatory gate. Record what was actually inspected and which design decision it supports. Never infer interactive behavior solely from a static screenshot.

Synthesize structural lessons across products without copying branding, proprietary content, or a recognizably identical composition. If retrieval fails, proceed with supplied evidence and platform conventions, stating material limits.

## 3. Make concrete visual decisions

Read [visual-craft.md](references/visual-craft.md) for new designs or substantial visual changes. Establish a compact design contract in the working artifact or project notes so later revisions can reuse it:

- first-view priority and secondary content;
- product personality and its concrete expression;
- semantic color roles, text hierarchy, spacing rhythm, and component geometry;
- content-driven choice of lists, groups, grids, or cards;
- navigation, imagery, and one product-specific detail when useful.

Fill the compact contract template in [visual-craft.md](references/visual-craft.md) before building; for existing projects, record only changed decisions. Use semantic color tokens: CSS variables for HTML component styles and the existing theme system for native code.

Resolve these into actual tokens and component behavior. Avoid adjective-only directions. For an existing system, record only necessary changes rather than replacing the system.

## 4. Validate a representative screen, then expand

Before validating the representative screen, check that the design contract records applicable visual decisions, layout thresholds, and observable acceptance criteria. Fill gaps from the user’s requirements and existing design system first; otherwise record conservative, reversible defaults. Resolve placeholders before checking the screen. Do not mark a check passed when its acceptance criterion is missing. This is an internal prerequisite, not a user confirmation gate.

For multi-screen work, build and inspect one representative screen before propagating its styles. Add a structurally different screen if needed to test the system, such as a dense list paired with a detail or form. Correct weak hierarchy, unrealistic density, or inflexible components first. This is an internal iteration step, not an additional approval gate.

Extract shared tokens and components from this working design, then expand the remaining requested screens. Keep the same semantic action consistent across screens. Avoid a rigid starter template that gives every app the same card grid or dashboard.

Read [platform-checklist.md](references/platform-checklist.md) for platform-sensitive work; it routes to iOS or Android guidance. Read only the relevant platform. Preserve existing framework conventions and check official documentation for version-sensitive APIs or platform rules before relying on them.

## 5. Produce an operable artifact

Create real files and preview or render them. A verbal description alone does not complete a visual-design request.

For HTML prototypes, read [mobile-html-layout.md](references/mobile-html-layout.md) before implementation and follow its measurement-and-repair procedure before delivery. Project-specific colors, dimensions, and density targets belong in the project design contract, not universal defaults.

For HTML prototypes:

- use a mobile viewport, responsive bounds, semantic HTML, and shared CSS tokens;
- make screens reachable through the actual journey; an optional screen/state switcher is a review aid, not a substitute for navigation;
- make enabled controls perform their advertised actions: search filters data, save updates state, and settings affect behavior; local state is sufficient for a prototype;
- include meaningful pending, success, and recovery feedback where applicable; preserve user input on failure;
- keep scrolling content and primary actions reachable, including when input or overlays are active;
- avoid fake phone chrome unless requested for presentation.

For native work, use the project's navigation, components, assets, and supported SDKs. Add dependencies only when justified by the task. For mobile campaign pages, hero artwork, brand illustrations, empty-state artwork, or distinctive feature icons, use GPT-generated raster assets when they materially support the design. Read [raster-assets.md](references/raster-assets.md) before generation. Follow the user’s preference for bitmap artwork: do not substitute SVG, CSS drawings, or vector-looking placeholders for requested generated visuals. Simple utility UI does not require generated artwork.

## 6. Verify and deliver

Validate against the same design contract used for the representative screen. Do not silently relax thresholds to make the result pass. If requirements or justified design decisions change, update the contract with the reason, preserve explicit user constraints, and repeat affected checks before recording final results.

Read [quality-gate.md](references/quality-gate.md) before delivery. Inspect every new or changed key screen, including full scrollable content. Exercise the primary journey and relevant recovery paths. Fix task-blocking and major issues introduced by the work before delivery.

Match claims to evidence: browser rendering verifies a web prototype, not native gestures, real device keyboards, haptics, or native performance. Report checks as exercised, inspected, or unverified rather than marking a checklist passed by assertion. If rendering is unavailable, deliver the artifact with the exact validation gap; do not claim visual verification.

Record applicable checks as Pass, Fail, Unverified, or Not applicable with supporting evidence, using the format in [quality-gate.md](references/quality-gate.md). A checked box alone is not evidence.

Deliver the artifact path or preview, included screens, concise validation results, and material assumptions or limitations. For research-grounded work, link the sources that actually influenced decisions and explain those lessons briefly. Preserve accepted choices during later revisions and update only requested areas and directly affected components.

### Automatic layout repair

For generated or changed UI, run applicable browser or native-runtime checks; static code inspection alone does not establish layout correctness. Measure fixed navigation, end-of-scroll clearance, touch regions, text clipping, and horizontal overflow separately. For HTML, capture narrow, standard, and enlarged-text states as defined in the layout reference.

Correct observed failures within scope and repeat affected checks until they pass or a concrete environment limitation prevents verification. Diagnose the cause before changing styles: do not hide overflow, shrink readable text, or impose fixed row heights merely to satisfy a metric. When the same correction fails twice, inspect the layout constraints and change approach rather than adding more CSS overrides. Preserve accepted styling and report unresolved evidence gaps explicitly.

## Review findings

Use P0 for blocked task completion or serious misunderstanding, P1 for major usability/accessibility/platform issues, P2 for visible consistency or craft defects, and P3 for optional refinement. For each finding give location, evidence, user impact, and a concrete correction. Distinguish observed defects from hypotheses requiring interaction. Annotate visuals when practical; do not assign unsupported numerical quality scores.
