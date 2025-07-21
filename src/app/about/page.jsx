export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-12 text-white">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight text-white">About ScrollCraft</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Your brand has a story. We help you tell it — louder, clearer, and more creatively.
        </p>
      </div>

      {/* Story Section */}
      <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
        <p>
          At <span className="font-semibold text-white">ScrollCraft</span>, we’re not just marketers — we’re storytellers. We specialize in turning social media platforms into brand-building, revenue-generating channels.
        </p>
        <p>
          Our team blends creative strategy, design, and data to build meaningful digital experiences. Whether you’re a startup looking to establish your presence, or a brand ready to scale — we craft solutions that move the needle.
        </p>
        <p>
          We’ve helped brands grow from <span className="font-medium text-white">0 to 100k+ followers</span>, achieve <span className="font-medium text-white">5x ROI on ad spend</span>, and foster loyal communities that fuel long-term success.
        </p>
        <p>
          With a proven track record, ScrollCraft becomes an extension of your team — delivering not just likes, but leads and loyalty.
        </p>
      </div>

      {/* Clients Section */}
      <div className="bg-white/10 p-8 rounded-2xl shadow-md space-y-4 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold text-white">Trusted by Forward-Thinking Brands</h3>
        <p className="text-gray-300">
          From D2C startups to established eCommerce companies, we've partnered with brands to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>Boost engagement by over 300% in under 3 months</li>
          <li>Grow social followings from scratch to tens of thousands</li>
          <li>Launch viral content campaigns that drive real business impact</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center pt-6">
        <h4 className="text-xl font-semibold mb-2 text-white">Let’s craft your scroll-stopping story.</h4>
        <button className="px-6 py-3 bg-white text-blue-900 rounded-xl text-lg font-medium hover:bg-gray-100 transition cursor-pointer">
          Get in Touch
        </button>
      </div>
    </section>
  );
}
