import { Swiper, SwiperSlide } from 'swiper/react';
import cx from 'classnames';

import StayCard from '../StayCard';
import BecomeHost from '../../../public/becomeHost.png';

import DestinationCard from '../DestinationCard';

import styles from './MainSecondSection.module.css';

import 'swiper/css';
import useStore from '@/store';
import { useCallback, useEffect } from 'react';

const MainSecondSection = () => {
  const { accommodations } = useStore((store) => store.accmmodation);
  const { rooms, actions } = useStore((store) => store.room);
  const { getLists } = actions();
  
  useEffect(() => {
    getRooms();  
  }, []);

  const getRooms = useCallback(async () => {
    await getLists();
  });

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.contents}>
          <div className={styles.titleContainer}>
            <p>Featured Stays</p>
            <div className={styles.divider} />
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
          >
            {
              rooms.slice(0,8).map((item, idx) => (
                <SwiperSlide key={idx}>
                  <StayCard room={item} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className={styles.contents}>
          <div className={cx(styles.titleContainer, styles.trending)}>
            <p>Trending Destinations</p>
            <div className={styles.divider} />
          </div>
          <Swiper
            spaceBetween={40}
            slidesPerView={4}
          >
            {
              accommodations.length > 0 && (
                accommodations.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <DestinationCard city={item} />
                  </SwiperSlide>
                ))
              )
            }
          </Swiper>
        </div>
        <div
          className={styles.becomeHostContainer}
          style={{
            backgroundImage: `url(${BecomeHost.src})`,
          }}
        >
          <div className={styles.becomeHost}>
            <div className={styles.becomeContents}>
              <p className={styles.becomeTitle}>Become a host</p>
              <p>Join thousands of Landlords <br /> and earn an extra income.</p>
              {/* <button className={styles.btn}>Learn More</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSecondSection;
