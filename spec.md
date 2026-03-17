# Specification

## Summary
**Goal:** Remove the footer attribution line (“Built with … using caffeine.ai”) while keeping the rest of the footer unchanged.

**Planned changes:**
- Delete the second paragraph (`<p>`) in the `FooterSection` component that corresponds to `/html[1]/body[1]/div[1]/div[1]/footer[1]/div[1]/div[1]/p[2]`.
- Ensure footer spacing remains visually balanced with no leftover empty gap after the paragraph removal.

**User-visible outcome:** The footer no longer shows the “Built with … using caffeine.ai” attribution line, while the social icon buttons and copyright line remain the same.
