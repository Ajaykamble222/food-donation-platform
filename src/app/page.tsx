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
                <SparklesIcon className="w-4 h-4 text-[#2d6a4f]" />
                <span>Smart Food Donation & Distribution Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1b4332] tracking-tight leading-[1.15]">
                Turn Surplus Food Into <span className="text-[#2d6a4f] underline decoration-[#52b788]/60 decoration-wavy">Shared Meals</span>.
              </h1>

              <p className="text-base sm:text-lg text-[#526359] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A student-engineered digital platform bridging local canteens, restaurants, and catered events with verified community shelters and NGOs. Reduce edible food waste while supporting those in need.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/donate"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <HeartHandIcon className="w-5 h-5 text-[#52b788]" />
                  <span>Donate Food</span>
                </Link>

                <Link
                  href="/available-food"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#efe8da] text-[#1b4332] font-semibold text-base px-7 py-3.5 rounded-xl border border-[#d2c9b8] shadow-sm hover:shadow transition-all"
                >
                  <UtensilsIcon className="w-5 h-5 text-[#2d6a4f]" />
                  <span>Find Available Food</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#526359]">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#2d6a4f]" />
                  <span>Simulated Local Demo Inventory</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#2d6a4f]" />
                  <span>Instant LocalStorage Sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#2d6a4f]" />
                  <span>Academic CEP Submission</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Graphic / Interactive Card Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-[#e5ded3] overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-[#f1ede4]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#d8f3dc] text-[#1b4332] flex items-center justify-center">
                      <LeafIcon className="w-5 h-5 text-[#2d6a4f]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#1b4332]">Live Donation Feed</h4>
                      <p className="text-[11px] text-[#526359]">Simulated Active Postings</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f0f7f3] text-[#2d6a4f] text-[11px] font-semibold border border-[#d8f3dc]">
                    <span className="w-2 h-2 rounded-full bg-[#52b788] animate-ping"></span>
                    Live Demo
                  </span>
                </div>

                {/* Hero Mini Cards */}
                <div className="space-y-3 py-4">
                  <div className="p-3.5 rounded-2xl bg-[#fcfbf7] border border-[#e5ded3] flex items-center gap-3 hover:bg-[#f4efe6] transition-colors">
                    <img
                      src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=150&q=80"
                      alt="Biryani Meals"
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#2d6a4f] bg-[#d8f3dc] px-2 py-0.5 rounded-md">
                          Cooked Meals
                        </span>
                        <span className="text-[11px] text-amber-700 font-semibold">Today 7:30 PM</span>
                      </div>
                      <h5 className="font-bold text-xs text-[#1b4332] truncate mt-1">
                        Vegetable Biryani Boxes (45 Servings)
                      </h5>
                      <p className="text-[11px] text-[#526359] truncate">Campus Central Canteen</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#fcfbf7] border border-[#e5ded3] flex items-center gap-3 hover:bg-[#f4efe6] transition-colors">
                    <img
                      src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80"
                      alt="Fresh bread"
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                          Bakery
                        </span>
                        <span className="text-[11px] text-amber-700 font-semibold">Today 9:00 PM</span>
                      </div>
                      <h5 className="font-bold text-xs text-[#1b4332] truncate mt-1">
                        Whole Wheat Artisan Bread (28 Loaves)
                      </h5>
                      <p className="text-[11px] text-[#526359] truncate">Daily Crust Bakery</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#f1ede4]">
                  <Link
                    href="/available-food"
                    className="flex items-center justify-between w-full p-2.5 rounded-xl bg-[#2d6a4f]/10 hover:bg-[#2d6a4f]/20 text-[#1b4332] text-xs font-semibold transition-colors"
                  >
                    <span>Explore All Available Listings ({donations.length})</span>
                    <ArrowRightIcon className="w-4 h-4 text-[#2d6a4f]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulated Impact Statistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1b4332] to-[#2d6a4f] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold tracking-wider uppercase text-[#52b788]">
                Demonstration Impact Metrics
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Hypothetical Community Outcomes
              </h2>
              <p className="text-xs sm:text-sm text-[#d8f3dc]">
                Simulated measurable impact achieved when food surplus is diverted from landfills to hunger relief centers.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center border border-white/10">
                <div className="text-3xl sm:text-4xl font-black text-white">1,480+</div>
                <div className="text-xs sm:text-sm font-medium text-[#d8f3dc] mt-1">
                  Surplus Meals Recovered
                </div>
                <div className="text-[10px] text-white/60 mt-1">Simulated Demo Log</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center border border-white/10">
                <div className="text-3xl sm:text-4xl font-black text-white">42</div>
                <div className="text-xs sm:text-sm font-medium text-[#d8f3dc] mt-1">
                  Local Partner Shelters
                </div>
                <div className="text-[10px] text-white/60 mt-1">NGOs & Orphanages</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center border border-white/10">
                <div className="text-3xl sm:text-4xl font-black text-white">940 kg</div>
                <div className="text-xs sm:text-sm font-medium text-[#d8f3dc] mt-1">
                  Landfill Waste Prevented
                </div>
                <div className="text-[10px] text-white/60 mt-1">Methane Emissions Averted</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center border border-white/10">
                <div className="text-3xl sm:text-4xl font-black text-white">&lt; 35 min</div>
                <div className="text-xs sm:text-sm font-medium text-[#d8f3dc] mt-1">
                  Average Claim Response
                </div>
                <div className="text-[10px] text-white/60 mt-1">Hyper-local Dispatch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2d6a4f]">
            Structured Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332]">
            How The Platform Operates
          </h2>
          <p className="text-sm sm:text-base text-[#526359] leading-relaxed">
            Our student CEP prototype replaces slow phone calls and uncoordinated group messages with an intuitive, 4-step surplus redistribution pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5ded3] card-shadow space-y-3 relative">
            <div className="w-12 h-12 rounded-xl bg-[#d8f3dc] text-[#1b4332] font-black text-lg flex items-center justify-center">
              01
            </div>
            <h3 className="font-bold text-base text-[#1b4332]">Donor Posts Surplus</h3>
            <p className="text-xs text-[#526359] leading-relaxed">
              Canteens, banquets, or bakeries submit food category, quantity, preparation time, and safe pickup deadline.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5ded3] card-shadow space-y-3 relative">
            <div className="w-12 h-12 rounded-xl bg-[#d8f3dc] text-[#1b4332] font-black text-lg flex items-center justify-center">
              02
            </div>
            <h3 className="font-bold text-base text-[#1b4332]">Immediate Listing</h3>
            <p className="text-xs text-[#526359] leading-relaxed">
              The listing goes live immediately on the Available Food catalogue with search, location tag, and dietary filters.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5ded3] card-shadow space-y-3 relative">
            <div className="w-12 h-12 rounded-xl bg-[#d8f3dc] text-[#1b4332] font-black text-lg flex items-center justify-center">
              03
            </div>
            <h3 className="font-bold text-base text-[#1b4332]">NGO / Shelter Claims</h3>
            <p className="text-xs text-[#526359] leading-relaxed">
              Verified local charity partners review the quantity and click "Claim Food" to reserve the items and prevent duplicate claims.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5ded3] card-shadow space-y-3 relative">
            <div className="w-12 h-12 rounded-xl bg-[#d8f3dc] text-[#1b4332] font-black text-lg flex items-center justify-center">
              04
            </div>
            <h3 className="font-bold text-base text-[#1b4332]">Coordinated Pickup</h3>
            <p className="text-xs text-[#526359] leading-relaxed">
              Volunteers collect the packaged food within the stipulated safety window and distribute it to targeted community members.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Available Donations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2d6a4f]">
              Active Listings Preview
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332] mt-1">
              Featured Available Food
            </h2>
            <p className="text-xs sm:text-sm text-[#526359] mt-1">
              Fresh surplus items ready for simulated reservation by community groups.
            </p>
          </div>

          <Link
            href="/available-food"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2d6a4f] hover:text-[#1b4332] transition-colors"
          >
            <span>View All ({donations.length}) Listings</span>
            <ArrowRightIcon className="w-4 h-4" />
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
            className="inline-flex items-center gap-2 bg-[#efe8da] hover:bg-[#e2d8c3] text-[#1b4332] font-semibold text-sm px-6 py-3 rounded-xl transition-all"
          >
            <UtensilsIcon className="w-4 h-4 text-[#2d6a4f]" />
            <span>Search & Filter All Available Food Items</span>
          </Link>
        </div>
      </section>

      {/* CEP Problem Statement Highlight Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f4efe6] rounded-3xl p-8 sm:p-10 border border-[#e5ded3] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#1b4332] text-white text-xs font-semibold">
              The Academic Motivation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332]">
              Why Smart Food Distribution Matters
            </h3>
            <p className="text-sm text-[#526359] leading-relaxed">
              According to the UN Food Waste Index, approximately 1 billion metric tons of edible food is discarded annually, while over 700 million individuals face food insecurity. In urban centers, banquet halls and large canteens routinely discard nutritious meals purely due to lack of immediate, hyper-local coordination. This CEP project demonstrates how client-side accessible technology can bridge this gap.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#2d6a4f] hover:underline"
              >
                <span>Read Full Academic Problem Statement & Objectives</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#e5ded3] shadow-sm space-y-3">
            <h4 className="font-bold text-sm text-[#1b4332] flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4 text-[#2d6a4f]" />
              Evaluation Highlights
            </h4>
            <ul className="text-xs text-[#526359] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#2d6a4f] font-bold">✓</span>
                <span>Zero complex external backend dependencies.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2d6a4f] font-bold">✓</span>
                <span>Full Next.js App Router & TypeScript codebase.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2d6a4f] font-bold">✓</span>
                <span>Deterministic demo state saved to localStorage.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2d6a4f] font-bold">✓</span>
                <span>Ready for live student presentation and defense.</span>
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
