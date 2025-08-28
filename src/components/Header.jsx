import { useState } from "react";
import { Link } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = ["hero", "about", "services", "portfolio", "contact"];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Startup</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <Link
  to={item}
  smooth={true}
  duration={500}
  spy={true}             // 👈 watches scroll position
  offset={-80}           // 👈 adjust for fixed header height
  activeClass="text-blue-600 font-bold"
  onClick={() => setOpen(false)} // close mobile menu on click
  className="cursor-pointer hover:text-blue-600 transition-colors"
>
  {item.charAt(0).toUpperCase() + item.slice(1)}
</Link>

            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <ul className="flex flex-col space-y-4 text-center font-medium">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  onClick={() => setOpen(false)} // close menu after click
                  className="cursor-pointer hover:text-blue-600 block"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
