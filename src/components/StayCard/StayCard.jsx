import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from './StayCard.module.css';
import useStore from '@/store';

const StayCard = ({ room }) => {
  const { setRoom } = useStore((store) => store.room.actions());
  return (
    <Link
      className={styles.container}
      href={'/details'}
      onClick={() => setRoom(room)}
    >
      <div className={styles.imgContainer}
        style={{
          backgroundImage: `url(${room.images[0].src})`,
        }}
      >
        {
          room.type && (
            <div className={cx(styles.tag, room.type === 'new' && styles.newTag)}>
              <Image
                src={room.type === 'new' ? '/star.svg' : '/fire.svg'}
                width={20}
                height={20}
              />
              <p>{room.type}</p>
            </div>
          )
        }
      </div>
      <div className={styles.contents}>
        <p className={styles.name}>{room.name}</p>
        <p>{room.location}</p>
        <div className={styles.priceContainer}>
          <p className={styles.price}>${room.price}</p>
          <p> / night</p>
        </div>
      </div>
    </Link>
  )
}

export default StayCard;
