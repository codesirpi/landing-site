import Image from "next/image";
import { ServiceProviderSection } from "./components/service-provider-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ServiceProviderSection/>
    </main>
  );
}
