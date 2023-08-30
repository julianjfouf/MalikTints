import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

const general = localFont({
  src: [
    { path: "../../public/fonts/GeneralSans-Regular.woff", weight: "400" },
    {
      path: "../../public/fonts/GeneralSans-Medium.woff",
      weight: "500",
    },
    {
      path: "../../public/fonts/GeneralSans-Bold.woff",
      weight: "700",
    },
  ],
});

const title = localFont({
  src: [
    { path: "../../public/fonts/IntegralCF-Regular.woff", weight: "400" },
    {
      path: "../../public/fonts/IntegralCF-Bold.woff",
      weight: "700",
    },
  ],
});

export default function Home() {
  return (
    <main className={`${general.className}`}>
      <Hero title={title} />
      <Benefits title={title} />
      <Packages title={title} />
      <Portfolio title={title} />
      <Booking title={title} />
      <Footer title={title} />
    </main>
  );
}
