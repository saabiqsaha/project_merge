import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 z-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-blue-800 dark:text-blue-400 mb-4">
              Revolutionary Business Opportunity
            </h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
              Our innovative solution is poised to disrupt the market and provide
              exceptional returns for early investors. Learn how our business
              model creates sustainable value.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn-with-arrow">
                Learn More
                <span className="arrow">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path 
                      d="M6 12L10 8L6 4" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <button className="rounded-md bg-white border-2 border-blue-600 hover:bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm transition-all flex items-center">
                Schedule a Call
                <span className="arrow">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 text-blue-700"
                  >
                    <path 
                      d="M6 12L10 8L6 4" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className="mt-6 flex items-center space-x-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-7 w-7 rounded-full bg-blue-200 ring-2 ring-white"
                  ></div>
                ))}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Trusted by 500+ investors
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 p-6 shadow-lg">
            <div className="aspect-video relative rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow-md">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span>Pitch Video Preview</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 text-sm">
                  Investor Presentation
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  See why now is the time to invest
                </p>
              </div>
              <button className="rounded-full bg-blue-600 p-1.5 text-white hover:bg-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent"></div>
    </div>
  );
};

export default Hero; 