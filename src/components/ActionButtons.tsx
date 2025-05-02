
import React from "react";

const ActionButtons = () => {
  return (
    <div className="flex justify-between w-full gap-2">
      <button className="flex-1 py-3 px-4 bg-cyan-400 rounded-md text-white text-sm">
        레시피 추천
      </button>
      <button className="flex-1 py-3 px-4 bg-gray-100 rounded-md text-gray-700 text-sm">
        내 냉장고
      </button>
      <button className="flex-1 py-3 px-4 bg-gray-100 rounded-md text-gray-700 text-sm">
        마이페이지
      </button>
    </div>
  );
};

export default ActionButtons;
