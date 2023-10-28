import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
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
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-3 py-5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between lg:flex-col xl:flex-row lg:justify-center xl:justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                className="mr-3 h-6 sm:h-9"
                alt="PCInnovateHub Logo"
              />
            </Link>
            <div className="flex items-center lg:none">
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                onClick={() => setShowMenu(!showMenu)}
                className="inline-flex items-center relative p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <AiOutlineMenu />
              </button>
              <ul
                className={`absolute ${
                  showMenu ? "" : "hidden"
                } top-10 z-10 p-4 rounded-lg right-4 bg-white  flex flex-col mt-4 font-medium lg:hidden lg:space-x-8 lg:mt-0`}
              >
                {navLink.map((navi, i) => (
                  <li key={i}>
                    <Link
                      onClick={() => setShowMenu(!showMenu)}
                      href={navi.link}
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      {navi.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/pc"
                    onClick={() => setShowMenu(!showMenu)}
                    className="block bg-yellow-400 p-3 rounded-md text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-[#ffa31a] lg:border-0 lg:hover:text-primary-700  dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    PC Builder
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden justify-between items-center  w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 items-center font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {navLink.map((navi, i) => (
                  <li key={i}>
                    <Link
                      onClick={() => setShowMenu(!showMenu)}
                      href={navi.link}
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      {navi.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    onClick={() => setShowMenu(!showMenu)}
                    href="/pc"
                    className="block bg-yellow-400 p-3 rounded-md text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-[#ffa31a] lg:border-0 lg:hover:text-primary-700  dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    PC Builder
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
