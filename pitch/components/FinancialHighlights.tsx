import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FinancialHighlights = () => {
  // Sample financial data
  const financialMetrics = [
    {
      title: "Initial Investment",
      value: "$1.5M",
      change: "+0%",
      description: "Seed funding required",
    },
    {
      title: "Projected Revenue Y1",
      value: "$2.8M",
      change: "+0%",
      description: "First year revenue target",
    },
    {
      title: "Projected Revenue Y3",
      value: "$12.4M",
      change: "+342%",
      description: "Third year projection",
    },
    {
      title: "Expected ROI",
      value: "246%",
      change: "+246%",
      description: "5-year return on investment",
    },
    {
      title: "Break-even Point",
      value: "18 mo",
      change: "-25%",
      description: "Faster than industry average",
    },
    {
      title: "Market Size",
      value: "$42B",
      change: "+8%",
      description: "Growing annual market",
    },
  ];

  return (
    <section id="financials" className="py-12 bg-blue-50 dark:bg-blue-950/20">
      <div className="container px-4 mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-3 text-blue-800 dark:text-blue-400">
            Financial Highlights
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our financial projections demonstrate strong growth potential and
            attractive returns for investors at this early stage.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {financialMetrics.map((metric, index) => (
            <Card key={index} className="border-blue-100 dark:border-blue-900/50">
              <CardHeader className="pb-1 p-3">
                <CardTitle className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {metric.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <div className="flex items-baseline justify-between">
                  <div className="text-xl font-bold text-blue-700 dark:text-blue-400">
                    {metric.value}
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      metric.change.startsWith("+")
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-orange-600 dark:text-orange-400"
                    }`}
                  >
                    {metric.change}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-blue-100 dark:border-blue-900/50">
            <CardHeader className="p-3">
              <CardTitle className="text-sm text-blue-800 dark:text-blue-400">
                Revenue Projection
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <div className="aspect-[3/2] relative bg-white dark:bg-gray-800 rounded-md p-3">
                <div className="flex flex-col h-full justify-end">
                  <div className="flex justify-around items-end h-32 border-b border-l border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-blue-200 dark:bg-blue-800 rounded-t h-8"></div>
                      <span className="text-xs mt-1">Year 1</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-blue-400 dark:bg-blue-700 rounded-t h-16"></div>
                      <span className="text-xs mt-1">Year 2</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-blue-600 dark:bg-blue-600 rounded-t h-24"></div>
                      <span className="text-xs mt-1">Year 3</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-blue-800 dark:bg-blue-500 rounded-t h-32"></div>
                      <span className="text-xs mt-1">Year 4</span>
                    </div>
                  </div>
                  <div className="text-center text-xs mt-3 text-gray-500">
                    Projected Annual Revenue Growth
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100 dark:border-blue-900/50">
            <CardHeader className="p-3">
              <CardTitle className="text-sm text-blue-800 dark:text-blue-400">
                Market Opportunity
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <div className="aspect-[3/2] relative bg-white dark:bg-gray-800 rounded-md p-3">
                <div className="h-full flex flex-col justify-center items-center">
                  <div className="relative h-32 w-32">
                    <div className="absolute inset-0 rounded-full border-6 border-gray-100 dark:border-gray-700"></div>
                    <div
                      className="absolute inset-0 rounded-full border-6 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent"
                      style={{ transform: "rotate(45deg)" }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        14%
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-300">
                        Market Share Goal
                      </span>
                    </div>
                  </div>
                  <div className="text-center text-xs mt-3 text-gray-500">
                    Target Market Penetration by Year 5
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinancialHighlights; 