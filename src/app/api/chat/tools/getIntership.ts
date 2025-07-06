import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of job I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my job search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here's what I'm looking for 👇

- 📅 **Start Date**: Actively looking for **full-time roles starting January 2026** (graduating Fall 2025)
- 🌍 **Location**: Anywhere in the **United States** — remote, hybrid, on-site — as long as the work's exciting
- 🧠 **Roles I'm Targeting**: Machine Learning Engineer, Data Scientist, Data Analyst, Robotics Engineer — basically, anywhere I can blend AI with real-world results
- 🛠️ **Stack & Skills**: Python, C++, ROS2, PX4, React/Next.js, Tailwind, TypeScript, OpenCV, PyTorch, GPTs, RAG, SLAM, LangChain, Flask — and a decent amount of hacking stuff together when needed 😅
- 🪪 **Visa**: No sponsorship needed for now — I've got 3 years of OPT (STEM F1), so we're chill till 2029

✅ **What I bring to the table**:
- Built and deployed ML-powered tools and full-stack apps in real-world environments (SiClarity, Celebal)
- Worked on autonomous drone navigation, NeRF editing with diffusion models, and multi-agent SLAM with ROS2
- Love shipping fast, debugging deep, and occasionally making robots dance
- Not just research for the sake of publishing — I care about stuff that works, scales, and maybe breaks in interesting ways

📬 **Let's chat**:
- Email: [sharma.khushal96@gmail.com](mailto:sharma.khushal96@gmail.com)
- LinkedIn: [linkedin.com/sharma-khushal](https://www.linkedin.com/in/sharma-khushal)
- GitHub: [github.com/khushalrs](https://github.com/khushalrs)

Let's build something cool together 🤖🔥
    `;
  },
});
