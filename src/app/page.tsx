import { Hero } from "@/components/sections/hero";
import { TrendingDesigns } from "@/components/sections/trending-designs";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { InstagramGrid } from "@/components/sections/instagram-grid";
import { BookingCta } from "@/components/sections/booking-cta";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <TrendingDesigns />
      <TestimonialsSection />
      <InstagramGrid />
      <BookingCta />
    </div>
  );
}
