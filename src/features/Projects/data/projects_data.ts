import type { IProjectsData } from "../../../interfaces/IProjectsData";
import { generateUniqueId } from "../../../utils/generateUniqueID";

export const projects: IProjectsData[] = [
  {
    id: generateUniqueId(),
    name: "Resume Tool",
    description:
      "A modern resume creation tool made with React as assignment from odinProject.",
    tags: ["Frontend"],
    year: "2024",
    stacks: ["ReactJS"],
    image:
      "https://image.noelshack.com/fichiers/2024/31/7/1722792178-image.png",
    category: "Web",
    demo: "https://odin-assignment-resume.vercel.app/",
    source_code:
      "https://github.com/SuperCoolNinja/ResumeTool?tab=readme-ov-file",
  },

  {
    id: generateUniqueId(),
    name: "Chatbox App",
    description:
      "A chatboxApp using NodeJS, Express, Socket.io, ReactJS, TailwindCSS with only one room.",
    tags: ["Fullstack"],
    year: "2023",
    stacks: ["ReactJS", "NodeJS", "Javascript", "Socket.IO", "TailwindCSS"],
    image:
      "https://image.noelshack.com/fichiers/2024/26/3/1719430745-screenshot-2024-06-26-213857.png",
    category: "Web",
    demo: "https://chatboxapp-client.vercel.app/",
    source_code: "https://github.com/SuperCoolNinja/chatboxapp-client",
  },

  {
    id: generateUniqueId(),
    name: "Pong Game",
    description: "a Pong Game made to learn and practise basic 2D Math Logic.",
    tags: ["Game Dev"],
    year: "2023",
    stacks: ["LUA", "LOVE2D"],
    image:
      "https://image.noelshack.com/fichiers/2024/26/3/1719431132-screenshot-2024-06-26-214537.png",
    category: "game development",
    source_code: "github.com/SuperCoolNinja/love2D-pongGame",
  },
];
