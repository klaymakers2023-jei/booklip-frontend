import { useEffect, useCallback } from 'react';
import cx from 'classnames';

import styles from '@/styles/Booking.module.css';
import Image from 'next/image';
import BookingHistory from '@/components/BookingHistory';
import Seoul from '../../public/seoul.png';
import useStore from '@/store';

export default function BookingPage() {
  const { actions, bookings } = useStore((store) => store.booking);
  const { userId } = useStore((store) => store.user);
  const { getBookings } = actions();
  useEffect(() => {
    getBooking(userId);
  }, [userId]);

  const getBooking = useCallback(async (userId) => {
    if (!userId) {
      return;
    }
    console.log(userId)
    await getBookings(userId);
  });

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>Bookings & Trips</h1>
        <div className={cx(styles.contents, bookings.length===0 && styles.empty)}>
          {
            bookings.length > 0 ? (
              bookings.map((item, idx) => (
                <BookingHistory key={idx} booking={item} />
              ))
            ) : (
                <>
                  <div className={styles.emptyTitleContainer}>
                    <p className={styles.emptyTitle}>
                      You have no upcoming bookings yet...
                    </p>
                    <p>Start planning your next trip!</p>
                  </div>
                  <div className={styles.emptyBtnContainer}>
                    <Image
                      src={'/key.svg'}
                      width={40}
                      height={40}
                    />
                    <p>Get your first room key</p>
                  </div>
                </>
            )
          }
        </div>
      </div>
    </div>
  )
}