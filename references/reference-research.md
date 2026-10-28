# Reference-First Mobile Design

Read this reference for new mobile products, redesigns, unfamiliar flows, or whenever the user asks to study real apps before designing.

## Research question first

Define the specific decision the evidence should inform. Search separately for functional structure and visual treatment when necessary. Useful questions include:

- How do iOS utility apps expose one primary action without hiding history?
- How do finance apps explain a permission before the system prompt?
- How do mood trackers visualize trends without implying medical certainty?
- What empty, loading, failure, and recovery states exist in this flow?

Avoid broad searches such as `beautiful app UI`; they produce decorative similarity rather than product insight.

## Sources

Start with the user’s supplied references and the project’s established design system. For additional evidence, inspect relevant Eagle assets when available using the procedure below. Use UI Notes as the first external mobile reference source for unresolved decisions. External research supplements applicable local evidence.

1. UI Notes public App and screenshot pages, especially for Chinese-market language, content density, operations, membership, commerce, tools, and domestic product conventions.
2. Official App Store and Google Play listings when current version or platform context is needed.
3. Public UIZZE catalogue pages for real iOS and web surfaces when UI Notes lacks the relevant example.
4. Public pages from established libraries such as Page Flows, Mobbin, Screenlane, or equivalent sources for missing flows and interaction sequences.

Use authenticated or paid catalogues only when they are already available. Do not request a subscription, API key, or login merely to complete ordinary design work. Respect site access controls; do not bypass paywalls or bulk-download protected collections.

### UI Notes access rule

Use `https://uinotes.com/` as the first external discovery source after relevant supplied/project/Eagle references. Its public site currently provides separate App and screenshot libraries, search, company filters, and industry filters. Start with the closest industry and user task, then inspect the relevant App pages and publicly visible screenshots. Free access is enough for ordinary reference sampling; do not recommend or initiate a membership purchase as part of a design task.

Prioritize relevant UI Notes examples without imposing a source quota. Follow SKILL.md §2 and stop when the design question has sufficient inspected evidence. A direct reference supplied by the user takes precedence, and official platform documentation remains authoritative for current system behavior and APIs.

Some screenshot search, filtering, and App-detail content may be limited for ordinary users. If a needed screen is locked, use the visible evidence and continue with another public source. A membership or trial may be used when the user already has it and has chosen to use it, but the workflow must remain functional without it.

UI Notes is a reference library, not a generation engine or guaranteed API. Do not imply that its screenshots are imported into the deliverable automatically. Inspect them for structural and interaction lessons, retain the source URL, and create an original result.

## Sampling

Use a bounded, diverse sample. One inspected supplied or existing screen can suffice for a targeted change or reference translation. For a broad new direction, sample enough relevant screens to cover the unresolved functional and visual decisions, without a fixed count. Compare different products when useful, and inspect a sequence from the same product when studying a flow. Stop when additional examples repeat the same lesson.

A search-result title, snippet, generated caption, or text-only description is discovery evidence, not an inspected screen. Do not claim visual research from it. Open the source image or page and inspect the actual screen at a useful size before recording composition, hierarchy, crop, typography, or visual-style findings.

For each reference, capture:

- product and source URL;
- platform and relevant screen or flow;
- information hierarchy and primary action;
- navigation and interaction model;
- important states or trust signals;
- one useful lesson and one limitation.

For Banner, tile-area, campaign, and other image-led modules, search both the closest product category and the matching UI Notes function/component collection. Compare several examples before classifying the prevailing medium as photography, product rendering, illustration, or mixed media. Record exceptions by positioning: a mass-market promotion, premium editorial shop, food marketplace, and utility service may use different visual evidence even within the same broad industry.

Discard references that lack enough context, are visually outdated for the target platform, or answer a different user task.

## Synthesis

Create a compact evidence matrix instead of a mood board with unexplained screenshots:

| Reference | Solves well | Limitation | Transferable lesson |
|---|---|---|---|
| Product A | Clear primary task | Weak history access | Preserve one dominant action |

