import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.pagination}>
                <button>
                    <img src="src/assets/icons/icon-arrowLeft.svg" alt="" />
                </button>

                {/* UI that will change */}
                <span>1</span>
                <button className={styles.pagination__button}>
                    <img src="src/assets/icons/icon-arrowRight.svg" alt="" />
                </button>
            </div>
        </footer>
    )
}

export default Footer;