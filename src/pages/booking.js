import cx from 'classnames';

import styles from '@/styles/Booking.module.css';
import Image from 'next/image';
import BookingHistory from '@/components/BookingHistory';

const dummy_data = [
  {
    period: '18 Nov 2023 - 20 Nov 2023',
    bookings: [
      {
        image: undefined,
        price: 100,
        name: 'Room Name, Hotel Name',
        period: '19 Nov 2023 - 20 Nov 2023',
        status: false,
        isCancle: false,
      }
    ]
  },
  {
    period: '18 Nov 2023 - 20 Nov 2023',
    bookings: [
      {
        image: undefined,
        price: 100,
        name: 'Room Name, Hotel Name',
        period: '19 Nov 2023 - 20 Nov 2023',
        status: true,
        isCancle: false,
      },
      {
        image: undefined,
        price: 100,
        name: 'Room Name, Hotel Name',
        period: '19 Nov 2023 - 20 Nov 2023',
        status: true,
        isCancle: false,
      },
    ]
  },
  {
    period: '18 Nov 2023 - 20 Nov 2023',
    bookings: [
      {
        image: undefined,
        price: 100,
        name: 'Room Name, Hotel Name',
        period: '19 Nov 2023 - 20 Nov 2023',
        status: false,
        isCancle: true,
      },
    ]
  },
]

export default function BookingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>Bookings & Trips</h1>
        <div className={cx(styles.contents, dummy_data.length===0 && styles.empty)}>
          {
            dummy_data.length > 0 ? (
              dummy_data.map((item, idx) => (
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