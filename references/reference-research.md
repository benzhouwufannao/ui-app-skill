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

Start with the user’s supplied references and the project’s established design system. When additional research is useful, prefer sources that expose enough context to understand the screen:

1. UI Notes public App and screenshot pages for Chinese-market mobile products, especially when local language, content density, operations, membership, or domestic product conventions matter.
2. Public UIZZE catalogue pages for real iOS and web surfaces.
3. Official App Store and Google Play listings for current product screenshots and platform context.
4. Public pages from established libraries such as Page Flows, Mobbin, Screenlane, or equivalent sources.
5. Screenshots, recordings, links, or competitor names supplied by the user.

Use authenticated or paid catalogues only when they are already available. Do not request a subscription, API key, or login merely to complete ordinary design work. Respect site access controls; do not bypass paywalls or bulk-download protected collections.

### UI Notes access rule

Use `https://uinotes.com/` as a preferred discovery source for Chinese mobile apps. Start with public search, industry filters, App pages, and publicly visible screenshots. Free access is enough for ordinary reference sampling; do not recommend or initiate a membership purchase as part of a design task.

Some screenshot search, filtering, and App-detail content may be limited for ordinary users. If a needed screen is locked, use the visible evidence and continue with another public source. A membership or trial may be used when the user already has it and has chosen to use it, but the workflow must remain functional without it.

UI Notes is a reference library, not a generation engine or guaranteed API. Do not imply that its screenshots are imported into the deliverable automatically. Inspect them for structural and interaction lessons, retain the source URL, and create an original result.

## Sampling

Use a bounded, diverse sample—normally three to five useful references. Prefer different products rather than several screens from one product. Stop when additional examples repeat the same lesson.

For each reference, capture:

- product and source URL;
- platform and relevant screen or flow;
- information hierarchy and primary action;
- navigation and interaction model;
- important states or trust signals;
- one useful lesson and one limitation.

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

If browsing is unavailable, use user-provided material or platform conventions and proceed. Record the limitation only when it changes what the user can evaluate.

## Evidence quality

Classify source evidence as an inspected screen, an observed interactive flow, or a text-only description. Static screenshots support composition and visual hierarchy findings, not claims about back behavior, transitions, persistence, or error recovery. Do not treat search snippets as inspected UI. Record access date and apparent platform/version when they affect the conclusion; flag unknown versions rather than inventing them.

Reference libraries support discovery, while official platform documentation supports normative and version-sensitive guidance. Check the latter before prescribing current APIs or system behavior. User references need not be replaced with new searches merely to reach a sample count.
