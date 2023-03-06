import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-stretch py-4 bg-gray-700 text-white gap-8">
      <h1 className="font-extrabold text-2xl pl-1">Grouper</h1>
      <ul className="flex space-x-2 pr-4">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "border-b border-white" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
