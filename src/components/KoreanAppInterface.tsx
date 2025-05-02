
import React from "react";
import SearchBar from "./SearchBar";
import ActionButtons from "./ActionButtons";
import ContentBlocks from "./ContentBlocks";

const KoreanAppInterface = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="p-3 bg-gray-100">
        <h1 className="text-sm text-gray-700 font-medium">레시피(예식)</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center p-4">
        {/* Content Blocks */}
        <div className="mt-4 mb-10 w-full">
          <ContentBlocks />
        </div>

        {/* Question Text */}
        <div className="mb-auto">
          <p className="text-xl font-medium text-cyan-400">뭐먹을생?</p>
        </div>

        {/* Search Bar */}
        <div className="w-full mt-auto mb-4">
          <SearchBar />
        </div>

        {/* Action Buttons */}
        <div className="w-full mb-6">
          <ActionButtons />
        </div>
      </main>
    </div>
  );
};

export default KoreanAppInterface;
