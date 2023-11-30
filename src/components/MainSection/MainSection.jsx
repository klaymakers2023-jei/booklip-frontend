import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import MainBackGround from '../../../public/main.png';
import SearchCard from '../SearchCard';

import styles from './MainSection.module.css';

const MainSection = () => {
  const [destination, setDestination] = useState();

  const handleDestination = (des) => {
    setDestination(des);
  }
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${MainBackGround.src})`,
      }}
    >
      <div className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <p className={styles.subTitle}>
            WITHOUT DOUBLE BOOKING
          </p>
          <p>
          EXCITING START OF THE EXPERIENCE
          </p>
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.searchInnerContainer}>
            <SearchCard type={'destination'} onChangeDestination={handleDestination} />
            <SearchCard type={'checkin'} />
            <SearchCard type={'checkout'} />
            <SearchCard type={'guests'} />
          </div>
          <Link
            className={styles.btn}
            href={{
              pathname: '/stays',
              query: { site: destination },
            }}
          >
            <Image
              src={'/white_search.svg'}
              width={34}
              height={34}
            />
            <p>search</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainSection;
