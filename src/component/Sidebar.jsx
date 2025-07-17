import React from "react";
import { useState } from "react";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        className="fixed top-4 right-4 z-50 w-10 h-10 flex flex-col justify-center items-center space-y-1 group"
        onClick={toggleSidebar}
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 
      ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 
      ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 
      ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
        />
      </button>

      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white p-6 transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Sidebar;
