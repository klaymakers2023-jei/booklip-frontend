
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <p className={styles.copyRight}>ALL RIGHTS RESERVED by Jei </p>
        <div className={styles.btnContainer}>
          <button className={styles.btn}>Terms</button>
          <span>&#183;</span>
          <button className={styles.btn}>Privacy</button>
        </div>
      </div>
    </div>
  )
}

export default Footer;
