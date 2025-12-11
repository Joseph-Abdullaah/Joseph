import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
];

function Header() {
  return (
    <header className="px-4 py-8 flex justify-center items-center text-white/80 z-10">
      <nav className="flex gap-x-8 text-lg">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "hover:text-white transition-colors"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
