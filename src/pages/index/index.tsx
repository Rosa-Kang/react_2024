import Header from '@/components/common/header/Header';
import styles from './styles/index.module.scss';
import SearchBar from '@/components/common/searchBar/SearchBar';

const Main = () => {
  return (
    <div className={styles.page}>
      {/* Common Header */}
      <Header />
      {/* Common SearchBar */}
      <SearchBar />
      <div className={styles.page__contnets}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}></span>
            <span className={styles.wrapper__desc}></span>

          </div>
        </div>
        <div className={styles.page_contents__imageBox}></div>
      </div>

    </div>
  )
}

export default Main