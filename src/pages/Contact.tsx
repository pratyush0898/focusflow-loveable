
import { AnimatedPage } from "@/components/AnimatedPage";
import { Link } from "react-router-dom";
import { MessageSquare, User } from "lucide-react";

const Contact = () => (
  <AnimatedPage>
    <section className="max-w-md mx-auto mt-12 px-2 pb-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 font-inter text-gray-900">Contact Us</h1>
      <p className="text-center text-gray-600 mb-8">
        Got questions about FocusFlow? Want to join our private beta or just say hi?
      </p>
      <form className="bg-white rounded-2xl shadow p-8 flex flex-col gap-5 border border-gray-100">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
          <input id="name" disabled className="w-full border rounded px-3 py-2 bg-gray-50" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
          <input id="email" disabled className="w-full border rounded px-3 py-2 bg-gray-50" placeholder="email@example.com" />
        </div>
        <div>
          <label htmlFor="msg" className="block mb-1 font-medium text-gray-700">Message</label>
          <textarea id="msg" disabled rows={3} className="w-full border rounded px-3 py-2 bg-gray-50" placeholder="Let us know how we can help!"></textarea>
        </div>
        <button disabled className="bg-primary text-white px-6 py-3 rounded font-semibold opacity-80 cursor-not-allowed">Send Message (Demo Only)</button>
      </form>
      <div className="flex flex-col items-center mt-8 gap-1">
        <div className="flex gap-3 mt-3">
          <a href="mailto:hello@focusflow.com" className="inline-flex items-center gap-1 text-primary font-medium hover:underline"><User className="w-5 h-5" /> hello@focusflow.com</a>
          <span className="opacity-40">|</span>
          <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-1 text-primary font-medium hover:underline"><MessageSquare className="w-5 h-5" /> Twitter</a>
        </div>
        <Link to="/" className="mt-7 bg-cta-gradient px-7 py-3 rounded-lg text-lg font-semibold text-white hover:scale-105 transition-transform font-inter">Back to Home</Link>
      </div>
    </section>
  </AnimatedPage>
);

export default Contact;
