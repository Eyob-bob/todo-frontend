import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-green-600 px-2 text-sm rounded rotate-12 absolute text-white">
        Page Not Found
      </div>
      <Link to='/' className="mt-5">
        <button className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-green-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-green-600 border border-current">
            <button >Go Home</button>
          </span>
        </button>
      </Link>
    </main>
  );
};

export default ErrorPage;
