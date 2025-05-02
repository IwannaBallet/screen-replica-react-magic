
import React from "react";

const ContentBlocks = () => {
  return (
    <div className="space-y-4 w-full max-w-xs mx-auto">
      <div className="w-full h-28 bg-cyan-50 rounded-md relative overflow-hidden">
        {/* Fridge handle/side */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-16 bg-white rounded-sm"></div>
      </div>
      <div className="w-full h-28 bg-cyan-50 rounded-md relative overflow-hidden">
        {/* Fridge handle/side */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-16 bg-white rounded-sm"></div>
      </div>
    </div>
  );
};

export default ContentBlocks;
