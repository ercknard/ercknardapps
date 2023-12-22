import Image from "next/image";
import Button from "@mui/material/Button";

const pools = [
  {
    name: "1",
    description: "some details",
    href: "https://swap.dodoex.io/StarSeeds_Exchange",
    poolpercentage: "Automated Buying Pressure",
    pooldescription:
      "Automated trade volume generated and from arbitrage trading bots.",
  },
  {
    name: "2",
    description: "some details",
    href: "#",
    poolpercentage: "Diminishing Max Supply- 0.11% Burn on transfer",
    pooldescription:
      "Every trade permanently reduces the max supply of STARV3.",
  },
  {
    name: "3",
    description: "some details",
    href: "#staking",
    poolpercentage: "Permanent Liquidity Growth - 0.11% Protocol Transfer Fee",
    pooldescription:
      "Protocol Transfer fee and other protocol revenues deployed strategically to permanently increase liquidity & trade volume for STARV3.",
  },
  {
    name: "4",
    description: "some details",
    href: "https://docs.sdao.pro/",
    poolpercentage: "Limited Circulating Supply",
    pooldescription:
      "NO ICO, TGE or token sale. No emission schedule. 10M STARV3 tokens held in the StarSeeds Protocol Treasury and deployed exclusively by the StarSeeds Protocol into Liquidity pools, paired with other tokens in the StarSeeds Treasury.",
  },
];

export default function TokenTech() {
  return (
    <section className="lg:w-full w-[90%] flex justify-center mx-auto items-center py-8">
      <div className="flex flex-col-reverse items-center justify-center gap-8">
        <div>
          <div className="my-8">
            <div className="flex gap-4">
              <div className="text-left text-lg lg:text-4xl font-semibold text-[#d4d4d4] mb-6">
                STARV3 Token Technology
              </div>
              <div>
                <Image
                  className="w-[2.5rem] rounded-full z-10"
                  src="/Images/metatron-logo.webp"
                  alt=""
                  width={1024}
                  height={1114}
                />
              </div>
            </div>
            <div className="text-left text-lg lg:text-xl font-medium mx-auto text-[#d4d4d4]">
              STARV3: Automated trade volume, reducing supply, and increasing
              liquidity.
            </div>
          </div>
          <div className="flex flex-wrap my-4 gap-8 mx-auto">
            {pools.map((item) => (
              <Button
                key={item.name}
                className="w-full lg:min-h-[13.5rem] min-h-0 bg-[#242842] p-4 lg:pt-0 border-2 border-[#1c1e32] rounded-lg mx-auto"
              >
                <a className="w-full" href={item.href}>
                  <div className="flex justify-center text-lg font-semibold text-gray-200 text-center items-center bg-[#444c81] rounded-[40px] w-[35px] h-[35px] ">
                    <span className="normal-case">{item.name}</span>
                  </div>
                  <div className="text-xl font-medium text-gray-300 text-left normal-case mt-4 mb-2">
                    {item.poolpercentage}
                  </div>
                  <div className="text-base text-gray-400 font-extralight text-left normal-case min-h-12">
                    {item.pooldescription}
                  </div>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
