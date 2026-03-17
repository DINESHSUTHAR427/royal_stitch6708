import { prisma } from "@/lib/prisma";

export default async function AdminBookingsPage() {
  const bookings = await prisma.bookingRequest.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div>
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-500">
          Booking Requests
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-50">
          Custom stitching enquiries.
        </h1>
      </div>

      <div className="overflow-hidden rounded-3xl border border-zinc-900/5 bg-zinc-50/80 text-xs shadow-sm shadow-zinc-900/5 dark:bg-zinc-900/40">
        <div className="grid grid-cols-[1.2fr,1fr,1.2fr,1.4fr] gap-3 border-b border-zinc-900/5 px-4 py-3 font-medium uppercase tracking-[0.2em] text-zinc-500">
          <span>Name</span>
          <span>Phone / WhatsApp</span>
          <span>Design</span>
          <span>Notes</span>
        </div>
        {bookings.map((b) => (
          <div
            key={b.id}
            className="grid grid-cols-[1.2fr,1fr,1.2fr,1.4fr] gap-3 border-t border-zinc-900/5 px-4 py-3 text-[0.7rem] text-zinc-700 dark:text-zinc-200"
          >
            <span>{b.name}</span>
            <span>{b.phone}</span>
            <span>{b.designType}</span>
            <span className="line-clamp-3">
              {b.fabricDetails || b.notes || "—"}
            </span>
          </div>
        ))}
        {bookings.length === 0 && (
          <p className="px-4 py-6 text-center text-xs text-zinc-500">
            No booking requests yet. Once customers fill the form, they will
            show up here.
          </p>
        )}
      </div>
    </div>
  );
}

