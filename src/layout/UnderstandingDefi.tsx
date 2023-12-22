import Image from "next/image";
import Button from "@mui/material/Button";

const pools = [
  {
    name: "1",
    description: "some details",
    href: "https://swap.dodoex.io/StarSeeds_Exchange",
    poolpercentage: "Weighted Pools",
    pooldescription:
      "From multiple assets, customized token weightings and dynamic swap fees, weighted pools are the industry standard when it comes to tailored liquidity pools. Discover more about this unique type of technology. ",
  },
  {
    name: "2",
    description: "some details",
    href: "#",
    poolpercentage: "Boosted Pools",
    pooldescription:
      "Boosted pools make it possible for idle liquidity to be deposited into revenue generating protocols adding an additional source of yield for users. Learn more about this nascent technology and how they are changing the landscape for sustainable liquidity.",
  },
  {
    name: "3",
    description: "some details",
    href: "#staking",
    poolpercentage: "Gauge Voting",
    pooldescription:
      "30% of all Balancer emissions are distributed to liquidity pools based on a weekly gauge vote. Learn all about how to get involved, the mechanics of the gauge vote, bribes, snapshots and more.",
  },
];

const defi = [
  {
    name: "1",
    description: "some details",
    href: "https://swap.dodoex.io/StarSeeds_Exchange",
    poolpercentage: "Getting started: What is DeFi?",
    pooldescription:
      "Discover a brand new way to manage your finances. Decentralized Finance (DeFi) is an emerging industry that removes the control banks and institutions have over financial services. Permissionless and decentralized, DeFi is revolutionizing the financial world as we know it.",
  },
  {
    name: "2",
    description: "some details",
    href: "#",
    poolpercentage: "Basics: How to set up a MetaMask wallet",
    pooldescription:
      "To begin your DeFi journey, you first need a web3 wallet. From the basics of setting one up to your first transactions, learn all there is to know about navigating MetaMask in DeFi.",
  },
];

export default function UnderstandingDefi() {
  return (
    <section className="lg:w-full w-[90%] flex justify-center mx-auto items-center py-8">
      <div className="flex flex-col-reverse items-center justify-center gap-8">
        <div>
          <div className="my-8">
            <div className="text-3xl lg:text-4xl font-semibold text-[#d4d4d4] mb-6 text-left">
              Understanding DeFi
            </div>
            {/* <div className="text-left text-lg lg:text-xl font-medium mx-auto text-[#d4d4d4]">
              StarSeeds Protocol connects users with Automated Liquidity
              Management, Lending, Synthetics & Bridging Protocols with
              long-term, recurring & compounding trade volume, liquidity, and
              staked holdings.
            </div> */}
          </div>
          <div className="flex lg:flex-row flex-col my-4 gap-8 mx-auto">
            <div>
              <div className="text-left text-xl lg:text-xl font-medium mx-auto text-[#d4d4d4]">
                Basics
              </div>
              {pools.map((item) => (
                <div
                  key={item.name}
                  className="w-full min-h-[7.5rem] p-4 pl-0 mx-auto"
                >
                  <div className="w-full">
                    <Button className="text-xl font-medium text-[#3d75d8] text-left normal-case mt-4 mb-2 pl-0 underline underline-offset-2">
                      {item.poolpercentage}
                    </Button>
                    <div className="text-base text-gray-400 font-extralight text-left normal-case min-h-12">
                      {item.pooldescription}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="text-left text-xl lg:text-xl font-medium mx-auto text-[#d4d4d4]">
                Defi 101
              </div>
              {defi.map((item) => (
                <div
                  key={item.name}
                  className="w-full min-h-[7.5rem] p-4 pl-0 mx-auto"
                >
                  <div className="w-full">
                    <Button className="text-xl font-medium text-[#3d75d8] text-left normal-case mt-4 mb-2 pl-0 underline underline-offset-2">
                      {item.poolpercentage}
                    </Button>
                    <div className="text-base text-gray-400 font-extralight text-left normal-case min-h-12">
                      {item.pooldescription}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full">
              <div className="text-left text-xl lg:text-xl font-medium mx-auto text-[#d4d4d4]">
                Other resources
              </div>
              <div className="text-left text-lg lg:text-xl font-medium mx-auto text-[#d4d4d4] mt-8 mb-4">
                Want to dive even deeper?
              </div>
              <Button className="py-[12px] px-[24px] bg-[#3d75d8] rounded-lg min-w-[9rem] text-white font-medium">
                Check out our docs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
