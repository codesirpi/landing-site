"use client";
import Image from "next/image";
import OurTeamSection from "./components/our-team/our-team-section";
import HeroSection from "./components/hero/hero-section";
import ReviewsSection from "./components/reviews-section/review-section";
import ContactSection from "./components/contact-section/contact-section";
import { ServiceProviderSection } from "./components/service-provider-section";
import { OurWorkSection } from "./components/our-work-section/our-work-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ServiceProviderSection />
      <OurWorkSection />
      <OurTeamSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
}
