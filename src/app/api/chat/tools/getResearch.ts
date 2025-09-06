import { tool } from 'ai';
import { z } from "zod";

const researchData = {
  publications: [
    {
      id: "pub1",
      title: "LIDNeRF: Text-Guided Neural Radiance Field Editing",
      authors: "Khushal Hemant Sharma, Vaishali Kulkarni, Manan Shah, and Aniruddh Vinay Kulkarni",
      venue: "International Journal of Intelligent Information Technologies",
      year: 2025,
      url: "https://www.igi-global.com/article/lidnerf/369336",
      abstract: "We present LIDNeRF, a novel approach for editing Neural Radiance Fields (NeRF) using text prompts. Our method leverages the power of diffusion models to guide the editing process, introducing an efficient loss function that better aligns score distillation sampling with the spatial representation in NeRFs.",
      tags: ["NeRF", "Diffusion Models", "Computer Graphics", "Text-to-3D"],
      image: "/Nerf1.png"
    },
    {
      id: "pub2",
      title: "Image Steganography Through Hybrid Diffusion-GAN Models",
      authors: "Khushal Sharma, Soham Singhal, Rohit Raval and Vaishali Kulkarni",
      year: 2023,
      url: "https://example.com/publication3https://github.com/khushalrs/Image_Steganography_using_GAN_and_Diffusion_Models/blob/main/Image_Steganography_Paper.pdf",
      abstract: "This project presents an innovative solution for secure message transmission by harnessing the power of image steganography along with generative adversarial networks and diffusion models. Our approach involves the forward diffusion of a concealed image into a cover image, allowing for the covert transmission of sensitive information between devices. When the concealed image is retrieved, it can be seamlessly reverse-diffused to reveal the hidden message.",
      tags: ["Image Steganography", "GAN", "Diffusion Models", "Information Security"],
      image: "/Steganography_preview.png"
    }
  ],
  projects: [
    {
      id: "res1",
      title: "Text-Guided 3D Scene Editing",
      description: "Research project focused on developing methods to edit 3D scenes represented as Neural Radiance Fields (NeRF) using natural language text prompts. The project explores diffusion models for guiding the editing process.",
      duration: "2023 - 2024",
      collaborators: ["Dr. Vaishali Kulkarni", "AI Lab"],
      tags: ["NeRF", "Diffusion Models", "3D Generation", "Text-to-3D"],
      relatedPublications: ["pub1"],
      image: "/Nerf_preview.png"
    },
    {
      id: "res2",
      title: "Autonomous Systems for Environmental Monitoring",
      description: "Ongoing research developing autonomous boats and drones for environmental data collection and monitoring. Systems are designed for long-duration deployment in various weather conditions to collect comprehensive environmental data.",
      duration: "2025 - Present",
      collaborators: ["DREAMS Lab", "Dr. Jnaneshwar Das"],
      tags: ["Autonomous Systems", "Environmental Monitoring", "Robotics"],
      image: "/Boat_preview.png"
    },
    {
      id: "res3",
      title: "Advanced Image Steganography Techniques",
      description: "Research exploring novel methods for hiding information in images using machine learning techniques. The project developed a hybrid approach using GANs and diffusion models to create steganographic images that are resistant to detection.",
      duration: "2022 - 2023",
      tags: ["Image Steganography", "Information Security", "Machine Learning"],
      relatedPublications: ["pub2"],
      image: "/Steganography_preview.png"
    }
  ]
};

export const getResearch = tool({
  description: 'Get information about research projects and publications',
  parameters: z.object({}),
  execute: async () => {
    return researchData;
  },
});
