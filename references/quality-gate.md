# Observable Delivery Checks

Read before delivering new or changed screens. Select checks proportional to the requested artifact; do not build unrelated states merely to complete this table.

For design-only documents, inspect the specified journey, component states, and any requested prototype connections. Do not require executable saves or data processing unless an interactive implementation is in scope. Mark design inspection separately from exercised runtime behavior.

| Check | Evidence to collect |
|---|---|
| Reference-first evidence | Before visual authoring, verify the applicable inspected-screen minimum, source links/paths, adopt/adapt decisions, and their use in the brief or generation prompt; search summaries do not qualify. Any explicit user override must be recorded |
| Primary journey | Perform the sequence from entry to meaningful result; verify back/cancel destinations |
| Enabled controls | Search changes results, save updates state, selections persist for the intended journey; no empty handlers disguised as working controls |
| Relevant async states | Distinguish loading, empty, and failure; exercise one applicable failure and recovery, preserving input |
| Content and layout | Inspect initial viewport and all scrollable content; check narrow width, long Chinese/mixed text, missing images when relevant, and text growth |
| Input and overlays | Focus fields and open/dismiss relevant sheets; required controls remain reachable; native keyboard claims require native evidence |
| Consistency | Compare key screen captures and repeated components; check token and semantic action consistency |
| Mobile information hierarchy | Inspect the initial viewport at the target phone width: task, active scope and primary result/action are clear; required detail has a discoverable route; identity/filter chrome and density serve the task. Validate expansion/detail routes when interactive; inspect only when static |
| Visual-plan review | Compare the final screen with the recorded color/type/layout decisions and product-specific source of identity; identify generic drift and fix the affected choices rather than changing the entire style |
| Content-led composition | For substantial visual work, check that grouping and prominence follow the actual task; repeated layouts have a reason, reference lessons appear in the result, and decorative elements do not displace useful content. Preserve familiar patterns where they work |
| Visual finish | Inspect at actual size; for substantial visual work, use grayscale/blur when useful to diagnose hierarchy. Verify first-view focus, domain credibility, imagery, icon coherence, and product-specific identity |
| Editable document health | Verify responsive layout, semantic variables/styles, reusable components, variants, layer names, and final exported frames in the selected editor |
| Accessibility | Inspect names, focus order, touch regions, contrast, non-color status cues, and reduced motion where applicable |
| Runtime | Run existing relevant build/type checks for code changes; verify assets and primary screens load |
| Linked state and data | Confirm filters, selection, totals, and dependent views share the stated scope; editing an entity updates related screens without stale copies |
| Developer handoff, when requested | Verify entry point, real component-library usage, fixture/API boundaries, assets, and remaining host dependencies; distinguish prototype from integrated code |

## Layout and interaction evidence

For standalone mobile HTML, execute [mobile-html-layout.md](mobile-html-layout.md). For an inline prototype, use the host's embedding rules and measure within the rendered product surface; do not impose viewport-fixed navigation or full-page height on a content-sized conversation frame. Record relevant viewport/container dimensions, actual text scale, navigation position, end-of-scroll clearance, horizontal overflow, and project-specific limits. Inspect screenshots for clipping and overlap independently of DOM overflow measurements. Save final-state evidence after corrections.

Exercise relevant dialogs with close/Escape and focus return. Check buttons and form fields in enlarged text, not only page headings. Browser focus tests do not prove real mobile keyboard avoidance; report that separately if no device or suitable emulator was used.

Select behavior checks from the actual journey: for example, search changes results, saving updates the related list, and a selected filter affects its count. Check persistence across reload only when promised, and exercise relevant validation/recovery. Use [interaction-model.md](interaction-model.md) for linked state. Check console errors and unhandled exceptions; inspect network requests if the project promises no external assets. Do not add features solely to satisfy this checklist.

After a fix, repeat affected checks; broaden only when shared components or new failures justify it. Do not use a visually similar screenshot as proof that storage, download, or validation behavior works.

## Evidence levels

- **Exercised:** actually operated in the stated browser, simulator, or device; report the result.
- **Inspected:** reviewed through screenshots, code, or computed styles; do not imply interactive validation.
- **Unverified:** could not run or lacks an appropriate environment; state only material gaps and the precise reason.

For a visual review based on screenshots, distinguish observed defects from behavior that needs verification. For a prototype, explicitly identify simulated external operations rather than calling them live integrations. Local state is sufficient when it demonstrates the intended task.

## Finish criteria

Fix introduced task-blocking and major defects before delivery. For an existing review-only task, report findings without silently implementing a rebuild. For a local revision, verify the modified screen and directly affected shared components, not the entire app by default.

Deliver a usable artifact/preview, included screens, and a short evidence-based verification summary. Include key screen images when the environment permits. Keep detailed evidence with the artifact only when useful; no ceremonial report is required for a small edit. If rendering cannot run, state that visual verification remains incomplete rather than inventing success.

## Skill regression scenarios

When changing this skill's behavior, use representative requests from examples/example-prompts.md. Compare actual outputs, not whether the model repeats these instructions. Useful signals include completion of the core journey, observable layout defects, unnecessary scope expansion, and accurate validation claims. Do not interpret a format validator passing as proof of design quality.

## Evidence-backed validation record

Use a compact table or equivalent structured record for the applicable checks:

| Check | Configuration | Status | Evidence |
|---|---|---|---|
| [specific invariant or behavior] | [viewport, text scale, runtime, relevant state] | [Pass / Fail / Unverified / Not applicable] | [measurement, exercised result, screenshot path, or reason] |

- **Pass:** the check was performed and the evidence supports the result; state whether exercised or inspected when the distinction matters.
- **Fail:** observed behavior violates the requirement; repair within scope and update the record after retesting.
- **Unverified:** no sufficient evidence or no suitable runtime; state the exact missing verification.
- **Not applicable:** the feature or layout is outside this artifact's scope; explain briefly instead of implementing it just for the checklist.

Measure interactive element bounds to establish touch-target dimensions. Use screenshots for clipping, hierarchy, and visual overlap; a screenshot alone cannot prove an invisible hit region's size or successful persistence. A no-overflow measurement does not establish no-clipping. Identify the final screenshot and measured clearance for fixed navigation at scroll end.

Keep the record proportional to the work: a small edit can have a few inline entries, while a larger prototype may retain a verification file beside its artifact. Do not mark hypothetical examples or unexecuted checks as passed. Update stale evidence after changes that affect its conclusion.
