import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '@/components/Footer/Footer';


export const metadata = {
  title: 'Portfolio - About',
  description: 'The about page of my portfolio.',
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

export default function About() {
return (
    <div>
      <Header options={options}/>
      <main>

      </main>
            <Footer links={links} />
    </div>
  );
}
