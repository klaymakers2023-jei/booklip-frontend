
import styles from './DestinationCard.module.css';

const DestinationCard = ({city}) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${city.image.src})`
      }}
    >
      <div className={styles.innerContainer}>
        <p>{city.name}</p>
      </div>
    </div>
  )
}

export default DestinationCard;
