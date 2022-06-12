import sneakersImg from "../imgs/projects/sneakers.jpg";
import netflixImg from "../imgs/projects/netflix.jpg";
import leafletImg from "../imgs/projects/leaflet.png";
import portfolioImg from "../imgs/projects/portfolio.jpg";

type Socials = {
  github: string;
}

type ProjectList = {
  name: string;
  overviewImg: string;
  liveSite: string;
  socials: Socials;
}[];

const projectsList: ProjectList = [
  {
    name: "Sneakers",
    overviewImg: sneakersImg,
    liveSite: "https://sneakers-allbertuu.vercel.app/",
    socials: {
      github: "https://github.com/allbertuu/sneakers",
    },
  },
  {
    name: "Desafio Leaflet",
    overviewImg: leafletImg,
    liveSite: "https://desafio-leaflet.vercel.app/",
    socials: {
      github: "https://github.com/allbertuu/desafio-leaflet",
    },
  },
  {
    name: "Netflix Clone",
    overviewImg: netflixImg,
    liveSite: "https://netflixclone-allbertuu.vercel.app/",
    socials: {
      github: "https://github.com/allbertuu/netflixclone",
    },
  },
  {
    name: "My portfolio",
    overviewImg: portfolioImg,
    liveSite: "https://portfolio-allbertuu.vercel.app/",
    socials: {
      github: "https://github.com/allbertuu/portfolio",
    },
  },
];

export default projectsList;
