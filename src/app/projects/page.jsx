import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import SmallProjectCard from '@/components/SmallProjectCard/SmallProjectCard';
import '../globals.css';

export const metadata = {
  title: 'Portfolio - Projects',
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
    url: '/home',
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
  name: "Things I’ve made trying to put my dent in the universe.",
  content:
  "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
  showLogo:false , showLinks:false,
};
const smallcardData = [
  {
    name: "Ensign College",
    logo: "/Ensign_College.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
    link: "https://www.ensign.edu/", showLogo: true, showLinks: true,
  },
  {
  name: "Itau Unibanco",
  logo: "/itau.png",
  content:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
  link: "https://www.ion.itau/", showLogo: true, showLinks: true,
},
{
  name: "PagBank",
  logo: "/pagbank.png",
  content:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
  link: "https://international.pagseguro.com/", showLogo: true, showLinks: true,
},
]
export default function Projects() {
  return (
    <div>
      <Header options={options}/>
      <main>

      <ProjectCard {...cardData} />

      <div className="row">
      {smallcardData.map((smallcard, index) => (
        <div className="column3" key={index}>
        <SmallProjectCard key={index} {...smallcard} />
        </div>
      ))}
      </div>
      </main>
      <Footer links={links} />
    </div>
  );
}




