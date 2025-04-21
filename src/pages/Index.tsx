
import { AnimatedPage } from "@/components/AnimatedPage";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <AnimatedPage>
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-2 mt-8">
        <div className="flex-1 order-2 md:order-1 text-center md:text-left max-w-lg">
          <h1 className="text-5xl md:text-6xl font-bold font-inter mb-4 text-gray-900 leading-tight animate-fade-in">
            Stay Focused.<br />
            Get More Done with <span className="text-primary">FocusFlow</span>
          </h1>
          <p className="text-lg font-inter text-gray-700 mb-8 animate-fade-in">
            Intelligent productivity companion for students & pros. Manage tasks, power through your day with the Pomodoro timer, and get inspired, all in one modern app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/features" className="bg-cta-gradient hover:scale-105 transition-transform text-white font-semibold px-7 py-3 rounded-lg shadow text-lg">Try It Free</Link>
            <Link to="/contact" className="px-7 py-3 rounded-lg border border-primary text-primary font-semibold bg-white hover:bg-primary hover:text-white transition-all text-lg">Join Waitlist</Link>
          </div>
        </div>
        <div className="flex-1 order-1 md:order-2 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
            alt="FocusFlow app demo"
            className="rounded-3xl shadow-2xl border-2 border-gray-200 max-w-xs md:max-w-md animate-fade-in"
            draggable={false}
          />
        </div>
      </section>
      <section className="mt-20 text-center px-2" id="get-started">
        <h2 className="text-3xl font-inter font-bold mb-3 text-gray-900">Reclaim your productivity</h2>
        <p className="text-gray-600 text-lg mb-7 max-w-lg mx-auto">FocusFlow combines simple task tracking, Pomodoro focus sessions, and daily motivational quotes to help you crush your goals.</p>
        <Link to="/features" className="bg-cta-gradient text-white font-semibold py-3 px-9 rounded-lg text-lg shadow hover:scale-105 transition-transform inline-block">Get Started</Link>
      </section>
    </AnimatedPage>
  );
};

export default Index;
