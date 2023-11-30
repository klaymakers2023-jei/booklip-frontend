import cx from 'classnames';
import useStore from '@/store';
import styles from '@/styles/Details.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Details() {
  const { selectedRoom } = useStore((store) => store.room);
  const { guests, checkIn, checkOut } = useStore((store) => store.common);
  const { reserve } = useStore((store) => store.booking.actions());
  const { userId, wallet_account } = useStore((store) => store.user);
  const [total, setTotal] = useState(0);
  const [nights, setNights] = useState(0);
  const router = useRouter();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  useEffect(() => {
    if (checkIn && checkOut) {
      setNights((checkOut - checkIn) / 86400000);
    }
  }, [checkIn, checkOut]);

  useEffect(() => {
    if (selectedRoom) {
      if (nights * selectedRoom.price >= 1) {
        setTotal(nights * selectedRoom.price);
      }
    }
  }, [nights, selectedRoom]);

  const reserveRoom = useCallback(async (room, user, start, duration ) => {
    await reserve(room, user, start, duration);
    router.push('/booking');
  }, []);

  const handleReserve = () => {
    reserveRoom(selectedRoom, { userId: userId, userWallet: wallet_account }, checkIn, nights);
  }

  return (
    <div className={styles.container}>
      {
        selectedRoom ? (
        <div className={styles.innerContainer}>
          <div className={styles.titleContainer}>
            <h1>{selectedRoom.name}</h1>
            <div className={styles.location}>
              <Image
                src={'/locate.svg'}
                width={24}
                height={24}
              />
              <p>{selectedRoom.location}</p>
            </div>
          </div>
          <div className={styles.contentsContainer}>
            <div className={styles.imgContainer}>
              <div
                className={styles.img}
                style={{
                  width: '646px',
                  height: '646px',
                  backgroundImage: `url(${selectedRoom.images[0].src})`,
                }}
              />
              <div className={styles.subImgContainer}>
                <div
                  className={styles.img}
                  style={{
                    width: '316px',
                    height: '316px',
                    backgroundImage: `url(${selectedRoom.images[1].src})`,
                  }}
                />
                <div
                  className={styles.img}
                  style={{
                    width: '316px',
                    height: '316px',
                    backgroundImage: `url(${selectedRoom.images[2].src})`,
                  }}
                />
              </div>
            </div>
              <div className={styles.infoContainer}>
                <div className={styles.priceInfoContainer}>
                  <p>${selectedRoom.price} / night</p>
                </div>
                <div className={styles.bookingInfo}>
                  <div className={styles.period}>
                    <div className={styles.borders}>
                      <p>
                        {checkIn.toLocaleDateString(undefined,options)}
                      </p>
                    </div>
                    <div className={styles.borders}>
                      <p>
                        {checkOut.toLocaleDateString(undefined,options)}
                      </p>
                    </div>
                  </div>
                  <div className={cx(styles.borders, styles.guest)}>
                    <p>Adult: {guests.adult}, Child: {guests.child}</p>
                  </div>
                </div>
                <button className={styles.reserveBtn} onClick={handleReserve}>Reserve</button>
                <div className={styles.receipt}>
                  <p>${selectedRoom.price} x {nights} nignt(s)</p>
                  <p>${total}</p>
                </div>
                <div className={styles.divider} />
                <div className={styles.totalContainer}>
                  <p>Total</p>
                  <p>${total}</p>
                </div>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{selectedRoom.description}</p>
            <div className={styles.divider} />
            <div className={styles.ruleContainer}>
              <p>House Rules</p>
              <div>
                <p>Check-in after 15:00</p>
                <p>Check-out before 11:00</p>
              </div>
            </div>
          </div>
        </div>
        ): (
            <div className={cx(styles.innerContainer, styles.error)}>
              <Link href={('/')} className={styles.link}>
                Go Back Home. Return to Step by Step.
              </Link>
            </div>
        )
      }
    </div>
  )
}