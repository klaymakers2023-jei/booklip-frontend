import { forwardRef, useEffect, useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import DatePicker from "react-datepicker";

import useStore from '@/store';

import styles from './SearchCard.module.css';

const Destination = ({onChange}) => {
  const [dropDown, setDropDown] = useState(false);
  const [des, setDes] = useState('Select');
  const { setDestination } = useStore((store) => store.common.actions());
  
  const handleDropDown = () => {
    setDropDown(!dropDown);
  }

  const handleDestination = (des) => {
    setDestination(des);
    setDes(des);
    onChange(des.split(',')[0]);
    handleDropDown();
  }

  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <Image
          src={'/pin.svg'}
          width={24}
          height={24}
        />
        <p>Destination</p>
      </div>
      <div
        className={cx(styles.contents, styles.clickable)}
        onClick={handleDropDown}
      >
        <div className={styles.title}>
          <p>{des}</p>
        </div>
        <div className={styles.description}>
          <p>Select city</p>
        </div>
      </div>
      {
        dropDown && (
          <div className={cx(styles.dropDown)}>
            <button
              className={styles.btn}
              onClick={() => handleDestination('Seoul, South Korea')}
            >Seoul, South Korea</button>
            <div className={styles.divider} />
            <button
              className={styles.btn}
              onClick={() => handleDestination('Busan, South Korea')}
            >Busan, South Korea</button>
            <div className={styles.divider} />
            <button
              className={styles.btn}
              onClick={() => handleDestination('Tokyo, Japan')}
            >Tokyo, Japan</button>
            <div className={styles.divider} />
            <button
              className={styles.btn}
              onClick={() => handleDestination('Dubai, Arab Emirates')}
            >Dubai, Arab Emirates</button>
          </div>
        )
      }
    </div>
  )
}
const CheckIn = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { setCheckIn } = useStore((store) => store.common.actions());

  useEffect(() => {
    setCheckIn(startDate);
  }, [startDate]);

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
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
  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <Image
          src={'/check_in.svg'}
          width={24}
          height={24}
        />
        <p>Check-in</p>
      </div>
      <div className={styles.contents}>
        <div className={styles.title}>
          <DatePicker
            dateFormat="dd MMMM yyyy"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date)
              setCheckIn(date);
            }}
            customInput={<ExampleCustomInput />}
          />
        </div>
        <div className={styles.description}>
          <p>Select date</p>
        </div>
      </div>
    </div>
  )
}
const CheckOut = () => {
  const [endDate, setEndDate] = useState(new Date());
  const { setCheckOut } = useStore((store) => store.common.actions());

  useEffect(() => {
    setCheckOut(endDate);
  }, [endDate]);

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={styles.datePicker} onClick={() => {
      onClick();
    }}
      ref={ref}>
      {value}
    </button>
  ));
  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <Image
          src={'/check_out.svg'}
          width={24}
          height={24}
        />
        <p>Check-out</p>
      </div>
      <div className={styles.contents}>
        <div className={styles.title}>
          <DatePicker
            dateFormat="dd MMMM yyyy"
            selected={endDate}
            onChange={(date) => {
              setEndDate(date);
              setCheckOut(date);
            }}
            customInput={<ExampleCustomInput />}
          />
        </div>
        <div className={styles.description}>
          <p>Select date</p>
        </div>
      </div>
    </div>
  )
}
const Guests = () => {
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [isSelectBox, setIsSelectBox] = useState(false);
  const { setGuests } = useStore((store) => store.common.actions());
  const handleBox = () => {
    setIsSelectBox(!isSelectBox);
    setGuests({ adult: adult, child: child });
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

  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <Image
          src={'/user.svg'}
          width={24}
          height={24}
        />
        <p>Guests</p>
      </div>
      <div
        className={cx(styles.contents, styles.clickable)}
        onClick={handleBox}
      >
        <div className={styles.title}>
          <p>{adult+child} Person</p>
        </div>
        <div className={styles.description}>
          <p>{adult} Adult, {child} Child</p>
        </div>
      </div>
      {
        isSelectBox && (
          <div className={cx(styles.dropDown)}>
            <div className={styles.selectContents}>
              <span>Adult</span>
              <div className={styles.selectBtnContents}>
                <button
                  className={styles.btn}
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
                  className={styles.btn}
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
                  className={styles.btn}
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
                  className={styles.btn}
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
  )
}

const SearchCard = ({ type, onChangeDestination }) => {
  switch (type) {
    case 'destination':
      return <Destination onChange={onChangeDestination} />
    case 'checkin':
      return <CheckIn />
    case 'checkout':
      return <CheckOut />
    default: 
      return <Guests />
  }
}

export default SearchCard;
