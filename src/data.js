import home from './assets/icons/home.png'
import tasks from './assets/icons/tasks.png'
import projects from './assets/icons/projects.png'
import chat from './assets/icons/chat.png'
import letters from './assets/icons/letters.png'
import notes from './assets/icons/notes.png'
import timer from './assets/icons/timer.png'
import seen from './assets/icons/seen.png'
import calendar from './assets/icons/calendar.png'
import profile1 from './assets/icons/profile1.jpeg'
import profile2 from './assets/icons/profile2.jpeg'
import profile3 from './assets/icons/profile3.jpeg'
import profile4 from './assets/icons/profile4.jpeg'


export const toPersianNumber = (number) => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return number.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};

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

export const timeTable=[
  {
    id:"1",
    title:"کار های امروز من",
    count:"2",
    iconPath:seen,
    color:"green",
  },
  {
    id:"2",
    title:"کارهای دارای تاخیر",
    count:"0",
    iconPath:calendar,
    color:"orange",
  },
  {
    id:"3",
    title:"کارهای قابل پیگیری",
    count:"1",
    iconPath:timer,
    color:"blue",
  }
]

export const colleagues=[
  {
    id:"1",
    name:"رضا بهرامی",
    profilePath:profile1,
  },
  {
    id:"2",
    name:"جواد هاشمی",
    profilePath:profile2,
  },
  {
    id:"3",
    name:"حامد لک",
    profilePath:profile3,
  },
  {
    id:"4",
    name:"مهناز افشار",
    profilePath:profile4,
  },
]