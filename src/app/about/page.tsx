import React from "react";
import Link from "next/link";
import {
  LeafIcon,
  HeartHandIcon,
  ShieldCheckIcon,
  UtensilsIcon,
  CheckCircleIcon,
  BuildingIcon,
  SparklesIcon,
  ArrowRightIcon,
  AlertCircleIcon,
} from "@/components/Icons";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Title & Introduction */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d8f3dc] text-[#1b4332] text-xs font-semibold">
          <LeafIcon className="w-4 h-4 text-[#2d6a4f]" size={16} />
          <span>Our Mission & Vision</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#1b4332] tracking-tight">
          About SmartFoodShare
        </h1>
        <p className="text-base text-[#526359] leading-relaxed">
          A dedicated food redistribution platform connecting edible food surplus from commercial kitchens, bakeries, and homes with community shelters and hunger-relief organizations.
        </p>
      </div>

      {/* Overview Highlights Banner */}
      <div className="bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="border-b sm:border-b-0 sm:border-r border-white/20 pb-4 sm:pb-0 sm:pr-4">
            <span className="text-xs text-[#a3b899] uppercase tracking-wider block">Core Purpose</span>
            <span className="font-bold text-base text-white mt-1 block">Surplus Redistribution</span>
            <span className="text-xs text-[#d8f3dc]">Direct Local Routing</span>
          </div>

          <div className="border-b sm:border-b-0 lg:border-r border-white/20 pb-4 sm:pb-0 lg:pr-4">
            <span className="text-xs text-[#a3b899] uppercase tracking-wider block">Accepted Food</span>
            <span className="font-bold text-base text-white mt-1 block">Cooked, Fresh & Packaged</span>
            <span className="text-xs text-[#d8f3dc]">Safe Edible Batches</span>
          </div>

          <div className="border-b sm:border-b-0 sm:border-r border-white/20 pb-4 sm:pb-0 sm:pr-4">
            <span className="text-xs text-[#a3b899] uppercase tracking-wider block">Coordination</span>
            <span className="font-bold text-base text-white mt-1 block">Direct Donor-To-Recipient</span>
            <span className="text-xs text-[#d8f3dc]">Zero Intermediary Delays</span>
          </div>

          <div>
            <span className="text-xs text-[#a3b899] uppercase tracking-wider block">Global Goals</span>
            <span className="font-bold text-base text-white mt-1 block">UN SDGs #2 & #12</span>
            <span className="text-xs text-[#d8f3dc]">Zero Hunger & Less Waste</span>
          </div>
        </div>
      </div>

      {/* Section 1: The Food Waste Challenge */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e5ded3] card-shadow space-y-6">
        <div className="flex items-center gap-2.5 pb-3 border-b border-[#f1ede4]">
          <div className="w-9 h-9 rounded-xl bg-[#d8f3dc] text-[#1b4332] flex items-center justify-center font-bold">
            01
          </div>
          <h2 className="text-2xl font-bold text-[#1b4332]">The Food Waste Challenge</h2>
        </div>

        <div className="space-y-4 text-sm text-[#526359] leading-relaxed">
          <p>
            Every day, massive volumes of wholesome, freshly prepared food are produced and never consumed. Commercial eateries, banquet halls, community kitchens, bakeries, and catered events routinely discard edible surplus meals purely because they lack a quick, localized channel to find recipients before freshness expires.
          </p>

          <p>
            When edible food ends up in municipal landfills, it decomposes anaerobically and produces significant volumes of <strong>methane ($CH_4$)</strong>, a potent greenhouse gas that drives climate change. At the same time, community shelters and families in our immediate neighborhoods experience urgent food deficits.
          </p>

          <div className="bg-[#fcfbf7] p-5 rounded-2xl border border-[#e5ded3] space-y-3">
            <h3 className="font-bold text-sm text-[#1b4332]">
              Why Timely Redistribution Matters:
            </h3>
            <ul className="space-y-2 text-xs text-[#3d4d42]">
              <li className="flex items-start gap-2">
                <span className="text-[#2d6a4f] font-bold mt-0.5">•</span>
                <span>
                  <strong>Time-Sensitive Value:</strong> Prepared meals have an optimal consumption window of 3 to 6 hours. Swift digital communication ensures food is claimed while at peak safety.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2d6a4f] font-bold mt-0.5">•</span>
                <span>
                  <strong>Environmental Protection:</strong> Diverting organic waste directly conserves the agricultural water, energy, and labor invested into food production.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2d6a4f] font-bold mt-0.5">•</span>
                <span>
                  <strong>Community Relief:</strong> Nourishing meals ease operational strain on grassroots orphanages, shelters, and feeding initiatives without added purchasing expense.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: How Redistribution Works */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e5ded3] card-shadow space-y-6">
        <div className="flex items-center gap-2.5 pb-3 border-b border-[#f1ede4]">
          <div className="w-9 h-9 rounded-xl bg-[#d8f3dc] text-[#1b4332] flex items-center justify-center font-bold">
            02
          </div>
          <h2 className="text-2xl font-bold text-[#1b4332]">How The Redistribution Pipeline Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-[#f0f7f3] border border-[#d8f3dc] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#1b4332]">
              <CheckCircleIcon className="w-5 h-5 text-[#2d6a4f]" size={20} />
              <span>1. Quick Surplus Listing</span>
            </div>
            <p className="text-[#526359] text-xs leading-relaxed">
              Donors post surplus details within two minutes—stating the item name, category, quantity, preparation timestamp, packaging, and strict pickup deadline.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f0f7f3] border border-[#d8f3dc] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#1b4332]">
              <CheckCircleIcon className="w-5 h-5 text-[#2d6a4f]" size={20} />
              <span>2. Instant Directory Discovery</span>
            </div>
            <p className="text-[#526359] text-xs leading-relaxed">
              Items immediately appear in the searchable public inventory with category tags, dietary labels, and clear expiration indicators.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f0f7f3] border border-[#d8f3dc] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#1b4332]">
              <CheckCircleIcon className="w-5 h-5 text-[#2d6a4f]" size={20} />
              <span>3. Single-Click Reservation</span>
            </div>
            <p className="text-[#526359] text-xs leading-relaxed">
              Shelters or volunteers reserve an item to prevent duplicate claims, instantly gaining contact access to coordinate collection logistics.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f0f7f3] border border-[#d8f3dc] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#1b4332]">
              <CheckCircleIcon className="w-5 h-5 text-[#2d6a4f]" size={20} />
              <span>4. Direct Timely Pickup</span>
            </div>
            <p className="text-[#526359] text-xs leading-relaxed">
              The claiming group collects the food directly from the donor location and serves it promptly within safe consumption limits.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Food Safety & Donor Responsibilities */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e5ded3] card-shadow space-y-6">
        <div className="flex items-center gap-2.5 pb-3 border-b border-[#f1ede4]">
          <div className="w-9 h-9 rounded-xl bg-[#d8f3dc] text-[#1b4332] flex items-center justify-center font-bold">
            03
          </div>
          <h2 className="text-2xl font-bold text-[#1b4332]">Food Safety & Handling Standards</h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#526359] leading-relaxed">
          <p>
            Food safety is paramount. All donors and claiming partners must strictly adhere to responsible hygiene and handling practices:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#fcfbf7] border border-[#e5ded3] space-y-2">
              <span className="font-bold text-[#1b4332] text-xs block">1. Only Safe, Edible Food</span>
              <p className="text-xs text-[#526359]">
                Donate only food that was prepared in clean environments, has not been contaminated or served to diners, and is fit for human consumption.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#fcfbf7] border border-[#e5ded3] space-y-2">
              <span className="font-bold text-[#1b4332] text-xs block">2. Packaging & Storage</span>
              <p className="text-xs text-[#526359]">
                Pack dishes in clean, food-grade containers. Maintain hot food above 60°C or chill rapidly below 5°C. Disclose storage conditions clearly.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#fcfbf7] border border-[#e5ded3] space-y-2">
              <span className="font-bold text-[#1b4332] text-xs block">3. Strict Pickup Deadlines</span>
              <p className="text-xs text-[#526359]">
                Food must be collected before the donor’s stated deadline. Donors should discard any food that passes safe holding limits.
              </p>
            </div>
          </div>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-amber-900 text-xs">
            <AlertCircleIcon className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" size={20} />
            <div className="space-y-1">
              <strong className="block text-sm font-semibold text-amber-950">
                Warning on Prohibited Items & Platform Disclaimer:
              </strong>
              <p className="leading-relaxed">
                Never offer spoiled, expired, moldy, sour, or improperly chilled items. The platform acts solely as a communication conduit to facilitate direct surplus coordination. We do not inspect, test, prepare, or transport food. Recipients must independently inspect all items upon collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <div className="bg-[#efe8da] rounded-3xl p-8 text-center space-y-4 border border-[#e5ded3]">
        <h3 className="font-extrabold text-2xl text-[#1b4332]">
          Get Involved in Surplus Food Sharing
        </h3>
        <p className="text-sm text-[#526359] max-w-lg mx-auto">
          Whether you have surplus batches to donate or represent an organization in need of meals, join our local network.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/available-food"
            className="inline-flex items-center gap-2 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition-all cursor-pointer"
          >
            <UtensilsIcon className="w-4 h-4 text-[#52b788]" size={16} />
            <span>Browse Available Food</span>
          </Link>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#fcfbf7] text-[#1b4332] font-semibold text-sm px-6 py-3 rounded-xl border border-[#d2c9b8] transition-all cursor-pointer"
          >
            <HeartHandIcon className="w-4 h-4 text-[#2d6a4f]" size={16} />
            <span>Donate Food</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
