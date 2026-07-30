"use client";

/**
 * Opt-in consent checkbox for all lead forms (PIPEDA / CASL compliant).
 * - Required (defaultChecked=false), so submitting without checking is impossible
 * when wired to a real handler.
 * - Compact variant for the mobile hero modal where vertical space is tight.
 * - Links to /privacy and /terms (both shipped per Stage 4 legal pages rule).
 */
export default function ConsentCheckbox({ compact = false }: { compact?: boolean }) {
 return (
 <label
 className={`flex items-start gap-2.5 cursor-pointer select-none ${
 compact ? "text-[12px] leading-[1.45]" : "text-[12px] leading-[1.5]"
 } text-[var(--color-text-muted)]`}
 >
 <input
 type="checkbox"
 required
 name="consent"
 className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-accent-mid)] cursor-pointer"
 />
 <span>
 I agree to be contacted by McCoy Landscape Group by phone, text, or
 email about my project. I can opt out anytime. See our{" "}
 <a
 href="/privacy"
 className="underline underline-offset-2 hover:text-[var(--color-text)]"
 >
 Privacy Policy
 </a>
 {" "}and{" "}
 <a
 href="/terms"
 className="underline underline-offset-2 hover:text-[var(--color-text)]"
 >
 Terms
 </a>
 .
 </span>
 </label>
 );
}
