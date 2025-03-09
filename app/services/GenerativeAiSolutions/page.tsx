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
          <h2 className="text-3xl  sm:text-5xl text-[#] mb-4 flex items-center justify-center font-['SpaceGrotesk']">
            Generative AI Solutions – Redefining Innovation and Automation
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Go beyond traditional AI capabilities with our{" "}
            <span className="font-bold">Generative AI Solutions</span>—designed
            to{" "}
            <span className="font-bold">create, optimize, and transform</span>.
            From <span className="font-bold">content generation</span> to{" "}
            <span className="font-bold">complex simulations</span>, our
            solutions unlock the full potential of AI to fuel innovation at
            every level.
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
              {/* AI-Powered Content Creation */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  AI-Powered Content Creation:
                </h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="font-bold text-gray-700 mr-2">Text:</span>
                    <span className="text-gray-600">
                      Generate high-converting marketing copy, reports, and
                      technical documentation.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-gray-700 mr-2">
                      Visuals:
                    </span>
                    <span className="text-gray-600">
                      AI-generated images and videos for advertising and social
                      media, tailored to your brand voice.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-gray-700 mr-2">Code:</span>
                    <span className="text-gray-600">
                      Automate coding tasks with AI-based code generators and
                      error detection for faster development cycles.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Synthetic Data Generation */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Synthetic Data Generation:
                </h3>
                <p className="text-gray-600">
                  Create high-quality synthetic data to train models where real
                  data is scarce or sensitive, ensuring privacy compliance.
                </p>
              </div>

              {/* Conversational AI */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Conversational AI:
                </h3>
                <p className="text-gray-600">
                  Develop lifelike chatbots and virtual assistants with advanced
                  natural language understanding and contextual learning.
                </p>
              </div>

              {/* Design and Creativity Automation */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Design and Creativity Automation:
                </h3>
                <p className="text-gray-600">
                  Use AI to automate graphic design, video editing, and UX/UI
                  enhancements, reducing time-to-market.
                </p>
              </div>

              {/* AI-Driven Simulations */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 md:col-span-2">
                <h3 className="text-xl font-bold text-black mb-4">
                  AI-Driven Simulations:
                </h3>
                <p className="text-gray-600">
                  Build predictive simulations for financial forecasting, risk
                  analysis, and supply chain optimization.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-[#FFBF23] text-black py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-lg">
              Transform your business with next-generation Generative AI
              Solutions
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page;
