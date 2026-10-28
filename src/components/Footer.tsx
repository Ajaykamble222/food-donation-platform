import React from "react";
import Link from "next/link";
import { LeafIcon, ShieldCheckIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#1b4332] text-[#e8ded0] border-t border-[#2d6a4f]/60 mt-auto">
      {/* Top Banner inside Footer */}
      <div className="bg-[#133826] border-b border-[#2d6a4f]/40 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2d6a4f] flex items-center justify-center text-[#52b788] shadow-inner">
              <LeafIcon className="w-5 h-5" size={20} />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">
                Smart Food Donation & Distribution Platform
              </h4>
              <p className="text-xs text-[#a3b899]">
                Bridging food surplus centers with verified hunger-relief organizations and community kitchens.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2d6a4f]/50 border border-[#52b788]/30 text-xs text-[#d8f3dc]">
              <span className="w-2 h-2 rounded-full bg-[#52b788]"></span>
              SDG 2: Zero Hunger
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2d6a4f]/50 border border-[#52b788]/30 text-xs text-[#d8f3dc]">
              <span className="w-2 h-2 rounded-full bg-[#52b788]"></span>
              SDG 12: Responsible Consumption
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: About Platform */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl text-white tracking-tight">SmartFoodShare</span>
            </div>
            <p className="text-xs text-[#c2d4be] leading-relaxed">
              A community-driven digital network facilitating direct surplus food redistribution from restaurants, caterers, bakeries, and homes to local food assistance initiatives.
            </p>
            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#2d6a4f] text-[11px] font-medium text-white">
                Community Surplus Network
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Platform Links
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/available-food" className="hover:text-white transition-colors">
                  Available Food Inventory
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-white transition-colors">
                  Donate Surplus Food
                </Link>
              </li>
              <li>
                <Link href="/request-food" className="hover:text-white transition-colors">
                  Request Food Support
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Initiative
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Food Safety Pillars */}
          <div>
            <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Food Safety Guidelines
            </h5>
            <ul className="space-y-2 text-xs text-[#c2d4be]">
              <li className="flex items-start gap-1.5">
                <span className="text-[#52b788] mt-0.5">•</span>
                <span>Offer only fresh, unexpired, and properly prepared food.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#52b788] mt-0.5">•</span>
                <span>Disclose exact preparation time and storage conditions.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#52b788] mt-0.5">•</span>
                <span>Use clean, food-grade packaging containers.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#52b788] mt-0.5">•</span>
                <span>Collect and distribute strictly before the pickup deadline.</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform Notice */}
          <div>
            <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Platform Role
            </h5>
            <div className="bg-[#133826]/70 rounded-xl p-3.5 border border-[#2d6a4f]/50 text-xs text-[#c2d4be] space-y-2">
              <div className="flex items-center gap-1.5 text-[#52b788] font-medium">
                <ShieldCheckIcon className="w-4 h-4" size={16} />
                <span>Direct Coordination</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                The platform facilitates direct communication between donors and recipient organizations. Participants are responsible for inspecting food quality and adhering to standard food safety regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2d6a4f]/50 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#a3b899] gap-4">
          <p>© 2026 Smart Food Donation and Distribution Platform. Dedicated to community food security and waste reduction.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-white transition-colors">
              How It Works
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Helpdesk & FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
