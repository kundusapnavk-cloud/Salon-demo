// Demo stub — swap the body for a real POST to `${process.env.REACT_APP_BACKEND_URL}/api/bookings`
// when a booking backend is connected.
export async function submitBookingRequest(payload) {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { ok: true, payload };
}
