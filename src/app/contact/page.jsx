export default function Contact() {
  return (
    <form className="max-w-xl mx-auto grid gap-4">
      <h2 className="text-3xl font-bold mb-2">Let's Connect</h2>
      <input type="text" placeholder="Your Name" className="p-3 border rounded" />
      <input type="email" placeholder="Your Email" className="p-3 border rounded" />
      <textarea placeholder="Your Message" className="p-3 border rounded" rows="5" />
      <button className="bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition">
        Send Message
      </button>
    </form>
  );
}
