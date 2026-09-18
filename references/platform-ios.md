# iOS Design and Implementation

Use for iOS screens. Preserve SwiftUI, UIKit, React Native, Flutter, or another existing framework; translate expected behavior into that stack.

## Decisions

- Model top-level destinations separately from navigation within a destination. Use tabs for peer destinations, pushes for drill-down, and sheets for scoped tasks when appropriate.
- Specify back, cancel, dismiss, and unsaved-input behavior. Preserve edge-back gestures in native implementations and avoid unnecessary custom chrome.
- Prefer supported system controls for pickers, sharing, menus, and permissions. A prototype may explain a permission journey, but must not impersonate a working OS permission request.
- Use semantic text and color roles. Support Dynamic Type and light/dark appearances when included in scope or already supported by the app; do not simply invert colors.
- Use coherent iconography. SF Symbols availability and permitted use depend on the target environment; do not assume an Apple-only asset works in an Android or web deliverable.
- Use 44 × 44 pt as a default minimum interaction target; the visible glyph may be smaller. Account for safe areas without double-insetting content already handled by navigation containers.
- Keep focused fields and submit actions reachable with the keyboard. Long labels should wrap or adapt without hiding required actions.

## Validation

Inspect large text, long localized content, scrolling beneath navigation, sheet dismissal, and back behavior as relevant. Verify native behavior in a simulator or device when available. A browser prototype cannot establish native gesture, VoiceOver, keyboard, or haptic correctness. Do not add haptics merely as decoration; actual haptic behavior needs a device check.

## Authoritative references

For current component guidance and version-sensitive decisions, consult [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/) and [SwiftUI documentation](https://developer.apple.com/documentation/swiftui). Record the target OS/API availability when it affects implementation. Follow the actual project target rather than assuming the latest SDK.
