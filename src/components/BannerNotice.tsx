"use client";

import React, { useState } from "react";
import { resetDemoData } from "@/lib/foodStore";
import { RefreshCwIcon, XIcon, ShieldCheckIcon } from "./Icons";

export default function BannerNotice() {
  const [visible, setVisible] = useState(true);
  const [resetMessage, setResetMessage] = useState(false);

  if (!visible) return null;

  const handleReset = () => {
    resetDemoData();
    setResetMessage(true);
    setTimeout(() => setResetMessage(false), 3000);
  };

  return (
    <div className="bg-[#1b4332] text-[#fdfbf7] text-xs sm:text-sm px-4 py-2 border-b border-[#2d6a4f]/50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center bg-[#52b788] text-[#0f2e1f] font-semibold text-[11px] px-2 py-0.5 rounded-full">
            Demonstration Mode
          </span>
          <span className="text-[#e8ded0]">
            Illustrative sample listings for platform demonstration. Real pickups are arranged directly between verified donors and recipient organizations.
          </span>
        </div>

        <div className="flex items-center gap-3">
          {resetMessage ? (
            <span className="text-[#52b788] font-medium animate-pulse">✓ Demo listings reset!</span>
          ) : (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-[#e8ded0] hover:text-white underline decoration-dotted transition-colors cursor-pointer"
              title="Reset sample listings to default demo state"
            >
              <RefreshCwIcon className="w-3.5 h-3.5" />
              Reset Demo Data
            </button>
          )}

          <button
            onClick={() => setVisible(false)}
            aria-label="Dismiss banner"
            className="text-[#e8ded0] hover:text-white p-0.5 transition-colors cursor-pointer"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
