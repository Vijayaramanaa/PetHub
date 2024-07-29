import React from 'react';
import SelectComponent from './SelectComponent';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-yellow-400 shadow-md p-4 flex flex-col md:flex-row items-center justify-between">
      <Link to="/" className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">PET❄️HUB</Link>
      <div className="flex items-center gap-7 space-x-4">
        <SelectComponent />
        <Link to="/search" className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-900">
          Search
        </Link>
      </div>
    </div>
  );
}

export default Header;
