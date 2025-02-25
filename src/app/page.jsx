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
  name: "Isabel, software engineer",
  logo: "/Isabel_portfolio.jpg",
  content:
    "Working with the Product Team to discover strong solutions for a digital product to support hourly-based external recruiting services. Our platform is built on top of firebase technologies, including Firestore, Cloud Functions (NodeJS + Typescript), Sveltekit, and Typesense.",
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
  content: "My work experience.",
  experiences: [
    {
      logo: "/Ensign_College.png",
      organization: "Ensign College",
      jobTitle: "Software Engineer",
      startYear: 2016,
      endYear: null,
    },
    {
      logo: "/itau.png",
      organization: "Itau Unibanco",
      jobTitle: "Software Engineer",
      startYear: 2014,
      endYear: 2015,
    },
    {
      logo: "/pagbank.png",
      organization: "PagBank",
      jobTitle: "Software Engineer",
      startYear: 2012,
      endYear: 2013,
    },

  ],
};
const skillsData = {title:'Skills', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
  skills: [
  { name: 'HTML', proficiency: 60, icon: 'html.png' },
  { name: 'CSS', proficiency: 50, icon: 'css-icon.png' },
  { name: 'JavaScript', proficiency: 75, icon: 'icons8-javascript-48.png' },
]} ;
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
