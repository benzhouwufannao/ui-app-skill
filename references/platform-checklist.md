# Mobile Platform Checklist

Read this reference when a task involves native iOS/Android behavior or cross-platform variants.

## Navigation

- iOS commonly uses a bottom tab bar for primary destinations and a stack within each tab. Preserve the edge-swipe back gesture.
- Android commonly uses a Material navigation bar for 3–5 destinations and the system predictive-back behavior. Do not intercept the system back gesture casually.
- Keep destination structure consistent across platforms, but adapt system-level behavior rather than forcing pixel-identical navigation.

## Controls and feedback

- Prefer native expectations for switches, pickers, permission prompts, share sheets, destructive confirmation, and keyboard behavior.
- Do not imitate OS-owned permission dialogs inside the app.
- iOS destructive actions commonly appear in an action sheet or confirmation alert; Android commonly uses a dialog or bottom sheet using error semantics.
- Provide immediate pressed feedback and keep progress visible for operations that do not complete instantly.

## Layout and input

- Respect top, bottom, and horizontal safe areas.
- Test content with larger system text and long localized strings.
- Keep editable content visible above the keyboard; provide a clear way to dismiss or advance it.
- Avoid placing essential actions solely in gesture-only interactions.
- Use 44×44 pt minimum targets on iOS and 48×48 dp on Android, with adequate separation between destructive and safe actions.

## Visual language

- iOS: use SF-style hierarchy, restrained chrome, sheets, and depth where they support the task. Avoid applying blur everywhere.
- Android: follow Material 3 roles, predictable component states, and dynamic-color compatibility when appropriate.
- A cross-platform product may share brand colors, typography character, icons, and component logic while adapting navigation, system controls, gestures, and dialogs.

## Accessibility gate

- Body text and controls remain understandable at increased text size.
- Text and essential icons maintain readable contrast.
- Information is not communicated by color alone.
- Focus order follows the visual and task order.
- Motion has a reduced-motion alternative and never blocks task completion.
- Error messages identify the problem and the next corrective action.
