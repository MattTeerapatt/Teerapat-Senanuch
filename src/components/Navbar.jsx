import React, { useState, useEffect, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "./UseMediaQuery";
import Tooltips from "./Tooltips.jsx";


const Link = ({ page, selectedPage, setSelectedPage, closeMenu }) => {
  const lowerCasePage = page.toLowerCase();

  const handleClick = () => {
    setSelectedPage(lowerCasePage);
    closeMenu(); // Close the mobile menu
  };

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-accent-gold underline underline-offset-8 rounded-md" : ""
      } hover:text-accent-gold transition duration-500 ease-in-out`}
      href={`#${lowerCasePage}`}
      onClick={handleClick}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const [activeSection, setActiveSection] = useState("");

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleScroll = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          setSelectedPage(entry.target.id); // Update selectedPage to sync with scroll
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: "-100px 0px -50% 0px", // Trigger when section is near top
      threshold: 0,
    });

    // Observe actual sections in the DOM
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [setSelectedPage]);

  const navbarBackground = activeSection === "home" ? "bg-transparent" : "bg-brown";

  const closeMenu = () => {
    setIsMenuToggled(false);
  };

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6 backdrop-blur-md bg-cream-light/85 shadow-elegant border-b border-beige-soft/20`}>
      <div className="flex items-center justify-between mx-auto">
        <h4 className="font-playfair text-2xl font-bold pl-4 ml-4 text-text-primary">Software Engineering</h4>
        {isAboveMediumScreens ? (
          <div className="flex justify-between gap-28 font-playfair pr-16 text-xl font-semibold text-text-primary">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
            <div>
              <a
                className={`transition hover:scale-110 duration-500 hover:text-accent-gold`}
                href={`mailto:mmatt.trp@gmail.com`}
                target="_blank"
                rel="noreferrer"
              >
                <p>mmatt.trp@gmail.com</p>
              </a>
            </div>
          </div>
        ) : (
          <button
            className="rounded-full bg-accent-gold p-2 mt-2 ml-auto justify-end"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img
              alt={isMenuToggled ? "close-icon" : "menu-icon"}
              src={isMenuToggled ? "https://img.icons8.com/ios-glyphs/30/ffffff/multiply.png" : "https://img.icons8.com/ios-glyphs/30/ffffff/menu--v1.png"}
            />
          </button>
        )}
        {!isAboveMediumScreens && (
          <div
            className={`fixed bottom-0 h-full py-10 w-full app  top-24  gap-0 ${
              isMenuToggled ? "block" : "hidden"
            } transition-all duration-300 ease-in-out`}
          >
            {/* Mobile menu links */}
            <div className="flex flex-col gap-12 items-start text-3xl ml-4 py-5">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                closeMenu={closeMenu}
                className="hover:text-yellow-500"
              />
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                closeMenu={closeMenu}
                className="hover:text-yellow-500"
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                closeMenu={closeMenu}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                closeMenu={closeMenu}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                closeMenu={closeMenu}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;