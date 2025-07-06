import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Raphael Giraud. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Khushal Sharma, an AI and robotics enthusiast finishing my Master’s at ASU. Born in Mumbai, I enjoy building smart systems, sketching when bored, and making tech do the heavy lifting. Big fan of automation, visual feedback, and watching robots navigate the world."
    };
  },
});
