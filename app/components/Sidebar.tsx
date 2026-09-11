import {
  ArrowUpRight,
  DollarSign,
  CircleHelp,
  LayoutDashboard,
  Handshake,
  Landmark,
  LogOut,
  Settings,
  type LucideIcon,
  UserRound,
  Home
} from "lucide-react";
import dashboardData from "../dashboard-data.json";
import Link from "next/link";

import Image from "next/image";

type NavItemData = {
  label: string;
  icon: LucideIcon;
  active?: boolean;
};

const iconMap: Record<string, LucideIcon> = {
  Home,
  DollarSign,
  Landmark,
  Handshake,
  Settings,
};

const navItems: NavItemData[] = (dashboardData.navItems as Array<{ label: string; icon: string; active?: boolean }>).map((item) => ({
  label: item.label,
  active: item.active,
  icon: iconMap[item.icon] ?? LayoutDashboard,
}));

function NavItem({ icon: Icon, label, active = false }: NavItemData) {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-4 rounded-lg px-3 py-3 text-left transition-colors hover:cursor-pointer ${
        active ? "bg-[#102f4e] text-white" : "text-white/85 hover:bg-white/5"
      }`}
    >
      <div
        className="flex items-center justify-center rounded-full text-white"
      >
        <Icon className="h-5 w-5" strokeWidth={2.2} />
      </div>
      <span className="text-[18px] font-semibold leading-none">{label}</span>
    </button>
  );
}

type SidebarProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const user = dashboardData.userProfile;
  const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();

  return (
    <div className="">
      <div
        aria-hidden={!isOpen}
        className={`fixed z-30 w-full bg-[#061a2d]/30 transition-opacity md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : " pointer-events-none opacity-0"
        }`}
        onClick={onClose}>

      <div
        className={`left-0 top-0 z-40 flex h-screen w-[300px] flex-col bg-[#0B1F3A] px-7 pb-6 pt-8 text-white transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
<div className="mb-8 flex items-center gap-4 pl-1">
        <Image src="/images/logo2.png" alt="logo" width={200} height={100}/>
        </div>

        <nav className="flex-1 space-y-3 pt-2">
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>

        <div className="mt-auto space-y-6">
          <div className="space-y-3 pb-2">
            <button type="button" className="flex w-full items-center gap-4 px-3 py-3 text-left text-white/90 transition-colors hover:bg-white/5 rounded-lg hover:cursor-pointer">
              <div className="flex items-center justify-center">
                <CircleHelp className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <span className="text-[18px] font-semibold leading-none">Help &amp; Support</span>
            </button>

            <Link href="/"><button type="button" className="flex w-full items-center gap-4 px-3 py-3 text-left text-white/90 transition-colors hover:bg-white/5 rounded-lg hover:cursor-pointer">
              <div className="flex items-center justify-center">
                <LogOut className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <span className="text-[18px] font-semibold leading-none">Log Out</span>
            </button></Link>
          </div>

          <div className="flex items-center gap-4 border-t border-white/10 pt-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2f3f5] text-[22px] font-medium text-[#1a2640]">
              {initials}
            </div>
            <div>
              <p className="text-[19px] font-bold leading-tight text-white">{user.firstName} {user.lastName}</p>
              <p className="text-[14px] font-medium text-white/70">{user.accountType}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        className="hidden md:flex h-full w-full flex-col bg-[#0B1F3A] p-4 text-white transition-transform duration-300 ease-out"
      >
        <div className="mb-8 flex items-center gap-4 pl-1">
        <Image src="/images/logo2.png" alt="logo" width={200} height={100}/>
        </div>

        <nav className="flex-1 space-y-3 pt-2">
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>

        <div className="mt-auto space-y-6">
          <div className="space-y-3 pb-2">
            <button type="button" className="flex w-full items-center gap-4 px-3 py-3 text-left text-white/90 transition-colors hover:bg-white/5 rounded-lg hover:cursor-pointer">
              <div className="flex items-center justify-center">
                <CircleHelp className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <span className="text-[18px] font-semibold leading-none">Help &amp; Support</span>
            </button>

            <Link href="/"><button type="button" className="flex w-full items-center gap-4 px-3 py-3 text-left text-white/90 transition-colors hover:bg-white/5 rounded-lg hover:cursor-pointer">
              <div className="flex items-center justify-center">
                <LogOut className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <span className="text-[18px] font-semibold leading-none">Log Out</span>
            </button></Link>
          </div>

          <div className="flex items-center gap-4 border-t border-white/10 pt-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2f3f5] text-[22px] font-medium text-[#1a2640]">
              {initials}
            </div>
            <div>
              <p className="text-[19px] font-bold leading-tight text-white">{user.firstName} {user.lastName}</p>
              <p className="text-[14px] font-medium text-white/70">{user.accountType}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

