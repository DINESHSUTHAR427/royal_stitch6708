"use client";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const message = e.target.message.value;

    const text = `Hello, my name is ${name}. ${message}`;

    const whatsappUrl = `https://wa.me/919063124594?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="border-b border-zinc-900/5 bg-background py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-500">
          Visit & Connect
        </p>

        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-50">
          Find the Royal Stitch .
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-start">
          
          {/* LEFT SIDE */}
          <div className="space-y-5 text-sm text-zinc-600 dark:text-zinc-300">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Studio address
              </p>
              <p className="mt-2">
                Royal Stitch <br />
                Chandrai, Jalore, Rajasthan <br />
                307030
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Contact
              </p>
              <p className="mt-2">
                Instagram: <a href="https://www.instagram.com/royal_stitch6708/">@royal_stitch6708</a>
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Royal Stitch hours
              </p>
              <p className="mt-2">
                Mon – Sat, 11:00 AM – 8:00 PM <br />
                By appointment for bridal consultations.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919063124594"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:bg-emerald-400"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4">
            
            {/* ✅ FIXED GOOGLE MAP */}
            <div className="overflow-hidden rounded-3xl border bg-zinc-100 dark:bg-zinc-900">
              <iframe
                title="Royal Stitch location"
                src="https://www.google.com/maps?q=Chandrai,Rajasthan,307030&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>

            {/* ✅ FIXED FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-3xl border bg-zinc-50/80 p-5 dark:bg-zinc-900/40"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Quick message
              </p>

              <div>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="h-9 w-full rounded-full border px-3 text-xs"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Share your query..."
                  className="w-full rounded-2xl border px-3 py-2 text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-zinc-900 px-5 py-2 text-xs font-semibold uppercase text-white hover:bg-zinc-800"
              >
                Send Message
              </button>

              <p className="text-[0.6rem] text-zinc-500">
                You will be redirected to WhatsApp.
              </p>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

