"use client";

import { useState, type ReactNode } from "react";
import { Bell, ChevronDown, Menu, Search, UserRound } from "lucide-react";
import Sidebar from "../components/Sidebar";
import dashboardData from "../dashboard-data.json";
import Image from "next/image";

export default function OverviewLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = dashboardData.userProfile;

  return (
    <div className="flex max-h-screen w-full max-w-full h-screen overflow-hidden bg-[#eef2f6] text-[#1d2a39]">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="h-full flex min-w-0 flex-1 flex-col ">
        <div className="w-full max-w-full h-full flex-1  bg-[#f3f5f8]">
          <header className="flex w-full items-center justify-between md:gap-4 p-2 md:p-5 bg-white">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Open sidebar"
                onClick={() => setSidebarOpen((value) => !value)}
                className="flex h-10 w-10 items-center justify-center rounded border border-[#dfe7ef] bg-white text-[#1d2a39] shadow-sm md:hidden"
              >
                <Menu className="h-5 w-5" strokeWidth={2.2} />
              </button>

              <div className="hidden md:flex items-center gap-3 rounded-lg border border-[#dfe7ef] bg-[#eef2f6] px-2 py-2 shadow-sm md:w-[200px] lg:w-[400px]">
                <Search className="h-4 w-4 text-[#7d8ca5]" strokeWidth={2.2} />
                <input
                  aria-label="Search anything"
                  placeholder={dashboardData.topBar.searchPlaceholder}
                  className="w-full border-0 bg-transparent text-[15px] text-[#1d2a39] placeholder:text-[#7d8ca5] focus:outline-none"
                />
              </div>
            </div>

            <Image src="/images/logo1.png" alt="logo" width={200} height={100} className="md:hidden"/>


            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex items-center justify-center"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" strokeWidth={2.2} />
              </button>

              <div className="flex items-center gap-3 md:px-2 md:border-l">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e9edf2] text-[#1d2a39]">
                  <UserRound className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div className="hidden md:flex flex-col text-left">
                  <p className="text-[16px] font-semibold text-[#1d2a39]">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-[12px] text-[#7a889b]">{user.businessName}</p>
                </div>
                <ChevronDown className=" hidden md:flex h-4 w-4 text-[#6d7c93]" strokeWidth={2.2} />
              </div>
            </div>
          </header>

          {children}
        </div>
      </div>
    </div>
  );
}
