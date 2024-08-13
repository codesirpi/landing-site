import Image from "next/image";
import { OurWorkSection } from "./components/our-work-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <OurWorkSection />
    </main>
  );
}
