# Platform Guidance Router

Read when navigation, gestures, controls, keyboard behavior, accessibility, or platform adaptation matter.

- iOS: read [platform-ios.md](platform-ios.md).
- Android: read [platform-android.md](platform-android.md).
- Both: share product structure and brand tokens while adapting system behavior; read both guides.
- HTML prototype: apply relevant platform intent, but use real web semantics and responsive layout. Do not describe simulated system UI as native integration.

Use platform conventions as defaults, preserving the project's established design system. Check target OS/framework versions before selecting version-sensitive components. Consult linked official documentation as needed; do not blindly upgrade or copy dependencies from another skill.

Across platforms, keep actions reachable, account for safe areas and keyboards, support text growth, supply accessible names and sensible focus order, and provide alternatives to gesture-only actions. Motion should explain change and respect reduced-motion preferences. Inspect actual foreground/background contrast; color alone must not convey status.

For acceptance evidence, use [quality-gate.md](quality-gate.md).
