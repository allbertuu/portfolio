// styles
import styles from './style.module.scss';
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
    <div className={`${styles.container} intervalCardReveal`}>
      <span className={styles.blob} />

      <div className={styles.c_logo}>
        <img src={logoImg} alt="Logo vermelha" />
      </div>

      <a className={styles.c_mainImg} href={url}>
        <img src={imgSrc} id="mainImg" className={styles.mainImg} alt='Visão geral do projeto' />
        <img src={logoImg} alt="Logo vermelha" />
      </a>

      <h3 className={styles.title}>{title}</h3>

      <div className={styles.c_icons}>
        <a href={socials.github}>
          <GitHubIcon fontSize='inherit' />
        </a>
      </div>

    </div>
  );
}

export default ProjectCard