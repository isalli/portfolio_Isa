import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import WorkWidget from "@/components/WorkWidget/WorkWidget";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import Footer from "@/components/Footer/Footer";


const cardData = {
  name: "Isabel, software engineer",
  logo: "/Isabel_portfolio.jpg",
  content:
    "Working with the Product Team to discover strong solutions for a digital product to support hourly-based external recruiting services. Our platform is built on top of firebase technologies, including Firestore, Cloud Functions (NodeJS + Typescript), Sveltekit, and Typesense.",
  link: "https://www.ensign.edu/",
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
      logo: "/slack.png",
      organization: "Slack",
      jobTitle: "Software Engineer",
      startYear: 2016,
      endYear: null,
    },
    {
      logo: "/spotify.png",
      organization: "Spotify",
      jobTitle: "Software Engineer",
      startYear: 2014,
      endYear: 2015,
    },
    {
      logo: "/audible.png",
      organization: "Audible",
      jobTitle: "Software Engineer",
      startYear: 2012,
      endYear: 2013,
    },
    {
      logo: "/microsoft.png",
      organization: "Microsoft",
      jobTitle: "Software Engineer",
      startYear: 2010,
      endYear: 2011,
    },
  ],
};
const skillsData = {title:'Skills', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
  skills: [
  { name: 'HTML', proficiency: 60, icon: 'html5.png' },
  { name: 'CSS', proficiency: 50, icon: 'css3.png' },
  { name: 'JavaScript', proficiency: 75, icon: 'javascript.png' },
]} ;
const links = [
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



export default async function Home() {
  return (
    <div>
      <ProjectCard {...cardData} />
              <div>
                {articles.map((article, index) => (
                  <ArticleCard key={index} {...article} /> ))}
                  <SignupWidget
                    title={"Join my newsletter"}
                    content={"Subscribe to my newsletter for updates."}/>
                  <WorkWidget {...workData}/>
                  <SignupWidget
                    title={"Join my newsletter"}
                    content={"Subscribe to my newsletter for updates."}/>
                  <SkillsWidget {...skillsData}/>
                  <Footer links={links} />
              </div>
    </div>
  );
}
