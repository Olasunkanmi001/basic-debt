import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="text-2xl font-bold">Basic/Agency</div>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <a href="#work" className="hover:underline">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
