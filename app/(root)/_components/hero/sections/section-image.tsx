import { CardUser } from "@/components/ui/card";
import Image from "next/image";
import { LuPlus } from "react-icons/lu";

export const SectioniImage = () => {
  return (
    <div className="relative w-full h-[120vh]  bg-gray-300  rounded-full -bottom-28">
      <Image
        src="https://res.cloudinary.com/jotredev/image/upload/v1697678284/ElementumUI/otros/hand-edit_frwmde.webp"
        alt="Image"
        fill
        className="object-cover -mt-[160px]"
      />
      <CardUser className="absolute top-[30%] -translate-y-1/2 left-1 flex flex-row items-center gap-4 p-2">
        <div className="relative w-8 h-8 rounded-lg">
          <Image
            src="https://res.cloudinary.com/jotredev/image/upload/v1697678705/ElementumUI/logos/18_pg8wic.webp"
            alt="Image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h5 className="font-bold text-sm">Lyft</h5>
          <p className="text-xs">Debit Card</p>
        </div>
        <h3 className="text-sm">-$500</h3>
      </CardUser>

      <CardUser className="absolute top-[8%] right-12 items-start gap-1 p-2 ">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h5 className="font-bold text-xs">Payment Method</h5>
            <div className="ml-7">
              <LuPlus className="bg-yellow-500 text-white p-[1.3px] box-content rounded-full" />
            </div>
          </div>
          <div>
            <h5 className="font-medium text-xs">**** 5550</h5>
          </div>
        </div>
      </CardUser>
      <div className="absolute bottom-0 left-0 right-0 w-[500px] h-[24%]  bg-gray-200"></div>
    </div>
  );
};
