"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { saveRequest, getStoredRequests, FoodRequest } from "@/lib/foodStore";
import {
  UtensilsIcon,
  CheckCircleIcon,
  BuildingIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ShieldCheckIcon,
  SparklesIcon,
  HeartHandIcon,
} from "@/components/Icons";

export default function RequestFoodPage() {
  const [requesterName, setRequesterName] = useState("");
  const [organization, setOrganization] = useState("");
  const [requesterType, setRequesterType] = useState("NGO / Charity Organization");
  const [foodRequirement, setFoodRequirement] = useState("");
  const [quantityNeeded, setQuantityNeeded] = useState("");
  const [location, setLocation] = useState("");
  const [urgency, setUrgency] = useState("Today");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [submittedReq, setSubmittedReq] = useState<FoodRequest | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [allRequests, setAllRequests] = useState<FoodRequest[]>([]);

  const loadRequests = () => {
    setAllRequests(getStoredRequests());
  };

  useEffect(() => {
    loadRequests();
    const handleUpdate = () => loadRequests();
    window.addEventListener("food-requests-updated", handleUpdate);
    return () => window.removeEventListener("food-requests-updated", handleUpdate);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!requesterName.trim()) errs.requesterName = "Coordinator or representative name is required.";
    if (!organization.trim()) errs.organization = "Organization / Shelter name is required.";
    if (!foodRequirement.trim()) errs.foodRequirement = "Please specify the food requirement.";
    if (!quantityNeeded.trim()) errs.quantityNeeded = "Please state the quantity or number of beneficiaries.";
    if (!location.trim()) errs.location = "Delivery / pickup address is required.";
    if (!contactPhone.trim()) {
      errs.contactPhone = "Contact phone number is required.";
    } else if (contactPhone.replace(/\D/g, "").length < 7) {
      errs.contactPhone = "Please enter a valid phone number.";
    }
    if (!contactEmail.trim()) {
      errs.contactEmail = "Email address is required.";
    } else if (!contactEmail.includes("@")) {
      errs.contactEmail = "Please enter a valid email address.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newReq = saveRequest({
      requesterName: requesterName.trim(),
      organization: organization.trim(),
      requesterType,
      foodRequirement: foodRequirement.trim(),
      quantityNeeded: quantityNeeded.trim(),
      location: location.trim(),
      urgency,
      contactPhone: contactPhone.trim(),
      contactEmail: contactEmail.trim(),
      additionalNotes: additionalNotes.trim(),
    });

    setSubmittedReq(newReq);
    loadRequests();
  };

  const handleReset = () => {
    setRequesterName("");
    setOrganization("");
    setFoodRequirement("");
    setQuantityNeeded("");
    setLocation("");
    setContactPhone("");
    setContactEmail("");
    setAdditionalNotes("");
    setSubmittedReq(null);
    setErrors({});
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d8f3dc] text-[#1b4332] text-xs font-semibold">
          <UtensilsIcon className="w-4 h-4 text-[#2d6a4f]" />
          <span>Shelter & NGO Coordination</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight">
          Request Food for Beneficiaries
        </h1>
        <p className="text-sm text-[#526359] leading-relaxed">
          Are you managing a community shelter, orphanage, elder care home, or relief initiative? Submit your food requirements so registered donors can coordinate surplus dispatch.
        </p>
      </div>

      {submittedReq ? (
        /* Confirmation Screen */
        <div className="bg-white rounded-3xl border border-[#e5ded3] p-8 sm:p-12 card-shadow text-center space-y-6 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-[#d8f3dc] text-[#1b4332] flex items-center justify-center mx-auto shadow-inner">
            <CheckCircleIcon className="w-10 h-10 text-[#2d6a4f]" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b4332]">
              Food Requirement Registered!
            </h2>
            <p className="text-sm text-[#526359] max-w-lg mx-auto">
              Your community requirement has been recorded in the platform's simulated registry. Donors and student volunteers can view this listing to prioritize matches.
            </p>
          </div>

          {/* Details Card */}
          <div className="bg-[#fcfbf7] border border-[#e5ded3] rounded-2xl p-6 text-left max-w-lg mx-auto space-y-3 text-xs sm:text-sm text-[#1f2d25]">
            <div className="flex items-center justify-between pb-3 border-b border-[#e5ded3]">
              <span className="font-bold text-[#1b4332] text-base">{submittedReq.organization}</span>
              <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-semibold text-xs">
                Urgency: {submittedReq.urgency}
              </span>
            </div>

            <div className="space-y-1.5 text-xs">
              <p>
                <strong className="text-[#1b4332]">Requirement:</strong> {submittedReq.foodRequirement}
              </p>
              <p>
                <strong className="text-[#1b4332]">Target Quantity:</strong> {submittedReq.quantityNeeded}
              </p>
              <p>
                <strong className="text-[#1b4332]">Destination:</strong> {submittedReq.location}
              </p>
              <p>
                <strong className="text-[#1b4332]">Contact Coordinator:</strong> {submittedReq.requesterName} ({submittedReq.contactPhone})
              </p>
            </div>
          </div>

          {/* Academic notice */}
          <div className="p-4 bg-[#f0f7f3] border border-[#d8f3dc] rounded-2xl max-w-lg mx-auto text-xs text-[#2d6a4f] flex items-start gap-2.5 text-left">
            <ShieldCheckIcon className="w-5 h-5 shrink-0 mt-0.5 text-[#2d6a4f]" />
            <p>
              <strong>Academic Prototype Note:</strong> This submission updates client-side localStorage. In a real-world system, push notifications would be dispatched to donors within a 5 km radius.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/available-food"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition-all cursor-pointer"
            >
              <UtensilsIcon className="w-4 h-4 text-[#52b788]" />
              <span>Browse Currently Available Food</span>
            </Link>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-[#d2c9b8] bg-[#efe8da] hover:bg-[#e2d8c3] text-[#1b4332] font-semibold text-sm transition-colors cursor-pointer"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        /* The Request Form */
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl border border-[#e5ded3] p-6 sm:p-10 card-shadow space-y-8"
        >
          {/* Section 1: Organization & Requester */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#f1ede4]">
              <BuildingIcon className="w-5 h-5 text-[#2d6a4f]" />
              <h2 className="font-bold text-lg text-[#1b4332]">1. Organization & Contact Details</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Shelter / NGO / Initiative Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Asha Community Shelter, Hope Foundation"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] ${
                    errors.organization ? "border-red-400 bg-red-50/30" : "border-[#d2c9b8]"
                  }`}
                />
                {errors.organization && (
                  <p className="text-red-600 text-xs mt-1">{errors.organization}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Organization Type *
                </label>
                <select
                  value={requesterType}
                  onChange={(e) => setRequesterType(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#d2c9b8] bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]"
                >
                  <option value="NGO / Charity Organization">NGO / Charity Organization</option>
                  <option value="Homeless Shelter">Community Homeless Shelter</option>
                  <option value="Orphanage / Child Care">Orphanage / Child Care Center</option>
                  <option value="Elder Care Home">Elder Care / Senior Home</option>
                  <option value="Student Volunteer Group">Student Volunteer Group</option>
                  <option value="Community Kitchen">Community Free Kitchen (Langar / Food Drive)</option>
                  <option value="Individual in Need">Individual in Urgent Need</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Representative / Coordinator Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sister Maria, Rajesh Sharma"
                  value={requesterName}
                  onChange={(e) => setRequesterName(e.target.value)}
                  className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] ${
                    errors.requesterName ? "border-red-400 bg-red-50/30" : "border-[#d2c9b8]"
                  }`}
                />
                {errors.requesterName && (
                  <p className="text-red-600 text-xs mt-1">{errors.foodRequirement}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98111 22334"
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
                  Contact Email Address *
                </label>
                <input
                  type="email"
                  placeholder="e.g. coordinator@ashashelter.org"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] ${
                    errors.contactEmail ? "border-red-400 bg-red-50/30" : "border-[#d2c9b8]"
                  }`}
                />
                {errors.contactEmail && (
                  <p className="text-red-600 text-xs mt-1">{errors.contactEmail}</p>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: Food Need & Urgency */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#f1ede4]">
              <UtensilsIcon className="w-5 h-5 text-[#2d6a4f]" />
              <h2 className="font-bold text-lg text-[#1b4332]">2. Food Requirements & Urgency</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Specific Food Requirement *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Prepared hot dinner for 40 individuals, Fresh bread loaves, Dry pulses and rice"
                  value={foodRequirement}
                  onChange={(e) => setFoodRequirement(e.target.value)}
                  className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] ${
                    errors.foodRequirement ? "border-red-400 bg-red-50/30" : "border-[#d2c9b8]"
                  }`}
                />
                {errors.foodRequirement && (
                  <p className="text-red-600 text-xs mt-1">{errors.foodRequirement}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Quantity / Beneficiary Count *
                </label>
                <input
                  type="text"
                  placeholder="e.g. 40-50 Meals, 20 kg grains"
                  value={quantityNeeded}
                  onChange={(e) => setQuantityNeeded(e.target.value)}
                  className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] ${
                    errors.quantityNeeded ? "border-red-400 bg-red-50/30" : "border-[#d2c9b8]"
                  }`}
                />
                {errors.quantityNeeded && (
                  <p className="text-red-600 text-xs mt-1">{errors.quantityNeeded}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Urgency Level *
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#d2c9b8] bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]"
                >
                  <option value="Immediate (Within 4 hrs)">Immediate (Within 4 hrs)</option>
                  <option value="Today">Today (Evening)</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="Flexible / Standing Request">Flexible / Standing Need</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                  Delivery / Pickup Location *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sector 14 Shelter Home, Community Hall Gate #2"
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
                  Special Notes or Dietary Constraints
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Vegetarian preferred for children. We have volunteer transport available for pickup if needed."
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#d2c9b8] bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]"
                />
              </div>
            </div>
          </div>

          {/* Academic notice */}
          <div className="p-4 bg-[#f0f7f3] border border-[#d8f3dc] rounded-2xl flex items-start gap-3 text-xs text-[#2d6a4f]">
            <ShieldCheckIcon className="w-5 h-5 shrink-0 mt-0.5 text-[#2d6a4f]" />
            <div>
              <strong className="block text-[#1b4332] font-semibold mb-0.5">
                Academic CEP Demonstration Mode
              </strong>
              <p className="text-[#526359] leading-relaxed">
                This is a simulation form for testing the request intake workflow. No commercial logistics or pickup riders will be dispatched.
              </p>
            </div>
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto px-5 py-3 text-center text-xs font-semibold text-[#526359] hover:text-[#1b4332] transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <UtensilsIcon className="w-4 h-4 text-[#52b788]" />
              <span>Submit Food Requirement</span>
            </button>
          </div>
        </form>
      )}

      {/* Community Requests Log Preview */}
      <div className="space-y-4 pt-6 border-t border-[#e5ded3]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg text-[#1b4332]">
              Active Community Requirements Log ({allRequests.length})
            </h3>
            <p className="text-xs text-[#526359]">
              Live requests posted by verified local community shelters and coordinators.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allRequests.map((req) => (
            <div
              key={req.id}
              className="bg-white rounded-2xl p-5 border border-[#e5ded3] card-shadow space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-[#1b4332]">{req.organization}</span>
                <span
                  className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                    req.urgency.includes("Immediate")
                      ? "bg-red-100 text-red-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {req.urgency}
                </span>
              </div>

              <div className="space-y-1 text-xs text-[#1f2d25]">
                <p>
                  <strong className="text-[#2d6a4f]">Need:</strong> {req.foodRequirement}
                </p>
                <p>
                  <strong className="text-[#526359]">Quantity:</strong> {req.quantityNeeded}
                </p>
              </div>

              <div className="pt-2 border-t border-[#f1ede4] flex items-center justify-between text-[11px] text-[#718277]">
                <span className="flex items-center gap-1">
                  <MapPinIcon className="w-3 h-3 text-[#2d6a4f]" />
                  {req.location}
                </span>
                <span>Coordinator: {req.requesterName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
