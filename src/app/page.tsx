import { Hero } from "@/components/sections/hero";
import { FeaturedCollections } from "@/components/sections/featured-collections";
import { TrendingDesigns } from "@/components/sections/trending-designs";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { InstagramGrid } from "@/components/sections/instagram-grid";
import { BookingCta } from "@/components/sections/booking-cta";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <FeaturedCollections />
      <TrendingDesigns />
      <TestimonialsSection />
      <InstagramGrid />
      <BookingCta />
    </div>
  );
}
