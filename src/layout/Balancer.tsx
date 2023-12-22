import Image from "next/image";
import Button from "@mui/material/Button";

const pools = [
  {
    name: "Fresh Beets",
    description: "some details",
    href: "https://swap.dodoex.io/StarSeeds_Exchange",
    percentage: "45% - 93%",
    dailypercentage: "0.023%",
  },
  {
    name: "Fresh Beets",
    description: "some details",
    href: "#",
    percentage: "45%",
    dailypercentage: "0.023%",
  },
  {
    name: "Fresh Beets",
    description: "some details",
    href: "#staking",
    percentage: "45%",
    dailypercentage: "0.023%",
  },
  {
    name: "Fresh Beets",
    description: "some details",
    href: "https://docs.sdao.pro/",
    percentage: "45%",
    dailypercentage: "0.023%",
  },
];

export default function Balancer() {
  return (
    <section className="lg:w-full w-[90%] flex justify-center mx-auto items-center py-8">
      <div className="flex flex-col-reverse items-center justify-center gap-8">
        <div>
          <div className="my-8">
            <div className="text-left text-lg lg:text-4xl font-semibold mx-auto text-[#d4d4d4] mb-6">
              Balancer Liquidity Pools
            </div>
            <div className="text-left text-lg lg:text-xl font-medium mx-auto text-[#d4d4d4]">
              Benefit from automated arbitrage trading bots that multiply volume
              and fees
            </div>
          </div>
          <div className="flex flex-wrap my-4 gap-6 justify-left mx-auto">
            {pools.map((item) => (
              <Button
                key={item.name}
                className="lg:w-[48.5%] w-full min-h-[13.5rem] bg-[#242842] border-2 border-[#1c1e32] p-4 rounded-lg"
              >
                <a className="w-full" href={item.href}>
                  <div className="w-full">
                    <div className="w-full pb-6 text-lg font-normal text-gray-200 text-left normal-case">
                      {item.name}
                    </div>
                    <div className="w-full flex my-4">
                      <Image
                        className="w-[5%] rounded-full z-10"
                        src="/Images/metatron-logo.webp"
                        alt=""
                        width={1024}
                        height={1114}
                      />
                      <Image
                        className="relative w-[5%] rounded-full -left-1"
                        src="/Images/metatron-logo.webp"
                        alt=""
                        width={1024}
                        height={1114}
                      />
                    </div>
                    <div className="text-2xl font-normal text-gray-300 text-left normal-case">
                      {item.percentage}
                    </div>
                    <div className="text-gray-400 font-extralight text-left normal-case">
                      {item.dailypercentage} Daily
                    </div>
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
