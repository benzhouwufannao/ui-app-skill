# Mobile HTML Layout and Repair

Read for mobile HTML prototypes, not native framework implementations. Apply the user's explicit dimensions and project design system first. The examples below are defaults for a narrow phone prototype, not a universal visual style.

## Layout contract

- Use a mobile viewport, fluid width, and centered container. A 430px maximum is a useful phone-preview default; preserve an existing project's responsive requirements.
- Use `min-height: 100dvh` for the page shell instead of fixed `height: 100vh`. Permit content growth. Supply a compatibility fallback only when the actual target browser requires it.
- Prevent unintended horizontal scrolling by fixing oversized children, inflexible grid/flex tracks, intrinsic widths, or unbreakable content. Do not use `overflow-x: hidden` as proof that content fits.
- When the design uses fixed bottom navigation, preserve `position: fixed; bottom: 0` at every breakpoint. Center a constrained navigation bar with `left: 50%; transform: translateX(-50%)`; match its width to the shell. Keep it bottom-aligned for short content too.
- Give navigation an appropriate stacking level and a discernible surface or separator. Backdrop blur is optional; provide a readable background without relying on blur. Colors come from project tokens.
- Keep navigation labels and click regions usable when text grows. The visible icon can be smaller than its hit area; use at least 44 × 44 CSS px for this prototype's controls, adapting native implementations to their own platform units and guidance.

## Reserve actual bottom space

The body's final content must be scrollable above navigation. Set shell bottom padding to at least the navigation's measured rendered height plus 20px. If that height already includes bottom safe-area padding, do not add the safe area again.

For a known 80px navigation design, `padding-bottom: max(100px, calc(env(safe-area-inset-bottom) + 80px))` is an initial estimate only. Check the actual navigation height at every test size and text scale; increase the reservation if necessary. A CSS variable updated through `ResizeObserver` is appropriate when the navigation can change height. Let the shell's own height change only when needed; avoid observer feedback loops.

At the maximum scroll position, the final meaningful content bottom must be at least 16px above the navigation top. Check the last file row as well as any following controls or text. Content temporarily passing behind fixed navigation while scrolling is not itself a failure; content that cannot be brought fully into view is a failure. Focused inputs and required actions must also be reachable above overlays.

## Content density and text growth

- For compact file lists, start around 56–64px rows, 32 × 40px thumbnails or 20px icons, and separators rather than repeated cards. Keep favorite hit regions large while retaining small visual icons.
- These row heights are normal-text targets, not accessibility caps. Permit growth when enlarged text needs it. Prioritize file names over secondary metadata; use wrapping or deliberate ellipsis only where appropriate, with full content accessible in details. Never clip button labels.
- Size a hero from its useful content. A project may set 200px at 390px width and 180px at 320px width for normal text. When it exceeds the budget, reduce or hide decoration and unnecessary spacing first. Allow height growth for enlarged text instead of shrinking readable text or cropping actions.
- Use a 44–48px search field and equal-width quick tools when they fit the product. Treat column count, radius, icon size, and typography as project choices. If enlarged labels cannot fit, adapt the layout rather than enforcing three columns blindly.
- Dialogs should fit the viewport, scroll internally, and retain reachable close and submit controls. A 398px maximum width and 85dvh maximum height are useful phone defaults. Verify focus containment, Escape/close behavior, and focus return; native HTML `dialog.showModal()` provides a useful base.

## Required browser passes

Use the available headless browser or browser automation. For new mobile HTML screens, exercise these configurations; for local revisions, restrict the screens checked to affected ones:

| Configuration | Required evidence |
|---|---|
| 320px wide, normal text | Initial viewport, scroll end, no unexpected horizontal overflow, navigation bottom alignment |
| 390px wide, normal text | Initial viewport, measured hero/list/control dimensions against the project contract |
| 320px wide, text at 130% | Screenshot and inspection of titles, button labels, navigation, final content, and relevant dialog/input states |

Record viewport height as well as width (for example 740px and 844px); heights are test conditions, not product requirements. Check any additional layout-changing breakpoint introduced by the implementation, including a desktop preview breakpoint if present.

Text enlargement must actually affect rendered text. Changing the root font size alone does not enlarge text authored in px. Use text-only scaling or an injected test override of computed font sizes without scaling containers, then verify representative computed sizes increased. Page zoom or deviceScaleFactor alone is not a substitute. Reset test overrides afterward.

For fixed navigation, capture the initial viewport and a separate scrolled-to-bottom viewport. A stitched full-page screenshot can place fixed navigation in the middle of the image and is insufficient evidence of obstruction. Use full-page captures only as supplemental content review. Inspect screenshots as well as DOM geometry.

## Post-generation repair order

1. Measure shell width, document scroll width, navigation position/height, final content clearance, and relevant control bounds. Compare against the project contract.
2. Restore fixed navigation only if the chosen design calls for it; ensure overlays stack appropriately. Correct insufficient bottom padding using actual navigation height and recheck at scroll end.
3. For oversized compact rows at normal text size, reduce thumbnail size and unnecessary padding. Preserve touch targets and enlarged-text readability.
4. For oversized heroes, reduce decorative dimensions and spacing first. A CSS transform alone does not reduce the element's layout footprint; also adjust its reserved width/height or positioning.
5. Enlarge undersized hit areas; check the actual interactive element, not the icon. Inspect long and enlarged button labels for clipping or overlap.
6. Rerun affected configurations, save final screenshots, and record measured results. Report text clipping, overlap, and horizontal overflow separately; one passing metric does not prove the others.

If browser execution is unavailable, deliver the artifact with the exact unverified checks. Do not convert inferred layout behavior into a claimed pass.
