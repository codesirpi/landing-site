import ReviewsSection from "./components/reviews-section/review-section";
import ContactSection from "./components/contact-section/contact-section";
import { ServiceProviderSection } from "./components/service-provider-section";
import { OurWorkSection } from "./components/our-work-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ServiceProviderSection />
      <OurWorkSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
}
