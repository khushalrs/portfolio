import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { findProjectBySlug, slugify } from '@/lib/slugify';
import { PROJECT_CONTENT } from '@/components/projects/Data';
import ProjectTemplate from '@/components/projects/ProjectTemplate';
import IllusionIQ from '@/components/projects/IllusionIQ';

export async function generateStaticParams() {
  return PROJECT_CONTENT.map((p) => ({ slug: slugify(p.title) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Khushal Sharma`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Khushal Sharma`,
      description: project.description,
      ...(project.images?.[0] ? { images: [{ url: project.images[0].src }] } : {}),
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProjectBySlug(slug);
  if (!project) notFound();
  if (slug === 'illusioniq') return <IllusionIQ />;
  return <ProjectTemplate project={project} />;
}
