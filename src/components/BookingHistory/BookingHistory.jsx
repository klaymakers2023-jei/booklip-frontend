import { useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';

import NFTModal from '../NFTModal';

import styles from './BookingHistory.module.css';

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
          <div className={cx(styles.bookingContainer, booking.status && styles.click)}onClick={() => {
            if (booking.status) {
              handlerModal(booking);
            }
          }}>
            <div className={cx(styles.img, booking.isCancle && styles.cancle)} style={booking.image && { backgroundImage: `url(${booking.image})` }} />
            <div className={styles.bookingContents}>
              <div className={styles.bookingInfo}>
                <p className={styles.bookingName}>{booking.name}</p>
                <p>{booking.period}</p>
                <p>
                  {booking.isCancle ? (
                    "Cancelled"
                  ) :
                  booking.status ? (
                      "Completed"
                    ) : (
                      "Upcoming · Booked"
                    )
                  }
                </p>
              </div>
              <div className={styles.otherInfo}>
                <p>${booking.price}</p>
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
        </div>
      </div>
      {
        isModal && (
          <NFTModal booking={bookingInfo} onClose={handlerModal} />
        )
      }
    </>
  );
}

export default BookingHistory;

/*
accommodation_id
: 
1
contract_address
: 
"0x6e10411AA37979cDF4003e41Dd6076b1cC89C237"
description
: 
""
id
: 
1
is_cancle
: 
null
location
: 
"Seoul"
name
: 
"Seoul, Korea"
nft
: 
"https://ipfs.io/ipfs/QmbvMGaieqhre2AHGhmcuagkbgRAmCZqRFBcWEPXrQ6xAF/korea.png"
number
: 
"010-1234-1234"
period
: 
1
price
: 
120
room_id
: 
3
site
: 
"Korea"
start_date
: 
"2023-11-30T11:01:44.000Z"
transaction_hash
: 
"0xd68fafd07746099472aa6626c616fa66a093fa995c6b2394c2d9eabc53bbb4b2"
type
: 
"new"
user_id
: 
1
web_link
: 
""
*/