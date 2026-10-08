# Mobile Implementation and Developer Handoff

Read when implementing in a project, converting a prototype, or preparing an explicitly requested developer handoff. Do not generate engineering paperwork for a visual-only task.

## Establish the destination

Inspect existing dependencies, supported platform versions, route structure, reusable components, tokens, assets, and data contracts. Keep the established architecture. A sample skill's clinic architecture, SDK version, or preferred library is not a project requirement.

Distinguish these outputs:

| Output | What it establishes | What it does not establish |
|---|---|---|
| Editable design | Inspectable layouts, tokens, components, states | Executable business logic |
| Conversation prototype | Demonstrable interactions inside its host | Standalone runtime or native integration |
| Standalone prototype | Runnable demonstration with declared data boundaries | Production services or native behavior |
| Integrated implementation | In-scope code in the target app, with reported checks | Untested releases, infrastructure, or unspecified functionality |

If the user requests implementation, complete it within scope instead of ending at a checklist of developer work. If they only request handoff, provide the inspectable source and concrete contracts without silently creating a new app.

## Translate source, not just appearance

Inspect both prototype code and the rendered behavior when available. Map repeated elements to existing components; inspect their actual APIs before use. Preserve the product's interaction meaning while using the destination platform's controls.

- **React web:** follow the existing framework and UI library. If shadcn/ui is requested, use its real installed components and applicable component guidance. HTML styled to resemble shadcn is described as a visual prototype, not a shadcn implementation.
- **React Native / Expo:** reuse the current navigation and native primitives. Web DOM elements and CSS are not native controls. Select compatible modules and inspect iOS and Android behavior independently. Use the project's existing preview/development-build route; check whether needed native capabilities exist before assuming a generic preview app is enough.
- **SwiftUI / UIKit:** keep state ownership clear and entity identity stable. Prefer supported system components and gate version-specific APIs. Use local view/layout context instead of assuming one global screen size. Do not mandate MVVM or a particular persistence layer.
- **Flutter:** reuse the existing routing, state management, theme, and component conventions. Preserve keys/state through list edits and rebuilds; do not switch management frameworks merely to implement a screen.

For a long or unbounded list, use the stack's appropriate lazy/virtualized container and avoid nested scroll ownership that breaks it. Do not claim performance improvements without measurement. Check current official documentation for version-sensitive implementation choices instead of embedding a fixed “latest SDK” in this skill.

## Remove prototype-only dependencies when exporting

Inventory host-provided icons, styles, tooltips, storage, and messaging. Replace them with local/package equivalents or a documented adapter when standalone execution is requested. Remove inaccessible local paths and bundle required assets. Keep asset source and generated/provisional status traceable.

Separate deterministic fixtures from live data access using the project's normal adapter or repository pattern. Specify only the required fields, IDs, units, optional values, loading/error behavior, and update semantics. Do not invent backend endpoints and describe them as connected. Unknown external contracts should remain explicit seams while independent UI work proceeds.

## Deliver the minimum useful handoff

For an explicit developer handoff, keep these details in the existing project docs or a concise adjacent handoff file:

- Entry point and exact run/build commands supported by the project.
- Screen/route and component mapping, with shared tokens and relevant variants.
- Main interactions, state ownership, back/cancel behavior, and important failure recovery.
- Demo versus connected data, field/metric definitions, and unresolved external contracts.
- Local assets and any host/runtime dependencies that remain.
- Checks actually run and material unverified device/build behavior.

Run the relevant build/type checks and exercise the implemented journey where the environment allows. A web preview cannot establish native keyboard, gestures, haptics, accessibility service behavior, or device performance. Review screenshot fidelity separately from runtime correctness. Do not describe a mockup as production-ready merely because it renders.

## Reference decisions behind this skill

Reviewed 2026-10-08; these sources inform the workflow, not required dependencies or a popularity ranking. Verify upstream guidance again when using version-sensitive APIs. The rules above are adapted to this skill's multi-platform scope, not copied API recipes.

- [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill): keep product-specific design decisions explicit and reusable; do not impose a style catalog or web landing-page structure on mobile tasks.
- [UIZZE UI Design](https://github.com/uizze/uizze/blob/main/skills/ui-design/SKILL.md): select guidance by task and preserve the existing product context. Paid reference retrieval remains optional; UI Notes remains this skill's preferred applicable public source.
- [SwiftUI Expert](https://github.com/AvdLee/SwiftUI-Agent-Skill/blob/main/skills/swiftui-expert-skill/SKILL.md): clarify state ownership and version availability without imposing a universal architecture. Detailed Swift APIs belong in current platform guidance.
- [Expo Native UI](https://github.com/expo/skills/blob/main/plugins/expo/skills/expo-native-ui/SKILL.md): account for native controls, supported runtime capabilities, and platform differences. Do not transplant Expo package/version preferences to SwiftUI, Flutter, or older projects.
