import Image from "next/image";
import Navigation from "@/layout/Navigation";
import Landing from "@/layout/Landing";
import Balancer from "@/layout/Balancer";
import TokenTech from "@/layout/TokenTechnology";
import CoinChart from "@/layout/CoinChart";
import Swap from "@/layout/Swap";
import TradingGuide from "@/layout/TradingGuide";

export default function Home() {
  return (
    <main className="mx-auto 3xl:w-6/12 lg:w-[95%]">
      <Navigation />
      <Landing />
      <Balancer />
      <TokenTech />
      <CoinChart />
      <Swap />
      <TradingGuide />
    </main>
  );
}
