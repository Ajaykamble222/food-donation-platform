"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getStoredDonations, FoodDonation } from "@/lib/foodStore";
import FoodCard from "@/components/FoodCard";
import ClaimModal from "@/components/ClaimModal";
import {
  HeartHandIcon,
  LeafIcon,
  UtensilsIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  SparklesIcon,
  ClockIcon,
  MapPinIcon,
  BuildingIcon,
  BoxIcon,
} from "@/components/Icons";

export default function HomePage() {
  const [donations, setDonations] = useState<FoodDonation[]>([]);
  const [selectedFood, setSelectedFood] = useState<FoodDonation | null>(null);
  const [claimModalOpen, setClaimModalOpen] = useState(false);

  const loadData = () => {
    const list = getStoredDonations();
    setDonations(list);
  };

  useEffect(() => {
    loadData();
    const handleUpdate = () => loadData();
    window.addEventListener("food-donations-updated", handleUpdate);
    return () => window.removeEventListener("food-donations-updated", handleUpdate);
  }, []);

  const handleClaim = (food: FoodDonation) => {
    setSelectedFood(food);
    setClaimModalOpen(true);
  };

  const featuredDonations = donations.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#efe8da]/60 via-[#fcfbf7] to-[#fcfbf7] pt-12 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#e5ded3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8f3dc] text-[#1b4332] text-xs font-semibold border border-[#52b788]/40 shadow-sm">
                <SparklesIcon className="w-4 h-4 text-[#2d6a4f]" size={16} />
                <span>Community Surplus Food Redistribution</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1b4332] tracking-tight leading-[1.15]">
                Share Good Food. <br className="hidden sm:inline" />
                <span className="text-[#2d6a4f] underline decoration-[#52b788]/60 decoration-wavy">
                  Reduce Food Waste.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#526359] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Connect surplus food from homes, restaurants, bakeries, and community kitchens with people and organizations that can use it.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/donate"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <HeartHandIcon className="w-5 h-5 text-[#52b788]" size={20} />
                  <span>Donate Food</span>
                </Link>

                <Link
                  href="/available-food"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#efe8da] text-[#1b4332] font-semibold text-base px-7 py-3.5 rounded-xl border border-[#d2c9b8] shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  <UtensilsIcon className="w-5 h-5 text-[#2d6a4f]" size={20} />
                  <span>Find Available Food</span>
                </Link>
              </div>

              {/* Trust & Policy Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#526359]">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#2d6a4f]" size={16} />
                  <span>Direct Local Coordination</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#2d6a4f]" size={16} />
                  <span>Clear Pickup Deadlines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#2d6a4f]" size={16} />
                  <span>Zero Platform Fees</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Food Preview Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-[#e5ded3] overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-[#f1ede4]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#d8f3dc] text-[#1b4332] flex items-center justify-center">
                      <LeafIcon className="w-5 h-5 text-[#2d6a4f]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#1b4332]">Recent Food Postings</h4>
                      <p className="text-[11px] text-[#526359]">Sample surplus listings</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f0f7f3] text-[#2d6a4f] text-[11px] font-semibold border border-[#d8f3dc]">
                    <span className="w-2 h-2 rounded-full bg-[#52b788]"></span>
                    Demo Feed
                  </span>
                </div>

                {/* Hero Mini Cards */}
                <div className="space-y-3 py-4">
                  <div className="p-3.5 rounded-2xl bg-[#fcfbf7] border border-[#e5ded3] flex items-center gap-3 hover:bg-[#f4efe6] transition-colors">
                    <img
                      src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=150&q=80"
                      alt="Vegetable Pulao"
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#2d6a4f] bg-[#d8f3dc] px-2 py-0.5 rounded-md">
                          Cooked Meals
                        </span>
                        <span className="text-[11px] text-amber-700 font-semibold">Today 8:00 PM</span>
                      </div>
                      <h5 className="font-bold text-xs text-[#1b4332] truncate mt-1">
                        Freshly Prepared Vegetable Pulao
                      </h5>
                      <p className="text-[11px] text-[#526359] truncate">35 Packed Containers • Sunrise Kitchen</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#fcfbf7] border border-[#e5ded3] flex items-center gap-3 hover:bg-[#f4efe6] transition-colors">
                    <img
                      src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80"
                      alt="Bakery Rolls"
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                          Bakery
                        </span>
                        <span className="text-[11px] text-amber-700 font-semibold">Today 9:30 PM</span>
                      </div>
                      <h5 className="font-bold text-xs text-[#1b4332] truncate mt-1">
                        Unused Bread Loaves & Rolls
                      </h5>
                      <p className="text-[11px] text-[#526359] truncate">25 Loaves & 50 Rolls • Daily Crust</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#f1ede4]">
                  <Link
                    href="/available-food"
                    className="flex items-center justify-between w-full p-2.5 rounded-xl bg-[#2d6a4f]/10 hover:bg-[#2d6a4f]/20 text-[#1b4332] text-xs font-semibold transition-colors"
                  >
                    <span>Browse All Active Listings ({donations.length})</span>
                    <ArrowRightIcon className="w-4 h-4 text-[#2d6a4f]" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pillars (Real-World Features Instead of Invented Stats) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1b4332] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <span className="text-xs font-bold tracking-wider uppercase text-[#52b788]">
                How Surplus Redistribution Works
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Simple, Responsible Community Food Sharing
              </h2>
              <p className="text-xs sm:text-sm text-[#d8f3dc]">
                A practical pipeline connecting surplus providers directly with verified local organizations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#2d6a4f] flex items-center justify-center text-[#52b788]">
                  <UtensilsIcon className="w-5 h-5" size={20} />
                </div>
                <h3 className="font-bold text-sm text-white">Cooked & Fresh Food</h3>
                <p className="text-xs text-[#d8f3dc] leading-relaxed">
                  Surplus batch meals, fresh bread, produce crates, and sealed dairy products accepted within safe consumption windows.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#2d6a4f] flex items-center justify-center text-[#52b788]">
                  <ClockIcon className="w-5 h-5" size={20} />
                </div>
                <h3 className="font-bold text-sm text-white">Strict Pickup Windows</h3>
                <p className="text-xs text-[#d8f3dc] leading-relaxed">
                  Every listing includes preparation time and a pickup deadline so recipients collect food while fresh.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#2d6a4f] flex items-center justify-center text-[#52b788]">
                  <BuildingIcon className="w-5 h-5" size={20} />
                </div>
                <h3 className="font-bold text-sm text-white">Direct Handover</h3>
                <p className="text-xs text-[#d8f3dc] leading-relaxed">
                  Community shelters and kitchens claim items online and pick them up directly from the donor location.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#2d6a4f] flex items-center justify-center text-[#52b788]">
                  <ShieldCheckIcon className="w-5 h-5" size={20} />
                </div>
                <h3 className="font-bold text-sm text-white">Food Safety First</h3>
                <p className="text-xs text-[#d8f3dc] leading-relaxed">
                  Clear guidelines on hygienic packing, temperature maintenance, and immediate disposal of questionable items.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2d6a4f]">
            Step-By-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332]">
            How The Platform Works
          </h2>
          <p className="text-sm sm:text-base text-[#526359] leading-relaxed">
            From kitchen surplus to community meals in four straightforward steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5ded3] card-shadow space-y-3 relative">
            <div className="w-12 h-12 rounded-xl bg-[#d8f3dc] text-[#1b4332] font-black text-lg flex items-center justify-center">
              01
            </div>
            <h3 className="font-bold text-base text-[#1b4332]">List Surplus Food</h3>
            <p className="text-xs text-[#526359] leading-relaxed">
              Donors specify food category, estimated quantity, preparation timestamp, packaging condition, and the pickup deadline.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5ded3] card-shadow space-y-3 relative">
            <div className="w-12 h-12 rounded-xl bg-[#d8f3dc] text-[#1b4332] font-black text-lg flex items-center justify-center">
              02
            </div>
            <h3 className="font-bold text-base text-[#1b4332]">Browse & Discover</h3>
            <p className="text-xs text-[#526359] leading-relaxed">
              Community shelters, orphanages, and food kitchens review available listings filtered by category and locality.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5ded3] card-shadow space-y-3 relative">
            <div className="w-12 h-12 rounded-xl bg-[#d8f3dc] text-[#1b4332] font-black text-lg flex items-center justify-center">
              03
            </div>
            <h3 className="font-bold text-base text-[#1b4332]">Reserve the Listing</h3>
            <p className="text-xs text-[#526359] leading-relaxed">
              The claiming organization enters their coordinator contact details, marking the food as "Reserved" to prevent duplication.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5ded3] card-shadow space-y-3 relative">
            <div className="w-12 h-12 rounded-xl bg-[#d8f3dc] text-[#1b4332] font-black text-lg flex items-center justify-center">
              04
            </div>
            <h3 className="font-bold text-base text-[#1b4332]">Pick Up & Distribute</h3>
            <p className="text-xs text-[#526359] leading-relaxed">
              The recipient collects the food before the deadline and serves it safely to community members in need.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Available Donations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2d6a4f]">
              Community Inventory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332] mt-1">
              Available Food Listings
            </h2>
            <p className="text-xs sm:text-sm text-[#526359] mt-1">
              Sample food surplus entries ready for local community reservation.
            </p>
          </div>

          <Link
            href="/available-food"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2d6a4f] hover:text-[#1b4332] transition-colors cursor-pointer"
          >
            <span>View All ({donations.length}) Listings</span>
            <ArrowRightIcon className="w-4 h-4" size={16} />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDonations.map((food) => (
            <FoodCard key={food.id} food={food} onClaim={handleClaim} />
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/available-food"
            className="inline-flex items-center gap-2 bg-[#efe8da] hover:bg-[#e2d8c3] text-[#1b4332] font-semibold text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
          >
            <UtensilsIcon className="w-4 h-4 text-[#2d6a4f]" size={16} />
            <span>Search & Filter All Available Food Listings</span>
          </Link>
        </div>
      </section>

      {/* Food Safety & Responsible Redistribution Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f4efe6] rounded-3xl p-8 sm:p-10 border border-[#e5ded3] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#1b4332] text-white text-xs font-semibold">
              Food Safety Standards
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332]">
              Safety and Quality Responsibilities
            </h3>
            <p className="text-sm text-[#526359] leading-relaxed">
              Ensuring that shared food remains safe and wholesome is the core priority of our platform. Donors are asked to offer only food they would confidently serve to their own families. Cooked dishes must be packed hot in food-grade containers or chilled rapidly, and all items must be retrieved within the agreed timeframe.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#2d6a4f] hover:underline cursor-pointer"
              >
                <span>Read Full Safety & Distribution Guidelines</span>
                <ArrowRightIcon className="w-3.5 h-3.5" size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#e5ded3] shadow-sm space-y-3">
            <h4 className="font-bold text-sm text-[#1b4332] flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4 text-[#2d6a4f]" size={16} />
              Donation Checklist
            </h4>
            <ul className="text-xs text-[#526359] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#2d6a4f] font-bold">✓</span>
                <span>Fresh, untouched, and properly prepared food only.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2d6a4f] font-bold">✓</span>
                <span>State accurate preparation time & storage requirements.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2d6a4f] font-bold">✓</span>
                <span>Food-grade, clean packaging containers used.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2d6a4f] font-bold">✓</span>
                <span>Strict pickup deadline clearly communicated.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Claim Modal instance */}
      <ClaimModal
        food={selectedFood}
        isOpen={claimModalOpen}
        onClose={() => setClaimModalOpen(false)}
        onSuccess={() => {
          loadData();
        }}
      />
    </div>
  );
}
