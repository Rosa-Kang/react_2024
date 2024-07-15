import Header from '@/components/common/header/Header';
import styles from './styles/index.module.scss';
import SearchBar from '@/components/common/searchBar/SearchBar';
import Navigation from '@/components/common/navigation/Navigation';
import Footer from '@/components/common/footer/Footer';
import Card from './components/Card';

const Main = () => {
  return (
    <div className={styles.page}>
      {/* Common Header */}
      <Header />
      {/* Navigation */}
      <Navigation />
      <div className={styles.page__contnets}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}></span>
            <span className={styles.wrapper__desc}></span>
            {/* Common SearchBar */}
            <SearchBar />
          </div>
        </div>
        <div className={styles.page_contents__imageBox}></div>
      </div>
  {/* Card */}
      <Card/>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main