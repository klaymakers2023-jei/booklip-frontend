import Link from 'next/link';

import styles from './DestinationCard.module.css';

const DestinationCard = ({ city }) => {
  return (
    <Link
      className={styles.container}
      style={{
        backgroundImage: `url(${city.image.src})`
      }}
      href={{
        pathname: '/stays',
        query: { site: city.location },
      }}
    >
      <div className={styles.innerContainer}>
        <p>{city.location}</p>
      </div>
    </Link>
  )
}

export default DestinationCard;
