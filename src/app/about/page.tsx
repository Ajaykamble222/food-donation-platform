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
} from "@/components/Icons";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Title & Introduction */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d8f3dc] text-[#1b4332] text-xs font-semibold">
          <LeafIcon className="w-4 h-4 text-[#2d6a4f]" />
          <span>Academic CEP Project Overview</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#1b4332] tracking-tight">
          Smart Food Donation & Distribution Platform
        </h1>
        <p className="text-base text-[#526359] leading-relaxed">
          A college-level Community Engagement Project (CEP) designed to tackle the urban food waste paradox through rapid, hyper-local digital surplus redistribution.
        </p>
      </div>

      {/* College CEP Project Meta Card */}
      <div className="bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="border-b sm:border-b-0 sm:border-r border-white/20 pb-4 sm:pb-0 sm:pr-4">
            <span className="text-xs text-[#a3b899] uppercase tracking-wider block">Course / Context</span>
            <span className="font-bold text-base text-white mt-1 block">Community Engagement (CEP)</span>
            <span className="text-xs text-[#d8f3dc]">Academic Submission</span>
          </div>

          <div className="border-b sm:border-b-0 lg:border-r border-white/20 pb-4 sm:pb-0 lg:pr-4">
            <span className="text-xs text-[#a3b899] uppercase tracking-wider block">Core Domain</span>
            <span className="font-bold text-base text-white mt-1 block">Food Recovery & Logistics</span>
            <span className="text-xs text-[#d8f3dc]">Hyper-local Matching</span>
          </div>

          <div className="border-b sm:border-b-0 sm:border-r border-white/20 pb-4 sm:pb-0 sm:pr-4">
            <span className="text-xs text-[#a3b899] uppercase tracking-wider block">Primary Technology</span>
            <span className="font-bold text-base text-white mt-1 block">Next.js & TypeScript</span>
            <span className="text-xs text-[#d8f3dc]">Client-side Persistence</span>
          </div>

          <div>
            <span className="text-xs text-[#a3b899] uppercase tracking-wider block">Global Alignment</span>
            <span className="font-bold text-base text-white mt-1 block">UN SDGs #2 & #12</span>
            <span className="text-xs text-[#d8f3dc]">Zero Hunger & Waste</span>
          </div>
        </div>
      </div>

      {/* Chapter 1: Problem Statement */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e5ded3] card-shadow space-y-6">
        <div className="flex items-center gap-2.5 pb-3 border-b border-[#f1ede4]">
          <div className="w-9 h-9 rounded-xl bg-[#d8f3dc] text-[#1b4332] flex items-center justify-center font-bold">
            01
          </div>
          <h2 className="text-2xl font-bold text-[#1b4332]">Problem Statement & Motivation</h2>
        </div>

        <div className="space-y-4 text-sm text-[#526359] leading-relaxed">
          <p>
            In contemporary urban environments, a severe socio-ecological contradiction exists: <strong>massive volumes of fresh, nutritious, prepared food are discarded every evening</strong> by college hostel messes, corporate cafeterias, banquet halls, and commercial eateries, while simultaneously thousands of individuals residing in shelter homes, orphanages, and underserved neighborhoods experience food insecurity.
          </p>

          <p>
            According to the <em>United Nations Environment Programme (UNEP) Food Waste Index Report</em>, over <strong>1 billion metric tons of edible food</strong> is wasted globally each year, accounting for nearly <strong>8 to 10% of total global greenhouse gas emissions</strong> through landfill methane release.
          </p>

          <div className="bg-[#fcfbf7] p-5 rounded-2xl border border-[#e5ded3] space-y-3">
            <h3 className="font-bold text-sm text-[#1b4332]">
              Key Bottlenecks in Existing Surplus Management:
            </h3>
            <ul className="space-y-2 text-xs text-[#3d4d42]">
              <li className="flex items-start gap-2">
                <span className="text-[#2d6a4f] font-bold mt-0.5">•</span>
                <span>
                  <strong>Lack of Real-Time Information:</strong> Donors have surplus food with a short 3 to 6-hour safe consumption window, but have no quick way to know which shelter within 5 km has an immediate requirement.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2d6a4f] font-bold mt-0.5">•</span>
                <span>
                  <strong>Uncoordinated Communication:</strong> Informal WhatsApp groups lead to multiple calls, confusion, delayed response, and frequent food spoilage before pickup can be completed.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2d6a4f] font-bold mt-0.5">•</span>
                <span>
                  <strong>High Barrier to Entry:</strong> Commercial software solutions require subscription fees, proprietary payment gateways, and heavy server configurations that volunteer-run shelters cannot afford.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chapter 2: Project Objectives */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e5ded3] card-shadow space-y-6">
        <div className="flex items-center gap-2.5 pb-3 border-b border-[#f1ede4]">
          <div className="w-9 h-9 rounded-xl bg-[#d8f3dc] text-[#1b4332] flex items-center justify-center font-bold">
            02
          </div>
          <h2 className="text-2xl font-bold text-[#1b4332]">Project Objectives & Scope</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-[#f0f7f3] border border-[#d8f3dc] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#1b4332]">
              <CheckCircleIcon className="w-5 h-5 text-[#2d6a4f]" />
              <span>1. Hyper-Local Surplus Discovery</span>
            </div>
            <p className="text-[#526359] text-xs leading-relaxed">
              Enable food providers to catalog available food categories (Cooked meals, Bakery, Fresh produce) with exact pickup locations and clear expiration deadlines.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f0f7f3] border border-[#d8f3dc] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#1b4332]">
              <CheckCircleIcon className="w-5 h-5 text-[#2d6a4f]" />
              <span>2. Frictionless Claim Workflow</span>
            </div>
            <p className="text-[#526359] text-xs leading-relaxed">
              Allow registered charity workers and student volunteers to reserve surplus donations in a single click, instantly transitioning the listing to "Reserved".
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f0f7f3] border border-[#d8f3dc] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#1b4332]">
              <CheckCircleIcon className="w-5 h-5 text-[#2d6a4f]" />
              <span>3. Zero-Dependency Client Architecture</span>
            </div>
            <p className="text-[#526359] text-xs leading-relaxed">
              Build an accessible, lightweight web solution utilizing Next.js, TypeScript, and localStorage persistence, eliminating complex backend infrastructure costs.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f0f7f3] border border-[#d8f3dc] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#1b4332]">
              <CheckCircleIcon className="w-5 h-5 text-[#2d6a4f]" />
              <span>4. Food Safety Standardization</span>
            </div>
            <p className="text-[#526359] text-xs leading-relaxed">
              Enforce mandatory preparation timestamps, dietary classification (Veg/Vegan), and strict deadline windows to prevent food-safety risks.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 3: Benefits of Food Waste Reduction */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e5ded3] card-shadow space-y-6">
        <div className="flex items-center gap-2.5 pb-3 border-b border-[#f1ede4]">
          <div className="w-9 h-9 rounded-xl bg-[#d8f3dc] text-[#1b4332] flex items-center justify-center font-bold">
            03
          </div>
          <h2 className="text-2xl font-bold text-[#1b4332]">Multi-Dimensional Benefits</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-[#fcfbf7] border border-[#e5ded3] space-y-3">
            <span className="text-2xl">🌱</span>
            <h3 className="font-bold text-sm text-[#1b4332]">Environmental Impact</h3>
            <p className="text-xs text-[#526359] leading-relaxed">
              Preventing organic food waste from decaying anaerobically in landfills drastically curtails methane (CH₄) emissions, a greenhouse gas 28 times more potent than carbon dioxide.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#fcfbf7] border border-[#e5ded3] space-y-3">
            <span className="text-2xl">🤝</span>
            <h3 className="font-bold text-sm text-[#1b4332]">Social & Nutritional Dignity</h3>
            <p className="text-xs text-[#526359] leading-relaxed">
              Wholesome, untouched banquet and canteen meals provide high protein and balanced nutrition to vulnerable populations without incurring additional procurement expenditure.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#fcfbf7] border border-[#e5ded3] space-y-3">
            <span className="text-2xl">💡</span>
            <h3 className="font-bold text-sm text-[#1b4332]">Campus Community Engagement</h3>
            <p className="text-xs text-[#526359] leading-relaxed">
              Fosters active social responsibility among students and faculty, demonstrating practical applications of software engineering toward sustainable community development.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 4: System Architecture Overview */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e5ded3] card-shadow space-y-6">
        <div className="flex items-center gap-2.5 pb-3 border-b border-[#f1ede4]">
          <div className="w-9 h-9 rounded-xl bg-[#d8f3dc] text-[#1b4332] flex items-center justify-center font-bold">
            04
          </div>
          <h2 className="text-2xl font-bold text-[#1b4332]">System Architecture & Design</h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#526359]">
          <p>
            The platform adopts a clean, modular design pattern built using <strong>Next.js App Router</strong> with TypeScript interfaces and Tailwind CSS utility styling:
          </p>

          {/* Architecture Box */}
          <div className="bg-[#efe8da]/40 p-6 rounded-2xl border border-[#d2c9b8] font-mono text-xs text-[#1f2d25] space-y-3 overflow-x-auto">
            <div className="text-[#1b4332] font-bold">┌── [Presentation Layer] (Next.js 16 App Router)</div>
            <div>│   ├── Home (Hero, Impact Stats, How It Works)</div>
            <div>│   ├── Available Food (Search Engine, Category Filter, Card Grid)</div>
            <div>│   ├── Donate Food (Validated Intake Form, Preset Image Selector)</div>
            <div>│   ├── Request Food (Beneficiary Requirement Registration)</div>
            <div>│   └── About & Contact (Academic Documentation & Inquiries)</div>
            <div className="text-[#1b4332] font-bold">├── [Component Layer]</div>
            <div>│   ├── Navbar, Footer, BannerNotice, FoodCard, ClaimModal, Icons</div>
            <div className="text-[#1b4332] font-bold">└── [State & Storage Engine] (src/lib/foodStore.ts)</div>
            <div>    ├── LocalStorage Persistence (Immediate client sync)</div>
            <div>    ├── Window Custom Events ('food-donations-updated')</div>
            <div>    └── Pre-seeded Realistic Academic Demo Dataset</div>
          </div>
        </div>
      </section>

      {/* Chapter 5: Call to Action */}
      <div className="bg-[#efe8da] rounded-3xl p-8 text-center space-y-4 border border-[#e5ded3]">
        <h3 className="font-extrabold text-2xl text-[#1b4332]">
          Experience The Live Demonstration
        </h3>
        <p className="text-sm text-[#526359] max-w-lg mx-auto">
          Test the end-to-end workflow by posting a surplus food donation or reserving an existing listing.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/available-food"
            className="inline-flex items-center gap-2 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition-all cursor-pointer"
          >
            <UtensilsIcon className="w-4 h-4 text-[#52b788]" />
            <span>Browse Available Food</span>
          </Link>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#fcfbf7] text-[#1b4332] font-semibold text-sm px-6 py-3 rounded-xl border border-[#d2c9b8] transition-all cursor-pointer"
          >
            <HeartHandIcon className="w-4 h-4 text-[#2d6a4f]" />
            <span>Post a Donation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
