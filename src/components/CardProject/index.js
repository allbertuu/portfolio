import styles from './style.module.scss';
import logoImg from '../../assets/imgs/logo.png';
import GitHubIcon from '@mui/icons-material/GitHub';

function CardProject({ title, img, url, socials }) {
  return (
    <div className={`${styles.container} intervalCardReveal`}>
      <span className={styles.blob} />

      <div className={styles.c_logo}>
        <img src={logoImg} alt="logo" />
      </div>

      <a className={styles.c_mainImg} href={url}>
        <img src={img} id="mainImg" className={styles.mainImg} alt='Visão geral do projeto' />
        <img src={logoImg} alt="logo" />
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

export default CardProject