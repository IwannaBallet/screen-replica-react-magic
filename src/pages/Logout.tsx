
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, add logout logic here (clear tokens, etc.)
    console.log("User logged out");
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <h1 className="text-[#40E0D0] font-medium text-lg">My page</h1>
      </header>

      {/* Main Content - Centered vertically and horizontally */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center mb-8">
          <p className="text-2xl font-medium text-gray-800">로그아웃</p>
          <p className="text-xl font-medium text-gray-600 mt-2">하시겠습니까?</p>
        </div>

        <div className="w-full max-w-xs flex gap-4">
          <Button 
            onClick={handleLogout}
            className="flex-1 py-6 bg-[#40E0D0] hover:bg-[#40E0D0]/90 text-white font-medium rounded-md"
          >
            로그아웃
          </Button>
          <Button 
            onClick={handleCancel}
            className="flex-1 py-6 bg-[#40E0D0] hover:bg-[#40E0D0]/90 text-white font-medium rounded-md"
          >
            취소
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Logout;
