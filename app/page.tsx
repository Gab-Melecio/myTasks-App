"use client";

import Image from "next/image";
import { LogIn } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = () => {
    if (username === "admin" && password === "123") {
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return(
    <main className="min-h-screen w-full flex justify-center items-center bg-[aliceblue]">
      <section className="bg-white w-full max-w-[500px] p-8 rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5)]">
        
        <div className="flex justify-center items-center rounded-full bg-black mx-auto mb-4 w-[50px] h-[50px]">
          <LogIn size={32} color="#ffffff" />
        </div>

        <h1 className="text-2xl font-semibold text-center mb-2">Welcome back!</h1>
        <p className="text-base text-center mb-4 text-[rgba(104,104,103,0.842)]">Enter your credentials to access your account</p>

        <div className="mb-4">
          <label htmlFor="username" className="block font-semibold">Username</label>
          <input 
            id="username" 
            type="text" 
            className="w-full p-2 border border-slate-200 rounded-2xl text-base bg-[rgba(238,234,234,0.781)]" 
            placeholder="Enter your username (admin)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold">Password</label>
          <input 
            id="password"
            type="password" 
            className="w-full p-2 border border-slate-200 rounded-2xl text-base bg-[rgba(238,234,234,0.781)]" 
            placeholder="Enter your password (123)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSignIn} className="w-full p-2 bg-black text-white border border-white rounded-2xl text-base font-semibold cursor-pointer mb-4 transition-colors duration-300 ease-in-out hover:bg-[rgba(32,28,28,0.788)]">Sign In</button>
        <p className="text-base text-center mb-4 text-[rgba(104,104,103,0.842)]">Forgot password?</p>

      </section>
    </main>
  );
}
