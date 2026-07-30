/**
 * Sends a lead form payload to the McCoy GHL webhook.
 *
 * The webhook is a public GHL inbound endpoint configured by Get Local Leads.
 * It accepts JSON POST from any origin (CORS is permissive on GHL hooks).
 *
 * Returned promise resolves to { ok: true } on a 2xx response, or
 * { ok: false, error } on any failure. The caller is responsible for UI
 * state (loading / success / error messaging).
 */
const WEBHOOK_URL =
 "https://services.leadconnectorhq.com/hooks/NBT8wfA2Jzv51wMH95UK/webhook-trigger/4c512710-cb71-4a5d-86de-fed0fa6461a3";

export type LeadPayload = {
 // Standard contact fields — keep these names stable so they map cleanly
 // to GHL custom field IDs on the inbound side.
 full_name?: string;
 phone?: string;
 email?: string;
 city?: string;
 service?: string;
 budget?: string;
 message?: string;
 // Provenance — helps GHL route by form
 form_source: "quote-modal" | "hero-form" | "contact-page";
 page_url?: string;
 referrer?: string;
 // Honeypot — must remain empty
 website?: string;
};

export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
 // Bot trap — if the honeypot is filled, silently succeed without sending
 if (payload.website && payload.website.trim().length > 0) {
 return { ok: true };
 }

 try {
 const res = await fetch(WEBHOOK_URL, {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({
 ...payload,
 submitted_at: new Date().toISOString(),
 }),
 // GHL hooks accept cross-origin requests; no credentials needed
 mode: "cors",
 });

 if (!res.ok) {
 return { ok: false, error: `Server responded ${res.status}` };
 }

 return { ok: true };
 } catch (err) {
 return {
 ok: false,
 error: err instanceof Error ? err.message : "Network error",
 };
 }
}
