"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DonationSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Thank you for your donation!</h1>
        <p className="mb-4">Your support helps us create more AI and tech content.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Go to Homepage <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
