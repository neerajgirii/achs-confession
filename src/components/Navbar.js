"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="text-white bg-[#27272a] w-full z-20 top-0 start-0 border-b border-gray-600 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src="" className="h-8" alt="" />
            <span className="self-center text-white text-m italic font-semibold whitespace-nowrap">
              ACHS
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse p-2">
            <Link
              href="/create"
              className="text-white text-sm md:text-m lg:transform lg:transition lg:hover:scale-110 bg-orange-500 lg:hover:bg-orange-600 rounded-lg font-bold px-4 py-2 text-center"
            >
              Create Confession
            </Link>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="items-center gap-3 text-xl font-bold flex flex-col p-4 ml-12 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  href="/"
                  className=" border-b-2  text-white  md:bg-transparent md:text-white relative inline-block hover:text-orange-500 hover:border-orange-500 transition hover:scale-110"
                  aria-current="page"
                >
                  Confessions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
