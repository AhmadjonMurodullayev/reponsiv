import { useState } from "react";
import { Button } from "../assets/button";
import logo from "../assets/logo.svg";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="w-full h-[40px] bg-white hidden md:block"></div>

      <header className="w-full h-[70px] bg-primary flex items-center">
        <div className="w-[90%] max-w-[1410px] mx-auto">
          <div className="flex items-center w-full justify-between">
            <div>
              <img src={logo} alt="Logo" />
            </div>

            <div className="md:hidden">
              <button onClick={toggleSidebar}>
                <Button />
              </button>
            </div>

            <div className="items-center gap-[70px] hidden md:flex">
              <ul className="flex gap-7 text-white">
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>News</li>
              </ul>
              <button className="text-primary bg-white py-2 px-6 rounded-xl">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 h-[100vh] w-[50%] bg-white shadow-lg z-50 transform transition-transform duration-500 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-5 p-6 text-primary">
          <li className="cursor-pointer" onClick={toggleSidebar}>
            Home
          </li>
          <li className="cursor-pointer" onClick={toggleSidebar}>
            About us
          </li>
          <li className="cursor-pointer" onClick={toggleSidebar}>
            Services
          </li>
          <li className="cursor-pointer" onClick={toggleSidebar}>
            News
          </li>
          <li>
            <button
              className="mt-4 text-white bg-primary py-3 px-4 rounded-xl md:py-4 md:px-6 "
              onClick={toggleSidebar}
            >
              Contact us
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
