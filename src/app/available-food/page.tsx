"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { getStoredDonations, FoodDonation, FoodCategory } from "@/lib/foodStore";
import FoodCard from "@/components/FoodCard";
import ClaimModal from "@/components/ClaimModal";
import {
  SearchIcon,
  FilterIcon,
  UtensilsIcon,
  HeartHandIcon,
  RefreshCwIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from "@/components/Icons";

const CATEGORIES: ("All" | FoodCategory)[] = [
  "All",
  "Cooked Meals",
  "Bakery & Bread",
  "Fresh Produce",
  "Packaged Goods",
  "Dairy & Beverages",
];

export default function AvailableFoodPage() {
  const [donations, setDonations] = useState<FoodDonation[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | FoodCategory>("All");
  const [statusFilter, setStatusFilter] = useState<"all" | "available">("all");
  const [selectedFood, setSelectedFood] = useState<FoodDonation | null>(null);
  const [claimModalOpen, setClaimModalOpen] = useState(false);

  const loadData = () => {
    setDonations(getStoredDonations());
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

  // Filtered donations
  const filteredDonations = useMemo(() => {
    return donations.filter((item) => {
      // Category match
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }
      // Status match
      if (statusFilter === "available" && item.status !== "Available") {
        return false;
      }
      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.foodName.toLowerCase().includes(query);
        const matchesLocation = item.location.toLowerCase().includes(query);
        const matchesDonor = item.donorName.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesLocation && !matchesDonor && !matchesDesc) {
          return false;
        }
      }
      return true;
    });
  }, [donations, selectedCategory, statusFilter, searchQuery]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setStatusFilter("all");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#e5ded3] pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d8f3dc] text-[#1b4332] text-xs font-semibold mb-2">
            <SparklesIcon className="w-3.5 h-3.5 text-[#2d6a4f]" size={14} />
            <span>Community Food Inventory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight">
            Available Surplus Food
          </h1>
          <p className="text-sm text-[#526359] mt-1 max-w-2xl">
            Browse current surplus food postings from community kitchens, caterers, bakeries, and markets. Local organizations and groups can reserve listings directly for timely pickup.
          </p>
        </div>

        <Link
          href="/donate"
          className="inline-flex items-center gap-2 bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow transition-all self-start md:self-auto cursor-pointer"
        >
          <HeartHandIcon className="w-4 h-4 text-[#52b788]" size={16} />
          <span>Post Food Donation</span>
        </Link>
      </div>

      {/* Safety Notice Strip */}
      <div className="bg-[#f0f7f3] border border-[#d8f3dc] p-3.5 rounded-xl flex items-center justify-between text-xs text-[#2d6a4f] gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheckIcon className="w-4 h-4 shrink-0" size={16} />
          <span>
            <strong>Demonstration Notice:</strong> Sample food listings are provided for platform preview. All handovers require direct coordination between donors and recipients before the stated deadlines.
          </span>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white p-5 rounded-2xl border border-[#e5ded3] card-shadow space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Search Input */}
          <div className="md:col-span-8 relative">
            <SearchIcon className="w-4 h-4 text-[#718277] absolute left-3.5 top-1/2 -translate-y-1/2" size={16} />
            <input
              type="text"
              placeholder="Search by food name, location, or donor organization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-sm pl-10 pr-4 py-2.5 rounded-xl border border-[#d2c9b8] bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] text-[#1f2d25]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#718277] hover:text-[#1b4332] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Status Select */}
          <div className="md:col-span-4 flex items-center gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as "all" | "available")}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#d2c9b8] bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] text-[#1f2d25]"
            >
              <option value="all">All Statuses (Available & Reserved)</option>
              <option value="available">Available Only</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          <span className="text-xs font-semibold text-[#526359] whitespace-nowrap flex items-center gap-1 mr-1">
            <FilterIcon className="w-3.5 h-3.5 text-[#2d6a4f]" size={14} />
            Category:
          </span>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#1b4332] text-white shadow-sm"
                    : "bg-[#efe8da]/70 text-[#2d4035] hover:bg-[#efe8da]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-[#526359] px-1">
        <span>
          Showing <strong className="text-[#1b4332]">{filteredDonations.length}</strong> food donation listing(s)
          {selectedCategory !== "All" && ` in "${selectedCategory}"`}
          {statusFilter === "available" && ` (Available only)`}
        </span>

        {(searchQuery || selectedCategory !== "All" || statusFilter !== "all") && (
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-1 font-semibold text-[#2d6a4f] hover:underline cursor-pointer"
          >
            <RefreshCwIcon className="w-3 h-3" size={12} />
            Reset all filters
          </button>
        )}
      </div>

      {/* Grid of Food Cards */}
      {filteredDonations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDonations.map((food) => (
            <FoodCard key={food.id} food={food} onClaim={handleClaim} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-[#e5ded3] p-12 text-center max-w-lg mx-auto space-y-4 card-shadow">
          <div className="w-16 h-16 rounded-full bg-[#efe8da] text-[#526359] flex items-center justify-center mx-auto">
            <UtensilsIcon className="w-8 h-8 text-[#2d6a4f]" size={32} />
          </div>
          <h3 className="text-xl font-bold text-[#1b4332]">No Matching Food Items</h3>
          <p className="text-xs sm:text-sm text-[#526359] leading-relaxed">
            No active surplus donations match your filter criteria right now. Try clearing your filters or check back shortly.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={clearFilters}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#efe8da] text-[#1b4332] text-xs font-semibold hover:bg-[#e2d8c3] transition-colors cursor-pointer"
            >
              Clear All Filters
            </button>
            <Link
              href="/donate"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#2d6a4f] text-white text-xs font-semibold hover:bg-[#1b4332] transition-colors cursor-pointer"
            >
              Post a Food Donation
            </Link>
          </div>
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-r from-[#efe8da] to-[#f4ede0] p-6 sm:p-8 rounded-2xl border border-[#e5ded3] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-bold text-lg text-[#1b4332]">
            Do you have surplus food to share today?
          </h3>
          <p className="text-xs sm:text-sm text-[#526359]">
            List edible excess batches from your restaurant, kitchen, or gathering before they go to waste.
          </p>
        </div>
        <Link
          href="/donate"
          className="inline-flex items-center gap-2 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition-all shrink-0 cursor-pointer"
        >
          <HeartHandIcon className="w-4 h-4 text-[#52b788]" size={16} />
          <span>Donate Surplus Food</span>
        </Link>
      </div>

      {/* Claim Modal Instance */}
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
