import sneakersImg from '../imgs/sneakers.jpg';
import netflixImg from '../imgs/netflix.jpg';

interface Socials {
  github: string,
};

type ProjectList = {
  name: string,
  overviewImg: string,
  liveSite: string,
  socials: Socials
}[];

let projectsList: ProjectList = [
  {
    name: 'Sneakers',
    overviewImg: sneakersImg,
    liveSite: 'https://sneakers-allbertuu.vercel.app/',
    socials: {
      github: 'https://github.com/allbertuu/sneakers',
    },
  },
  {
    name: 'Netflix Clone',
    overviewImg: netflixImg,
    liveSite: 'https://netflixclone-allbertuu.vercel.app/',
    socials: {
      github: 'https://github.com/allbertuu/netflixclone',
    },
  },
  {
    name: 'Letmeask',
    overviewImg: '',
    liveSite: '',
    socials: {
      github: '',
    },
  }
];

export default projectsList