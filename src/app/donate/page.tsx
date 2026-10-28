"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  saveDonation,
  FoodCategory,
  DonorType,
  DietaryType,
  FoodDonation,
} from "@/lib/foodStore";
import {
  HeartHandIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  UtensilsIcon,
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  BuildingIcon,
} from "@/components/Icons";

const DEFAULT_IMAGE_OPTIONS = [
  {
    label: "Cooked Rice / Biryani Meals",
    url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80",
  },
  {
    label: "Fresh Bakery Loaves & Bread",
    url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80",
  },
  {
    label: "Fresh Seasonal Fruits / Vegetables",
    url: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=700&q=80",
  },
  {
    label: "Curry / Gravy with Rotis",
    url: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
  },
  {
    label: "Packaged Dry Groceries / Rations",
    url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80",
  },
  {
    label: "Dairy Cartons / Yogurt",
    url: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80",
  },
];

export default function DonateFoodPage() {
  const [foodName, setFoodName] = useState("");
  const [category, setCategory] = useState<FoodCategory>("Cooked Meals");
  const [quantity, setQuantity] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorType, setDonorType] = useState<DonorType>("College Canteen");
  const [dietaryType, setDietaryType] = useState<DietaryType>("Vegetarian");
  const [location, setLocation] = useState("");
  const [pickupDeadline, setPickupDeadline] = useState("");
  const [cookedOrPreparedTime, setCookedOrPreparedTime] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(DEFAULT_IMAGE_OPTIONS[0].url);

  const [submittedDonation, setSubmittedDonation] = useState<FoodDonation | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!foodName.trim()) errs.foodName = "Food item title is required.";
    if (!quantity.trim()) errs.quantity = "Please specify quantity (e.g., 30 meal boxes).";
    if (!donorName.trim()) errs.donorName = "Donor or organization name is required.";
    if (!location.trim()) errs.location = "Pickup address / location is required.";
    if (!pickupDeadline.trim()) errs.pickupDeadline = "Pickup deadline time is required.";
    if (!contactPhone.trim()) {
      errs.contactPhone = "Contact phone number is required.";
    } else if (contactPhone.replace(/\D/g, "").length < 7) {
      errs.contactPhone = "Please enter a valid phone number (at least 7 digits).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newDonation = saveDonation({
      foodName: foodName.trim(),
      category,
      quantity: quantity.trim(),
      donorName: donorName.trim(),
      donorType,
      location: location.trim(),
      city: "Metro City",
      pickupDeadline: pickupDeadline.trim(),
      cookedOrPreparedTime: cookedOrPreparedTime.trim() || "Prepared today",
      dietaryType,
      contactPhone: contactPhone.trim(),
      imageUrl: imageUrl.trim() || DEFAULT_IMAGE_OPTIONS[0].url,
      description:
        description.trim() ||
        `Surplus ${dietaryType.toLowerCase()} food listed by ${donorName.trim()} ready for safe distribution.`,
    });

    setSubmittedDonation(newDonation);
  };

  const handleResetForm = () => {
    setFoodName("");
    setQuantity("");
    setDonorName("");
    setLocation("");
    setPickupDeadline("");
    setCookedOrPreparedTime("");
    setContactPhone("");
    setDescription("");
    setSubmittedDonation(null);
    setErrors({});
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d8f3dc] text-[#1b4332] text-xs font-semibold">
          <HeartHandIcon className="w-4 h-4 text-[#2d6a4f]" />
          <span>Surplus Food Contribution</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight">
          Donate Surplus Food
        </h1>
        <p className="text-sm text-[#526359] leading-relaxed">
          Post surplus edible food from hostels, restaurants, canteens, or gatherings. Your listing will immediately appear in the local catalogue for shelter claims.
        </p>
      </div>

      {submittedDonation ? (
        /* Success Screen */
        <div className="bg-white rounded-3xl border border-[#e5ded3] p-8 sm:p-12 card-shadow text-center space-y-6 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-[#d8f3dc] text-[#1b4332] flex items-center justify-center mx-auto shadow-inner">
            <CheckCircleIcon className="w-10 h-10 text-[#2d6a4f]" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332]">
              Food Donation Successfully Listed!
            </h2>
            <p className="text-sm text-[#526359] max-w-lg mx-auto">
              Your donation entry has been added to the client-side database. It is now visible to all community partners on the Available Food page.
            </p>
          </div>

          {/* Submission Details Card */}
          <div className="bg-[#fcfbf7] border border-[#e5ded3] rounded-2xl p-6 text-left max-w-lg mx-auto space-y-3 text-xs sm:text-sm text-[#1f2d25]">
            <div className="flex items-center justify-between pb-3 border-b border-[#e5ded3]">
              <span className="font-bold text-[#1b4332] text-base">{submittedDonation.foodName}</span>
              <span className="px-2.5 py-1 rounded-full bg-[#d8f3dc] text-[#1b4332] font-semibold text-xs">
                {submittedDonation.quantity}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[#526359] block">Category:</span>
                <span className="font-semibold text-[#1b4332]">{submittedDonation.category}</span>
              </div>
              <div>
                <span className="text-[#526359] block">Dietary Type:</span>
                <span className="font-semibold text-[#1b4332]">{submittedDonation.dietaryType}</span>
              </div>
              <div>
                <span className="text-[#526359] block">Donor Organization:</span>
                <span className="font-semibold text-[#1b4332]">{submittedDonation.donorName}</span>
              </div>
              <div>
                <span className="text-[#526359] block">Contact Number:</span>
                <span className="font-semibold text-[#1b4332]">{submittedDonation.contactPhone}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#e5ded3] text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-[#526359]">
                <MapPinIcon className="w-3.5 h-3.5 text-[#2d6a4f]" />
                <span>Pickup: {submittedDonation.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-700 font-medium">
                <ClockIcon className="w-3.5 h-3.5 text-amber-600" />
                <span>Deadline: {submittedDonation.pickupDeadline}</span>
              </div>
            </div>
          </div>

          {/* Academic notice */}
          <div className="p-4 bg-[#f0f7f3] border border-[#d8f3dc] rounded-2xl max-w-lg mx-auto text-xs text-[#2d6a4f] flex items-start gap-2.5 text-left">
            <ShieldCheckIcon className="w-5 h-5 shrink-0 mt-0.5" />
            <p>
              <strong>Academic CEP Note:</strong> The entry is persisted in browser localStorage. During your presentation, you can navigate straight to Available Food to see it rendered instantly.
            </p>
          </div>

          {/* Navigation CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/available-food"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition-all cursor-pointer"
            >
              <UtensilsIcon className="w-4 h-4 text-[#52b788]" />
              <span>View in Available Food Catalogue</span>
            </Link>

            <button
              onClick={handleResetForm}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-[#d2c9b8] bg-[#efe8da] hover:bg-[#e2d8c3] text-[#1b4332] font-semibold text-sm transition-colors cursor-pointer"
            >
              Post Another Donation
            </button>
          </div>
        </div>
      ) : (
        /* The Donation Form */
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl border border-[#e5ded3] p-6 sm:p-10 card-shadow space-y-8"
        >
          {/* Section 1: Food Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#f1ede4]">
              <UtensilsIcon className="w-5 h-5 text-[#2d6a4f]" />
              <h2 className="font-bold text-lg text-[#1b4332]">1. Food Item Details</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Food Item Name / Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Fresh Vegetable Biryani & Raita, Sourdough Loaves"
                  value={foodName}
                  onChange={(e) => setFoodName(e.target.value)}
                  className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] ${
                    errors.foodName ? "border-red-400 bg-red-50/30" : "border-[#d2c9b8]"
                  }`}
                />
                {errors.foodName && (
                  <p className="text-red-600 text-xs mt-1">{errors.foodName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Food Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as FoodCategory)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#d2c9b8] bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]"
                >
                  <option value="Cooked Meals">Cooked Meals</option>
                  <option value="Bakery & Bread">Bakery & Bread</option>
                  <option value="Fresh Produce">Fresh Produce</option>
                  <option value="Packaged Goods">Packaged Goods</option>
                  <option value="Dairy & Beverages">Dairy & Beverages</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Dietary Classification *
                </label>
                <select
                  value={dietaryType}
                  onChange={(e) => setDietaryType(e.target.value as DietaryType)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#d2c9b8] bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]"
                >
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                  <option value="Jain Friendly">Jain Friendly</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Estimated Quantity *
                </label>
                <input
                  type="text"
                  placeholder="e.g. 35 Packed Meal Boxes, 15 kg Fresh Fruit, 40 Baguettes"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] ${
                    errors.quantity ? "border-red-400 bg-red-50/30" : "border-[#d2c9b8]"
                  }`}
                />
                {errors.quantity && (
                  <p className="text-red-600 text-xs mt-1">{errors.quantity}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Cooked / Prepared Time
                </label>
                <input
                  type="text"
                  placeholder="e.g. Today at 1:30 PM"
                  value={cookedOrPreparedTime}
                  onChange={(e) => setCookedOrPreparedTime(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#d2c9b8] bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Pickup Deadline Window *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Today by 8:30 PM"
                  value={pickupDeadline}
                  onChange={(e) => setPickupDeadline(e.target.value)}
                  className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] ${
                    errors.pickupDeadline ? "border-red-400 bg-red-50/30" : "border-[#d2c9b8]"
                  }`}
                />
                {errors.pickupDeadline && (
                  <p className="text-red-600 text-xs mt-1">{errors.pickupDeadline}</p>
                )}
              </div>

              {/* Photo Selector */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Food Image Preview
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-2">
                  {DEFAULT_IMAGE_OPTIONS.map((opt) => (
                    <button
                      key={opt.url}
                      type="button"
                      onClick={() => setImageUrl(opt.url)}
                      className={`p-2 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                        imageUrl === opt.url
                          ? "border-[#2d6a4f] bg-[#d8f3dc]/50 ring-2 ring-[#2d6a4f]/20"
                          : "border-[#e5ded3] bg-[#fcfbf7] hover:bg-[#f4efe6]"
                      }`}
                    >
                      <img
                        src={opt.url}
                        alt={opt.label}
                        className="w-10 h-10 rounded-lg object-cover shrink-0"
                      />
                      <span className="text-[11px] font-medium text-[#1b4332] line-clamp-2">
                        {opt.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Donor & Location Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#f1ede4]">
              <BuildingIcon className="w-5 h-5 text-[#2d6a4f]" />
              <h2 className="font-bold text-lg text-[#1b4332]">2. Donor & Pickup Location</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Donor / Organization Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. North Hostel Canteen, Green View Caterers"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] ${
                    errors.donorName ? "border-red-400 bg-red-50/30" : "border-[#d2c9b8]"
                  }`}
                />
                {errors.donorName && (
                  <p className="text-red-600 text-xs mt-1">{errors.donorName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Donor Organization Type *
                </label>
                <select
                  value={donorType}
                  onChange={(e) => setDonorType(e.target.value as DonorType)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#d2c9b8] bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]"
                >
                  <option value="College Canteen">College Canteen / Hostel Mess</option>
                  <option value="Restaurant">Restaurant / Hotel</option>
                  <option value="Catering & Events">Catering & Event Organizers</option>
                  <option value="Bakery">Bakery / Confectionery</option>
                  <option value="Supermarket">Supermarket / Grocery Store</option>
                  <option value="Individual Donor">Individual Household / Student</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98450 12345"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] ${
                    errors.contactPhone ? "border-red-400 bg-red-50/30" : "border-[#d2c9b8]"
                  }`}
                />
                {errors.contactPhone && (
                  <p className="text-red-600 text-xs mt-1">{errors.contactPhone}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Exact Pickup Address & Landmark *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Engineering Campus Cafeteria, Rear Gate Dispatch Counter"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] ${
                    errors.location ? "border-red-400 bg-red-50/30" : "border-[#d2c9b8]"
                  }`}
                />
                {errors.location && (
                  <p className="text-red-600 text-xs mt-1">{errors.location}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Packaging & Storage Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Stored in thermal containers. Please bring own clean utensils or carry bags."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#d2c9b8] bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]"
                />
              </div>
            </div>
          </div>

          {/* Academic disclaimer box */}
          <div className="p-4 bg-[#f0f7f3] border border-[#d8f3dc] rounded-2xl flex items-start gap-3 text-xs text-[#2d6a4f]">
            <ShieldCheckIcon className="w-5 h-5 shrink-0 mt-0.5 text-[#2d6a4f]" />
            <div>
              <strong className="block text-[#1b4332] font-semibold mb-0.5">
                Food Safety & CEP Guidelines
              </strong>
              <p className="text-[#526359] leading-relaxed">
                By posting, the donor confirms the food was prepared hygienically and stored at appropriate temperatures. This student project demonstrates digital coordination.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
            <Link
              href="/available-food"
              className="w-full sm:w-auto px-5 py-3 text-center text-xs font-semibold text-[#526359] hover:text-[#1b4332] transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <HeartHandIcon className="w-4 h-4 text-[#52b788]" />
              <span>Submit & Publish Donation</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
