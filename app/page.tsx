import Image from "next/image";
import ReviewsSection from "./components/reviews-section/review-section";
import ContactSection from "./components/contact-section/contact-section";
import { ServiceProviderSection } from "./components/service-provider-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ServiceProviderSection/>
      <ReviewsSection />
      <ContactSection />
    </main>
  );
}
