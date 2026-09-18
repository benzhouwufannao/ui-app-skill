# Android Design and Implementation

Use for Android screens. Preserve the existing Compose, Views, React Native, Flutter, or other framework.

## Decisions

- Choose primary navigation from destination count, hierarchy, and available width. Adapt the established Material or project component system rather than copying iOS chrome.
- Specify system back behavior separately from top-level navigation. Dismiss transient UI and return through the expected hierarchy; preserve predictive-back compatibility where supported by the target stack.
- Use semantic theme roles for surfaces, text, status, and emphasis. Dynamic color is optional when compatible with brand and scope, not a reason to replace the brand palette.
- Prefer supported platform components for dialogs, pickers, menus, and permissions. Preserve user input through failure and relevant configuration changes.
- Use 48 × 48 dp as a default minimum interaction target. Distinguish visible icon size from the full touch region.
- Account for system bars, edge-to-edge layouts, gesture regions, and keyboard insets without applying the same inset twice.
- Adapt to available window width rather than fixed device names. Include tablet or foldable layouts only when requested or already supported.
- Give interactive elements accessible names, keep reading order logical, and avoid redundant announcements from decorative icons.

## Validation

Check system back, keyboard access, long labels, large text, state preservation, and relevant appearance changes. Do not claim TalkBack, predictive-back, or native performance checks from HTML screenshots. Use the actual target runtime for such claims.

## Authoritative references

Consult [Android UI guidance](https://developer.android.com/develop/ui), [Material 3](https://m3.material.io/), and [Compose documentation](https://developer.android.com/develop/ui/compose) for version-sensitive choices. Verify libraries against the existing project's versions rather than importing another skill's dependency preferences wholesale.
