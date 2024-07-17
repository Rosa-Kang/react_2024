import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import { useRecoilState } from 'recoil';
import { searchState } from '@/store/atoms/searchState';

function Header() {
    const navigate = useNavigate()
    const [, setSearch] = useRecoilState(searchState);

    const moveToPage = (filter: string) => {
        if (filter === 'main') {
            navigate('/')
            setSearch('Korea')
        } else {
            navigate('/bookmark')
        }
    }
    return (
        <header className={styles.header}>
            <div className={styles.header__logoBox} onClick={() => moveToPage('main')}>
                <span className={styles.header__logoBox__title}>PhotoSplash</span>
            </div>
            <div className={styles.header__profileBox}>
                <button className={styles.header__profileBox__button}>Submit Photos</button>
                <button className={styles.header__profileBox__button} onClick={() => moveToPage('bookmark')}>
                    Bookmark
                </button>
                <span className={styles.header__profileBox__userName}>Therosie | Therosie@gmail.com</span>
            </div>
        </header>
    )
}

export default Header