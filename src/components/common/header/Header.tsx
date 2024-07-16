import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'

function Header() {
    const navigate = useNavigate()

    const moveToPage = (filter: string) => {
        if (filter === 'main') {
            navigate('/')
        } else {
            navigate('/bookmark')
        }
    }
    return (
        <header className={styles.header}>
            <div className={styles.header__logoBox} onClick={() => moveToPage('main')}>
                <img src="/assets/images/image-logo.png" alt="" className={styles.header__logoBox__logo} />
                <span className={styles.header__logoBox__title}>PhotoSplash</span>
            </div>
            <div className={styles.header__profileBox}>
                <button className={styles.header__profileBox__button}>Submit Photos</button>
                <button className={styles.header__profileBox__button} onClick={() => moveToPage('bookmark')}>
                    북마크
                </button>
                <span className={styles.header__profileBox__userName}>Therosie | Therosie@gmail.com</span>
            </div>
        </header>
    )
}

export default Header