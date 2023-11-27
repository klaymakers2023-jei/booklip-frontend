
import Image from 'next/image';
import styles from './SearchCard.module.css';

const Destination = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <Image
          src={'/pin.svg'}
          width={24}
          height={24}
        />
        <p>Destination</p>
      </div>
      <div className={styles.contents}>
        <div className={styles.title}>
          <p>Search</p>
        </div>
        <div className={styles.description}>
          <p>Select city</p>
        </div>
      </div>
    </div>
  )
}
const CheckIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <Image
          src={'/check_in.svg'}
          width={24}
          height={24}
        />
        <p>Check-in</p>
      </div>
      <div className={styles.contents}>
        <div className={styles.title}>
          <p>24 July 2022</p>
        </div>
        <div className={styles.description}>
          <p>Select date</p>
        </div>
      </div>
    </div>
  )
}
const CheckOut = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <Image
          src={'/check_out.svg'}
          width={24}
          height={24}
        />
        <p>Check-out</p>
      </div>
      <div className={styles.contents}>
        <div className={styles.title}>
          <p>28 July 2022</p>
        </div>
        <div className={styles.description}>
          <p>Select date</p>
        </div>
      </div>
    </div>
  )
}
const Guests = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <Image
          src={'/user.svg'}
          width={24}
          height={24}
        />
        <p>Guests</p>
      </div>
      <div className={styles.contents}>
        <div className={styles.title}>
          <p>3 Person</p>
        </div>
        <div className={styles.description}>
          <p>2 Adult, 1 Child</p>
        </div>
      </div>
    </div>
  )
}

const SearchCard = ({ type }) => {
  switch (type) {
    case 'destination':
      return <Destination />
    case 'checkin':
      return <CheckIn />
    case 'checkout':
      return <CheckOut />
    default: 
      return <Guests />
  }
}

export default SearchCard;
