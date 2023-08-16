import Image from "next/image";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className="w-full flex h-screen items-center justify-center">
      <form className="w-full max-w-[600px] p-5 bg-tp rounded-md">
        <Image
          alt="logo"
          width={300}
          height={50}
          src="/BLINKFIX.png"
          className="mx-auto"
        />
        <h2 className="text-4xl font-bold text-center text-white my-5">
          Login
        </h2>

        <div className="mb-3">
          <p className="text-lg mb-3">Email</p>
          <input
            type="email"
            placeholder="abc@example.com"
            className="w-full h-[50px] rounded-md px-5"
          />
        </div>
        <div className="mb-3">
          <div className="flex justify-between">
            <p className="text-lg mb-3">Password</p>
            <Link href="/auth/forgot" className="text-white">
              Forgot password?
            </Link>
          </div>
          <input
            type="password"
            placeholder="Password"
            className="w-full h-[50px] rounded-md px-5"
          />
        </div>
        <button className="mt-3 w-full bg-red-500 h-[50px] text-white text-lg font-bold rounded-md">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
