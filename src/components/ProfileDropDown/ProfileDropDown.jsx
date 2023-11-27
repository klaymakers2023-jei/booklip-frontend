import cx from 'classnames';

import styles from './ProfileDropDown.module.css';

const ProfileDropDown = ({onClose, onPress}) => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>
          Bookings
      </button>
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
