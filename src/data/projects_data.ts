import type { IProjectsData } from "../interfaces/IProjectsData";
import { generateUniqueId } from "../utils/generateUniqueID";
import { Colors } from "../utils/colors";

export const projects: IProjectsData[] = [
  {
    id: generateUniqueId(),
    name: "Chatbox App",
    description: "A chatboxApp with only one room.",
    tag: "Fullstack",
    year: "2023",
    stacks: ["ReactJS", "NodeJS", "Javascript", "Socket", "TailwindCSS"],
    image:
      "https://image.noelshack.com/fichiers/2024/26/3/1719430745-screenshot-2024-06-26-213857.png",
    category: "Web",
    demo: "https://chatbox-client-demo.netlify.app/",
    source_code: "https://github.com/SuperCoolNinja/chatboxapp-client",
    ...Colors["FULLSTACK"],
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
    ...Colors["FULLSTACK"],
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
    ...Colors["FRONTEND"],
  },

  {
    id: generateUniqueId(),
    name: "Connect Four",
    description:
      "Console-based Connect 4 with an AI opponent, built in C to practice game programming.",
    tag: "Game Dev",
    year: "2025",
    stacks: ["C"],
    image:
      "https://private-user-images.githubusercontent.com/28671231/517767383-cee3295f-9712-45a8-bf00-2040a885e357.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQ0NTA3MDAsIm5iZiI6MTc2NDQ1MDQwMCwicGF0aCI6Ii8yODY3MTIzMS81MTc3NjczODMtY2VlMzI5NWYtOTcxMi00NWE4LWJmMDAtMjA0MGE4ODVlMzU3LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTI5VDIxMDY0MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZhMzc5ODdhOWE4MjUwMDhlZTcyMmRmOTU3MWYxODA2ODRlNWViYmU2NjQ0NGE3YzM4MTJmMzg4YzhkYjVjYWImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.RaSblLGF5u2Z-qPCqu0QRun9k1lgtNWrQ0X1-PWfBF8",
    category: "game development",
    source_code: "https://github.com/SuperCoolNinja/connect_four",
    ...Colors["GAMEDEV"],
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
    ...Colors["GAMEDEV"],
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
    ...Colors["GAMEDEV"],
  },

  {
    id: generateUniqueId(),
    name: "GTA V MARKER",
    description:
      "This project enables you to set markers and watch the distance between you and your set marker on the screen. It also allows you to ping a target with the marked distance in GTA V solo play.",
    tag: "Game Modification",
    year: "2023",
    stacks: ["C++"],
    image: "https://img.gta5-mods.com/q95/images/gta_marker/cfd0e8-2.png",
    category: "Game Modification",
    demo: "https://www.gta5-mods.com/scripts/gta_marker",
    ...Colors["GAMEMODS"],
  },

  {
    id: generateUniqueId(),
    name: "GTA V CONSOLE",
    description:
      "A mod for GTA V solo that allows the use of a console for easy debugging of code or simply using commands to perform certain tasks.",
    tag: "Game Modification",
    year: "2022",
    stacks: ["C++", "IMGUI"],
    image:
      "https://img.gta5-mods.com/q95/images/gta_console/0c62c7-Screeen.png",
    category: "Game Modification",
    demo: "https://www.gta5-mods.com/tools/gta_console",
    source_code: "https://github.com/GTAV-MODS/GTA_Console",
    ...Colors["GAMEMODS"],
  },

  {
    id: generateUniqueId(),
    name: "Gravity Gun",
    description:
      "A mod for GTA V solo which allows the ability to make objects gravitate and freeze them.",
    tag: "Game Modification",
    year: "2020",
    stacks: ["C++"],
    image:
      "https://img.gta5-mods.com/q95/images/ngravitygun-v1/51c15b-screenB.jpg",
    category: "Game Modification",
    demo: "https://www.gta5-mods.com/scripts/ngravitygun-v1",
    ...Colors["GAMEMODS"],
  },
];
