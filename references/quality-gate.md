# Observable Delivery Checks

Read before delivering new or changed screens. Select checks proportional to the requested artifact; do not build unrelated states merely to complete this table.

| Check | Evidence to collect |
|---|---|
| Primary journey | Perform the sequence from entry to meaningful result; verify back/cancel destinations |
| Enabled controls | Search changes results, save updates state, selections persist for the intended journey; no empty handlers disguised as working controls |
| Relevant async states | Distinguish loading, empty, and failure; exercise one applicable failure and recovery, preserving input |
| Content and layout | Inspect initial viewport and all scrollable content; check narrow width, long Chinese/mixed text, missing images when relevant, and text growth |
| Input and overlays | Focus fields and open/dismiss relevant sheets; required controls remain reachable; native keyboard claims require native evidence |
| Consistency | Compare key screen captures and repeated components; check token and semantic action consistency |
| Accessibility | Inspect names, focus order, touch regions, contrast, non-color status cues, and reduced motion where applicable |
| Runtime | Run existing relevant build/type checks for code changes; verify assets and primary screens load |

## Layout and interaction evidence

For mobile HTML, execute [mobile-html-layout.md](mobile-html-layout.md). Record viewport width/height, actual text scale, navigation height and positioning, end-of-scroll clearance, horizontal overflow, and any project-specific hero/row limits. Inspect screenshots for text clipping and overlap independently of DOM overflow measurements. Save final-state screenshots after corrections, not just the initial failed captures.

Exercise relevant dialogs with close/Escape and focus return. Check buttons and form fields in enlarged text, not only page headings. Browser focus tests do not prove real mobile keyboard avoidance; report that separately if no device or suitable emulator was used.

Where implemented, verify search and its empty state, category selection and `aria-pressed`, favorite persistence after reload, both sort directions, invalid-name recovery, saved-item placement, accepted/rejected import types, and editable/exported text. Check console errors and unhandled exceptions. Inspect network requests if the project promises no external assets. Do not add these features solely to satisfy this checklist.

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
