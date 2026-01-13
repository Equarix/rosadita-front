import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";
export interface QuoteProps {
  quoteText: string;
  userImage: string;
  userName: string;
  userPosition: string;
}

export default function Quote({
  quoteText,
  userImage,
  userName,
  userPosition,
}: QuoteProps) {
  return (
    <section className="py-22.5 flex justify-center items-center border border-gray-200 shadow-sm rounded-lg px-6">
      <div className="flex flex-col justify-center items-center  text-center px-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="justify-center flex items-center mb-4 text-3xl font-semibold text-gray-900">
            <FaQuoteRight />
          </h1>
          <h1 className="text-xl  font-extrabold  leading-tight max-w-2xl">
            &quot;{quoteText}&quot;
          </h1>
        </div>

        <div className="mt-6 flex items-center justify-center w-2xs">
          <div>
            <Image
              src={userImage}
              alt="User Image"
              className="w-10 h-10 rounded-full mr-4"
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-black">{userName}</h1>
            <h2 className="text-xs text-gray-400 font-inter">{userPosition}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
