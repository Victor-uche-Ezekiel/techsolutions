import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
export const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block inline-2 bg-black absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block inline-2 bg-light absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
        <button
          className=" flex-col justify-center items-center hidden lg:flex "
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? `rotate-45 translate-y-1` : `-translate-y-0.5`
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? `opacity-0` : `opacity-100`
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? `-rotate-45 -translate-y-1` : `translate-y-0.5`
            }`}
          ></span>
        </button>

        <div className="w-full flex justify-between items-center lg:hidden">
          <nav className="mr-10 ">
            <CustomLink href="/" title="Home" className="mr-4" />
            <CustomLink href="/about" title="About" className="mx-4" />
            <CustomLink href="/project" title="Project" className="mx-4" />
            <CustomLink href="/articles" title="Articles" className="mx-4" />
            <CustomLink href="/contact" title="Contact" className="mx-4" />
            {/* <CustomLink
              href="/certificate"
              title="Certificate"
              className="ml-4"
            /> */}
          </nav>

          <nav className="flex items-center justify-center flex-wrap ">
            <motion.a
              href="https://github.com/Victor-uche-Ezekiel/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-5"
            >
              <GithubIcon />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/victor-ezekiel-223639273/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-5"
            >
              <LinkedInIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-8 mr-5 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </div>

        <div className="hidden lg:inline-block">
          {isOpen ? (
            <motion.div
              initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, opacity: 1 }}
              className="min-w-[70vw] flex flex-col justify-center z-30 items-center fixed top-1/2 
         left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
            >
              <nav className="flex items-center flex-col justify-center">
                <CustomMobileLink
                  href="/"
                  title="Home"
                  className=" "
                  toggle={handleClick}
                />
                <CustomMobileLink
                  href="/about"
                  title="About"
                  className=""
                  toggle={handleClick}
                />
                <CustomMobileLink
                  href="/project"
                  title="Project"
                  className=""
                  toggle={handleClick}
                />
                <CustomMobileLink
                  href="/articles"
                  title="Articles"
                  className=""
                  toggle={handleClick}
                />
                <CustomMobileLink
                  href="/contact"
                  title="Contact"
                  className=""
                  toggle={handleClick}
                />
                {/* <CustomMobileLink
                href="/certificate"
                title="Certificate"
                className=""
                toggle={handleClick}
              /> */}
              </nav>

              <nav className="flex items-center justify-center flex-wrap mt-2">
                <motion.a
                  href="https://github.com/Victor-uche-Ezekiel/"
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 mx-5 bg-light rounded-full dark:bg-dark sm:mx-1"
                >
                  <GithubIcon />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/victor-ezekiel-223639273/"
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 mx-5 sm:mx-1"
                >
                  <LinkedInIcon />
                </motion.a>

                <button
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                  className={`ml-7 flex items-center justify-center rounded-full p-1 sm:mx-1 ${
                    mode === "light"
                      ? "bg-dark text-light"
                      : "bg-light text-dark"
                  }`}
                >
                  {mode === "dark" ? (
                    <SunIcon className={"fill-dark"} />
                  ) : (
                    <MoonIcon className={"fill-dark"} />
                  )}
                </button>
              </nav>
            </motion.div>
          ) : null}
        </div>

        <div className="absolute left-[60%] top-2 translate-x-[-50%] lg:left-[50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default NavBar;
