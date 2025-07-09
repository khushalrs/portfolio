import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const PROJECT_CONTENT = [
  // === DRONE MAPPING PROJECT ===
  {
    title: 'Multi-Drone Infrastructure Mapping',
    description:
      'A multi-agent drone system that autonomously surveys and maps large infrastructure using stereo cameras and RTAB-Map SLAM in Gazebo. Each drone performs local mapping and fuses its map with others for a unified 3D reconstruction.',
    techStack: [
      'ROS 2', 'PX4', 'Gazebo', 'RTAB-Map', 'MAVROS', 'Python', 'C++'
    ],
    date: '2025',
    links: [
        {
            name: 'GitHub Repository',
            url: 'https://github.com/khushalrs/multi_drone_slam'
        }
    ],
    images: [
      { src: '/Drone1.png', alt: 'Drone mapping simulation in Gazebo' },
      { src: '/Drone2.png', alt: 'Drone mapping simulation in Gazebo' },
      { src: '/Drone3.png', alt: 'Drone mapping simulation in Gazebo' },
      { src: '/Drone4.png', alt: 'Drone mapping simulation in Gazebo' },
      { src: '/Drone5.png', alt: 'Drone mapping simulation in Gazebo' },
    ],
  },
  // === LIDNERF ===
  {
    title: 'LIDNeRF: Text-Guided Neural Radiance Field Editing',
    description:
      'Published research project on using diffusion models to edit NeRF scenes based on text prompts. Introduced an efficient loss that aligns score distillation sampling with spatial NeRF representations.',
    techStack: ['PyTorch', 'Stable Diffusion', 'NeRF', 'DreamFusion'],
    date: '2024',
    links: [
      {
        name: 'Paper',
        url: 'https://www.igi-global.com/article/lidnerf/369336',
      },
    ],
    images: [
      { src: '/Nerf1.png', alt: 'LIDNeRF scene edit example' },
      { src: '/Nerf2.png', alt: 'LIDNeRF scene edit example' },
      { src: '/Nerf3.png', alt: 'LIDNeRF scene edit example' },
      { src: '/Nerf4.png', alt: 'LIDNeRF scene edit example' },
      { src: '/Nerf5.png', alt: 'LIDNeRF scene edit example' },
      { src: '/Nerf6.png', alt: 'LIDNeRF scene edit example' },
      { src: '/Nerf7.png', alt: 'LIDNeRF scene edit example' },
    ],
  },
  // === ROBOT ARM ===
  {
    title: 'Inverse Kinematics on Robot Arm',
    description:
      'A web-controlled 5-DOF robot arm that performs object manipulation using inverse kinematics. Developed with ROS 2, MoveIt, and Gazebo simulation. Custom controllers enable real-time joint movement.',
    techStack: ['ROS2', 'MoveIt', 'Python', 'Gazebo', 'WebSocket', 'MATLAB'],
    date: '2024',
    links: [],
    images: [
      { src: '/RobotArm1.png', alt: 'Robot arm grabbing objects in simulation' },
      { src: '/RobotArm2.png', alt: 'Robot arm grabbing objects in simulation' },
      { src: '/RobotArm3.png', alt: 'Robot arm grabbing objects in simulation' },
    ],
  },
  // === BOAT ===
  {
    title: 'Autonomous Boat for Environmental Monitoring',
    description:
      'An ongoing research project at the DREAMS Lab involving an autonomous boat equipped with multiple sensors to measure depth, temperature, pressure, and other parameters in Tempe Town Lake. The system is designed for large-scale data collection and environmental analysis.',
    techStack: ['ROS2', 'C++', 'Python', 'Gazebo', 'PX4'],
    date: '2025',
    links: [],
    images: [
      { src: '/Boat1.PNG', alt: 'Autonomous boat deployed for research' },
      { src: '/Boat2.png', alt: 'Autonomous boat deployed for research' },
      { src: '/Boat3.png', alt: 'Autonomous boat deployed for research' },
      { src: '/Boat4.png', alt: 'Autonomous boat deployed for research' },
    ],
  },
  // === FACE RECOGNITION APP ===
  {
    title: 'Secure Video Player App with Face Recognition',
    description:
      'A Flutter-based app that combines video playback with biometric security. It uses a FaceNet TensorFlow Lite model for facial recognition to automatically log users into their profiles. All user data and media are securely managed through AWS services.',
    techStack: ['Flutter', 'Dart', 'TensorFlow Lite', 'AWS'],
    date: '2023',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/khushalrs/Flutter-VideoPlayer-with-FaceRecognition'
      }
    ],
    images: [],
  },
  // === IMAGE STEGANOGRAPHY ===
  {
    title: 'Image Steganography using Diffusion and GAN Models',
    description:
      "Capstone project for bachelor's degree that embeds secret messages within images using a hybrid of GANs and diffusion models. The diffusion process disguises hidden data while the GAN maintains high visual quality, making detection extremely difficult.",
    techStack: ['Python', 'PyTorch', 'GAN', 'Diffusion Models, UNet'],
    date: '2023',
    links: [{
        name: 'GitHub Repository',
        url: 'https://github.com/khushalrs/Image_Steganography_using_GAN_and_Diffusion_Models'
    }],
  },
  // === OTHER PROJECTS ===
  {
    title: 'CartoonGAN',
    description:
      'Implemented CartoonGAN to turn images into cartoon-style artwork. Trained on custom datasets and fine-tuned for edge enhancement.',
    techStack: ['PyTorch', 'GAN'],
    date: '2022',
    links: [
        {
            name: 'GitHub Repository',
            url: 'https://github.com/khushalrs/CartoonGAN-Implementation_PyTorch'
        }
    ],
  },
  {
    title: 'Exercise Counter',
    description:
      'Counts reps using pose keypoints from MediaPipe and OpenCV. Useful for fitness apps to automatically track workout sets.',
    techStack: ['MediaPipe', 'OpenCV', 'Python'],
    date: '2022',
    links: [
        {
            name: 'GitHub Repository',
            url: 'https://github.com/khushalrs/ML_Repo/tree/main/KneeBendCounter'
        }
    ],
  },
  {
    title: 'YouTube Spam Detection',
    description:
      'ML system that detects spam comments using TF-IDF and ensemble models. Built an end-to-end dataset scraper, annotator, and model trainer.',
    techStack: ['Python', 'Sklearn', 'Pandas'],
    date: '2022',
    links: [
        {
            name: 'GitHub Repository',
            url: 'https://github.com/khushalrs/ML_Repo/blob/main/Youtube_Spam_Comment_Detector.ipynb'
        }
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: '',
    title: '',
    src: '/Drone_preview.png',
    content: <ProjectContent project={{ title: 'Multi-Drone Infrastructure Mapping' }} />,
  },
  {
    category: 'Research Project',
    title: 'LIDNeRF',
    src: '/Nerf_preview.png',
    content: <ProjectContent project={{ title: 'LIDNeRF: Text-Guided Neural Radiance Field Editing' }} />,
  },
  {
    category: 'Course Project',
    title: 'Maze Solver',
    src: '/RobotArm_preview.png',
    content: <ProjectContent project={{ title: 'Inverse Kinematics on Robot Arm' }} />,
  },
  {
    category: 'Research Project',
    title: 'Boat',
    src: '/Boat_preview.png',
    content: <ProjectContent project={{ title: 'Autonomous Boat for Environmental Monitoring' }} />,
  },
  {
    category: 'Course Project',
    title: 'Video Player App',
    src: '/FaceApp_preview.png',
    content: <ProjectContent project={{ title: 'Secure Video Player App with Face Recognition' }} />,
  },
  {
    category: 'Research Project',
    title: 'Image Stegano-graphy',
    src: '/Steganography_preview.png',
    content: <ProjectContent project={{ title: 'Image Steganography using Diffusion and GAN Models' }} />,
  },
  {
    category: 'Course Project',
    title: 'CartoonGAN',
    src: '/CartoonGAN_preview.png',
    content: <ProjectContent project={{ title: 'CartoonGAN' }} />,
  },
  {
    category: 'Fun Tool',
    title: 'Exercise Counter',
    src: '/KneeRep_preview.png',
    content: <ProjectContent project={{ title: 'Exercise Counter' }} />,
  },
  {
    category: 'Automation',
    title: 'YouTube Spam Detection',
    src: '/youbotpreview.png',
    content: <ProjectContent project={{ title: 'YouTube Spam Detection' }} />,
  },
];
