import Image from "next/image";
import Button from "@mui/material/Button";

export default function Swap() {
  return (
    <section className="lg:w-full w-[90%] flex justify-center mx-auto items-center py-8">
      <div className="w-full flex flex-col-reverse items-center justify-center gap-8">
        <div className="w-full">
          <div className="my-8">
            <div className=" text-lg lg:text-4xl font-semibold text-[#d4d4d4] mb-6 text-left">
              StarSeeds Swap
            </div>
          </div>
          <div className="flex flex-wrap my-4 gap-8 w-full mx-auto">
            <div className="w-full min-h-[250px] bg-[#242842] p-4 pt-[0] border-2 border-[#1c1e32] rounded-lg mx-auto">
              <div>Trade Widget- [Embedded] ???</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
