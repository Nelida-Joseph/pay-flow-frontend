"use client";

import { useMemo } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  DollarSign,
  Banknote,
  ChevronDown,
  Download,
  TriangleAlert,
  TrendingUp,
  Wallet,
  type LucideIcon,
  Handshake,
  FileDown, 
  ChevronRight
} from "lucide-react";
import dashboardData from "../dashboard-data.json";
import ActionButton from "../components/dashboard/ActionButton";
import DonutStats from "../components/dashboard/DonutStats";
import StatCard from "../components/dashboard/StatCard";
import StatusBadge from "../components/dashboard/StatusBadge";
import TrendChart from "../components/dashboard/TrendChart";

const iconMap: Record<string, LucideIcon> = {
  Wallet,
  DollarSign,
  Banknote,
  ReceiptText: TrendingUp,
  PiggyBank: Wallet,
  TriangleAlert,
  Download,
  ArrowRight,
  Handshake,
  FileDown
};

export default function Overview() {
  const stats = useMemo(
    () =>
      dashboardData.stats.map((item) => ({
        ...item,
        icon: iconMap[item.icon] ?? Wallet,
        changeType: (item.changeType === "positive" ? "positive" : "warning") as
          | "positive"
          | "warning",
        tone: (item.tone === "blue" ||
        item.tone === "teal" ||
        item.tone === "green" ||
        item.tone === "amber"
          ? item.tone
          : "blue") as "blue" | "teal" | "green" | "amber",
      })),
    [],
  );

  const actions = dashboardData.quickActions.map((action) => ({
    ...action,
    icon: iconMap[action.icon] ?? ArrowRight,
  }));

  return (
    <main className="flex h-full w-full max-w-full flex-1 flex-col space-y-5 overflow-y-scroll p-3 md:p-5">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <div>
          <h1 className="text-[28px] font-bold text-[#1d2a39] lg:text-[40px]">
            {dashboardData.welcome.greeting}
          </h1>
          <p className="text-[15px] text-[#5d6d82]">
            {dashboardData.welcome.subtitle}
          </p>
        </div>

        <button
          type="button"
          className=" flex items-center gap-1 rounded border border-[#dfe7ef] bg-white px-2 py-1 text-[15px] font-medium text-[#1d2a39] shadow-sm "
        >
          <span>Last 30 days</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Top Stats Section */}
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </section>

      {/* Middle Charts & Actions Section */}
      {/* FIXED: Added min-w-0 and adjusted grid columns to prevent chart blowout */}
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-12 min-w-0">
        {/* Chart takes 7 columns on large screens */}
        <div className="xl:col-span-5 min-w-0">
          <TrendChart
            labels={dashboardData.chart.periods}
            values={dashboardData.chart.values}
          />
        </div>

        {/* Payment Status & Quick Actions take 5 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:col-span-7 gap-5 min-w-0">
          <div className="flex flex-col justify-between rounded-lg border border-[#dfe7ef] bg-white p-4 shadow-sm min-w-0">
            <h2 className="text-[18px] font-bold text-[#1d2a39] mb-2">
              Payment Status
            </h2>
            <div className="w-full flex-1 items-center justify-center flex min-h-[220px]">
              <DonutStats {...dashboardData.paymentStatus} />
            </div>
          </div>

          <div className="space-y-3 rounded-lg border border-[#dfe7ef] bg-white p-4 shadow-sm min-w-0">
            <h2 className="text-[18px] font-bold text-[#1d2a39]">Quick Actions</h2>
            {actions.map((action) => (
              <ActionButton
                key={action.label}
                label={action.label}
                icon={action.icon}
                variant={
                  action.label.includes("Transactions") ? "primary" : "secondary"
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Transactions Table */}
      <section className="mb-20 rounded-lg border border-[#dfe7ef] bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[22px] font-bold text-[#1d2a39]">
            Recent Transactions
          </h2>
          <button
            type="button"
            className="flex items-center gap-2 text-[15px] font-semibold text-[#1d2a39]"
          >
            <span>View all</span>
            <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
          </button>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#dfe7ef]">
          <div className="min-w-[760px] bg-white text-[14px] text-[#27364b]">
            <div className="grid grid-cols-[1.2fr_1.3fr_1.2fr_0.9fr_0.9fr_1.2fr_0.5fr] bg-[#edf2f7] px-4 py-3 text-[13px] font-semibold text-[#4d5d75]">
              <span>Transaction ID</span>
              <span>Customer</span>
              <span>Payment Method</span>
              <span>Amount</span>
              <span>Status</span>
              <span>Date &amp; Time</span>
              <span className="text-right"> </span>
            </div>

            <div className="max-h-[320px] overflow-y-auto">
              {dashboardData.transactions.map((transaction) => {
                const tone =
                  transaction.status === "Successful"
                    ? "success"
                    : transaction.status === "Pending"
                      ? "warning"
                      : "danger";

                return (
                  <div
                    key={transaction.id}
                    className="grid grid-cols-[1.2fr_1.3fr_1.2fr_0.9fr_0.9fr_1.2fr_0.5fr] items-center border-t border-[#edf2f7] px-4 py-4"
                  >
                    <span className="font-medium">{transaction.id}</span>
                    <span>{transaction.customer}</span>
                    <span>{transaction.method}</span>
                    <span className="font-semibold">{transaction.amount}</span>
                    <span>
                      <StatusBadge label={transaction.status} tone={tone} />
                    </span>
                    <span>{transaction.dateTime}</span>
                    <span className="flex justify-end">
                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-full text-[#1d2a39]"
                      >
                        <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
                      </button>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}