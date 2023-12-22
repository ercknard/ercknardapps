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

export default function TradingGuide() {
  return (
    <section className="lg:w-full w-[90%] flex justify-center mx-auto items-center py-8">
      <div className="flex flex-col-reverse items-center justify-center gap-8">
        <div>
          <div className="my-8 text-center">
            <div className="text-left text-lg lg:text-4xl font-semibold text-[#d4d4d4] mb-6">
              STARV3 Trading Guide
            </div>
          </div>
          <div className="flex my-4 gap-8 justify-start">
            <Button className="lg:w-[48.5%] w-full lg:min-h-[13.5rem] min-h-0 bg-[#242842] p-4 lg:pt-0 border-2 border-[#1c1e32] rounded-lg">
              <a
                className="w-full"
                href="https://swap.dodoex.io/StarSeeds_Exchange"
              >
                <div className="flex justify-center text-lg font-semibold text-gray-200 text-center items-center bg-[#444c81] rounded-[40px] w-[35px] h-[35px] ">
                  <span className="normal-case">1</span>
                </div>
                <div className="text-xl font-medium text-gray-300 text-left normal-case mt-4 mb-2">
                  Swap STARV3
                </div>
                <div className="text-base text-gray-400 font-extralight text-left normal-case min-h-[4.5rem]">
                  StarSeeds protocol token designed to increase exchange rate
                  over time{" "}
                </div>
              </a>
            </Button>
          </div>
          <div className="flex lg:flex-row flex-col my-8 gap-8">
            <Button className="lg:w-[48.5%] w-full min-h-[13.5rem] bg-[#242842] p-4 pt-0 border-2 border-[#1c1e32] rounded-lg">
              <a
                className="w-full"
                href="https://swap.dodoex.io/StarSeeds_Exchange"
              >
                <div className="flex justify-center text-lg font-semibold text-gray-200 text-center items-center bg-[#444c81] rounded-[40px] w-[35px] h-[35px] ">
                  <span className="normal-case">2</span>
                </div>
                <div className="text-xl font-medium text-gray-300 text-left normal-case mt-4 mb-2">
                  Stake
                </div>
                <div className="text-base text-gray-400 font-extralight text-left normal-case min-h-[4.5rem]">
                  Stake your favorite tokens in your choice of StarSeeds
                  Protocol Arbitrage Liquidity Pool Routers
                </div>
              </a>
            </Button>
            {/* <div className="flex flex-col justify-center">
              <span className="text-xl font-medium text-gray-300">and</span>
              <span className="text-xl font-medium text-gray-300 text-center">
                or
              </span>
            </div> */}
            <Button className="lg:w-[48.5%] w-full min-h-[13.5rem] bg-[#242842] p-4 pt-0 border-2 border-[#1c1e32] rounded-lg">
              <a
                className="w-full"
                href="https://swap.dodoex.io/StarSeeds_Exchange"
              >
                <div className="flex justify-center text-lg font-semibold text-gray-200 text-center items-center bg-[#444c81] rounded-[40px] w-[35px] h-[35px] ">
                  <span className="normal-case">3</span>
                </div>
                <div className="text-xl font-medium text-gray-300 text-left normal-case mt-4 mb-2">
                  Mint
                </div>
                <div className="text-base text-gray-400 font-extralight text-left normal-case min-h-[4.5rem]">
                  Mint, upgrade, trade and collect token streams from yield
                  generating NFTs funded via StarSeeds Protocol DEX trading and
                  liquidity strategies.
                </div>
              </a>
            </Button>
          </div>
          <div className="flex my-4 gap-8 justify-start">
            <Button className="lg:w-[48.5%] w-full min-h-[13.5rem] bg-[#242842] p-4 pt-0 border-2 border-[#1c1e32] rounded-lg">
              <a
                className="w-full"
                href="https://swap.dodoex.io/StarSeeds_Exchange"
              >
                <div className="flex justify-center text-lg font-semibold text-gray-200 text-center items-center bg-[#444c81] rounded-[40px] w-[35px] h-[35px] ">
                  <span className="normal-case">4</span>
                </div>
                <div className="text-xl font-medium text-gray-300 text-left normal-case mt-4 mb-2">
                  Collect & Compound
                </div>
                <div className="text-base text-gray-400 font-extralight text-left normal-case min-h-[4.5rem]">
                  Claim DEX trading revenues and liquidity provider fees and
                  then compound into your favorite tokens.
                </div>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
