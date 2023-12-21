import Image from "next/image";
import Button from "@mui/material/Button";

export default function CoinChart() {
  return (
    <section className="w-full flex justify-center mx-auto items-center py-8">
      <div className="w-full flex flex-col-reverse items-center justify-center gap-8">
        <div className="w-full">
          <div className="my-8">
            <div className=" text-lg lg:text-4xl font-semibold text-[#d4d4d4] mb-2 text-center">
              STARV3 Coin Chart Graph
            </div>
          </div>
          <div className="flex flex-wrap my-4 gap-8 w-full mx-auto">
            {/* <div className="w-[68.25%] min-h-[500px] bg-[#242842] p-4 pt-[0] border-2 border-[#1c1e32] rounded-lg mx-auto"></div> */}
            <iframe
              id="dextools-widget"
              title="DEXTools Trading Chart"
              className="w-[68.25%] h-[500px] mx-auto"
              src="https://www.dextools.io/widget-chart/en/polygon/pe-light/0x3443e3942053fc44ee07b7ad62a04276dd52b4a9-0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270-0xa571963278014b5b3a686778747fdf8ad4dfbb94?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
