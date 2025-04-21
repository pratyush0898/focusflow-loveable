
import { AnimatedPage } from "@/components/AnimatedPage";

const About = () => (
  <AnimatedPage>
    <section className="max-w-3xl mx-auto py-16 px-3 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-inter">The Story Behind FocusFlow</h1>
      <p className="text-lg text-gray-600 mb-6">
        FocusFlow was designed by students and professionals for students and professionals. We know what it's like to feel overwhelmed by tasks, notifications, and distractions.
      </p>
      <blockquote className="italic text-primary text-xl my-8 font-inter">
        "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort."
      </blockquote>
      <div className="bg-peach rounded-xl p-8 shadow">
        <h2 className="text-2xl font-semibold mb-2 font-inter">Our Mission</h2>
        <p className="text-gray-700">
          To empower you to become your most focused, productive self with beautifully simple tools. From university lecture halls to busy remote offices, FocusFlow is there to help you do your best work every day.
        </p>
      </div>
    </section>
  </AnimatedPage>
);

export default About;
