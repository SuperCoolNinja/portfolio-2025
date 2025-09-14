import type { IProjectsData } from "../../../interfaces/IProjectsData";
import { generateUniqueId } from "../../../utils/generateUniqueID";
import { tagColors } from "../../../utils/colors";

export const projects: IProjectsData[] = [
  {
    id: generateUniqueId(),
    name: "Resume Tool",
    description:
      "A modern resume creation tool made with React as assignment from odinProject.",
    tag: "Frontend",
    year: "2024",
    stacks: ["ReactJS"],
    image:
      "https://image.noelshack.com/fichiers/2024/31/7/1722792178-image.png",
    category: "Web",
    demo: "https://odin-assignment-resume.vercel.app/",
    source_code:
      "https://github.com/SuperCoolNinja/ResumeTool?tab=readme-ov-file",
    ...tagColors["Frontend"],
  },

  {
    id: generateUniqueId(),
    name: "Chatbox App",
    description:
      "A chatboxApp using NodeJS, Express, Socket, ReactJS, TailwindCSS with only one room.",
    tag: "Fullstack",
    year: "2023",
    stacks: ["ReactJS", "NodeJS", "Javascript", "Socket", "TailwindCSS"],
    image:
      "https://image.noelshack.com/fichiers/2024/26/3/1719430745-screenshot-2024-06-26-213857.png",
    category: "Web",
    demo: "https://chatboxapp-client.vercel.app/",
    source_code: "https://github.com/SuperCoolNinja/chatboxapp-client",
    ...tagColors["Fullstack"],
  },

  {
    id: generateUniqueId(),
    name: "Authentication",
    description:
      "An authentication system I created that allowed me to deepen my understanding of API, backend, and security through the use of JWT.",
    tag: "Fullstack",
    year: "2023",
    stacks: ["Html", "Sass", "Typescript", "NodeJS", "JWT", "ReactJS"],
    image:
      "https://image.noelshack.com/fichiers/2024/26/3/1719430935-screenshot-2024-06-26-214215.png",
    category: "Web",
    source_code: "https://github.com/SuperCoolNinja/auth",
    ...tagColors["Fullstack"],
  },
  {
    id: generateUniqueId(),
    name: "Paint Web App",
    description:
      "A board where you can draw using a provided color palette, change your brush size, and erase everything, all with a modern and compact design.",
    tag: "Frontend",
    year: "2021",
    stacks: ["Html", "Css", "Javascript", "Canvas"],
    image:
      "https://image.noelshack.com/fichiers/2024/26/3/1719431038-screenshot-2024-06-26-214350.png",
    category: "Web",
    source_code: "https://github.com/SuperCoolNinja/Paint-Web-App",
    demo: "https://supercoolninja.github.io/Paint-Web-App/",
    ...tagColors["Frontend"],
  },

  {
    id: generateUniqueId(),
    name: "Pong Game",
    description: "a Pong Game made to learn and practise basic 2D Math Logic.",
    tag: "Game Dev",
    year: "2023",
    stacks: ["Lua", "Love2D"],
    image:
      "https://image.noelshack.com/fichiers/2024/26/3/1719431132-screenshot-2024-06-26-214537.png",
    category: "game development",
    source_code: "github.com/SuperCoolNinja/love2D-pongGame",
    ...tagColors["Gamedev"],
  },

  {
    id: generateUniqueId(),
    name: "Flappy Flytime",
    description:
      "A Flappy Bird clone created to learn the basics of the Unity API.",
    tag: "Game Dev",
    year: "2022",
    stacks: ["C#", "Unity3D"],
    image:
      "https://image.noelshack.com/fichiers/2024/26/3/1719431180-screenshot-2024-06-26-214628.png",
    category: "game development",
    demo: "https://supercoolninja.itch.io/flappyflytime",
    ...tagColors["Gamedev"],
  },
];
