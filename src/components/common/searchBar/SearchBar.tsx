import { useEffect, useState } from 'react';
import styles from './SearchBar.module.scss';
import { useRecoilState } from 'recoil';
import { searchState } from '@/store/atoms/searchState';
import { pageState } from '@/store/atoms/pageState';
import { useNavigate } from 'react-router-dom';


function SearchBar() {
  const navigate = useNavigate()
  const [search, setSearch] = useRecoilState(searchState);
  const [, setPage] = useRecoilState(pageState);
  const [text, setText] = useState('');

  const onChange = (e : any) => {
        setText(e.target.value);
  }

  const onSearch = () => {
    if (text === '') {
      setSearch('Korea');
    } else {
      setSearch(text);
      navigate('/')
    }
    setPage(1); // 페이지를 1로 초기화
  };

  const handleKeyDown =(event: React.KeyboardEvent) => {
      if(event.key === "Enter") {
          onSearch();
      }
  }

  useEffect(() => {
    if(search  !== 'Korea' && search !== text) setText('')
  }, [search]);

  return (
    <div className={styles.searchBar}>
        <div className={styles.searchBar__search}>
        <input type="text" placeholder="Search for photos" className={styles.searchBar__search__input} value={text} onChange={onChange} onKeyDown={handleKeyDown} />
        <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
        </div>
    </div>
  )
}

export default SearchBar