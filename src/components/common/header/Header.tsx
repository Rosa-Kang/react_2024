import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header__logoBox}>
            <img className={styles.header__logoBox__logo} src="src/assets/images/image-logo.png" alt=""/>
            <span className={styles.header__logoBox__title}>PhotoSplash</span>
        </div>

        <div className={styles.header__profileBox}>
            <button className={styles.header__profileBox__button}></button>
            <span className={styles.header__profileBox__userName}></span>
        </div>
    </div>
  )
}

export default Header