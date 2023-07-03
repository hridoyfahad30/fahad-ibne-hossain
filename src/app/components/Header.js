import Link from "next/link";
import React from "react";
import { CogIcon, CommandLineIcon, HomeIcon, PaperAirplaneIcon, RocketLaunchIcon, UserIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="md:fixed left-6 top-10 mx-2 py-4 md:py-0">
      <nav>
        <div className="md:w-28 flex md:flex-col md:items-center justify-between md:gap-6 bg-black bg-opacity-5 backdrop-blur-3xl py-2 md:py-14 px-4 md:px-6 rounded-2xl shadow-2xl shadow-slate-900 text-white md:text-lg">
          <Link className="" href="/">
            <button className="">
              <p className="flex flex-col gap-2 text-center text-white mb-2 hover:scale-110 duration-200 shadow-2xl shadow-slate-700 hover:translate-x-2" ><HomeIcon className="h-8 md:h-10" />Home</p>
            </button>
          </Link>
          <Link href="#about">
            <button className="">
                <p className="flex flex-col gap-2 text-center text-white mb-2 hover:scale-110 duration-200 shadow-2xl shadow-slate-700 hover:translate-x-2" ><UserIcon className="h-8 md:h-10" />About</p>
            </button>
          </Link>
          <Link href="/my-service">
            <button className="">
                <p className="flex flex-col gap-2 text-center text-white mb-2 hover:scale-110 duration-200 shadow-2xl shadow-slate-700 hover:translate-x-2" ><CogIcon className="h-8 md:h-10" />Service</p>
            </button>
          </Link>
          <Link href="/my-skills">
            <button className="">
                <p className="flex flex-col gap-2 text-center text-white mb-2 hover:scale-110 duration-200 shadow-2xl shadow-slate-700 hover:translate-x-2" ><CommandLineIcon className="h-8 md:h-10"/>Skills</p>
            </button>
          </Link>
          <Link href="/my-projects">
            <button className="">
                <p className="flex flex-col gap-2 text-center text-white mb-2 hover:scale-110 duration-200 shadow-2xl shadow-slate-700 hover:translate-x-2" ><RocketLaunchIcon className="h-8 md:h-10" />Projects</p>
            </button>
          </Link>
          <Link href="/contact-me">
            <button className="">
                <p className="flex flex-col gap-2 text-center text-white mb-2 hover:scale-110 duration-200 shadow-2xl shadow-slate-700 hover:translate-x-2" ><PaperAirplaneIcon className="h-8 md:h-10 -rotate-45" />Contact</p>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
