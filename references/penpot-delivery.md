# Penpot Delivery Adapter

Read after [design-editor-delivery.md](design-editor-delivery.md) when Penpot is the selected output.

- Inspect the target file, current page, local library, connected libraries, tokens, and existing components before adding new foundations.
- Use Flex Layout or Grid Layout for structured content. Use free positioning only for purposeful overlays, illustrations, and artwork.
- Map semantic roles to Penpot tokens or library colors and typographies. Reuse existing library assets before creating duplicates.
- Build repeated UI as library components and use variants for applicable states and sizes. Avoid independent copies that differ only by content.
- Keep image crop and fill behavior consistent across repeated cards. Preserve editable labels, prices, and controls.
- Use a coherent icon set instead of text characters, arbitrary circles, or unrelated primitive constructions.
- Name boards and important layers by product role. Check bounds, clipping, scrolling intent, and layout-child behavior.
- Export the final board at intended size and inspect it separately. MCP connectivity, successful tool execution, editable layers, or an in-bounds geometry report do not establish visual quality.
