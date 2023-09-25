import { useState } from "react";
import { BsSearchHeart } from "react-icons/bs";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      {/* searchbar */}
      <div className="flex item-center pt-500  justify-end mb-3">
        <div className="border border-black p-1 flex item-center justify-center gap-2 justify-right">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="text"
            placeholder="Search Product..."
            className="outline-none  pl-3 "
          />
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
