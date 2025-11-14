// ...existing code...
import React from 'react';

type LinkItem = { label: string; href: string };
type ImgItem = { src: string; alt: string };

const PROJECT: {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  tech: string[];
  links: LinkItem[];
  images: ImgItem[];
} = {
  title: "IllusionIQ",
  subtitle:
    "Evaluating Multimodal LLMs on Optical Illusions – generation, benchmarking, and insights.",
  description:
    "A CSE576 (NLP) course project exploring whether state-of-the-art multimodal LLMs can recognize and interpret optical illusions. We built a reproducible pipeline to generate 447 illusion pairs across six categories using diffusion models, then benchmarked GPT-4o, GPT-4.1, o4-mini, and Gemini 2.0 Flash with a standardized question set.",
  date: "Spring 2025",
  tech: [
    "Python",
    "PyTorch",
    "Diffusion Models",
    "Hugging Face",
    "OpenAI API",
    "Gemini API",
    "Google Colab",
    "ASU SOL HPC",
  ],
  links: [
    { label: "Paper / Report (PDF)", href: "#" },
    { label: "GitHub Repository", href: "https://github.com/likhity/illusioniq" },
  ],
  images: [
    { src: "/IllusionIQ/Flip.png", alt: "Flip anagram: giraffe ↔ penguin" },
    { src: "/IllusionIQ/Rotation.png", alt: "Rotation: mountain village ↔ horse" },
    { src: "/IllusionIQ/Jigsaw.png", alt: "Jigsaw: forest fox ↔ mountain cabin" },
    { src: "/IllusionIQ/TextBlend.png", alt: "Text-blend: hidden word in cracked pavement" },
    { src: "/IllusionIQ/MultiObject.png", alt: "City ↔ Cow" },
  ],
};

const STATS = {
  totalPairs: 447,
  categories: [
    { name: "Color Hybrids", count: 49 },
    { name: "Flips", count: 48 },
    { name: "Jigsaw", count: 35 },
    { name: "Multi-Object Hybrids", count: 49 },
    { name: "Rotations", count: 186 },
    { name: "Text-Blend Hybrids", count: 80 },
  ],
};

const RESULTS = [
  { model: "Gemini 2.0 Flash", total: 447, correct: "12 (2.7%)", falseAffirm: "410 (91.7%)", q1Neg: "25 (5.6%)" },
  { model: "GPT-4o", total: 447, correct: "11 (2.5%)", falseAffirm: "412 (92.2%)", q1Neg: "24 (5.4%)" },
  { model: "o4-mini", total: 447, correct: "11 (2.5%)", falseAffirm: "415 (92.9%)", q1Neg: "21 (4.7%)" },
  { model: "GPT-4.1", total: 447, correct: "17 (3.8%)", falseAffirm: "403 (90.2%)", q1Neg: "27 (6.0%)" },
];

// Simple helper
const Card: React.FC<{ className?: string; children?: React.ReactNode }> = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-slate-700 bg-slate-900 shadow-sm ${className}`}>{children}</div>
);

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-4 text-center">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-xs text-slate-400">{label}</div>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(60%_60%_at_50%_0%,#3b82f640_0%,transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {PROJECT.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-400">
            {PROJECT.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400">
              <span className="h-2 w-2 rounded-full bg-blue-500" /> {PROJECT.date}
            </span>
            {PROJECT.tech.slice(0, 5).map((t) => (
              <span key={t} className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400">
                {t}
              </span>
            ))}
            {PROJECT.tech.length > 5 && (
              <span className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400">+{PROJECT.tech.length - 5} more</span>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {PROJECT.links.map((l) => {
              const isExternal = l.href.startsWith("http");
              return (
                <a
                  key={l.href + l.label}
                  href={l.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <span>🔗</span>
                  <span>{l.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <Card className="p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="mt-3 text-slate-400 leading-relaxed">
                {PROJECT.description}
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <Stat label="Illusion Pairs" value={STATS.totalPairs.toString()} />
                <Stat label="Categories" value={STATS.categories.length.toString()} />
                <Stat label="Models Benchmarked" value={RESULTS.length.toString()} />
                <Stat label="Course" value="CSE524 (NLP)" />
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <h2 className="mb-4 text-xl font-semibold">Illusion Categories</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.categories.map((c) => (
            <Card key={c.name} className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">{c.name}</p>
                  <p className="text-2xl font-semibold">{c.count}</p>
                </div>
                <span className="text-2xl">🌀</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <h2 className="mb-4 text-xl font-semibold">Sample Gallery</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {PROJECT.images.map((img) => (
            <figure key={img.src} className="group overflow-hidden rounded-xl border border-slate-700">
              <img
                src={img.src}
                alt={img.alt}
                width={500}
                height={500}
                className="aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="px-3 py-2 text-xs text-slate-400">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <Card className="p-6 md:p-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-xl font-semibold">Benchmark Results</h2>
            <p className="text-sm text-slate-400">Correct mappings remain <span className="font-medium">&lt; 4%</span> across models; high false-affirmation rates indicate overconfidence without precise transformation reasoning.</p>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-left text-slate-400">
                  <th className="py-2 pr-4">Model</th>
                  <th className="py-2 pr-4">Total Images</th>
                  <th className="py-2 pr-4">Correct Mappings</th>
                  <th className="py-2 pr-4">False Affirmations</th>
                  <th className="py-2 pr-0">Q1 Negatives</th>
                </tr>
              </thead>
              <tbody>
                {RESULTS.map((r) => (
                  <tr key={r.model} className="border-b border-slate-700 last:border-b-0">
                    <td className="py-3 pr-4 font-medium">{r.model}</td>
                    <td className="py-3 pr-4">{r.total}</td>
                    <td className="py-3 pr-4">{r.correct}</td>
                    <td className="py-3 pr-4">{r.falseAffirm}</td>
                    <td className="py-3 pr-0">{r.q1Neg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Methods / Pipeline */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Generation Pipeline</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-400 space-y-1">
              <li>Visual Anagrams & Factorized Diffusion (DeepFloyd IF) for anagrams / hybrids</li>
              <li>Illusion-Diffusion for text-blend hybrids</li>
              <li>Prompt-pair batching, negative prompts, guidance & noise tuning</li>
              <li>Manual curation and metadata for reproducibility</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Evaluation Protocol</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-400 space-y-1">
              <li>Paired views per illusion (canonical + transformed)</li>
              <li>5-question template probing ambiguity, category, and transformation mapping</li>
              <li>Metrics: correct mappings, false affirmations, Q1 negatives</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="border-t border-slate-700">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-center gap-3">
              {PROJECT.links.map((l) => {
                const isExternal = l.href.startsWith("http");
                return (
                  <a
                    key={l.href + l.label + "-footer"}
                    href={l.href}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800"
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <span>🔗</span>
                    <span>{l.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-400">© {new Date().getFullYear()} IllusionIQ. Built by Khushal Sharma & Likhit Vyas for CSE576 (NLP).</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
// ...existing code...