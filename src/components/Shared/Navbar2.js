import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineMenuFold,
  AiOutlineRight,
} from "react-icons/ai";
const navLink = [
  {
    name: "CPU / Processor",
    link: "/category/processor",
  },
  {
    name: "Motherboard",
    link: "/category/motherboard",
  },
  {
    name: "RAM",
    link: "/category/ram",
  },
  {
    name: "Power Supply Unit",
    link: "/category/power-supply-unit",
  },
  {
    name: "Storage Device",
    link: "/category/storage-device",
  },
  {
    name: "Monitor",
    link: "/category/monitor",
  },
  {
    name: "Others",
    link: "/category/others",
  },
];
const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const { data } = useSession();
  // console.log(data);
  return (
    <>
      <nav className="bg-white border-gray-200 px-3 py-5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between  items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="PCInnovateHub Logo"
            />
          </Link>
          <div>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="inline-flex items-center relative p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <AiOutlineMenuFold size={30} />
            </button>
            <ul
              className={`absolute ${
                showMenu ? "" : "hidden"
              } top-10 z-10 p-4 rounded-lg right-4 bg-white lg:bg-transparent lg:top-0 lg:relative lg:flex-row items-center  lg:flex flex-col mt-4 font-medium lg:space-x-8 lg:mt-0`}
            >
              <li className="w-full lg:w-auto">
                <Link
                  onClick={() => setShowMenu(!showMenu)}
                  href={"/"}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li className="relative group">
                <button
                  href={"/"}
                  onClick={() => setShowCategories(!showCategories)}
                  className="flex justify-between w-full lg:w-auto items-center py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Categories <AiOutlineRight className="lg:hidden" />
                </button>
                <ul
                  className={`bg-gray-100  pl-4 ${
                    showCategories ? "block lg:hidden" : "hidden"
                  }
                  lg:top- lg:right-0 lg:absolute lg:pl-4 lg:px-5 lg:hidden
                  lg:rounded-lg lg:w-60 lg:divide-y-2 lg:divide-gray-400
                  lg:group-hover:block

                  `}
                >
                  {navLink.map((navi, i) => (
                    <li key={i} className="py-3">
                      <Link
                        href={navi.link}
                        onClick={() => setShowMenu(!showMenu)}
                        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        {navi.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {data?.user?.email ? (
                <>
                  <li className="py-3">
                    <button
                      onClick={() => signOut()}
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Logout
                    </button>
                  </li>
                  <li className="w-full lg:w-auto">
                    <Link
                      href="/pc"
                      onClick={() => setShowMenu(!showMenu)}
                      className="block bg-yellow-400 p-3 rounded-md text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-[#ffa31a] lg:border-0 lg:hover:text-primary-700  dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      <div>PC Builder</div>
                    </Link>
                  </li>
                </>
              ) : (
                <li className="py-3">
                  <Link
                    href={"/login"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
