"use client";
import React from "react";
import ContactForm from "../components/ContactForm";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const Page = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="min-h-[100dvh] overflow-hidden flex flex-col">
      <div className="bg-[#FFBF23] flex-1">
        <div className="">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center gap- p-2 text-black rounded-full font-bold transition-colors hover:bg-white/10"
            aria-label="Go back"
          >
            <ArrowLeft size={24} className="text-black" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Page;
