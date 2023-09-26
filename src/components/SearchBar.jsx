//import { useState } from "react";
import { BsSearchHeart } from "react-icons/bs";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div>
      {/* searchbar */}
      <div className="flex item-center pt-500 mb-3 justify-between">
        <div className="border border-gray-600 p-1 flex item-center gap-2">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="text"
            placeholder="Search Product..."
            className="outline-none  pl-3 "
          />
          {/* Icon */}
          <BsSearchHeart
            className="text-white-300 justify-right cursor-pointer"
            value={search}
            onClick={() => setSearch(search)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
