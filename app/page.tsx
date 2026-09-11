"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, EyeClosed } from "lucide-react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-screen bg-white md:flex">
      <div className="absolute hidden lg:flex z-0 w-screen h-screen login-img2">

      </div>
      <div className="hidden z-10 md:flex w-1/2 lg:hidden h-full login-img">
      </div>
      <div className="hidden z-10 lg:flex w-1/2 h-full">

      </div>
      <div className=" p-5 md:px-10 md:w-1/2 z-10 lg:px-10  w-full h-full bg-white items-center justify-between flex flex-col">
      <div className="hidden w-full md:flex items-start justify-end text-xs">
            <p>Don't have an account?</p>
            <Link href="" className="text-blue-500 hover:underline">Contact us</Link> 
          </div>
        <div className="w-full h-full flex flex-col items-center md:items-start justify-center lg:mb-10">
          
          <Image src="/images/logo1.png" alt="logo1" width={200} height={200} className="md:hidden"/>
          
          <p className="font-semibold text-2xl ">Welcome back</p>
          <p className="text-gray-500 mt-2 ">Sign in to your merchant account</p>
          <form className="w-full max-w-xl  flex flex-col gap-4  mt-5 ">
            <div>
              <p>Email</p>
              <input className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <p>Password</p>
              <div className="relative">
                <input
                  className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 "
                >
                  {showPassword ? <EyeClosed size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="form-checkbox h-3 w-3 text-blue-500" />
                <label className="text-gray-500 text-xs">Remember me</label>
              </div>
              <Link href="" className="text-blue-500 hover:underline text-xs">
                Forgot password?
              </Link>
            </div>
            <button className="w-full bg-[#0B1F3A] items-center justify-center flex text-white rounded py-2 px-4 hover:bg-[#0B1F3A]/90 transition duration-300 ease-in-out gap-2">
              <p className="text-white font-bold">Sign In</p>
              <ArrowRight/>
            </button>
            <div className="w-full items-center justify-between flex">
              <div className="w-20 lg:w-40 h-px bg-gray-500"></div>
              <p className="text-gray-500 text-sm">or continue with</p>
              <div className="w-20 lg:w-40 h-px bg-gray-500"></div>
            </div>
            <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-2 ">
              <div className="px-2 py-1 items-center justify-center flex border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out">
                <Image src="/images/google.png" alt="google" width={100} height={100} className="w-7" />
                <p>Google</p>
              </div>
              <div className="px-2 py-1 items-center justify-center flex border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out">
                <Image src="/images/microsoft.jpeg" alt="microsoft" width={100} height={100} className="w-10" />
                <p>Microsoft</p>
              </div>
              <div className="px-2 py-1 items-center justify-center flex border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out">
                <Image src="/images/apple.png" alt="apple" width={100} height={100} className="w-10" />
                <p>Apple</p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-between mt-2 lg:flex-row lg:justify-center lg:gap-2">
            <Image src="/images/secure.avif" alt="secure" width={200} height={100} className="w-5"/>
            <p className="text-gray-500 text-xs text-center">
              Your data is secure with industry-standard encryption
            </p>
          </div>
          </form>

          
          
        </div>
        <div className="flex flex-col gap-3 items-center justify-center 2xl:mr-100 ">
          <div className="flex items-center">
            <div className="text-gray-500 text-xs">Privacy Policy</div>
            <div className="text-gray-500 text-xs border-x border-black px-2 mx-2">Terms of Service</div>
            <div className="text-gray-500 text-xs">Help</div>
          </div>
          <div className="text-gray-500 text-xs">© 2026 PayFlow. All rights reserved.</div>
        </div>
        
      </div>
    </div>
  );
}
