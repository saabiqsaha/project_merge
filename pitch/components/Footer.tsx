import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-50 dark:bg-blue-950/30 border-t border-blue-100 dark:border-blue-900/50">
      <div className="container px-4 mx-auto py-12">
        <div className="mb-10 pb-6 border-b border-blue-200 dark:border-blue-900/30">
          <Card className="bg-white dark:bg-black border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-300">Investment Advisory</h2>
              <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300">
                <p className="mb-3">
                  The information presented on this website is for informational purposes only and does not constitute an offer to sell, a solicitation to buy, or a recommendation for any security.
                </p>
                <p className="mb-3">
                  Investing in early-stage companies involves substantial risk, including the possible loss of principal. Prospective investors should carefully consider their financial situation and the risks associated with this type of investment before making any decisions.
                </p>
                <p>
                  Past performance is not indicative of future results. Financial projections are provided as estimates only, and actual results may vary significantly.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">
              Contact Us
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Interested in learning more about our investment opportunity? 
              Fill out the form or reach out directly to schedule a detailed presentation.
            </p>

            <Card className="border-blue-100 dark:border-blue-900/50">
              <CardContent className="p-4">
                <form className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-2 py-1.5 text-sm border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-2 py-1.5 text-sm border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                      placeholder="Tell us what you're interested in learning more about..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn-with-arrow w-full"
                  >
                    Send Message
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
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-700 dark:text-blue-400">
              Contact Information
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <div className="mr-2 mt-0.5 text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-800 dark:text-gray-200">Email</p>
                  <a href="mailto:investors@example.com" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    investors@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-0.5 text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-800 dark:text-gray-200">Phone</p>
                  <a href="tel:+15555555555" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    +1 (555) 555-5555
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-0.5 text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-800 dark:text-gray-200">Office</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    123 Innovation Drive<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-400">
              Resources
            </h3>
            <div className="space-y-2 mb-6">
              <p>
                <Link href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Investor Deck (PDF)
                </Link>
              </p>
              <p>
                <Link href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Product Demo Video
                </Link>
              </p>
              <p>
                <Link href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Financial Projections
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-200 dark:border-blue-900/30 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 