import type { Metadata } from 'next';
import PortfolioView from '@/components/portfolio/PortfolioView';

export const metadata: Metadata = {
  title: 'Portfolio | Khushal Sharma',
  description:
    "Browse Khushal Sharma's projects, research, skills, and experience in AI, Robotics, Computer Vision, and SLAM.",
  openGraph: {
    title: 'Portfolio | Khushal Sharma',
    description:
      "Projects, research, and experience from a Robotics & AI Master's student at ASU.",
    images: [{ url: '/landing-memojis.png' }],
  },
};

export default function PortfolioPage() {
  return <PortfolioView />;
}
