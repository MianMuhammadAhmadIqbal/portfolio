import { useState } from "react";
import logo from "../assets/logo2.jpg";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-4 px-6 lg:px-8 bg-neutral-950/30 backdrop-blur-md border-b border-neutral-900/50">
        {/* Left side: Logo & Desktop Navigation Links */}
        <div className="flex items-center gap-8">
          <div className="flex flex-shrink-0 items-center">
            {/* 🔄 Wrapped the logo image in a link pointing to "/" to enable page refresh on click */}
            <a href="/">
              <img
                className="mx-2 w-10 rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                src={logo}
                alt="logo"
              />
            </a>
          </div>

          {/* Desktop Links: Hidden on mobile & tablets, visible ONLY on lg screens (1024px+) */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a
              href="#technologies"
              className="hover:text-white transition-colors"
            >
              Technologies
            </a>
            <a href="#education" className="hover:text-white transition-colors">
              Education
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Right side: Social Icons: Hidden on mobile & tablets, visible ONLY on lg screens */}
        <div className="hidden lg:flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/muhammad-ahmad-iqbal-88966431b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/MianMuhammadAhmadIqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/923149671114"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:ahmad70iqbal@gmail.com"
            className="hover:text-red-400 transition-colors"
          >
            <MdEmail />
          </a>
        </div>

        {/* Mobile/Tablet Menu Button: Visible on EVERYTHING below 1024px */}
        <div
          className="lg:hidden flex items-center text-3xl cursor-pointer text-stone-300 hover:text-white z-50"
          onClick={toggleMenu}
        >
          {isOpen ? <IoClose /> : <FiMenu />}
        </div>
      </nav>

      {/* Mobile/Tablet Sidebar Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-neutral-950/95 border-l border-neutral-900 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out p-8 pt-24 flex flex-col gap-6 text-xl font-medium text-stone-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Navigation Links */}
        <a
          href="#about"
          onClick={toggleMenu}
          className="hover:text-white transition-colors"
        >
          About
        </a>
        <a
          href="#technologies"
          onClick={toggleMenu}
          className="hover:text-white transition-colors"
        >
          Technologies
        </a>
        <a
          href="#education"
          onClick={toggleMenu}
          className="hover:text-white transition-colors"
        >
          Education
        </a>
        <a
          href="#experience"
          onClick={toggleMenu}
          className="hover:text-white transition-colors"
        >
          Experience
        </a>
        <a
          href="#projects"
          onClick={toggleMenu}
          className="hover:text-white transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={toggleMenu}
          className="hover:text-white transition-colors"
        >
          Contact
        </a>

        {/* Divider line */}
        <div className="border-t border-neutral-800 my-4"></div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl justify-start">
          <a
            href="https://www.linkedin.com/in/mian-ahmad-88966431b"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/MianMuhammadAhmadIqbal"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="hover:text-stone-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/923149671114"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="hover:text-green-500 transition-colors"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:ahmad70iqbal@gmail.com"
            onClick={toggleMenu}
            className="hover:text-red-400 transition-colors"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
