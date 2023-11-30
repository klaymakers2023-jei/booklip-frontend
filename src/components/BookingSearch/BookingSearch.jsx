import cx from 'classnames';
import { forwardRef, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import DatePicker from "react-datepicker";

import useStore from '@/store';

import styles from './BookingSearch.module.css';

const BookingSearch = ({serachRooms}) => {
  const [des, setDes] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [total, setTotal] = useState();
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);

  const { destination, checkIn, checkOut, guests, actions } = useStore((store) => store.common);

  const { setDestination, setGuests, setCheckIn, setCheckOut } = actions();
  const [isSelectGuests, setIsSelectGuests] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  
  // const handleCheckIn = useCallback()
  const handleDropDown = () => {
    setDropDown(!dropDown);
  }

  const handleDestination = (des) => {
    setDestination(des);
    setDes(des);
    handleDropDown();
  }

  const handleSelectGuests = () => {
    setIsSelectGuests(!isSelectGuests);
    setGuests({ adult: adult, child: child });
    setTotal(adult + child > 0 ? `${adult + child} Person` : 'Guests');
  }

  const addAdult = () => {
    setAdult(adult + 1);
  }

  const delAdult = () => {
    if (adult > 0) {
      setAdult(adult - 1);
    }
  }

  const addChild = () => {
    setChild(child + 1);
  }

  const delChild = () => {
    if (child > 0) {
      setChild(child - 1);
    }
  }

  const CheckInInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className={styles.datePicker}
      onClick={() => {
        onClick();
        // setCheckIn(value);
      }}
      ref={ref}
    >
      {value}
    </button>
  ));

  const CheckOutInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className={styles.datePicker}
      onClick={() => {
        onClick();
      }}
      ref={ref}
    >
      {value}
    </button>
  ));

  useEffect(() => {
    setDes(destination ? destination : 'Destination');
    setStart(checkIn ? new Date(Date.parse(checkIn)) : new Date());
    setEnd(checkOut ? new Date(Date.parse(checkOut)) : new Date());
    setAdult(guests.adult ? guests.adult : 0);
    setChild(guests.child ? guests.child : 0);
    setTotal(guests.adult + guests.child > 0 ? `${guests.adult + guests.child} Person` : 'Guests');
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.contentsContainer}>
          <div className={styles.contents}>
            <div className={styles.infoContainer} onClick={handleDropDown}>
              <Image
                src={'/locate.svg'}
                width={24}
                height={24}
              />
              <p>{des}</p>
            </div>
            {
              dropDown && (
                <div className={cx(styles.dropDown)}>
                  <button
                    className={styles.selectBtn}
                    onClick={() => handleDestination('Seoul, South Korea')}
                  >Seoul, South Korea</button>
                  <div className={styles.divider} />
                  <button
                    className={styles.selectBtn}
                    onClick={() => handleDestination('Busan, South Korea')}
                  >Busan, South Korea</button>
                  <div className={styles.divider} />
                  <button
                    className={styles.selectBtn}
                    onClick={() => handleDestination('Tokyo, Japan')}
                  >Tokyo, Japan</button>
                  <div className={styles.divider} />
                  <button
                    className={styles.selectBtn}
                    onClick={() => handleDestination('Dubai, Arab Emirates')}
                  >Dubai, Arab Emirates</button>
                </div>
              )
            }
            <div className={styles.divider} />
          </div>
          <div className={styles.contents}>
            <div className={styles.infoContainer}>
              <Image
                src={'/check_in_grey.svg'}
                className={styles.checkIn}
                width={24}
                height={24}
              />
              <DatePicker
                dateFormat="dd MMMM yyyy"
                selected={start}
                onChange={(date) => {
                  setStart(date)
                  setCheckIn(date);
                }}
                customInput={<CheckInInput />}
              />
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.contents}>
            <div className={styles.infoContainer}>
              <Image
                src={'/check_out_grey.svg'}
                width={24}
                height={24}
              />
              <DatePicker
                dateFormat="dd MMMM yyyy"
                selected={end}
                onChange={(date) => {
                  setEnd(date);
                  setCheckOut(date);
                }}
                customInput={<CheckOutInput />}
              />
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.contents}>
            <div className={styles.infoContainer} onClick={handleSelectGuests}>
              <Image
                src={'/user_grey.svg'}
                width={24}
                height={24}
              />
              <p>{total}</p>
            </div>
            {
              isSelectGuests && (
                <div className={cx(styles.dropDown)}>
                  <div className={styles.selectContents}>
                    <span>Adult</span>
                    <div className={styles.selectBtnContents}>
                      <button
                        className={styles.selectBtn}
                        onClick={delAdult}
                      >
                        <Image
                          src={'/minus.svg'}
                          width={24}
                          height={24}
                        />
                      </button>
                      {adult}
                      <button
                        className={styles.selectBtn}
                        onClick={addAdult}
                      >
                        <Image
                          src={'/plus.svg'}
                          width={24}
                          height={24}
                        />
                      </button>
                    </div>
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.selectContents}>
                    <span>Child</span>
                    <div className={styles.selectBtnContents}>
                      <button
                        className={styles.selectBtn}
                        onClick={delChild}
                      >
                        <Image
                          src={'/minus.svg'}
                          width={24}
                          height={24}
                        />
                      </button>
                      {child}
                      <button
                        className={styles.selectBtn}
                        onClick={addChild}
                      >
                        <Image
                          src={'/plus.svg'}
                          width={24}
                          height={24}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <button
          className={styles.btn}
          onClick={() => {
            if (destination) {
              serachRooms(destination.split(',')[0]);
            }
            else {
              serachRooms();
            }
          }}
        >
          search
        </button>
      </div>
    </div>
  );
}

export default BookingSearch;
