"use client";
import { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const FramerImage = motion(Image);

const stockSnapshot = ({
  symbol,
  name,
  sector,
  technicalRating,
  conCallAnalysis,
  img,
}) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4"
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]"
      />

      <Link
        href="/" // You can replace 'yourwebsite.com' with the appropriate link structure
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src="/Growth.png"
          width={5}
          height={5}
          alt={name}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {sector}
        </span>

        <Link
          href="/" // Link structure for the specific symbol
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {name}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <span className="rounded text-lg font-medium underline md:text-base">
            Technical Rating: {technicalRating}
          </span>
          <span className="w-8 md:w-6">
            Conference Call Analysis: {conCallAnalysis}
          </span>
        </div>
      </div>
    </article>
  );
};

export default stockSnapshot;
