"use client";

import React, { useState } from "react";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
} from "@/components/Icons";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("General Question");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Your name is required.";
    if (!email.trim()) {
      errs.email = "Email address is required.";
    } else if (!email.includes("@")) {
      errs.email = "Please enter a valid email address.";
    }
    if (!subject.trim()) errs.subject = "Subject line is required.";
    if (!message.trim()) errs.message = "Please write your message.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setSubmitted(false);
    setErrors({});
  };

  const faqs = [
    {
      q: "Who can donate food on this platform?",
      a: "Commercial kitchens, restaurants, bakeries, caterers, banquet halls, community kitchens, and households with safe, edible surplus food are welcome to post listings.",
    },
    {
      q: "Who is eligible to claim available food listings?",
      a: "Registered community shelters, orphanages, elder care homes, free community kitchens, food pantries, and authorized volunteer relief groups can reserve available batches.",
    },
    {
      q: "How does pickup and transportation work?",
      a: "Once an item is claimed, the recipient contacts the donor directly via the contact phone number provided. The claiming organization is responsible for arranging transport and collecting the food before the stated deadline.",
    },
    {
      q: "What types of food can be donated?",
      a: "We welcome freshly prepared cooked meals (held at safe temperatures), fresh bread and bakery goods, fresh fruits and produce crates, unexpired sealed packaged food, and properly refrigerated dairy products.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d8f3dc] text-[#1b4332] text-xs font-semibold">
          <MailIcon className="w-4 h-4 text-[#2d6a4f]" size={16} />
          <span>Support & Inquiries</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight">
          Contact & Community Support
        </h1>
        <p className="text-sm text-[#526359] leading-relaxed">
          Have questions about donating food, registering your shelter, or coordinating community surplus pickups? Reach out to our team below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#1b4332] rounded-3xl p-6 sm:p-8 text-white space-y-6 shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#52b788]">
                Community Support Center
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                SmartFoodShare Operations Hub
              </h3>
              <p className="text-xs text-[#d8f3dc] mt-2 leading-relaxed">
                Dedicated to facilitating local food recovery and connecting surplus providers with community relief efforts.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2d6a4f] flex items-center justify-center shrink-0 text-[#52b788]">
                  <MapPinIcon className="w-4 h-4" size={16} />
                </div>
                <div>
                  <span className="text-[#a3b899] text-xs block">Regional Coordination Office</span>
                  <span className="font-medium text-white">
                    Civic Center Plaza, Suite 304, Metro Central
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2d6a4f] flex items-center justify-center shrink-0 text-[#52b788]">
                  <MailIcon className="w-4 h-4" size={16} />
                </div>
                <div>
                  <span className="text-[#a3b899] text-xs block">Support Email</span>
                  <span className="font-medium text-white">support@smartfoodshare.org</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2d6a4f] flex items-center justify-center shrink-0 text-[#52b788]">
                  <PhoneIcon className="w-4 h-4" size={16} />
                </div>
                <div>
                  <span className="text-[#a3b899] text-xs block">Helpline & Dispatch</span>
                  <span className="font-medium text-white">+91 (0) 80 4123 4567</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2d6a4f] flex items-center justify-center shrink-0 text-[#52b788]">
                  <ClockIcon className="w-4 h-4" size={16} />
                </div>
                <div>
                  <span className="text-[#a3b899] text-xs block">Operating Hours</span>
                  <span className="font-medium text-white">Monday – Saturday: 8:00 AM – 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#e5ded3] card-shadow space-y-3 text-xs text-[#526359]">
            <h4 className="font-bold text-sm text-[#1b4332] flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4 text-[#2d6a4f]" size={16} />
              Direct Communication
            </h4>
            <p className="leading-relaxed">
              For urgent same-day food pickups, donors and claimers are encouraged to call directly using the telephone contact displayed on each food listing.
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e5ded3] card-shadow">
            {submitted ? (
              <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-[#d8f3dc] text-[#1b4332] flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircleIcon className="w-10 h-10 text-[#2d6a4f]" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#1b4332]">Message Sent Successfully!</h3>
                <p className="text-sm text-[#526359] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>. Your message has been received. Our community coordinator will respond to <strong>{email}</strong> shortly.
                </p>

                <div className="bg-[#fcfbf7] border border-[#e5ded3] p-4 rounded-xl text-left text-xs max-w-md mx-auto space-y-1">
                  <p>
                    <strong>Subject:</strong> {subject}
                  </p>
                  <p>
                    <strong>Category:</strong> {category}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-xs font-semibold shadow transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-2 border-b border-[#f1ede4]">
                  <h3 className="font-bold text-lg text-[#1b4332]">Send Us a Message</h3>
                  <p className="text-xs text-[#526359]">
                    Fill in your details below and we will get back to you promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] ${
                        errors.name ? "border-red-400 bg-red-50/30" : "border-[#d2c9b8]"
                      }`}
                    />
                    {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] ${
                        errors.email ? "border-red-400 bg-red-50/30" : "border-[#d2c9b8]"
                      }`}
                    />
                    {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                      Inquiry Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#d2c9b8] bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]"
                    >
                      <option value="General Question">General Question</option>
                      <option value="Food Donor Assistance">Food Donor Assistance</option>
                      <option value="Shelter / NGO Partnership">Shelter / NGO Partnership</option>
                      <option value="Volunteer Coordination">Volunteer Coordination</option>
                      <option value="Feedback / Suggestions">Feedback / Suggestions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                      Subject Line *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Inquiring about daily bakery surplus donation"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] ${
                        errors.subject ? "border-red-400 bg-red-50/30" : "border-[#d2c9b8]"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-600 text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#1b4332] mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Type your message, query, or comments here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`w-full text-sm px-3.5 py-2.5 rounded-xl border bg-[#fcfbf7] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] ${
                        errors.message ? "border-red-400 bg-red-50/30" : "border-[#d2c9b8]"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-600 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-semibold text-sm px-7 py-3 rounded-xl shadow transition-all cursor-pointer"
                  >
                    <MailIcon className="w-4 h-4 text-[#52b788]" size={16} />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="pt-10 border-t border-[#e5ded3] space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2d6a4f]">
            Platform FAQ
          </span>
          <h3 className="text-2xl font-extrabold text-[#1b4332]">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#e5ded3] card-shadow space-y-2"
            >
              <h4 className="font-bold text-sm text-[#1b4332] flex items-start gap-2">
                <span className="text-[#2d6a4f] font-extrabold">Q:</span>
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-[#526359] leading-relaxed pl-5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
