import Image from "next/image";
import Button from "@mui/material/Button";

export default function Landing() {
  return (
    <section className="lg:w-full w-[90%] min-h-screen flex justify-center mx-auto items-center to-bg">
      <div className="flex flex-col-reverse items-center justify-center gap-8">
        <div>
          <div>
            <div className="text-center text-6xl lg:text-[6rem] font-extrabold tracking-wide underline underline-offset-8 decoration-4 main-font">
              Starseeds Protocol
            </div>
            <div className="text-center text-2xl lg:text-4xl font-bold mx-auto text-[#d4d4d4] mb-2">
              Omnichain Yield Optimizer
            </div>
            <div className="text-center text-lg lg:text-xl font-medium mx-auto text-[#d4d4d4]">
              Arbitrage Trading Fee optimized liquidity pools
            </div>
            <div className="text-center text-lg lg:text-xl font-medium mx-auto text-[#d4d4d4]">
              Powered by programmatic intelligence
            </div>
          </div>
          <div className="flex my-4 gap-4 justify-center">
            <Button className="py-[12px] px-[24px] bg-[#3d75d8] rounded-lg min-w-[9rem] text-white font-medium">
              Swap
            </Button>
            <Button className="py-[12px] px-[24px] bg-[#3d75d8] rounded-lg min-w-[9rem] text-white font-medium">
              Docs
            </Button>
          </div>
          <div className="flex my-4 gap-4 justify-center">
            <Button className="py-[12px] px-[24px] bg-[#3d75d8] rounded-lg min-w-[9rem] text-white font-medium">
              NFT
            </Button>
            <Button className="py-[12px] px-[24px] bg-[#3d75d8] rounded-lg min-w-[9rem] text-white font-medium">
              Guild
            </Button>
          </div>
        </div>
        <div className="relative w-6/12">
          {/* <span className="image-cover" /> */}
          <Image
            className="m-auto w-11/12 lg:block hidden"
            src="/Images/bg.webp"
            alt=""
            width={1024}
            height={1114}
          />
        </div>
      </div>
    </section>
  );
}
