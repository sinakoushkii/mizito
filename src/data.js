import home from './assets/icons/home.png'
import tasks from './assets/icons/tasks.png'
import projects from './assets/icons/projects.png'
import chat from './assets/icons/chat.png'
import letters from './assets/icons/letters.png'
import notes from './assets/icons/notes.png'


export const sidebarLinks = [
  {
    id: 1,
    title: "داشبورد",
    link: "/",
    iconPath:home,
  },
  {
    id: 2,
    title: "گفتگو",
    link: "/chat",
    iconPath:chat,
  },
  {
    id: 3,
    title: "پروژه ها",
    link: "/projects",
    iconPath:projects,
  },
  {
    id: 4,
    title: "وظایف",
    link: "/tasks",
    iconPath:tasks,
  },
  {
    id: 5,
    title: "نامه ها",
    link: "/letters",
    iconPath:letters,
  },
  {
    id: 6,
    title: "یادداشت های من",
    link: "/notes",
    iconPath:notes,
  },
];
