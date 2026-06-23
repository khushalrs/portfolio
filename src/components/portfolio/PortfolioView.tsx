'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Briefcase,
  ExternalLink,
  MapPin,
} from 'lucide-react';
import Contact from '@/components/contact';

const SKILLS = [
  {
    category: 'Mobile & Frontend',
    skills: ['Flutter', 'Android', 'Java', 'HTML', 'CSS', 'Firebase', 'Amplify'],
    color: 'text-blue-400 border-blue-900 bg-blue-950/40',
  },
  {
    category: 'Backend & Systems',
    skills: ['Python', 'C++', 'Git', 'Docker', 'MySQL', 'ROS2', 'PX4'],
    color: 'text-emerald-400 border-emerald-900 bg-emerald-950/40',
  },
  {
    category: 'AI & Robotics',
    skills: [
      'Computer Vision', 'SLAM', 'NeRF', 'Gaussian Splatting',
      'PyTorch', 'OpenCV', 'LangChain', 'TensorFlow', 'MediaPipe', 'GPT & RAG',
    ],
    color: 'text-rose-400 border-rose-900 bg-rose-950/40',
  },
  {
    category: 'Cloud & Deployment',
    skills: ['AWS', 'Azure', 'Firebase', 'Amplify'],
    color: 'text-cyan-400 border-cyan-900 bg-cyan-950/40',
  },
  {
    category: 'Design & Creative',
    skills: ['Blender', 'Figma', 'Canva'],
    color: 'text-indigo-400 border-indigo-900 bg-indigo-950/40',
  },
  {
    category: 'Soft Skills',
    skills: ['Communication', 'Problem-Solving', 'Adaptability', 'Teamwork', 'Creativity'],
    color: 'text-purple-400 border-purple-900 bg-purple-950/40',
  },
];

const EXPERIENCE = [
  {
    company: 'SiClarity Software Solutions',
    role: 'Software Development Intern',
    period: '2023',
    bullets: [
      'Built an ML prototype for knowledge management, reducing manual effort by 30%',
      'Migrated CI/CD pipelines from GitLab to GitHub across the engineering org',
      'Deployed Flask APIs for ML model serving, improving deployment speed by 25%',
    ],
  },
  {
    company: 'Celebal Technologies',
    role: 'Data Science Intern',
    period: '2023',
    bullets: [
      'Built an OpenAI-powered chatbot with Azure AI Document Intelligence and CosmosDB',
      'Implemented semantic search using LangChain and RedisSearch for real-time retrieval',
    ],
  },
];

const FEATURED_PROJECTS = [
  {
    title: 'Multi-Drone Infrastructure Mapping',
    href: '/projects/multi-drone-infrastructure-mapping',
    image: '/Drone/Drone_preview.png',
    tech: ['ROS2', 'PX4', 'SLAM'],
    desc: 'Multi-agent drone system for autonomous 3D infrastructure mapping using RTAB-Map in Gazebo.',
  },
  {
    title: 'LIDNeRF',
    href: '/projects/lidnerf-text-guided-neural-radiance-field-editing',
    image: '/Nerf/Nerf_preview.png',
    tech: ['PyTorch', 'NeRF', 'Stable Diffusion'],
    desc: 'Published research on text-guided editing of NeRF scenes using score distillation sampling.',
  },
  {
    title: 'Robot Arm IK',
    href: '/projects/inverse-kinematics-on-robot-arm',
    image: '/RobotArm/RobotArm_preview.png',
    tech: ['ROS2', 'MoveIt', 'WebSocket'],
    desc: 'Web-controlled 5-DOF robot arm with real-time joint control via inverse kinematics.',
  },
  {
    title: 'Autonomous Boat',
    href: '/projects/autonomous-boat-for-environmental-monitoring',
    image: '/Boat/Boat_preview.png',
    tech: ['ROS2', 'C++', 'PX4'],
    desc: 'Ongoing DREAMS Lab project: sensor-equipped autonomous boat for lake environmental monitoring.',
  },
  {
    title: 'IllusionIQ',
    href: '/projects/illusioniq',
    image: '/IllusionIQ/Flip.png',
    tech: ['Python', 'Diffusion Models', 'Gemini API'],
    desc: 'Benchmarking multimodal LLMs on 447 generated optical illusions across six categories.',
  },
];

