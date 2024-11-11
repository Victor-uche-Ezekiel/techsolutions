import React, { useEffect, useRef } from "react";
import { contactLinks } from "../data/contactLinks";
import { motion } from "framer-motion";

let contactLenght = contactLinks.length;
const Links = ({ isMenuOpen, setIsMenuOpen }) => {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  return (
    <div
      style={isMenuOpen ? { marginTop: "3rem" } : null}
      className="all__links"
      ref={linksContainerRef}
    >
      <div className="links__container" ref={linksRef}>
        {contactLinks.map((contactLink) => {
          const { id, linkIcon, linkText, url } = contactLink;
          return (
            <motion.div
              key={id}
              className="links"
              whileHover={{ scale: 1.3, origin: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={url}
                className={` ${contactLenght === id ? "mr link" : "link"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {linkIcon}
              </a>
              <a
                href={url}
                className="link__text"
                onClick={() => setIsMenuOpen(false)}
              >
                {linkText}
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
