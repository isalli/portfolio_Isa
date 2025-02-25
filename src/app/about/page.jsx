import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '@/components/Footer/Footer';
import DescriptionSection from '@/components/DescriptionSection/DescriptionSection';
import '../globals.css';

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

const descriptionData = {
  title: "I am Isabel. I like to accept challenges, so that I may feel the satisfaction of increasing my knowledge.",
  experiences: [

      "I have worked for about ten years in different companies for financial services projects for the biggest banks in Brazil, managing sensitive data for validation, and it has been delivered successfully because of detailed validation and comparison according to the business requirements."
    ,

      "I enjoy traveling so I spent a lot of time planning and researching my trips every step of the way. I have organize 2 euro trips once for me and my friend, for 6 cities in 21 days. Everything went according scheduled. Later, I organized the trip with my parents in 4 cities as Paris, Venice, Rome and Madrid. "
    ,

      "I would like to have an impact in other people so they may have a healthier lifestyle. In that way they can improve their energy and state of mind. I would like people take more relevancy in their diet, exercising and mental health. Therefore, they can feel better with themselves and growing confidence and loving themselves more. In addition, I would like to help people that wants to study for IT area, so I may guide in those steps."
    ,

  ],
};
const link= ["https://www.linkedin.com/in/isabel-cordova-noriega", "https://github.com/", "mailto:risalli@hotmail.com"]
export default function About() {
return (
    <div>
      <Header options={options}/>
      <main>
        <div className="row">
          <div className = "column">
            <DescriptionSection {...descriptionData} />
          </div>
          <div>
            <img  src="/Isabel_portfolio.jpg" alt="Portfolio Picture" className="portfolio-picture" />
            <li key={0}>
              <a href={link[0]} target="_blank" rel="noreferrer" >
                <img src="/linkedin.png" alt="iconsmind" className="image-Icon"/>{'Follow me on LinkedIn'}
              </a>
            </li>
            <li key={1}>
              <a href={link[1]} target="_blank" rel="noreferrer" >
              <img src="/social.png" alt="iconsmind" className="image-Icon"/>{'Follow me on GitHub'}
              </a>
            </li>
            <li key={2}>
              <a href={link[2]} target="_blank" rel="noreferrer" >
              <img src="/mail-icon.png" alt="iconsmind" className="image-Icon"/>{'risalli@hotmail.com'}
              </a>
            </li>
          </div>
        </div>
      </main>
            <Footer links={links} />
    </div>
  );
}
