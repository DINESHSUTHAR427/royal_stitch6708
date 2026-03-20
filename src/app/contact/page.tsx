"use client";

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const text = `Hello, my name is ${name}. ${message}`;

    try {
      await navigator.clipboard.writeText(text);
      alert("Message copied to clipboard! Please paste it in the Instagram chat.");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }

    const instaUrl = `https://ig.me/m/royal_stitch6708`;

    window.open(instaUrl, "_blank");
  };

  return (
    <div className="py-10 border-b border-zinc-900/5 bg-background md:py-14">
      <div className="max-w-5xl px-4 mx-auto md:px-6">
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
                href="https://ig.me/m/royal_stitch6708"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-pink-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:bg-pink-400"
              >
                Chat on Instagram
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4">
            
            {/* ✅ FIXED GOOGLE MAP */}
            <div className="overflow-hidden border rounded-3xl bg-zinc-100 dark:bg-zinc-900">
              <iframe
                title="Royal Stitch location"
                src="https://www.google.com/maps?q=Chandrai,Rajasthan,307030&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </div>

            {/* ✅ FIXED FORM */}
            <form
              onSubmit={handleSubmit}
              className="p-5 space-y-4 border rounded-3xl bg-zinc-50/80 dark:bg-zinc-900/40"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Quick message
              </p>

              <div>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-3 text-xs border rounded-full h-9"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Share your query..."
                  className="w-full px-3 py-2 text-xs border rounded-2xl"
                />
              </div>

              <button
                type="submit"
                className="w-full px-5 py-2 text-xs font-semibold text-white uppercase rounded-full bg-zinc-900 hover:bg-zinc-800"
              >
                Send Message
              </button>

              <p className="text-[0.6rem] text-zinc-500">
                Your message will be copied and you will be redirected to Instagram.
              </p>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

