"use client";
import MotionWrapper from "@/components/MotionWrapper";
import Link from "next/link";
import { FaBullhorn, FaChartLine, FaUsers, FaRocket } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 items-center text-center px-6 sm:px-10 max-w-5xl mx-auto">
      {/* Hero Section */}
      <MotionWrapper>
        <section className="flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Grow Your Brand with{" "}
            <span style={{ color: "#dab3ff" }}>Scroll</span>
            <span style={{ color: "#ff831c" }}> Craft</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            We help businesses thrive on social media with data-driven strategies, engaging content, and high-converting ads.
          </p>
          <Link href="/our-services">
            <button className="px-6 py-3 bg-purple-700 text-white rounded-xl hover:bg-purple-800 transition">
              Explore Our Services
            </button>
          </Link>
        </section>
      </MotionWrapper>

      {/* Services Section */}
      <MotionWrapper delay={0.1}>
        <section className="w-full">
          <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              {
                title: "Social Media Strategy",
                icon: <FaChartLine size={28} />,
                desc: "We craft custom plans tailored to your audience, goals, and growth potential."
              },
              {
                title: "Content Creation",
                icon: <FaBullhorn size={28} />,
                desc: "Visually stunning, on-brand content that drives clicks, likes, and shares."
              },
              {
                title: "Ad Campaign Management",
                icon: <FaRocket size={28} />,
                desc: "Maximize your ROI with optimized paid social campaigns across all platforms."
              },
              {
                title: "Community Management",
                icon: <FaUsers size={28} />,
                desc: "We keep your audience engaged, responding to comments, DMs, and feedback."
              }
            ].map((s, i) => (
              <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-all">
                <div className="text-purple-600 mb-2">{s.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </MotionWrapper>

      {/* Why Choose ScrollCraft */}
      <MotionWrapper delay={0.2}>
        <section className="w-full">
          <h2 className="text-3xl font-semibold mb-6">Why Brands Choose Us</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              "Results-Driven: Every campaign is measured, optimized, and aligned with your goals.",
              "Creative Edge: Our content cuts through the noise and drives action.",
              "Industry Expertise: We’ve scaled campaigns for startups and Fortune 500s.",
              "Transparent Process: You’re always in the loop — no surprises."
            ].map((point, i) => (
              <div key={i} className="p-5 border-l-4 border-purple-600 bg-gray-50 dark:bg-gray-900 rounded">
                <p className="text-lg text-gray-700 dark:text-gray-200">{point}</p>
              </div>
            ))}
          </div>
        </section>
      </MotionWrapper>

      {/* Our Process */}
      <MotionWrapper delay={0.3}>
        <section className="w-full">
          <h2 className="text-3xl font-semibold mb-6">Our Process</h2>
          <ol className="grid sm:grid-cols-4 gap-6 text-left text-gray-700 dark:text-gray-300">
            {[
              "Audit & Research",
              "Strategy Development",
              "Content & Campaign Launch",
              "Analyze & Optimize"
            ].map((step, i) => (
              <li key={i} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border-t-4 border-purple-600">
                <span className="block text-sm font-semibold text-purple-600 mb-1">Step {i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>
      </MotionWrapper>

      {/* CTA Section */}
      <MotionWrapper delay={0.4}>
        <section className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white p-10 rounded-xl text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Ready to Grow with ScrollCraft?
          </h2>
          <p className="mb-6 text-lg">
            Let’s boost your brand’s visibility and engagement today.
          </p>
          <Link href="/contact">
            <button className="bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Book a Free Consultation
            </button>
          </Link>
        </section>
      </MotionWrapper>
    </div>
  );
}
