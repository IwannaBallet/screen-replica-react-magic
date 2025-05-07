
import React from "react";
import { useNavigate } from "react-router-dom";
import ActionButtons from "./ActionButtons";
import ContentBlocks from "./ContentBlocks";
import { Switch } from "./ui/switch";
import { ChevronRight } from "lucide-react";

const KoreanAppInterface = () => {
  const navigate = useNavigate();
  
  const handleLogoutClick = () => {
    navigate("/logout");
  };

  const handlePasswordChange = () => {
    navigate("/change-password");
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <h1 className="text-[#00e1c5] font-medium text-lg">My page</h1>
      </header>

      {/* Settings Section */}
      <div className="px-4 py-2 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-800">유통기한 만료 알림</span>
          <Switch />
        </div>
        
        <div className="flex items-center justify-between py-3">
          <span className="text-sm font-medium text-gray-800">아이디 변경하기</span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
        
        <div 
          className="flex items-center justify-between py-3 cursor-pointer"
          onClick={handlePasswordChange}
        >
          <span className="text-sm font-medium text-gray-800">비밀번호 변경하기</span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center p-4">
        {/* Content Blocks */}
        <div className="mt-4 mb-4 w-full max-w-xs">
          <ContentBlocks />
        </div>

        {/* Question Text */}
        <div className="mb-8 mt-2">
          <p className="text-2xl font-medium text-[#00e1c5]">뭐먹을냉?</p>
        </div>

        {/* Action Button - Primary */}
        <div className="w-full max-w-xs mb-4">
          <button 
            className="w-full py-3 px-4 rounded-md bg-[#00e1c5] text-white font-medium"
            onClick={handleLogoutClick}
          >
            로그아웃
          </button>
        </div>

        {/* Bottom Action Buttons */}
        <div className="w-full max-w-xs mb-6">
          <ActionButtons />
        </div>
      </main>
    </div>
  );
};

export default KoreanAppInterface;
