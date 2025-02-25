import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import UsesSection from '@/components/UsesSection/UsesSection.jsx';
import '../globals.css';

export const metadata = {
  title: 'Portfolio - Uses',
  description: 'The projects page of my portfolio.',
}
const options = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/uses", label: "Uses" },
];
export const links = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Projects',
    url: '/projects',
  },
  {
    title: 'Uses',
    url: '/uses',
  },
];
const cardData = {
  name: "Software I use, gadgets I love, and other things I recommend.",
  content:
  "I prefer to expend reasonable amount of money in gadgets that I use everyday, so I can have a good performance and long lasting products.",
  showLogo:false , showLinks:false,
};
const items = [
  {
    groupName: 'Workstation',
    items: [
      {
        title: '15” Asus, 64GB RAM (2020)',
        description:
          'I like this brand have a good performance in general and has some innovative features.',
      },
      {
        title: 'Dell UltraSharp U2717D',
        description:
          'I have two of these monitors and they’re great. I’ve had them for years and they’ve been rock solid.',
      },
      {
        title: 'Dell keyboard and mouse',
        description:
          'I’ve been using this keyboard and mouse for a few years now and I love it. It’s wireless, has a great feel, and the battery lasts forever.',
      },
      {
        title: 'Samsung galaxy s21',
        description:
          'I’ve been using these headphones for a few years now and they’re great. They’re comfortable, sound good, and are built like a tank, long lasting battery.',
      },
    ],
  },
  {
    groupName: 'Development',
    items: [
      {
        title: 'Visual Studio Code',
        description:
          'I use VS Code for all of my development work. It’s fast, has great extensions, and is highly customizable.',
      },
      {
        title: 'Bash',
        description:
          'I use as my terminal . It’s a great combination.',
      },
    ],
  },
  {
    groupName: 'Design',
    items: [
      {
        title: 'Figma',
        description:
          'I use Figma for all of my design work. It’s fast, has great collaboration features, and is highly customizable.',
      },
    ],
  },
  {
    groupName: 'Productivity',
    items: [
      {
        title: 'Asana',
        description:
          'I use Asana for all of my note-taking and project management. It’s fast, has great collaboration features, and is highly customizable.',
      },
      {
        title: 'Slack',
        description:
          'I use Slack for all of my communication needs. It’s fast, has great features, and is highly customizable.',
      },
    ],
  },
];

export default function Uses() {
  return (
    <div>
      <Header options={options}/>
      <main>
      <ProjectCard {...cardData} />
      <div>
      <UsesSection items={items} />
      </div>

      </main>
      <Footer links={links} />
    </div>
  );
}




