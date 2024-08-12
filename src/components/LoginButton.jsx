import { cn } from "@/lib/utils";
import React from "react";

export default function LoginButton({ className }) {
  const signIn = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log("Sign in");
  };

  return (
    <form onSubmit={signIn}>
      <button
        className={cn(
          "text-slate-100 bg-slate-700 hover:bg-slate-800 transition-all duration-200 ease-in-out shadow-sm hover:shadow-lg hover:shadow-slate-600 mr-6 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer",
          className
        )}
      >
        Login
      </button>
    </form>
  );
}