const PUBLICATIONS = [
  {
    title: 'LIDNeRF: Text-Guided Neural Radiance Field Editing',
    authors: 'Khushal Sharma et al.',
    venue: 'IGI Global',
    year: 2025,
    url: 'https://www.igi-global.com/article/lidnerf/369336',
    abstract:
      'Introduces an efficient loss function aligning score distillation sampling with spatial NeRF representations for text-guided 3D scene editing using diffusion models.',
    tags: ['NeRF', 'Diffusion Models', 'Computer Vision', '3D Editing'],
  },
  {
    title: 'Image Steganography Through Hybrid Diffusion-GAN Models',
    authors: 'Khushal Sharma et al.',
    venue: "Bachelor's Capstone",
    year: 2023,
    url: 'https://github.com/khushalrs/Image_Steganography_using_GAN_and_Diffusion_Models',
    abstract:
      'Embeds secret messages within images using a hybrid of GANs and diffusion models, achieving high visual quality while making detection extremely difficult.',
    tags: ['Steganography', 'GAN', 'Diffusion Models', 'Security'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
  }),
};

export default function PortfolioView() {
  return (
    <div className="dark min-h-screen bg-slate-950 text-slate-200 font-sans">
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-8">

        {/* Back nav */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-400 transition hover:text-slate-200 hover:border-slate-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.section
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-20 flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3 text-sm text-slate-400">
              <MapPin className="h-4 w-4" />
              Tempe, Arizona · ASU DREAMS Lab
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-3 leading-tight">
              Khushal Sharma
            </h1>
            <p className="text-xl text-blue-400 font-medium mb-5">
              AI Developer & Robotics Researcher
            </p>
            <p className="text-slate-300 leading-relaxed text-base max-w-xl mb-6">
              Master&apos;s in Robotics & Autonomous Systems (AI concentration) at ASU. Building smart systems at the intersection of AI, robotics, and 3D vision. Currently working on my thesis at the DREAMS Lab with Dr. Das.
            </p>
            <div className="flex flex-wrap gap-2">
              {['AI', 'Robotics', 'Drones', '3D Vision', 'SLAM', 'NeRF'].map((tag) => (
                <span key={tag} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative h-36 w-36 overflow-hidden rounded-2xl border-2 border-slate-700 md:h-52 md:w-52">
              <Image
                src="/profil-khushal.png"
                alt="Khushal Sharma"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-5 w-5 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Experience</h2>
          </div>
          <div className="relative pl-7 border-l border-slate-700 space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-blue-500 bg-slate-950" />
                <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                    <h3 className="text-base font-semibold text-white">{exp.company}</h3>
                    <span className="text-xs text-slate-400 border border-slate-700 rounded-full px-2.5 py-0.5 self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-blue-400 mb-3">{exp.role}</p>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-slate-300 flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-600 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section custom={3} variants={fadeUp} initial="hidden" animate="visible" className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Skills & Expertise</h2>
          <div className="space-y-7">
            {SKILLS.map((section, i) => (
              <div key={i}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                  {section.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium ${section.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
            <Link
              href="/chat?query=What are your projects?"
              className="text-sm text-slate-400 hover:text-slate-200 transition flex items-center gap-1"
            >
              Ask the AI <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PROJECTS.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="group block rounded-2xl border border-slate-700 bg-slate-900 overflow-hidden transition hover:border-slate-500 hover:bg-slate-800"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-white mb-2 text-sm leading-snug">{p.title}</h3>
                  <p className="text-xs text-slate-400 mb-3 line-clamp-2">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-slate-700 bg-slate-800 px-2 py-0.5 text-xs text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Research & Publications */}
        <motion.section custom={5} variants={fadeUp} initial="hidden" animate="visible" className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-5 w-5 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Research & Publications</h2>
          </div>
          <div className="space-y-4">
            {PUBLICATIONS.map((pub, i) => (
              <div key={i} className="rounded-2xl border border-slate-700 bg-slate-900 p-5 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-white text-base leading-snug">{pub.title}</h3>
                  <span className="text-xs text-slate-400 border border-slate-700 rounded-full px-2.5 py-0.5 flex-shrink-0 self-start">
                    {pub.year}
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-1">{pub.authors}</p>
                <p className="text-xs font-medium text-blue-400 mb-3">{pub.venue}</p>
                <p className="text-sm text-slate-300 mb-4 line-clamp-2">{pub.abstract}</p>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((t) => (
                      <span key={t} className="rounded-full border border-slate-700 bg-slate-800 px-2 py-0.5 text-xs text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition flex-shrink-0"
                  >
                    View <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section custom={6} variants={fadeUp} initial="hidden" animate="visible" className="mb-16">
          <Contact />
        </motion.section>

        {/* Footer */}
        <motion.div
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="border-t border-slate-800 pt-8 text-center"
        >
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} Khushal Sharma · Built with Next.js</p>
        </motion.div>

      </div>
    </div>
  );
}
