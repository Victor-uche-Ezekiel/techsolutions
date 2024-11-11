import React from "react";
// import "./contact_head.scss";
import img from "../assets/images/profile/file.png";

import Image from "next/image";

import { SlSocialGoogle } from "react-icons/sl";
import { FaRegAddressCard } from "react-icons/fa";
import Links from "./Links";
import AnimatedText from "./AnimatedText";

const ContactHead = () => {
  return (
    <div className="contact__links__container container gap-x-8 mb-32">
      <div className="contact__text">
        <AnimatedText
          text="contact me"
          className="text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl "
        />

        <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
          Get in touch with me via social media or email.
        </p>

        <div className="contact__links">
          <div className="address__container mb-8">
            <div className="address">
              <FaRegAddressCard className="text-[2rem] justify-center " />
              <p className="flex flex-wrap text-lg md:text-sm ">
                Abuja Nigeria
              </p>
            </div>
            <div className="address">
              <SlSocialGoogle className="text-[2rem] justify-center " />
              <p className="flex flex-wrap text-lg md:text-sm ">
                <span>victoruche3022</span>
                <span>@gmail</span>
                <span>.com</span>
              </p>
            </div>
          </div>
          <Links />
        </div>
      </div>
      <div className="contact__img">
        <Image className="img" src={img} alt="" />
      </div>
    </div>
  );
};

export default ContactHead;
