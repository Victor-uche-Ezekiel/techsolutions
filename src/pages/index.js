//* LIB
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

//* IMPORT COMPONENT
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import { lightBulb, profilePicHome } from "@/imports";
import { CustomLink } from "@/components/NavBar";

//* IMPORT IMAGE

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Ezekiel</title>
        <meta name="description" content="Hi I'm Truong Tan Nghia" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:gap-y-8 lg:flex-col">
            <div className="w-2/5 md:w-3/5 rounded-full">
              <Image
                src={profilePicHome}
                alt="Victor Ezekiel"
                className="w-full h-auto md:inline-block md:w-full  object-cover rounded-full "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <h1></h1>
              <AnimatedText
                text="Hi I'm Victor Ezekiel. I'm a web developer."
                className="text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As an experienced full-stack developer, I’m committed to
                transforming ideas into cutting-edge web applications. Check out
                my recent projects and articles, highlighting my proficiency in
                React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center ">
                <Link
                  href="/CV_TanNghia.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light
                 hover:text-dark border-2 border-solid border-transparent
                  hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark
                   hover:dark:text-light hover:dark:border-light md:p-2  md:px-4 md:text-base"
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <CustomLink
                  href="/contact"
                  title="Contact"
                  // target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline hover:no-underline dark:text-light md:text-base"
                >
                  Contact
                </CustomLink>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          {/* <Image src={lightBulb} alt="Victor Ezekiel" className="w-full h-auto" /> */}
        </div>
      </main>
    </>
  );
}
