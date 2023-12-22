import Image from "next/image";
import Button from "@mui/material/Button";

const pools = [
  {
    name: "1",
    description: "some details",
    href: "https://swap.dodoex.io/StarSeeds_Exchange",
    poolpercentage: "Star Power Stations",
    pooldescription: "Provides holders with STAR-Power tokens.",
    keyvid: "/Videos/astroid Colony.gif",
    btn1: "Mint",
    btn2: "Collect",
    btn3: "Docs",
    aspects: "aspect-video",
  },
  {
    name: "2",
    description: "some details",
    href: "#",
    poolpercentage: "STAR Harvesters",
    pooldescription: "Provide holders with STARV3-Materia tokens.",
    keyvid: "/Videos/STAR-M Harvester.gif",
    btn1: "Mint",
    btn2: "Collect",
    btn3: "Docs",
  },
  {
    name: "3",
    description: "some details",
    href: "#staking",
    poolpercentage: "STAR Collectors",
    pooldescription: "Provide holders with STAR-Credit tokens.",
    keyvid: "/Videos/martiancollectorGIFlargedetailed.gif",
    btn1: "Mint",
    btn2: "Collect",
    btn3: "Docs",
  },
  {
    name: "4",
    description: "some details",
    href: "https://docs.sdao.pro/",
    poolpercentage: "STAR Destroyers",
    pooldescription: "Provide holders with STARV3 tokens.",
    keyvid: "/Videos/Martian Destroyer GIF regular sized.gif",
    btn1: "Mint",
    btn2: "Collect",
    btn3: "Docs",
  },
];

export default function RealYield() {
  return (
    <section className="w-full flex justify-center mx-auto items-center py-8">
      <div className="flex flex-col-reverse items-center justify-center gap-8">
        <div className="w-full">
          <div className="my-8 mx-auto">
            <div className=" text-lg lg:text-4xl font-semibold text-[#d4d4d4] mb-6 text-left">
              Real Yield NFTs
            </div>
            <div className="text-left text-lg lg:text-xl font-medium mx-auto text-[#d4d4d4]">
              StarSeeds Protocol’s yield producing NFT technology distributes
              hourly streams of exchangeable tokens that are generated from
              Protocol managed trading strategies.
            </div>
            <div className="text-left text-lg lg:text-lg font-light mx-auto text-[#d4d4d4] mt-4">
              * Each NFT series utilizes a unique token with different
              properties and benefits.
            </div>
            <div className="text-left text-lg lg:text-lg font-light mx-auto text-[#d4d4d4] mt-4">
              * All NFTs are upgradeable, with higher level NFTs providing more
              tokens and other benefits.
            </div>
          </div>
          <div className="w-full flex flex-wrap my-4 gap-8 mx-auto">
            {pools.map((item) => (
              <div key={item.name} className="w-full mx-auto p-4">
                <div className="w-full flex gap-8">
                  <div className="w-full">
                    <div className="flex gap-4 items-center justify-center mb-4">
                      <div className="flex justify-center text-lg font-semibold text-gray-200 text-center items-center bg-[#444c81] rounded-[40px] w-[35px] h-[35px] ">
                        <span className="normal-case">{item.name}</span>
                      </div>
                      <div className="text-3xl font-bold text-gray-300 text-left normal-case mt-4 mb-4">
                        {item.poolpercentage}
                      </div>
                    </div>
                    <div className="flex gap-4 justify-evenly">
                      <div className="flex flex-col gap-4 min-w-[30%]">
                        <div className="text-2xl font-medium text-gray-300 text-left normal-case">
                          {item.poolpercentage}
                        </div>
                        <div className="text-base text-gray-400 font-extralight text-left normal-case min-h-12">
                          {item.pooldescription}
                        </div>
                        <Button className="py-[12px] px-[24px] bg-[#3d75d8] rounded-lg min-w-[9rem] text-white font-medium">
                          {item.btn1}
                        </Button>
                        <Button className="py-[12px] px-[24px] bg-[#3d75d8] rounded-lg min-w-[9rem] text-white font-medium">
                          {item.btn2}
                        </Button>
                        <Button className="py-[12px] px-[24px] bg-[#3d75d8] rounded-lg min-w-[9rem] text-white font-medium">
                          {item.btn3}
                        </Button>
                      </div>
                      {/* <video
                        autoPlay
                        muted
                        loop
                        className="w-6/12 aspect-video"
                      >
                        <source src={item.keyvid} type="video/mp4" />
                      </video> */}
                      <Image
                        className="w-[50%]"
                        alt=""
                        width={600}
                        height={600}
                        src={item.keyvid}
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
