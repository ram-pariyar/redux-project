import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-10 bg-blue-900">
      <Link to="/" className="font-medium text-2xl">
        MediaSearch
      </Link>
      <div className="flex gap-5 items-center text-xl">
        <Link
          className="text-base font-medium bg-white text-black rounded py-2 px-4"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-base font-medium bg-white text-black rounded py-2 px-4"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
