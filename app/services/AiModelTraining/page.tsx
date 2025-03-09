"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const Page = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="bg-[#FFBF23] flex-1">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 p-4 text-black rounded-full font-bold transition-colors hover:bg-white/10"
            aria-label="Go back"
          >
            <ArrowLeft size={24} className="text-black" />
            <span>Go Back</span>
          </button>
        </div>
        {/* Header */}
        <header className="pt-20 pb-16 px-4 md:px-8 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl text-[#] mb-4 flex items-center justify-center font-['SpaceGrotesk']">
            AI Model Training – Precision Engineering for Intelligent Systems
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-['Montserrat']">
            The heart of every AI solution is a well-trained model. Our AI Model Training services focus on <span className="font-bold">accuracy, speed,</span> and <span className="font-bold">scalability</span> to build models that not only understand data but also <span className="font-bold">anticipate trends</span> and make actionable predictions.
          </p>
        </header>

        {/* Main Content */}
        <main className="px-4 md:px-8 max-w-6xl mx-auto pb-20">
          <section className="bg-white rounded-2xl shadow-xl p-8 mb-10">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#FFBF23] rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-2xl">🔹</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-black font-['SpaceGrotesk']">
                What We Offer:
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Data Strategy & Curation */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Data Strategy & Curation:
                </h3>
                <p className="text-gray-600">
                  Sourcing, cleaning, and enriching data to build high-quality datasets that enhance model accuracy.
                </p>
              </div>

              {/* Advanced Training Techniques */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Advanced Training Techniques:
                </h3>
                <p className="text-gray-600">
                  Implementing deep learning, reinforcement learning, and transfer learning for specialized applications—whether it's natural language processing or computer vision.
                </p>
              </div>

              {/* Model Explainability & Interpretability */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Model Explainability & Interpretability:
                </h3>
                <p className="text-gray-600">
                  Building transparent models that provide clear rationales for their predictions, fostering trust and compliance.
                </p>
              </div>

              {/* Cross-Industry Expertise */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Cross-Industry Expertise:
                </h3>
                <p className="text-gray-600">
                  Training models for diverse domains—Healthcare, Finance, E-commerce, Cybersecurity, and more.
                </p>
              </div>

              {/* Performance Monitoring */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 md:col-span-2">
                <h3 className="text-xl font-bold text-black mb-4">
                  Performance Monitoring:
                </h3>
                <p className="text-gray-600">
                  Continuous model evaluation and fine-tuning to adapt to evolving data patterns and maintain peak performance.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-[#FFBF23] text-black py-8 px-4">
          <div className="max-w-6xl mx-auto text-center font-['Montserrat']" >
            <p className="text-lg">
              Transform your business with next-generation AI Model Training
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page;