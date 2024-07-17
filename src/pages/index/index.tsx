import Header from '@/components/common/header/Header';
import styles from './styles/index.module.scss';
import SearchBar from '@/components/common/searchBar/SearchBar';
import Navigation from '@/components/common/navigation/Navigation';
import Footer from '@/components/common/footer/Footer';
import Card from './components/Card';
import { useMemo, useState } from 'react';
import { CardDTO } from './types/card';
import { useRecoilValueLoadable } from 'recoil';
import { imageData } from '@/store/selectors/imageSelectors';
import DetailDialog from '@/components/common/dialog/DetailDialog';
import Loading from './components/Loading';


const Main = () => {
  const imgSelector = useRecoilValueLoadable(imageData);
  const [open, setOpen] = useState<boolean>(false);
  const [imgData, setImgData] = useState<CardDTO>();


  const CARD_LIST = useMemo(() => {
    // imgSelector.state = hasValue or loading
      if (imgSelector !== null && imgSelector.state === 'hasValue') {
        console.log(imgSelector)
          const result = imgSelector.contents.results.map((card: CardDTO) => {
              return <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData} />
          })
          return result
      } else {
          return <Loading />
      }
    }, [imgSelector])


  return (
    <div className={styles.page}>
      {/* Common Header */}
      <Header />
      {/* Navigation */}
      <Navigation />
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}></span>
            <span className={styles.wrapper__desc}></span>
            {/* Common SearchBar */}
            <SearchBar />
          </div>
        </div>
       {/* Card List */}
        <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
          {/* Footer*/}
          <Footer /> 
      </div>

      { open && <DetailDialog data={imgData} handleDialog={setOpen} /> }
    </div>
  )
}

export default Main