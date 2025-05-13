import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BusinessModelCanvas from "@/components/BusinessModelCanvas";
import FinancialHighlights from "@/components/FinancialHighlights";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <section id="canvas" className="py-16 bg-white dark:bg-gray-950">
        <BusinessModelCanvas />
      </section>
      <FinancialHighlights />
      <TeamSection />
      <Footer />
    </main>
  );
}
