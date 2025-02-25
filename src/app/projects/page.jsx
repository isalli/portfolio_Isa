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
  name: "Experience adquire through time and hardwork",
  content:
  "Many years of experience in the financial services industry, working for the biggest banks in Brazil, managing sensitive data for validation, and it has been delivered successfully because of detailed validation and comparison according to the business requirements.",
  showLogo:false , showLinks:false,
};
const smallcardData = [
  {
    name: "Ensign College",
    logo: "/Ensign_College.png",
    content:
      "As a student job, I make data analysis for the college, and showing it in reports with Power BI tool and validating through SQL queries.",
    link: "https://www.ensign.edu/", showLogo: true, showLinks: true,
  },
  {
  name: "Itau Unibanco",
  logo: "/itau.png",
  content:
    "As a quality assurance engineer, I work in a investment mobile application, validating the data and the software, and making sure that the data is correct and the software is working properly.",
  link: "https://www.ion.itau/", showLogo: true, showLinks: true,
},
{
  name: "PagBank",
  logo: "/pagbank.png",
  content:
    "Validating web pages developing test automation scripts, and making sure that the data is correct and the software is working properly.",
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




