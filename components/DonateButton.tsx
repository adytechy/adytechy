"use client";

import { useState } from "react";
import { DonateForm } from "./DonateForm";

export function DonateButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{ backgroundColor: '#0f8200' }}
        className="px-4 py-2 text-white rounded hover:opacity-80 transition"
      >
        Support / Donate
      </button>
      <DonateForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
