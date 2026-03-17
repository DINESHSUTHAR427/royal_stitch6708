export default function ContactPage() {
  return (
    <div className="border-b border-zinc-900/5 bg-background py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-500">
          Visit & Connect
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-50">
          Find the Royal Stitch studio.
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-start">
          <div className="space-y-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                Studio address
              </p>
              <p className="mt-2">
                Royal Stitch Studio
                <br />
                Your street name
                <br />
                Your city, PIN code
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                Contact
              </p>
              <p className="mt-2">
                Phone / WhatsApp: +91-99999-99999
                <br />
                Email: hello@royalstitch.in
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                Studio hours
              </p>
              <p className="mt-2">
                Mon – Sat, 11:00 AM – 8:00 PM
                <br />
                By appointment for bridal & wedding consultations.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-zinc-900/5 bg-zinc-100 shadow-sm dark:bg-zinc-900">
              <iframe
                title="Royal Stitch location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <form className="space-y-4 rounded-3xl border border-zinc-900/5 bg-zinc-50/80 p-5 text-sm shadow-sm shadow-zinc-900/5 dark:bg-zinc-900/40">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                Quick message
              </p>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600"
                >
                  Name
                </label>
                <input
                  id="name"
                  className="h-9 w-full rounded-full border border-zinc-200 bg-white px-3 text-xs text-zinc-800 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-200 dark:focus:ring-zinc-200"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-800 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-200 dark:focus:ring-zinc-200"
                  placeholder="Share your query and we’ll get back soon."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-zinc-50 shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Send Message
              </button>
              <p className="text-[0.6rem] text-zinc-500">
                This demo form does not send emails yet – connect your preferred
                email or CRM provider in production.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

