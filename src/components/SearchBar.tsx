
import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="무엇이든 물어보세요..."
        className="w-full p-3 border border-green-200 rounded-full text-gray-600 focus:outline-none focus:ring-1 focus:ring-green-200"
      />
    </div>
  );
};

export default SearchBar;
