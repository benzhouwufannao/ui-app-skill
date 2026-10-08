# Figma Delivery Adapter

Read after [design-editor-delivery.md](design-editor-delivery.md) when Figma is the selected output.

- Inspect the target file, page, variables, published libraries, and existing components before introducing new foundations.
- Use Auto Layout for structured content and set resizing behavior deliberately: hug for content-sized controls, fill for expanding regions, and fixed only when the product or asset requires it.
- Map semantic roles to Figma Variables or Styles. Reuse existing variables and libraries before creating local duplicates.
- Build repeated UI as Components. Use component properties and Variants for applicable states, sizes, themes, icons, and content options; avoid detached copies as the default workflow.
- Keep image masks and crop behavior consistent across repeated cards. Preserve editable copy and controls above imagery.
- Use a coherent component or library icon set. Verify default and selected states at actual display size.
- Check frame constraints, clipping, scrolling, safe-area treatment, and prototype connections where relevant.
- Before delivery, inspect the layer tree for unexplained absolute positioning, duplicated near-identical components, raw color drift, default layer names, detached instances, and overflowing content.
- Export the final frames and compare them with the recorded visual contract and inspected references. Figma structure checks and visual checks must both pass.
