/**
 * Single source of truth for opening the global quote modal.
 * Use this in onClick handlers anywhere — the modal is mounted in
 * app/layout.tsx and listens for `mccoy:open-quote-modal`.
 */
export function openQuoteModal() {
 if (typeof window === "undefined") return;
 window.dispatchEvent(new CustomEvent("mccoy:open-quote-modal"));
}
