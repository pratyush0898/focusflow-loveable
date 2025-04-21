
import { AnimatedPage } from "@/components/AnimatedPage";
import { CheckCircle, BookOpen, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const featureList = [
  {
    title: "Task Manager",
    Icon: CheckCircle,
    desc: "Organize, prioritize, and conquer your to-dos with lightning-fast, distraction-free lists.",
    color: "from-primary to-accent",
  },
  {
    title: "Pomodoro Timer",
    Icon: BookOpen,
    desc: "Work smarter with built-in Pomodoro sessions: focus, break, repeat—science-backed productivity.",
    color: "from-accent to-peach",
  },
  {
    title: "Motivational Quotes",
    Icon: MessageSquare,
    desc: "Daily inspiration to help you push through challenges and finish strong.",
    color: "from-peach to-primary",
  }
];

const featureVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.48 }
  }),
};

const Features = () => (
  <AnimatedPage>
    <section className="max-w-5xl mx-auto px-3 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-inter text-gray-900">Everything You Need to Focus <span className="text-primary">— All In One Place</span></h1>
      <div className="grid md:grid-cols-3 gap-9">
        {featureList.map((feature, i) => (
          <motion.div
            key={feature.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.75 }}
            variants={featureVariants}
            className={`bg-white shadow-lg rounded-2xl p-7 flex flex-col items-center text-center border-t-4 bg-gradient-to-br ${feature.color} hover:scale-105 transition-transform`}
          >
            <feature.Icon className="w-12 h-12 mb-3 text-primary" />
            <h2 className="font-semibold text-2xl mb-2">{feature.title}</h2>
            <p className="text-gray-700 mb-2">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-14">
        <Link to="/contact" className="bg-cta-gradient py-4 px-8 rounded-lg font-inter font-semibold text-white text-xl shadow hover:scale-105 transition-transform">Try FocusFlow FREE</Link>
      </div>
    </section>
  </AnimatedPage>
);

export default Features;
