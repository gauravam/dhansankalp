"use client";
import { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import proj2 from "../../public/images/projects/nft-collection-website-cover-image.jpg";
import proj3 from "../../public/images/projects/fashion-studio-website.jpg";
import proj4 from "../../public/images/projects/portfolio-cover-image.jpg";
import proj5 from "../../public/images/projects/agency-website-cover-image.jpg";
import proj6 from "../../public/images/projects/devdreaming.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const Project = ({ title, type, img, link, github }) => {
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
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
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
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  // Your Project data (proj2, proj3, proj5, proj6)...

  const filteredProjects = [
    {
      type: "Website Template",
      title: "NFT collection Website",
      img: proj2,
      link: "https://devdreaming.com/videos/create-nft-collection-website-reactjs",
      github:
        "https://github.com/codebucks27/The-Weirdos-NFT-Website-Starter-Code",
    },
    {
      type: "Website",
      title: "Fashion Studio Website",
      img: proj3,
      link: "https://devdreaming.com/videos/build-stunning-fashion-studio-website-with-reactJS-locomotive-scroll-gsap",
      github: "https://github.com/codebucks27/wibe-studio",
    },
    // Add other projects here...
  ].filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Modern Portfolio Built with Nextjs | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16 flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search by project title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="grid grid-cols-12 gap-24 gap-y-10 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {filteredProjects.map((project, index) => (
              <div key={index} className="col-span-6 sm:col-span-12">
                <Project
                  type={project.type}
                  title={project.title}
                  img={project.img}
                  link={project.link}
                  github={project.github}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
}
