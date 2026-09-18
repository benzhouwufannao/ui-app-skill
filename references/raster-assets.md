# GPT Raster Assets for Mobile UI

Read when a mobile page needs campaign key art, hero imagery, brand illustration, empty-state artwork, or product-specific feature icons. Generate assets as part of the page workflow when useful; do not ask for a second confirmation of already authorized design work.

## Decide what needs generation

Use original raster artwork when it gives the product a meaningful visual identity, explains a function, or supports the campaign theme. Do not add decoration that displaces the primary task. Default to familiar existing controls for back, search, close, and other utility actions; do not generate each of these independently. If the user explicitly requests bitmap controls throughout, honor that scope while preserving recognizable silhouettes and accessibility.

For generated visual assets, deliver PNG or WebP as appropriate. Do not replace requested artwork with SVG, CSS illustrations, or rasterized vector placeholders. Bitmap format alone does not determine style: choose photographic, tactile, painted, dimensional, or another art direction from the brief rather than automatically producing flat vector-style illustrations. Preserve an explicitly requested style.

## Tool and model choice

Prefer the available built-in GPT image-generation tool. When the environment provides an image-generation skill, read its applicable tool instructions before calling it. Use the newest GPT image capability actually supported by the current environment; verify exposed controls and current model availability at execution time instead of hard-coding a model name into this skill.

If the tool does not expose a model selector or return an exact model identifier, use its supported default and do not claim an unverified model version or that it is definitively the latest. Do not silently switch to another vendor, an older model, or a paid external service. Respect an explicit user-selected provider or model.

If generation is unavailable or fails, continue independent layout work and report the precise asset gap. Follow the tool's authorized fallback workflow; do not request an API key for a built-in tool that does not need one. A temporary placeholder must be labeled as provisional and must not be reported as completed generated artwork.

## Add an asset brief to the design contract

Record only the assets needed for this task:

- Purpose and placement: hero, campaign background, feature icon, or empty state.
- Display dimensions/aspect ratio and expected crop at narrow and standard widths.
- Theme, subject, composition, visual weight, and reserved space for interface text.
- Palette relationship to semantic UI colors; material, lighting, perspective, and detail density.
- Background treatment: opaque, page-matched, or actual transparency if supported.
- For a set: shared art direction, relative object size, silhouette treatment, and export bounds.

A useful prompt describes the asset, its page context, composition, and exclusions. For example: “A tactile paper-document arrangement for a warm ivory mobile scanning app, terracotta accents, soft side lighting, readable at a small size, subject on the right, calm negative space on the left, no lettering or interface controls.” Adjust to the actual product; this example is not a universal style.

## Generate and integrate

Generate the visual asset rather than a flattened screenshot of the entire interface. Keep headings, prices, navigation, buttons, and editable copy as real page elements. For a requested set, reuse a shared style brief and reference approved outputs when supported to avoid material, lighting, or perspective drift.

Request enough resolution for the actual display size and target pixel density; avoid expensive oversized output without a purpose. Use supported transparency controls and verify actual alpha, not a painted checkerboard. If transparency is unsupported, use an intentional matching background or explain the limitation rather than claiming transparent output.

Copy selected outputs into the project's asset directory and reference those local files. Preserve originals when creating web derivatives. Follow the image tool's permitted editing workflow for changes. Do not overwrite unrelated assets or keep project dependencies only in temporary or tool-managed output paths.

## Verify within the page

Inspect the generated asset itself, then render it in its intended component at narrow and standard widths. Check subject crop, apparent size, visual hierarchy, background edges, text contrast, loading/fallback behavior, and image clarity. For icon sets, compare silhouettes and relative visual weight at actual display size, not only enlarged previews.

Maintain the layout contract: reduce the artwork's reserved footprint or adjust its composition before shrinking readable text. Ensure artwork cannot intercept intended control clicks. Decorative images use empty alt text; meaningful images get concise descriptions, and actionable icons retain accessible control names independent of the bitmap.

Regenerate or edit when composition or style conflicts with the page; do not call an attractive standalone image successful without inspecting the integrated result. Include the final artwork in the delivered prototype, and accurately distinguish generated assets, reused assets, provisional placeholders, and unverified tool/model information.
