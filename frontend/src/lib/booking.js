// Retained for compatibility with the unused legacy booking dialog.
export async function submitBookingRequest(payload) {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { ok: true, payload };
}
