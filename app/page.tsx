import Image from "next/image";
import ReviewsSection from "./components/reviews-section/review-section";
import ContactSection from "./components/contact-section/contact-section";

export default function Home() {
  return (
    <main className="flex h-fit flex-col items-center justify-between">
      <ReviewsSection />
      <ContactSection />
    </main>
  );
}
