"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const FramerImage = motion(Image);

const StockSnapshot = ({
  symbol,
  name,
  sector,
  technicalRating,
  conCallAnalysis,
  img,
}) => {
  return (
    <article className="relative flex flex-row w-full p-6 shadow-2xl rounded-2xl rounded-br-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark xs:p-4 ">
      <div className="absolute top-0 -right-3 -z-10 rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        href="/"
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      ></Link>

      <div className="mt-4 flex flex-col items-start justify-between w-full">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {sector}
        </span>
        <Link
          href="/"
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 text-left text-3xl font-bold lg:text-2xl w-full">
            {name}
          </h2>
        </Link>
        <div className="flex w-full items-center justify-between">
          <span className="text-lg font-medium md:text-base">
            Technical Rating: {technicalRating}
          </span>
        </div>
        Conference Call Analysis: {conCallAnalysis}
      </div>
    </article>
  );
};

export default StockSnapshot;
