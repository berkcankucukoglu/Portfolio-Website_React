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
  {
    title: 'ABC Test',
    image: project4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium.',
    technologies: ['HTML', 'CSS', 'Angular'],
  },
];

export const MISSION_VISION = [
  {
    title: 'Efficient Solutions',
    description:
      'Leverage engineering and software expertise to create innovative, workflow-enhancing applications that drive productivity and efficiency.',
  },
  {
    title: 'Advance Technology',
    description:
      'Pursue projects that bridge engineering and software, shaping sustainable, impactful solutions for real-world challenges.',
  },
  {
    title: 'Continuous Evolution',
    description:
      'Commit to learning new tech, embracing challenges, and expanding my expertise to make a meaningful impact in the industry.',
  },
];

export const HERO_CONTENT = [
  {
    text: `My name is Berkcan Küçükoğlu, and I blend an engineering foundation with a focus on software development. This transition allows me to bring a unique perspective to my work in developing technology-driven solutions, combining my engineering expertise with software skills.`,
  },
  {
    text: `Currently, I’m working as a software developer after completing a master’s that focused on the impact of autonomous vehicles on Istanbul’s traffic. Before moving into to software, I gained valuable experience as a transportation engineer in both technical offices and on-site, where I gaining valuable experience in project management and workflow development. I am passionate about merging software development with engineering to create innovative and impactful tools.`,
  },
];

export const CONTACT_TEXT = `If you didn’t find the information you’re looking for, feel free to reach out directly. I’m always open to discussing my work, experience, or any questions you might have.`;

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
