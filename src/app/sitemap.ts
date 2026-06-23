import type { MetadataRoute } from 'next';
import { PROJECT_CONTENT } from '@/components/projects/Data';
import { slugify } from '@/lib/slugify';

const BASE_URL = 'https://portfolio.khushalsharma.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = PROJECT_CONTENT.map((p) => ({
    url: `${BASE_URL}/projects/${slugify(p.title)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/chat`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...projectUrls,
  ];
}
