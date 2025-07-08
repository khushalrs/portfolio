'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

const InternshipCard = () => {
  const openMail = () => {
    window.open('mailto:khushalrrs@gmail.com', '_blank');
  };
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-md">
            <img
              src="/avatar-khushal.png"
              alt="Khushal's avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Khushal Sharma
            </h2>
            <p className="text-muted-foreground text-sm">
              Job Application
            </p>
          </div>
        </div>

        {/* Live badge */}
        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Live
          </span>
        </div>
      </div>

      {/* Internship Info */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
  <div className="flex items-start gap-3">
    <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
    <div>
      <p className="text-foreground text-sm font-medium">Start Date</p>
      <p className="text-muted-foreground text-sm">
        Full-time roles starting January 2026 (graduating Fall 2025)
      </p>
    </div>
  </div>
  <div className="flex items-start gap-3">
    <Globe className="mt-1 h-5 w-5 text-green-500" />
    <div>
      <p className="text-foreground text-sm font-medium">Location</p>
      <p className="text-muted-foreground text-sm">
        Preferably San Francisco — open to remote, hybrid, or on-site across the U.S.
      </p>
    </div>
  </div>

  {/* Target Roles */}
  <div className="flex items-start gap-3 sm:col-span-2">
    <Code2 className="mt-1 h-5 w-5 text-purple-500" />
    <div className="w-full">
      <p className="text-foreground text-sm font-medium">Roles I'm Targeting</p>
      <p className="text-muted-foreground text-sm">
        Machine Learning Engineer, Data Scientist, Data Analyst, Robotics Engineer, ML Researcher — anywhere I can blend AI with real-world results.
      </p>
    </div>
  </div>

  {/* Tech stack */}
  <div className="flex items-start gap-3 sm:col-span-2">
    <Code2 className="mt-1 h-5 w-5 text-yellow-500" />
    <div className="w-full">
      <p className="text-foreground text-sm font-medium">Stack & Skills</p>
      <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2">
        <ul className="list-disc pl-4">
          <li>Python, C++, Java, Flutter, Arduino</li>
          <li>PyTorch, OpenCV, GPTs, RAG, LangChain</li>
          <li>ROS 2, PX4, SLAM, MAVROS, Flask</li>
          <li>Data Analysis, Visualization, Prompt Engineering</li>
        </ul>
        <ul className="list-disc pl-4">
          <li>Machine Learning, Deep Learning</li>
          <li>Sensor Fusion, Embedded Systems</li>
          <li>Hackathon building & MVP prototyping</li>
          <li>
            <a
              href="/chat?query=What%20are%20your%20skills%3F%20Give%20me%20a%20list%20of%20your%20soft%20and%20hard%20skills."
              className="cursor-pointer items-center text-blue-500 underline"
            >
              See more
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* Visa */}
  <div className="flex items-start gap-3 sm:col-span-2">
    <Code2 className="mt-1 h-5 w-5 text-red-500" />
    <div>
      <p className="text-foreground text-sm font-medium">Visa Status</p>
      <p className="text-muted-foreground text-sm">
        No sponsorship needed — on STEM OPT until 2029 (F1 visa)
      </p>
    </div>
  </div>
</div>

{/* What I bring */}
<div className="mt-10">
  <p className="text-foreground mb-2 text-lg font-semibold">What I bring</p>
  <p className="text-foreground text-sm">
    Real-world AI and robotics experience from labs, courses, and personal projects.<br />
    6-month thesis in multi-drone SLAM with PX4, ROS2, and Gazebo.<br />
    I’ve built secure apps, worked with generative models, and done research on NeRF editing.<br />
    Bonus: I cook a mean Chole Bhature and debug like it’s a sport 😎
  </p>
</div>

{/* Goal */}
<div className="mt-8">
  <p className="text-foreground mb-2 text-lg font-semibold">Goal</p>
  <p className="text-foreground text-sm">
    Join a bold, innovative team building AI-powered tools that matter. I want to push boundaries, learn fast, build cool stuff, and leave a dent in the tech universe. Hungry, curious, and (slightly) caffeinated 🔥
  </p>
</div>


      {/* Contact button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Contact me
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipCard;
