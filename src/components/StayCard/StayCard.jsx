import cx from 'classnames';

import Room from '../../../public/room.png';

import styles from './StayCard.module.css';
import Image from 'next/image';

const StayCard = ({ room }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}
        style={{
          backgroundImage: `url(${Room.src})`,
        }}
      >
        <div className={cx(styles.tag, room.type === 'new' && styles.newTag)}>
          <Image
            src={room.type === 'new' ? '/star.svg' : '/fire.svg'}
            width={20}
            height={20}
          />
          <p>{room.type}</p>
        </div>
      </div>
      <div className={styles.contents}>
        <p className={styles.name}>{room.name}</p>
        <p>{room.location}</p>
        <div className={styles.priceContainer}>
          <p className={styles.price}>${room.price}</p>
          <p> / night</p>
        </div>
      </div>
    </div>
  )
}

export default StayCard;
