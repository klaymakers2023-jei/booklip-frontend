
import Image from 'next/image';
import MainBackGround from '../../../public/main.png';

import styles from './MainSection.module.css';
import SearchCard from '../SearchCard';

const MainSection = () => {
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
            <SearchCard type={'destination'} />
            <SearchCard type={'checkin'} />
            <SearchCard type={'checkout'} />
            <SearchCard type={'guests'} />
          </div>
          <button className={styles.btn}>
            <Image
              src={'/white_search.svg'}
              width={34}
              height={34}
            />
            <p>search</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainSection;
