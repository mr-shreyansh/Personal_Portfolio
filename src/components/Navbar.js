import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
<nav className="absolute top-0 flex justify-between w-full p-6 sm:items-center bg-stone-950">
  <div className="flex items-center flex-shrink-0 mr-6 text-white ">
    <span className="text-xl font-light tracking-widest font-signature">Shreyansh</span>
  </div>
 
  <div className="sm:w-2/3 lg:w-full">
    {isOpen && <div className="block text-sm sm:hidden ">
      <a href="#responsive-header" className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">
        Home
      </a>
      <a href="#responsive-header" className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">
        About
      </a>
      <a href="#responsive-header" className="block mx-3 mt-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">
        Contact
      </a>
      <a href="#responsive-header" className="block mx-3 mt-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">
        Experience
      </a>
      <a href="#responsive-header" className="block mt-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">
        Projects
      </a>
    </div>
    }
     <div className="items-center justify-around hidden w-0 text-sm sm:w-full sm:flex">
      <a href="#home" className="block mt-4 mr-4 text-teal-200 sm:inline-block lg:mt-0 hover:text-white">
        Home
      </a>
      <a href="#about" className="block mt-4 mr-4 text-teal-200 sm:inline-block lg:mt-0 hover:text-white">
        About
      </a>
      <a href="#" className="block mt-4 text-teal-200 sm:inline-block lg:mt-0 hover:text-white">
        Contact
      </a>
      <a href="#experience" className="block mt-4 text-teal-200 sm:inline-block lg:mt-0 hover:text-white">
        Experience
      </a>
      <a href="#projects" className="block mt-4 text-teal-200 sm:inline-block lg:mt-0 hover:text-white">
        Projects
      </a>
    </div>
  </div>
  <div className="block sm:hidden">
    <button onClick={toggleMenu} className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
      <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
</nav>

    );
};

export default Navbar;
