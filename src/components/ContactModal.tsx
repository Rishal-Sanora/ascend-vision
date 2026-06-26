import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Global event to open the contact modal from anywhere
export const OPEN_CONTACT_MODAL_EVENT = "open-contact-modal";

export function triggerContactModal() {
  window.dispatchEvent(new Event(OPEN_CONTACT_MODAL_EVENT));
}

export function ContactModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener(OPEN_CONTACT_MODAL_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_CONTACT_MODAL_EVENT, handleOpen);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-none bg-transparent shadow-2xl glass-strong">
        <div className="bg-white/10 dark:bg-black/10 backdrop-blur-3xl rounded-lg p-6 md:p-8 border border-white/20">
          <DialogTitle className="text-2xl md:text-3xl font-display font-bold mb-2">
            Let's build your next infrastructure
          </DialogTitle>
          <p className="text-foreground/70 mb-8 max-w-xl">
            We provide high-level enterprise solutions. Connect with our experts today to scale your
            infrastructure and secure your digital assets.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <ContactRow
                icon="📍"
                label="Headquarters"
                value="#24, 100 Feet Rd, HRBR Layout 1st Block, Banaswadi, Bengaluru, Karnataka 560043"
              />
              <ContactRow
                icon="📞"
                label="Phone"
                value={
                  <>
                    <a href="tel:+919964546464" className="hover:text-foreground font-medium">
                      +91 99645 46464
                    </a>
                    <span className="text-foreground/40 mx-2">·</span>
                    <a href="tel:08043364331" className="hover:text-foreground font-medium">
                      080 4336 4331
                    </a>
                  </>
                }
              />
              <ContactRow
                icon="✉️"
                label="Email"
                value={
                  <a
                    href="mailto:sales@TERAiTtech.com"
                    className="hover:text-foreground font-medium"
                  >
                    sales@TERAiTtech.com
                  </a>
                }
              />

              <div className="mt-6 rounded-xl overflow-hidden h-[200px] border border-black/10">
                <iframe
                  src="https://maps.google.com/maps?q=24,%20100%20Feet%20Rd,%20HRBR%20Layout%201st%20Block,%20Banaswadi,%20Bengaluru,%20Karnataka%20560043&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                const body = `Hi TERAiT,%0A%0AName: ${f.get("name")}%0AEmail: ${f.get("email")}%0APhone: ${f.get("phone")}%0A%0A${f.get("message")}`;
                window.location.href = `mailto:sales@TERAiTtech.com?subject=Enquiry from website&body=${body}`;
                setOpen(false);
              }}
              className="bg-white/80 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-2xl p-6 space-y-4"
            >
              <Field label="Full name" name="name" required />
              <Field label="Email address" name="email" type="email" required />
              <Field label="Phone number" name="phone" type="tel" />
              <Field label="Your message" name="message" textarea required />
              <button
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 rounded-xl px-6 py-4 font-semibold text-white transition hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg,var(--brand-red),var(--brand-blue))",
                }}
              >
                Submit your request →
              </button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ContactRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="bg-white/50 dark:bg-black/10 border border-black/5 dark:border-white/5 rounded-xl p-4 flex gap-4 items-center">
      <div className="h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br from-[var(--brand-red)] to-[var(--brand-blue)] text-white text-xl grid place-items-center font-bold">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-foreground/50 font-bold">
          {label}
        </div>
        <div className="mt-0.5 text-foreground/90 text-sm leading-tight">{value}</div>
      </div>
    </div>
  );
}

export function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "w-full bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 text-foreground rounded-lg px-4 py-2.5 outline-none focus:border-[var(--brand-blue)] focus:ring-1 focus:ring-[var(--brand-blue)] transition text-sm";
  return (
    <label className="block">
      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">
        {label}
        {required && " *"}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={3}
          className={`${base} mt-1.5 resize-none`}
        />
      ) : (
        <input name={name} type={type} required={required} className={`${base} mt-1.5`} />
      )}
    </label>
  );
}
