import project1 from '../assets/projects/5aoE9pwrER4-unsplash.jpg';
import project2 from '../assets/projects/aVf9CI1kZ0s-unsplash.jpg';
import project3 from '../assets/projects/IhxM7w392e0-unsplash.jpg';
import project4 from '../assets/projects/sK0dKnDOcEM-unsplash.jpg';
import profilePicture from '../assets/TVCDj_fFvx8-unsplash.jpg';

export const USER_INFO = {
  name: 'Berkcan',
  surname: 'Küçükoğlu',
  address: 'Istanbul - Turkey',
  phoneNo: '+0090-537-5098710',
  email: 'berkcankucukoglu@gmail.com',
  image: profilePicture,
  title: 'Full Stack Developer',
  lastUpdateTime: `02 Nov 2024`,
};

export const LINKS = [
  {
    name: 'linkedin',
    url: `https://www.linkedin.com/in/berkcankucukoglu/`,
  },
  {
    name: 'github',
    url: `https://github.com/berkcankucukoglu`,
  },
];

export const EXPERIENCES = [
  {
    timespan: 'Jan 2021 - Present',
    role: 'Full Stack Developer',
    company: 'Company Inc.',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium, quasi voluptatem ratione sequi a maxime, temporibus provident id officiis quo ut dignissimos?`,
    technologies: ['Javascript', 'React.js', 'MsSQL'],
  },
  {
    timespan: 'Jan 2020 - Jan 2021',
    role: 'Full Stack Developer',
    company: 'Company Inc.',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium, quasi voluptatem ratione sequi a maxime, temporibus provident id officiis quo ut dignissimos?`,
    technologies: ['HTML', 'CSS', 'C#', 'MySQL'],
  },
];

export const PROJECTS = [
  {
    title: 'ABC Website',
    image: project1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium, quasi voluptatem ratione sequi a maxime, temporibus provident id officiis quo ut dignissimos?',
    technologies: ['HTML', 'CSS', 'React'],
  },
  {
    title: 'ABC Platform',
    image: project2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    technologies: ['Vue.js', 'MySQL'],
  },
  {
    title: 'ABC App',
    image: project3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium.',
    technologies: ['HTML', 'CSS', 'Angular'],
  },
];

export const MISSION_VISION = [
  {
    title: 'Title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    title: 'Title 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    title: 'Title 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
];

export const HERO_CONTENT = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium, quasi voluptatem ratione sequi a maxime, temporibus provident id officiis quo ut dignissimos? Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium, quasi voluptatem ratione sequi a maxime, temporibus provident id officiis quo ut dignissimos?`;

export const CONTACT_TEXT = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium, quasi voluptatem ratione sequi a maxime, temporibus provident id officiis quo ut dignissimos?`;

export const FOOTER_CONTENT = `“Victory is for those who can say "Victory is mine". Success is for those who can begin saying "I will succeed" and say "I have succeeded" in the end.”`;
export const FOOTER_AUTHOR = `Mustafa Kemal Atatürk: The First President and Founder of the Republic of Turkey.`;

export const CURRENT_DATE = {
  formattedDate: getFormattedDate(),
  year: getYear(),
};

function getFormattedDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  return `${day} ${month} ${year}`;
}

function getYear() {
  const today = new Date();
  const year = today.getFullYear();

  return `${year}`;
}
