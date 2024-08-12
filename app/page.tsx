import Image from "next/image";
import OurTeamSection from "./components/our-team/our-team-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <OurTeamSection />
    </main>
  );
}
