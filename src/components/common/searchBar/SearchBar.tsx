import styles from './SearchBar.module.scss';


function SearchBar() {
  return (
    <div className={styles.searchBar}>
        <div className={styles.searchBar__search}>
            <input type="text" placeholder='Search for an image' className={styles.searchBar__search__input} />
            <img src="src/assets/icons/icon-search.svg" alt="" />
        </div>
    </div>
  )
}

export default SearchBar