import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.header__logoBox}>
            <img className={styles.header__logoBox__logo} src="src/assets/images/image-logo.png" alt=""/>
            <span className={styles.header__logoBox__title}>PhotoSplash</span>
        </div>

        <div className={styles.header__profileBox}>
            <button className={styles.header__profileBox__button}>Submit Photo</button>
            <button className={styles.header__profileBox__button}>Bookmark</button>
            <span className={styles.header__profileBox__userName}>Therosie | Therosie@gmail.com</span>
        </div>
    </header>
  )
}

export default Header