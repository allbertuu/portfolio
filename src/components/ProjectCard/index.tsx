// imgs and icons
import logoImg from '../../assets/imgs/logo.png';
import GitHubIcon from '@mui/icons-material/GitHub';

type Socials = {
  github: string,
}

type ProjectCardProps = {
  title: string,
  imgSrc: string,
  url: string,
  socials: Socials
}

function ProjectCard({ title, imgSrc, url, socials }:ProjectCardProps) {
  return (
    <div className="c-project-card intervalCardReveal">
      <span className="c-project-card__blob" />

      <div className="c-project-card__logo">
        <img src={logoImg} alt="Logo vermelha" />
      </div>

      <a className="c-project-card__main-img" href={url}>
        <img src={imgSrc} alt='Visão geral do projeto' />
        <img src={logoImg} alt="Logo vermelha" />
      </a>

      <h3 className="c-project-card__title">{title}</h3>

      <div className="c-project-card__icons">
        <a href={socials.github}>
          <GitHubIcon fontSize='inherit' />
        </a>
      </div>

    </div>
  );
}

export default ProjectCard