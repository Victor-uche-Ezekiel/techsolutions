import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});
const NotFoundPage = () => {
  return (
    <div
      className={`${montserrat.variable} h-screen px-32 dark:text-light md:px-12 sm:px-8`}
    >
      NotFoundPage
    </div>
  );
};

export default NotFoundPage;