Then make explicit decisions:

- **Adopt:** proven platform or interaction conventions that fit directly.
- **Adapt:** useful structures that need different content, hierarchy, or branding.
- **Reject:** fashionable patterns that conflict with the user's task, accessibility, trust, or platform behavior.

The result should combine lessons from multiple references and the product brief. It must not reproduce another app's brand, proprietary copy, imagery, icon set, or exact arrangement.

## Evidence handoff

In the final delivery, name the consulted sources and explain the few design decisions they materially influenced. Do not claim that a reference was used if it was not actually inspected. Distinguish observed evidence from design inference.

If browsing is unavailable, inspect user-provided visual references or relevant existing project screens. Platform conventions alone do not satisfy the mandatory reference-first gate in SKILL.md §2. If no valid visual evidence is available after feasible alternatives, report the exact gap and complete independent brief/structure work; do not begin visual authoring unless the user explicitly requests skipping research.

## Evidence quality

Classify source evidence as an inspected screen, an observed interactive flow, or a text-only description. Static screenshots support composition and visual hierarchy findings, not claims about back behavior, transitions, persistence, or error recovery. Do not treat search snippets as inspected UI. Record access date and apparent platform/version when they affect the conclusion; flag unknown versions rather than inventing them.

Reference libraries support discovery, while official platform documentation supports normative and version-sensitive guidance. Check the latter before prescribing current APIs or system behavior. User references need not be replaced with new searches merely to reach a sample count.


## Eagle retrieval and transfer

Use the installed Eagle skill for API/CLI operations. If Eagle is unavailable or has no relevant evidence, continue with other sources without blocking or initializing unrelated folders.

- Discover the actual folder hierarchy; inspect relevant descendants rather than treating an empty parent folder as an empty library. Folder names and IDs are local data, not fixed skill constants.
- Search by task and the unresolved design decision: e.g. sales comparison, category ranking, date filtering. Sample across relevant App, statistics, or component folders rather than defaulting to the newest items. Query folders separately when multi-folder filters use intersection semantics; deduplicate by item ID.
- Inspect the actual image and read its annotation/comments. Record item ID, source URL or local path, screen/task, transferable feature, and limitation. A saved image is a candidate reference, not proof that the user approves every part of it. Preserve the distinction between explicit user feedback and inferred preference.
- Separate the product screen from its portfolio presentation: device frames, giant cover text, watermarks, and surrounding decoration do not establish the in-product design.
- For each selected reference, connect **visible feature → design decision → affected region → verification**. For example: a funnel communicates stage conversion → use that structure only when the target has stage relationships → conversion section → verify stage order and readable labels. Do not invent a funnel, chart, illustration, or data merely to resemble a reference.
- Keep these observations in the current project’s design notes. Add permanent preference or failure records to the library only when the user requested that write; keep their task context and the user's actual feedback.

Stop sampling when the important decisions have sufficient visual evidence. Folder access and filename lists alone do not satisfy visual inspection.

## Optimization decisions

Before editing an incumbent screen, distinguish:

| Decision | Evidence |
|---|---|
| Keep | User-accepted identity and working conventions: palette, material, typography, or density |
| Improve | A visible problem in a named region and its effect on reading or action |
| Proposed change | A layout/type/spacing treatment that addresses that problem, with reference evidence when useful |
| Compare | What should become easier to scan or use, and what identity must remain recognizable |

“Keep the style” locks the identified visual relationships, not every card boundary or position. “Polish spacing only” is a narrower instruction and should stay narrow. If the user asks for more substantial improvement, consider different information arrangements internally where needed; choose by task fit rather than requiring a fixed number of variants. Combining cards, removing cards, or expanding white space is a choice, not an improvement by itself.

For a long category name in a mobile report, the acceptance question is whether names, amounts and percentages can be compared at the target size. Test actual content; smaller text that merely prevents overflow is not a visual solution. If folding details improves density, retain a clear access route and respect requests to show everything.
