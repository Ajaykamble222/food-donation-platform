"use client";

import React, { useState } from "react";
import { FoodDonation, updateDonationStatus, saveRequest } from "@/lib/foodStore";
import { XIcon, CheckCircleIcon, ClockIcon, MapPinIcon, ShieldCheckIcon } from "./Icons";

interface ClaimModalProps {
  food: FoodDonation | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ClaimModal({ food, isOpen, onClose, onSuccess }: ClaimModalProps) {
  const [recipientName, setRecipientName] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen || !food) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipientName.trim() || !phone.trim() || !organization.trim()) {
      setError("Please fill in all required fields (Name, Organization, and Phone Number).");
      return;
    }

    // Update status in store
    updateDonationStatus(food.id, "Reserved");

    // Also record a matching claim request
    saveRequest({
      requesterName: recipientName.trim(),
      organization: organization.trim(),
      requesterType: "Community Partner",
      foodRequirement: `Reserved: ${food.foodName} (${food.quantity})`,
      quantityNeeded: food.quantity,
      location: food.location,
      urgency: pickupTime || "Within deadline window",
      contactPhone: phone.trim(),
      contactEmail: `${recipientName.toLowerCase().replace(/\s+/g, ".")}@example.org`,
      additionalNotes: `Direct reservation from Available Food inventory. Donor: ${food.donorName}`,
    });

    setSubmitted(true);
    onSuccess();
  };

  const handleClose = () => {
    setSubmitted(false);
    setError("");
    setRecipientName("");
    setOrganization("");
    setPhone("");
    setPickupTime("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#fdfbf7] rounded-2xl shadow-2xl border border-[#e5ded3] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#1b4332] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🤝</span>
            <div>
              <h3 className="font-bold text-lg text-white">Reserve Food Listing</h3>
              <p className="text-xs text-[#a3b899]">Community pickup coordination</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-[#e8ded0] hover:text-white p-1 rounded-lg hover:bg-[#2d6a4f] transition-colors cursor-pointer"
          >
            <XIcon className="w-5 h-5" size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#d8f3dc] text-[#1b4332] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircleIcon className="w-8 h-8 text-[#2d6a4f]" size={32} />
              </div>
              <h4 className="text-xl font-bold text-[#1b4332]">Listing Reserved</h4>
              <p className="text-sm text-[#526359] leading-relaxed">
                Item <strong className="text-[#1b4332]">"{food.foodName}"</strong> has been marked as{" "}
                <span className="inline-block px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold text-xs">
                  Reserved
                </span>.
              </p>

              <div className="bg-[#f0f7f3] border border-[#d8f3dc] p-4 rounded-xl text-left text-xs text-[#1f2d25] space-y-1.5">
                <p>
                  <strong>Donor:</strong> {food.donorName} ({food.contactPhone})
                </p>
                <p>
                  <strong>Pickup Location:</strong> {food.location}
                </p>
                <p>
                  <strong>Collection Deadline:</strong> {food.pickupDeadline}
                </p>
                <p>
                  <strong>Reserved by:</strong> {recipientName} ({organization})
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="w-full bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-semibold py-2.5 rounded-xl transition-all shadow cursor-pointer"
                >
                  Return to Available Food
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Item Summary Card */}
              <div className="bg-[#f4efe6] p-3.5 rounded-xl border border-[#e5ded3] text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-[#1b4332]">{food.foodName}</span>
                  <span className="px-2 py-0.5 rounded bg-[#1b4332] text-white text-[11px] font-medium">
                    {food.quantity}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#526359]">
                  <MapPinIcon className="w-3.5 h-3.5 text-[#2d6a4f]" size={14} />
                  <span>{food.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#d97706] font-medium">
                  <ClockIcon className="w-3.5 h-3.5" size={14} />
                  <span>Pickup Deadline: {food.pickupDeadline}</span>
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                  {error}
                </div>
              )}

              {/* Form inputs */}
              <div>
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Representative / Volunteer Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma, Volunteer Lead"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full text-sm px-3.5 py-2 rounded-xl border border-[#d2c9b8] bg-white focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Organization / Shelter / Community Group *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. St. Jude Shelter, Community Meals Team"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full text-sm px-3.5 py-2 rounded-xl border border-[#d2c9b8] bg-white focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-sm px-3.5 py-2 rounded-xl border border-[#d2c9b8] bg-white focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                    Estimated Pickup Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Today by 6:30 PM"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full text-sm px-3.5 py-2 rounded-xl border border-[#d2c9b8] bg-white focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]"
                  />
                </div>
              </div>

              <div className="p-3 bg-[#f0f7f3] border border-[#d8f3dc] rounded-xl flex items-start gap-2 text-xs text-[#2d6a4f]">
                <ShieldCheckIcon className="w-4 h-4 shrink-0 mt-0.5" size={16} />
                <p>
                  <strong>Collection Responsibility:</strong> By reserving this item, you agree to coordinate transport directly with the donor and complete pickup before the stated deadline.
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-xs font-semibold text-[#526359] hover:text-[#1b4332] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-[#2d6a4f] hover:bg-[#1b4332] text-white shadow transition-all cursor-pointer"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
