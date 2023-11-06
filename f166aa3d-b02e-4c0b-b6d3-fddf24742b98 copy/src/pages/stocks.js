"use client";
import { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import { stockData } from "@/constants/stockdata";

const FramerImage = motion(Image);

const Project = ({ title, type, img }) => {
  const link = `/${title}`;
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        // target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg items-center" //items-center added
      >
        <FramerImage
          src={img}
          alt={title}
          width={90} //ADDED
          height={90} //ADED
          // className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          //target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            //target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            More info
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Stocks() {
  const [searchTerm, setSearchTerm] = useState("");

  // Your Project data (proj2, proj3, proj5, proj6)...

  const filteredProjects = stockData.filter((project) =>
    project.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title> Page</title>
        <meta name="description" content="" />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16 flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <div className="w-full flex justify-center mb-10">
            {/* Search bar with styling */}
            <input
              type="text"
              placeholder="Search by stock name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md p-3 rounded-md border dark:text-black dark:border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-12 gap-24 gap-y-10 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {filteredProjects.map((project, index) => (
              <div key={index} className="col-span-6 sm:col-span-12">
                <Project
                  type={project.Sector}
                  title={project.Name}
                  img={project.Img}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
}
