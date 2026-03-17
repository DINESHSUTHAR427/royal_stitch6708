import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

async function createBooking(formData: FormData) {
  "use server";

  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const designType = String(formData.get("designType") || "").trim();
  const fabricDetails = String(formData.get("fabricDetails") || "").trim();
  const notes = String(formData.get("notes") || "").trim();

  if (!name || !phone || !designType) {
    throw new Error("Please fill all required fields.");
  }

  await prisma.bookingRequest.create({
    data: {
      name,
      phone,
      designType,
      fabricDetails: fabricDetails || null,
      notes: notes || null,
    },
  });

  revalidatePath("/admin/bookings");
}

interface BookingPageProps {
  searchParams: Promise<{ design?: string }>;
}

export default async function BookingPage({ searchParams }: BookingPageProps) {
  // ✅ FIX: unwrap searchParams
  const params = await searchParams;

  const presetDesign = params.design
    ? decodeURIComponent(params.design)
    : "";

  return (
    <div className="border-b border-zinc-900/5 bg-background py-10 md:py-14">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-500">
          Custom Tailoring Request
        </p>

        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-50">
          Share your Royal Stitch vision.
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Tell us about your occasion, preferred silhouette and fabric details.
          Our team will reach out on WhatsApp to confirm measurements and next
          steps.
        </p>

        <form
          action={createBooking}
          className="mt-8 space-y-5 rounded-3xl border border-zinc-900/5 bg-zinc-50/80 p-6 text-sm shadow-sm shadow-zinc-900/5 dark:bg-zinc-900/40"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
                Name *
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Your full name"
                className="h-10 w-full rounded-full border border-zinc-200 bg-white px-4 text-sm text-zinc-800 outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
                Phone / WhatsApp *
              </label>
              <input
                id="phone"
                name="phone"
                required
                placeholder="Include country code if outside India"
                className="h-10 w-full rounded-full border border-zinc-200 bg-white px-4 text-sm text-zinc-800 outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="designType" className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
              Design type / Occasion *
            </label>
            <input
              id="designType"
              name="designType"
              required
              defaultValue={presetDesign}
              placeholder="Bridal lehenga, sherwani, engagement gown…"
              className="h-10 w-full rounded-full border border-zinc-200 bg-white px-4 text-sm text-zinc-800 outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="fabricDetails" className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
              Fabric details
            </label>
            <textarea
              id="fabricDetails"
              name="fabricDetails"
              rows={3}
              placeholder="Preferred fabrics, colors, embellishments, references…"
              className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="notes" className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
              Measurement notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Share measurements, timelines, budget…"
              className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900"
          >
            Submit Request
          </button>

          <p className="text-[0.65rem] text-zinc-500">
            By submitting, you agree to be contacted by the Royal Stitch team.
          </p>
        </form>
      </div>
    </div>
  );
}