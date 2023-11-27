import cx from 'classnames';

import styles from './ProfileDropDown.module.css';
import Link from 'next/link';

const ProfileDropDown = ({onClose, onPress}) => {
  return (
    <div className={styles.container}>
      <Link className={styles.btn} href={'/booking'}>
        Bookings
      </Link>
      <button className={cx(styles.btn, styles.logOut)} onClick={() => {
        onClose();
        onPress();
      }}>
        Sign Out
      </button>
    </div>
  )
};

export default ProfileDropDown;
