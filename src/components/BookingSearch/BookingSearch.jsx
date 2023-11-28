
import Image from 'next/image';
import styles from './BookingSearch.module.css';

const BookingSearch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.contentsContainer}>
          <div className={styles.contents}>
            <div className={styles.infoContainer}>
              <Image
                src={'/locate.svg'}
                width={24}
                height={24}
              />
              <p>Destination</p>
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.contents}>
            <div className={styles.infoContainer}>
              <Image
                src={'/check_in_grey.svg'}
                className={styles.checkIn}
                width={24}
                height={24}
              />
              <p>Check-in</p>
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.contents}>
            <div className={styles.infoContainer}>
              <Image
                src={'/check_out_grey.svg'}
                width={24}
                height={24}
              />
              <p>Check-out</p>
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.contents}>
            <div className={styles.infoContainer}>
              <Image
                src={'/user_grey.svg'}
                width={24}
                height={24}
              />
              <p>Guests</p>
            </div>
          </div>
        </div>
        <button className={styles.btn}>search</button>
      </div>
    </div>
  )
}

export default BookingSearch;
