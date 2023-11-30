import { useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';

import styles from './BookingHistory.module.css';
import NFTModal from '../NFTModal';

const BookingHistory = ({ booking }) => {
  const [isRemove, setIsRemove] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [bookingInfo, setBookingInfo] = useState();

  const handlerRemove = () => {
    setIsRemove(!isRemove);
  }

  const handlerModal = (info) => {
    if (info) {
      setBookingInfo(info);
    }
    else {
      setBookingInfo();
    }
    setIsModal(!isModal);
  }

  return (
    <>
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.infoTitle}>
          <Image
            src={'/locate.svg'}
            width={24}
            height={24}
          />
          <p>City, Country</p>
        </div>
        <p>{booking.period}</p>
      </div>
      <div className={styles.contents}>
        {
          booking.bookings.map((item, idx) => (
            <div className={cx(styles.bookingContainer, item.status && styles.click)} key={idx} onClick={() => {
              if (item.status) {
                handlerModal(item);
              }
            }}>
              <div className={cx(styles.img, item.isCancle && styles.cancle)} style={item.image && {backgroundImage: `url(${item.image.src})`}}/>
              <div className={styles.bookingContents}>
                <div className={styles.bookingInfo}>
                  <p className={styles.bookingName}>{item.name}</p>
                  <p>{item.period}</p>
                  <p>
                    {item.isCancle ? (
                      "Cancelled"
                    ) : 
                        item.status ? (
                        "Completed"
                      ) : (
                          "Upcoming · Booked"
                      )
                    }
                  </p>
                </div>
                <div className={styles.otherInfo}>
                  <p>${item.price}</p>
                  <button className={styles.btn} onClick={handlerRemove}>
                    <Image
                      src={'/more.svg'}
                      width={24}
                      height={24}
                    />
                  </button>
                  {
                    isRemove && (
                      <button className={styles.remove} onClick={handlerRemove}>Remove</button>
                    )
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
      </div>
      {
        isModal && (
          <NFTModal booking={bookingInfo} onClose={handlerModal} />
        )
      }
      </>
  )
}

export default BookingHistory;
