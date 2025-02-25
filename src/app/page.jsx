import Header from "@/components/Header/Header";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import WorkWidget from "@/components/WorkWidget/WorkWidget";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import Footer from "@/components/Footer/Footer";
import './globals.css';

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};
const options = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/uses", label: "Uses" },
];
const cardData = {
  name: "Isabel, software engineer, learner and world traveler",
  logo: "/Isabel_portfolio.jpg",
  content:
    "Many years of experience in the software area as a Quality assurance engineer. I have been working with different technologies and programming languages. I am currently working as a data analyst at Ensign College.",
  link: ["https://www.linkedin.com/in/isabel-cordova-noriega", "https://www.ensign.edu/" , "https://github.com/"],
};
const articles = [
  {
    date: "Nov 15, 2021",
    title: "Everything you need to know about React",
    content:
      "The ability to build stuff in React is one of the hottest skills to have today in software engineering. There is a lot of demand for React developers among startups as well as MNCs.",
    link: "https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea",
  },
  {
    date: "Sep 2, 2020",
    title: "The Missing Introduction to React",
    content:
      "React is the world’s most popular JavaScript framework, but it’s not cool because it’s popular. It’s popular because it’s cool. Most React introductions jump right into showing you examples of how to use React, and skip the “why”.",
    link: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76",
  },
];
const workData = {
  title: "Work",
  content: "My work experience in Technology area has been with automation tools, software development, and data analysis.",
  experiences: [
    {
      logo: "/Ensign_College.png",
      organization: "Ensign College",
      jobTitle: "  Data Analyst          ",
      startYear: 2024,
      endYear: null,
    },
    {
      logo: "/itau.png",
      organization: "Itau Unibanco",
      jobTitle: "Quality Assurance Engineer",
      startYear: 2021,
      endYear: 2023,
    },
    {
      logo: "/pagbank.png",
      organization: "PagBank",
      jobTitle: "Quality Assurance Engineer",
      startYear: 2018,
      endYear: 2021,
    },

  ],
};
const skillsData = {title:'Skills', content:'My skills in software development are mostly:',
  skills: [
  { name: 'HTML', proficiency: 40, icon: 'html.png' },
  { name: 'CSS', proficiency: 50, icon: 'css-icon.png' },
  { name: 'JavaScript', proficiency: 80, icon: 'icons8-javascript-48.png' },
]} ;
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

export default function Home() {
  return (
    <div>
      <Header options={options}/>
      <main>
        <ProjectCard {...cardData} />
        <div className="row">
          <div className="column">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} /> ))}
          </div>
          <div className="column2">
          <SignupWidget
              title={"Stay up to date"}
              content={"Get notified when I publish something new, and unsubscribe at any time."}/>
          <WorkWidget {...workData}/>
          <SkillsWidget {...skillsData}/>
          </div>
        </div>
        </main>
            <Footer links={links} />
    </div>
  );
}
