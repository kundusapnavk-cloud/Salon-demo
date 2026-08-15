import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { salon, whatsappLink } from "../../config/salon";
import { submitBookingRequest } from "../../lib/booking";
import { useBooking } from "../../context/BookingContext";

const inputCls =
  "w-full rounded-md border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors duration-200 focus:border-brand placeholder:text-ink/35";
const labelCls =
  "mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/50";

const empty = { name: "", phone: "", service: "", date: "", time: "", message: "" };

export default function BookingModal() {
  const { open, setOpen, service } = useBooking();
  const [form, setForm] = useState(empty);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setSending(false);
      setForm((f) => ({ ...empty, service: service || f.service }));
    }
  }, [open, service]);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await submitBookingRequest(form);
    setSending(false);
    setSubmitted(true);
  };

  const waMessage = `Hi, I would like to book ${form.service || "an appointment"}${
    form.date ? ` on ${form.date}` : ""
  }${form.time ? ` at ${form.time}` : ""}. Please confirm my slot. — ${form.name}`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        data-testid="booking-modal"
        className="max-h-[92vh] overflow-y-auto border-black/5 bg-cream sm:max-w-lg"
      >
        {submitted ? (
          <div className="flex flex-col items-center py-10 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-brand/10 text-brand">
              <CheckCircle2 size={30} strokeWidth={1.6} />
            </span>
            <h3 className="mt-6 font-serif text-3xl text-ink">Request Received</h3>
            <p
              data-testid="booking-success-message"
              className="mt-3 max-w-sm text-sm leading-relaxed text-ink/60"
            >
              {salon.booking.successMessage}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="booking-whatsapp-confirm"
                className="flex items-center gap-2 rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-cream"
              >
                <MessageCircle size={15} />
                Confirm on WhatsApp
              </a>
              <button
                onClick={() => setOpen(false)}
                data-testid="booking-done-button"
                className="rounded-full bg-ink px-8 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-3xl tracking-tight text-ink">
                Book an Appointment
              </DialogTitle>
              <DialogDescription className="text-sm text-ink/55">
                Tell us what you need — we'll confirm your slot shortly.
              </DialogDescription>
            </DialogHeader>

            {service && (
              <p
                data-testid="booking-selected-service"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand"
              >
                Selected Service: {service}
              </p>
            )}

            <form onSubmit={onSubmit} className="mt-5 space-y-4">
              <div>
                <label htmlFor="booking-name" className={labelCls}>Full Name</label>
                <input
                  id="booking-name"
                  data-testid="booking-name-input"
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your full name"
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="booking-phone" className={labelCls}>Phone Number</label>
                <input
                  id="booking-phone"
                  data-testid="booking-phone-input"
                  required
                  type="tel"
                  pattern="[0-9+ -]{8,15}"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+91 79821 55015"
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="booking-service" className={labelCls}>Selected Service</label>
                <select
                  id="booking-service"
                  data-testid="booking-service-select"
                  required
                  value={form.service}
                  onChange={set("service")}
                  className={inputCls}
                >
                  <option value="" disabled>Choose a service</option>
                  {salon.categories.map((c) => (
                    <optgroup key={c.id} label={c.name}>
                      {c.services.map((s) => (
                        <option key={s.name} value={s.name}>
                          {s.name} · {s.duration} · {s.price}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-date" className={labelCls}>Preferred Date</label>
                  <input
                    id="booking-date"
                    data-testid="booking-date-input"
                    required
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={set("date")}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="booking-time" className={labelCls}>Preferred Time</label>
                  <select
                    id="booking-time"
                    data-testid="booking-time-select"
                    required
                    value={form.time}
                    onChange={set("time")}
                    className={inputCls}
                  >
                    <option value="" disabled>Select</option>
                    {salon.booking.timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="booking-message" className={labelCls}>
                  Additional Message <span className="normal-case tracking-normal text-ink/35">(optional)</span>
                </label>
                <textarea
                  id="booking-message"
                  data-testid="booking-message-input"
                  rows={3}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Anything we should know?"
                  className={`${inputCls} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                data-testid="booking-submit-button"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-brand py-4 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-brand-hover disabled:opacity-70"
              >
                {sending && <Loader2 size={16} className="animate-spin" />}
                {sending ? "Sending Request…" : "Request Appointment"}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
