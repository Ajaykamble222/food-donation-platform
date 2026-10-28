"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FoodDonation } from "@/lib/foodStore";
import {
  MapPinIcon,
  ClockIcon,
  BuildingIcon,
  HeartHandIcon,
  PhoneIcon,
  UtensilsIcon,
  CheckCircleIcon,
} from "./Icons";

interface FoodCardProps {
  food: FoodDonation;
  onClaim?: (food: FoodDonation) => void;
}

export default function FoodCard({ food, onClaim }: FoodCardProps) {
  const [showContact, setShowContact] = useState(false);
  const [imgError, setImgError] = useState(false);

  const isAvailable = food.status === "Available";

  // Category color mapping
  const categoryColors: Record<string, string> = {
    "Cooked Meals": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "Bakery & Bread": "bg-amber-100 text-amber-800 border-amber-200",
    "Fresh Produce": "bg-green-100 text-green-800 border-green-200",
    "Packaged Goods": "bg-blue-100 text-blue-800 border-blue-200",
    "Dairy & Beverages": "bg-teal-100 text-teal-800 border-teal-200",
  };

  const defaultCategoryClass = "bg-stone-100 text-stone-800 border-stone-200";

  return (
    <div className="bg-white rounded-2xl border border-[#e5ded3] overflow-hidden card-shadow card-hover flex flex-col h-full group">
      {/* Card Image & Badges */}
      <div className="relative h-48 w-full bg-[#efe8da] overflow-hidden">
        {!imgError ? (
          <img
            src={food.imageUrl}
            alt={food.foodName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1b4332] to-[#2d6a4f] text-[#d8f3dc]">
            <UtensilsIcon className="w-12 h-12 mb-2 text-[#52b788]" />
            <span className="text-xs font-semibold">{food.category}</span>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border shadow-sm backdrop-blur-md ${
              categoryColors[food.category] || defaultCategoryClass
            }`}
          >
            {food.category}
          </span>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/90 text-[#1b4332] border border-[#e5ded3] shadow-sm">
            {food.dietaryType}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm ${
              isAvailable
                ? "bg-[#2d6a4f] text-white"
                : "bg-amber-600 text-white"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isAvailable ? "bg-[#52b788] animate-pulse" : "bg-amber-200"
              }`}
            />
            {food.status}
          </span>
        </div>

        {/* Quantity Banner Overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-6 flex items-end justify-between text-white">
          <span className="text-xs font-medium text-white/90">Available Quantity:</span>
          <span className="text-sm font-bold bg-[#1b4332]/90 backdrop-blur-sm border border-[#52b788]/40 px-2.5 py-0.5 rounded-lg text-white">
            {food.quantity}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h3 className="font-bold text-lg text-[#1b4332] line-clamp-1 group-hover:text-[#2d6a4f] transition-colors">
            {food.foodName}
          </h3>

          <p className="text-xs text-[#526359] line-clamp-2 leading-relaxed">
            {food.description}
          </p>

          <div className="pt-2 border-t border-[#f1ede4] space-y-2 text-xs text-[#3d4d42]">
            {/* Donor Entity */}
            <div className="flex items-center gap-2">
              <BuildingIcon className="w-4 h-4 text-[#2d6a4f] shrink-0" />
              <span className="font-semibold text-[#1b4332]">{food.donorName}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#f4efe6] text-[#526359]">
                {food.donorType}
              </span>
            </div>

            {/* Location */}
            <div className="flex items-start gap-2 text-[#526359]">
              <MapPinIcon className="w-4 h-4 text-[#2d6a4f] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{food.location}</span>
            </div>

            {/* Pickup Deadline */}
            <div className="flex items-center gap-2 text-[#b45309] font-medium bg-amber-50/80 px-2.5 py-1.5 rounded-lg border border-amber-200/60">
              <ClockIcon className="w-3.5 h-3.5 text-[#d97706] shrink-0" />
              <span className="truncate">Deadline: {food.pickupDeadline}</span>
            </div>

            {/* Prepared Time note */}
            <div className="text-[11px] text-[#718277] italic">
              Prep note: {food.cookedOrPreparedTime}
            </div>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-3 border-t border-[#f1ede4] space-y-2">
          {showContact && (
            <div className="bg-[#f0f7f3] border border-[#d8f3dc] p-2.5 rounded-xl text-xs text-[#1b4332] flex items-center justify-between animate-in fade-in duration-150">
              <span className="flex items-center gap-1.5 font-medium">
                <PhoneIcon className="w-3.5 h-3.5 text-[#2d6a4f]" />
                {food.contactPhone}
              </span>
              <span className="text-[10px] text-[#526359]">Direct Donor Line</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowContact(!showContact)}
              className="flex-1 text-xs font-semibold py-2 px-3 rounded-xl border border-[#d2c9b8] text-[#1b4332] hover:bg-[#f4efe6] transition-colors cursor-pointer"
            >
              {showContact ? "Hide Contact" : "Contact Donor"}
            </button>

            {isAvailable ? (
              <button
                onClick={() => onClaim && onClaim(food)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-xl bg-[#2d6a4f] hover:bg-[#1b4332] text-white shadow-sm transition-all cursor-pointer"
              >
                <HeartHandIcon className="w-3.5 h-3.5 text-[#52b788]" />
                <span>Claim Food</span>
              </button>
            ) : (
              <button
                disabled
                className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-xl bg-gray-100 text-gray-500 border border-gray-200 cursor-not-allowed"
              >
                <CheckCircleIcon className="w-3.5 h-3.5 text-amber-600" />
                <span>Reserved</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
