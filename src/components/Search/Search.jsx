import { useState } from 'react';

import SearchIcon from '../../../public/search.svg'

import styles from './Search.module.css';
import Image from 'next/image';

const Search = ({onSearch}) => {
  const [value, setValue] = useState('');
  const [initValue, setInitValue] = useState('Search');
  const serachHandler = (e) => {
    const { target } = e;
    setValue(target.value);
    console.log(value)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(value);
    }
  }
  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        <Image
          src={'/search.svg'}
          width={28}
          height={28}
        />
      </button>
      <input
        type="search"
        name='serach'
        placeholder={initValue}
        className={styles.input}
        onChange={serachHandler}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default Search;
