
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password) {
      toast.error("비밀번호를 입력해주세요.");
      return;
    }

    // In a real app, add password change logic here
    console.log("Password changed:", password);
    toast.success("비밀번호가 변경되었습니다.");
    
    // Navigate back to main page after successful change
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <h1 className="text-[#40E0D0] font-medium text-lg">My page</h1>
      </header>

      {/* Main Content - Centered vertically and horizontally */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <form onSubmit={handleSubmit} className="w-full max-w-xs">
          <div className="text-center mb-6">
            <p className="text-xl font-medium text-gray-800">현재 비밀번호 입력</p>
          </div>
          
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 border-gray-300"
          />
          
          <Button 
            type="submit"
            className="w-full py-6 bg-[#40E0D0] hover:bg-[#40E0D0]/90 text-white font-medium rounded-md"
          >
            확인
          </Button>
        </form>
      </main>
    </div>
  );
};

export default ChangePassword;
