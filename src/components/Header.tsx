import React, { useContext, useState } from "react";
import Toggle from "react-toggle";

import HeaderSlide from "./HeaderSlide";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";

const Navbar: React.FC<{ siteTitle: string }> = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav className="px-2 sm:px-4 py-4 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            {siteTitle}
          </span>
        </a>
        <div className="flex items-center -mr-2 -my-2 md:hidden">
          <div className="flex mr-2 items-center">
            <Toggle
              id="theme-toggle"
              checked={theme === "dark" ? true : false}
              onChange={handleThemeToggle}
              icons={false}
            />
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-150 ease-in-out"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full md:flex md:w-auto items-center"
          id="navbar-default"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium mr-4">
            <li>
              <a href="#" className="link link-active" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Facebook
              </a>
            </li>
          </ul>
          <div className="flex items-center">
            <Toggle
              id="theme-toggle"
              checked={theme === "dark" ? true : false}
              onChange={handleThemeToggle}
              icons={false}
            />
          </div>
        </div>
      </div>
      <HeaderSlide isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;
