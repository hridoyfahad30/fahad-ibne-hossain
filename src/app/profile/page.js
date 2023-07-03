/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "@/resource/fahad.png";
import desk from "@/resource/desk.png";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="mx-4 md:mx-60 text-white ">
      {/* Profile Section */}
      <div className="md:mb-32">
        <div className="flex justify-between items-center sticky top-10 bg-slate-950 bg-opacity-25 py-4 px-6 rounded-full backdrop-blur-3xl">
          <Link
            href="/"
            className="text-2xl md:text-5xl font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-[#db9cdc] to-[#38bff8] hover:from-[#38bff8] hover:to-[#db9cdc]"
          >
            Fahad Ibne Hossain
          </Link>
          <button className="flex justify-between items-center gap-2 bg-black bg-opacity-30 hover:bg-opacity-50 hover:scale-105 duration-300 px-6 py-3 rounded-full text-xl">
            Resume <ArrowDownTrayIcon className="w-6" />
          </button>
        </div>
        <div className="my-12">
          <div className="md:flex justify-between items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-[#38bff8] to-[#db9cdc] my-6">
                Fahad Ibne Hossain
              </h1>
              <h2 className="text-3xl font-medium">
                I'm a MERN Stack Developer
              </h2>
              <p className="my-6 text-xl text-gray-200 md:w-9/12">
                I'm a Passionate Frontend Developer with strong teamwork skills.
                Committed to delivering high-quality code and creating
                innovative solutions. Dedicated to continuous learning and
                staying up-to-date with the latest technologies and trends in
                development.
              </p>
              <div className="flex flex-col-reverse md:flex-row justify-center md:justify-start items-center gap-4 my-8">
                <button className="bg-black bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full flex justify-center items-center gap-2">
                  Download My Resume <ArrowDownTrayIcon className="w-6" />
                </button>
                <button className="bg-black bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full">
                  Contact Me
                </button>
              </div>
              <div className="space-x-4 text-4xl text-gray-400 flex justify-center md:justify-start">
                <Link href="https://github.com/hridoyfahad30" target="_blank">
                  <FaGithub className="hover:text-white hover:scale-110 duration-300" />
                </Link>
                <Link href="https://www.linkedin.com/in/fahad-ibne-hossain-1489411b0/">
                  <FaLinkedin className="hover:text-blue-600 hover:scale-110 duration-300" />
                </Link>
                <Link href="/">
                  <FaEnvelope className="hover:text-red-600 hover:scale-110 duration-300" />
                </Link>
              </div>
            </div>
            <div className="">
              <Image className="shadow-2xl shadow-gray-900" src={hero} />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}

      <div className="md:my-32 flex flex-col-reverse md:flex-row  justify-start items-center">
        <div className="4/12">
          <Image className="rounded-3xl md:w-[560px]" src={desk} />
        </div>
        <div className="md:flex justify-between items-start md:w-8/12">
          <div className="md:w-10/12 space-y-5">
            <h1 className="text-5xl">ABOUT ME</h1>
            <h5 className="text-xl text-gray-200 md:w-10/12">
              Hello there! I'm <span className="">Fahad Ibne Hossain</span>, a
              passionate and dedicated MERN Stack Developer. I'm excited to
              embark on a journey in the world of web development. My goal is to
              contribute my skills and creativity to build dynamic and
              user-friendly web applications.
            </h5>
            <div className="flex flex-col-reverse md:flex-row justify-start items-center gap-4 my-4">
              <button className="bg-black bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full flex justify-center items-center gap-2">
                Download My Resume <ArrowDownTrayIcon className="w-6" />
              </button>
              <button className="bg-black bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full">
                Contact Me
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-between items-start gap-6 my-8 md:my-0">
            <h1 className="text-xl">
              <span className="text-6xl font-bold">6+</span> <br /> Months
              Learning Experience
            </h1>
            <h1 className="text-xl">
              <span className="text-6xl font-bold">13+</span> Projects
            </h1>
          </div>
        </div>
      </div>

      {/* Service Section */}

      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:my-32">
        <div className="md:w-4/12 space-y-8">
          <div className="space-y-8 border-b py-6 border-gray-500">
            <div className="space-y-4">
              <h3 className="text-3xl font-medium">Front-End Development</h3>
              <p className="text-xl text-gray-300 md:w-12/12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                laboriosam a ea, id aliquid autem rem molestias doloremque natus
                saepe tempora quaerat, accusamus illo aut optio porro!
                Veritatis, enim rem.
              </p>
            </div>
            <div className="w-8/12 flex justify-between items-center gap-4 my-8 ">
              <button className="bg-black bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full">
                See Projects
              </button>
            </div>
          </div>
          <div className="space-y-8 border-b py-6 border-gray-500">
            <div className="space-y-4">
              <h3 className="text-3xl font-medium">Back-End Development</h3>
              <p className="text-xl text-gray-300 md:w-12/12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                laboriosam a ea, id aliquid autem rem molestias doloremque natus
                saepe tempora quaerat, accusamus illo aut optio porro!
                Veritatis, enim rem.
              </p>
            </div>
            <div className="w-8/12 flex justify-between items-center gap-4 my-8">
              <button className="bg-black bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full">
                See Projects
              </button>
            </div>
          </div>
          <div className="space-y-8 border-b py-6 border-gray-500">
            <div className="space-y-4">
              <h3 className="text-3xl font-medium">MERN Stack Development</h3>
              <p className="text-xl text-gray-300 md:w-12/12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                laboriosam a ea, id aliquid autem rem molestias doloremque natus
                saepe tempora quaerat, accusamus illo aut optio porro!
                Veritatis, enim rem.
              </p>
            </div>
            <div className="w-8/12 flex justify-between items-center gap-4 my-8">
              <button className="bg-black bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full">
                See Projects
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 border border-gray-600 shadow-2xl shadow-slate-800 rounded-[60px] p-12 bg-[url('../resource/bg_.png')] bg-auto bg-no-repeat min-h-[450px] bg-right-top">
          <h1 className="text-5xl my-4">My Services</h1>
          <p className="text-2xl md:w-10/12 my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            cum nulla quos excepturi soluta sint repudiandae.
          </p>
          <button className="bg-black my-12 bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full flex justify-center items-center gap-2">
            Download My Resume <ArrowDownTrayIcon className="w-6" />
          </button>
        </div>
      </div>

      {/* Skills Section */}

      <div className="md:my-32 bg-[url('../resource/bg.png')] bg-fixed bg-center min-h-screen bg-no-repeat bg-contain">
        <h1 className="text-center text-5xl py-8 md:py-12">
          <span className="text-xl font-light">Know About</span> <br /> My
          Skills
        </h1>
        <div>
          <div className="grid md:grid-cols-4 gap-10">
            <div className="card w-72 bg-gradient-to-tl from-[#5476f061] to-[#dfa4f185] bg-opacity-50 shadow-2xl shadow-gray-600 mx-auto">
              <div className="card-body mx-auto space-y-4">
                <h2 className="text-center text-3xl font-semibold">HTML 5</h2>
                <div
                  className="radial-progress mx-auto"
                  style={{ "--value": 85 }}
                >
                  85%
                </div>
              </div>
            </div>
            <div className="card w-72 bg-gradient-to-tl from-[#5476f061] to-[#dfa4f185] bg-opacity-50 shadow-2xl shadow-gray-600 mx-auto">
              <div className="card-body mx-auto space-y-4">
                <h2 className="text-center text-3xl font-semibold">CSS 3</h2>
                <div
                  className="radial-progress mx-auto "
                  style={{ "--value": 80 }}
                >
                  80%
                </div>
              </div>
            </div>
            <div className="card w-72 bg-gradient-to-tl from-[#5476f061] to-[#dfa4f185] bg-opacity-50 shadow-2xl shadow-gray-600 mx-auto">
              <div className="card-body mx-auto space-y-4">
                <h2 className="text-center text-3xl font-semibold">
                  JavaScript
                </h2>
                <div
                  className="radial-progress mx-auto"
                  style={{ "--value": 70 }}
                >
                  70%
                </div>
              </div>
            </div>
            <div className="card w-72 bg-gradient-to-tl from-[#5476f061] to-[#dfa4f185] bg-opacity-50 shadow-2xl shadow-gray-600 mx-auto">
              <div className="card-body mx-auto space-y-4">
                <h2 className="text-center text-3xl font-semibold">
                  BootStrap
                </h2>
                <div
                  className="radial-progress mx-auto"
                  style={{ "--value": 90 }}
                >
                  90%
                </div>
              </div>
            </div>
            <div className="card w-72 bg-gradient-to-tl from-[#5476f061] to-[#dfa4f185] bg-opacity-50 shadow-2xl shadow-gray-600 mx-auto">
              <div className="card-body mx-auto space-y-4">
                <h2 className="text-center text-3xl font-semibold">
                  Tailwind CSS
                </h2>
                <div
                  className="radial-progress mx-auto"
                  style={{ "--value": 85 }}
                >
                  85%
                </div>
              </div>
            </div>
            <div className="card w-72 bg-gradient-to-tl from-[#5476f061] to-[#dfa4f185] bg-opacity-50 shadow-2xl shadow-gray-600 mx-auto">
              <div className="card-body mx-auto space-y-4">
                <h2 className="text-center text-3xl font-semibold">React JS</h2>
                <div
                  className="radial-progress mx-auto"
                  style={{ "--value": 70 }}
                >
                  70%
                </div>
              </div>
            </div>
            <div className="card w-72 bg-gradient-to-tl from-[#5476f061] to-[#dfa4f185] bg-opacity-50 shadow-2xl shadow-gray-600 mx-auto">
              <div className="card-body mx-auto space-y-4">
                <h2 className="text-center text-3xl font-semibold">Next JS</h2>
                <div
                  className="radial-progress mx-auto"
                  style={{ "--value": 60 }}
                >
                  60%
                </div>
              </div>
            </div>
            <div className="card w-72 bg-gradient-to-tl from-[#5476f061] to-[#dfa4f185] bg-opacity-50 shadow-2xl shadow-gray-600 mx-auto">
              <div className="card-body mx-auto space-y-4">
                <h2 className="text-center text-3xl font-semibold">Firebase</h2>
                <div
                  className="radial-progress mx-auto"
                  style={{ "--value": 55 }}
                >
                  55%
                </div>
              </div>
            </div>
            <div className="card w-72 bg-gradient-to-tl from-[#5476f061] to-[#dfa4f185] bg-opacity-50 shadow-2xl shadow-gray-600 mx-auto">
              <div className="card-body mx-auto space-y-4">
                <h2 className="text-center text-3xl font-semibold">MongoDB</h2>
                <div
                  className="radial-progress mx-auto"
                  style={{ "--value": 70 }}
                >
                  70%
                </div>
              </div>
            </div>
            <div className="card w-72 bg-gradient-to-tl from-[#5476f061] to-[#dfa4f185] bg-opacity-50 shadow-2xl shadow-gray-600 mx-auto">
              <div className="card-body mx-auto space-y-4">
                <h2 className="text-center text-3xl font-semibold">Node JS</h2>
                <div
                  className="radial-progress mx-auto"
                  style={{ "--value": 50 }}
                >
                  50%
                </div>
              </div>
            </div>
            <div className="card w-72 bg-gradient-to-tl from-[#5476f061] to-[#dfa4f185] bg-opacity-50 shadow-2xl shadow-gray-600 mx-auto">
              <div className="card-body mx-auto space-y-4">
                <h2 className="text-center text-3xl font-semibold">
                  Express JS
                </h2>
                <div
                  className="radial-progress mx-auto"
                  style={{ "--value": 55 }}
                >
                  55%
                </div>
              </div>
            </div>
            <div className="card w-72 bg-gradient-to-tl from-[#5476f061] to-[#dfa4f185] bg-opacity-50 shadow-2xl shadow-gray-600 mx-auto">
              <div className="card-body mx-auto space-y-4">
                <h2 className="text-center text-3xl font-semibold">Redux</h2>
                <div
                  className="radial-progress mx-auto"
                  style={{ "--value": 60 }}
                >
                  60%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Projects */}

      <div className="my-12 md:my-32 py-12">
        <h1 className="text-center text-5xl py-8 md:py-12">
          <span className="text-xl font-light">Explore All</span> <br /> My
          Projects
        </h1>
        <p className="text-center text-xl mb-12 mx-4">
          I have recently completed this projects. Learning Camp , Awesome
          Cheef, JUGUETE ÚNICO. <br /> You can checkout my projects
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="card w-96 bg-base-100 shadow-xl relative group mx-auto">
            <figure>
              <img
                className="w-96 h-72"
                src="https://i.ibb.co/SNY67NG/image.png"
                alt="project"
              />
            </figure>
            <div className="card-body absolute backdrop-blur-sm min-h-full backdrop-brightness-[30%] hidden group-hover:block w-full rounded-2xl">
              <h2 className="text-center text-3xl font-medium">
                Learning Camp
              </h2>
              <p className="mb-2 text-center">A Complete Learning Website with Full CRUD operation.</p>
              <div className="space-y-6">
                <Link href="https://learning-camp.web.app/" target="_blank" className="bg-black mx-auto bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full flex justify-center items-center gap-2">
                  Live preview
                </Link>
                <div className="flex items-center justify-between">
                  <Link href="https://github.com/hridoyfahad30/learning-camp-client" target="_blank" className="bg-black bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full flex justify-center items-center gap-2">
                    Client Repo
                  </Link>
                  <Link href="https://github.com/hridoyfahad30/learning-camp-server" target="_blank" className="bg-black bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full flex justify-center items-center gap-2">
                    Server Repo
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl relative group mx-auto">
            <figure>
              <img
                className="w-96 h-72"
                src="https://i.ibb.co/LpFQ3K9/image.png"
                alt="project"
              />
            </figure>
            <div className="card-body absolute backdrop-blur-sm min-h-full backdrop-brightness-[30%] hidden group-hover:block w-full rounded-2xl">
              <h2 className="text-center text-3xl font-medium">
              JUGUETE ÚNICO
              </h2>
              <p className="mb-2 text-center">A e-commerce Website</p>
              <div className="space-y-6">
                <Link href="https://learning-camp.web.app" target="_blank" className="bg-black mx-auto bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full flex justify-center items-center gap-2">
                  Live preview
                </Link>
                <div className="flex items-center justify-between">
                  <Link href="https://github.com/hridoyfahad30/jugute-unico-client" target="_blank" className="bg-black bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full flex justify-center items-center gap-2">
                    Client Repo
                  </Link>
                  <Link href="https://github.com/hridoyfahad30/jugute-unico-server" target="_blank" className="bg-black bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full flex justify-center items-center gap-2">
                    Server Repo
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl relative group mx-auto">
            <figure>
              <img
                className="w-96 h-72"
                src="https://i.ibb.co/V21SS24/image.png"
                alt="project"
              />
            </figure>
            <div className="card-body absolute backdrop-blur-sm min-h-full backdrop-brightness-[30%] hidden group-hover:block w-full">
              <h2 className="text-center text-3xl font-medium">
                Awesome Cheef
              </h2>
              <p className="mb-2 text-center">A Complete Restaurant Management Website</p>
              <div className="space-y-6">
                <Link href="https://awesome-recipe-c54d0.web.app/" target="_blank" className="bg-black mx-auto bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full flex justify-center items-center gap-2">
                  Live preview
                </Link>
                <div className="flex items-center justify-between">
                  <Link href="https://github.com/hridoyfahad30/awesome-cheef-client" target="_blank" className="bg-black bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full flex justify-center items-center gap-2">
                    Client Repo
                  </Link>
                  <Link href="https://github.com/hridoyfahad30/awesome-cheef-server" target="_blank" className="bg-black bg-opacity-25 hover:bg-opacity-50 hover:bg-gradient-to-tr from-[#2cc0ff] to-[#fbb1fc] hover:text-black hover:scale-105 text-lg font-medium duration-500 px-6 py-4 rounded-full flex justify-center items-center gap-2">
                    Server Repo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
