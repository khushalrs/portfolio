import { PROJECT_CONTENT } from '@/components/projects/Data';

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function findProjectBySlug(slug: string) {
  return PROJECT_CONTENT.find((p) => slugify(p.title) === slug) ?? null;
}
