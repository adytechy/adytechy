"use client";

import { DonateButton } from "./DonateButton";

export function FloatingDonateButton() {
  return (
    <div className="fixed bottom-20 right-4 z-50">
      <DonateButton />
    </div>
  );
}
