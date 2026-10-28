# Learn from real design work

Use when the user provides a reference as a teaching example, corrects a result, or requests skill improvement. Ordinary design tasks do not require a separate training session, a curated library, or a lesson report.

## Capture only evidence that exists

During the task, keep accepted decisions and feedback with its existing project notes so later iterations use the current baseline. Preserve links to the original brief, inspected images, and relevant before/after artifacts. Avoid duplicating image binaries in the skill when a stable Eagle item or local reference already exists.

A useful record contains:

- **Task and constraints:** user, decision, content volume, platform, locked choices, allowed changes.
- **Artifacts:** original/user-designed screen, generated output, and revision when available; label each role.
- **Feedback:** the user's actual acceptance or rejection, distinguishing it from the agent's interpretation. A later message overrides an earlier choice only for the affected scope.
- **Diagnosis:** implementation fidelity, reference fit, composition/judgment, or verification failure; mark uncertain explanations as hypotheses.
- **Correction and status:** what changed, what comparison shows, and whether the user accepted it. A corrected output without user acceptance is still unconfirmed.
- **Transfer boundary:** when the lesson applies, and when it should not be reused.

Collection membership is not approval. An agent saying “this is better” is not user acceptance. Keep favorable and unfavorable examples together when they explain the same decision.

## Store at the right scope

Project facts and task-specific preferences stay in project notes. When the user explicitly feeds a case to the skill or asks to remember the lesson, add or update a concise case reference and link it from a case index created when the first retained case exists. Read relevant cases on demand by task/failure type, rather than loading every case for every page. Do not rewrite SKILL.md after every reaction or create empty case folders in advance.

Use a reusable main-workflow rule only for a demonstrated recurring decision error or an explicit general user preference. Preserve context for a single case. For example, “these bars reduced sales-report readability” does not mean charts are prohibited, and “preserve this pale-blue header” does not establish a global App palette.

Saving a skill case does not authorize modifying Eagle metadata, reorganizing the library, or sending assets to another service. Use those destinations when the user requests them.

## Practice only when it answers a question

Select the smallest useful exercise; it is not a mandatory sequence for normal delivery.

| Question | Exercise | Evidence |
|---|---|---|
| Can the implementation reproduce a decided design? | Reconstruct a supplied final screen with real content | Same-size comparison of type, wrapping, spacing, density and controls |
| Can the agent choose an appropriate composition? | Work from a brief without the withheld final design | Compare afterward with a user-selected target; do not claim a blind test if the target was visible in context |
| Does a lesson transfer? | Apply it to a different task with changed content | Inspect the intended gain and preserved task/brand constraints, not resemblance to the training case |

Separate aesthetic judgment, task usability and business fidelity from runtime checks. Shorter pages, more above-fold items, extra graphs, or fewer cards are not automatic gains. Inspect the actual first viewport, important actions, legible content, and whole-page rhythm together.

If revision repeatedly misses the same issue, pause broad restyling and diagnose that issue against the original and last accepted baseline. Explain the tradeoff and make a focused correction; avoid presenting another unsupported “improved” version. Finish the authorized deliverable or state a concrete limitation instead of turning diagnosis into an approval gate.

## State what has been verified

A valid skill file verifies packaging. A plausible design explanation verifies neither aesthetic quality nor transfer. Describe a change as a hypothesis until actual outputs support it; user acceptance remains attributed to the user. Do not promise that storing cases trains model weights or guarantees a future aesthetic result.
