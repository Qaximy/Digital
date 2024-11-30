import React from "react";
import { FaUserCircle } from "react-icons/fa";

// Import Menulinks if it's defined elsewhere
const Menulinks = [
  { id: 1, name: "Home", link: "/#home" },
  { id: 2, name: "About", link: "/#about" },
  { id: 3, name: "Services", link: "/#services" },
  { id: 4, name: "Projects", link: "/#projects" },
];

const Responsive = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "left-[-100%]"
      } fixed bottom-0 top-0 w-[75%] transition-all duration-300 pt-16 px-8 shadow-md bg-white dark:bg-gray-900 z-50 flex flex-col justify-between pb-4`}
      aria-hidden={!showMenu} // Accessibility
    >
      <div className="card ">
        {/* User Information Section */}
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1 className="text-lg font-medium">Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>
        
        {/* Menu Section */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Menulinks.map(({ id, name, link }) => (
              <li key={id}>
                <a
                  href={link}
                  className="mb-5 inline-block"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
     {}
        {/* footer section */}
        <div>
            <h1> Made with ❤ by {}
                <a href="#">Nazira</a>
            </h1> 
        </div>
      </div>
    </div>
  );
};

export default Responsive;
