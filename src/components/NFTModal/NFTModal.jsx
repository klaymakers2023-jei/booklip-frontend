import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import { EffectFlip } from 'swiper/modules';
import Image from 'next/image';
import cx from 'classnames';

import styles from './NFTModal.module.css';

const NFTModal = ({ booking, onClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.close}>
          <button onClick={onClose} className={styles.btn}>
            <Image
              src={'/close.svg'}
              width={20}
              height={20}
            />
          </button>
        </div>
        <Swiper
          effect={'flip'}
          modules={[EffectFlip]}
          loop={true}
          class="mySwiper"
          // className={styles.swiper}
        >
          <SwiperSlide>
            <div
              className={styles.img}
              style={{backgroundImage: `url(${booking.image})`}}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={styles.img}
              style={{backgroundImage: `url(${booking.image})`}}
            >
              <div className={styles.infoContainer}>
                <p className={styles.name}>{booking.name}</p>
                <p>{booking.period}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default NFTModal;
