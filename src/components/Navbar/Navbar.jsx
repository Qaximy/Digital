import React from "react";
import logoimg from "../../assets/Vector.png";
import DarkMode from "./DarkMode";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import Responsive from "./Responsive ";

const Menulinks = [
  { id: 1, name: "Home", link: "/#home" },
  { id: 2, name: "About", link: "/#about" },
  { id: 3, name: "Services", link: "/#services" },
  { id: 4, name: "Projects", link: "/#projects" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="bg-white dark:bg-black dark:text-white duration-300">
        <div className="container py-3 md:py-2">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div>
              <a href="#" className="items-center flex gap-3">
                <img src={logoimg} alt="logo" className="w-5" />
                <span className="text-2xl sm:text-3xl font-semibold">
                  Digital Agency
                </span>
              </a>
            </div>

            {/* Desktop Navlinks Section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                {Menulinks.map(({ id, name, link }) => (
                  <li key={id} className="cursor-pointer py-4">
                    <a
                      href={link}
                      className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-all duration-500"
                    >
                      {name}
                    </a>
                  </li>
                ))}
                <button className="btn-primary">Get in Touch</button>
                <DarkMode />
              </ul>
            </div>

            {/* Mobile Menu Icon */}
            <div className="flex items-center gap-4 md:hidden">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer text-2xl"
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer text-2xl"
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navlinks */}
        <Responsive showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
