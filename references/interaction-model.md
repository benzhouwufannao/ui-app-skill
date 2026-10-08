# Mobile Interaction and State

Read when a flow spans screens, shares filters or data, saves input, or has asynchronous work. A static visual adjustment does not need a new state model.

## Make the behavior explicit

For each consequential interaction, resolve four things in code or concise working notes:

| Trigger | Source of truth | Visible consequence | Recovery or return |
|---|---|---|---|
| Apply a filter | Applied filter separate from an uncommitted draft when an Apply action exists | List, counts, and dependent charts use the same scope | Cancel preserves applied values; reset restores the defined baseline |
| Save a record | Shared entity keyed by stable ID | Detail and list reflect the same saved value | Failed save keeps input; cancel does not commit |
| Select a chart mark | Selected entity/date plus metric and period | Linked chart and its scope label update together | Deselect restores the parent scope; invalid selection is cleared on scope change |
| Start an operation | Explicit pending/result/error state | Progress and available actions agree | Retry uses the retained input; cancellation does not report success |

These are examples, not features to add to every app. Use the project's existing state mechanism; a small prototype may use a plain object. Avoid independent hard-coded totals or duplicated entity copies that drift when edited.

## Data consistency

- Derive summaries and charts from the same filtered records. Define whether a selection changes a global summary or only a linked view, and label that scope.
- For calculated values, establish units, denominator, time zone/date boundaries, and comparison period when relevant. A rate uses the intended weighted denominator rather than an arbitrary average. Missing values are distinct from zero.
- Use stable, deterministic demo fixtures so changing a tab does not invent new data. Mark simulation once in an appropriate visible place; do not fabricate live timestamps or business results.
- Keep transient selection separate from stored records. Persist only what the requested experience needs; do not automatically store personal data or claim persistence when state resets.

## Async and interrupted journeys

- Separate initial loading, content, filtered-empty, and failure when data actually loads. Background refresh need not erase usable content.
- Keep draft input on failure. Guard repeated submissions while pending, or use the project's idempotency mechanism for live operations. Honor the existing optimistic-update/rollback strategy rather than imposing a new one.
- When a newer search/filter request supersedes an older one, ignore or cancel stale responses so results match the current control state.
- Specify what back, cancel, sheet dismissal, and interruption do to drafts. Do not make an unchanged form trigger an unnecessary confirmation.
- Permissions are requested at the relevant action. Where possible, refusal leaves an alternate route. Simulated permissions in a prototype must not be described as working OS integration.

## Mobile interaction details

Provide tap-accessible details for charts and gestures; do not rely on hover. Use accessible names, selected/expanded state, and meaningful focus order. Preserve appropriate native back and scroll behavior. Keep input and its main action reachable when the keyboard opens; a browser resize is not proof of native keyboard handling.

Motion should connect a trigger to its result and remain interruptible. Avoid animating the entire screen on every value change. Respect reduced motion and use the existing animation system; add a library only when the required interaction warrants it.

## Verify outcomes

Exercise a meaningful path rather than merely clicking every button: change a filter and inspect the resulting records; save and revisit the list; select and deselect a linked chart; fail then retry a relevant operation. Test only applicable behavior. Use actual values and UI effects as evidence, not the presence of handlers or a success message.
