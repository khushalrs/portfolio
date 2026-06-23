'use client';

import { ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  date: string;
  links: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] },
  }),
};

export default function ProjectTemplate({ project }: { project: ProjectItem }) {
  const visibleTech = project.techStack.slice(0, 5);
  const extraTech = project.techStack.length - 5;
  const images = project.images ?? [];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-8">

        {/* Back nav */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-400 transition hover:text-slate-200 hover:border-slate-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-sm text-slate-400">{project.date}</span>
          </div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl mb-6 leading-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {visibleTech.map((t) => (
              <span key={t} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300">
                {t}
              </span>
            ))}
            {extraTech > 0 && (
              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-400">
                +{extraTech} more
              </span>
            )}
          </div>
          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('/') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
                >
                  {link.name}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          )}
        </motion.div>

        {/* Overview */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mb-10">
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 md:p-8">
            <h2 className="text-lg font-semibold text-white mb-3">Overview</h2>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              {project.description}
            </p>
          </div>
        </motion.div>

        {/* Full tech stack */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span key={t} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm text-slate-300">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        {images.length > 0 && (
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mb-10">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Gallery</h2>
            <div
              className={`grid gap-4 ${
                images.length >= 4
                  ? 'grid-cols-2 md:grid-cols-3'
                  : images.length === 1
                  ? 'grid-cols-1'
                  : 'grid-cols-1 md:grid-cols-2'
              }`}
            >
              {images.map((img, i) => (
                <div key={i} className="relative aspect-video overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
                  <Image src={img.src} alt={img.alt} fill className="object-contain p-1" />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Links */}
        {project.links.length > 0 && (
          <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className="mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Links</h2>
            <div className="space-y-3">
              {project.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('/') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900 p-4 transition hover:border-slate-500 hover:bg-slate-800"
                >
                  <span className="text-slate-300">{link.name}</span>
                  <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-slate-300 transition" />
                </a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible" className="border-t border-slate-800 pt-8 flex flex-col items-center gap-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} Khushal Sharma</p>
        </motion.div>

      </div>
    </div>
  );
}
