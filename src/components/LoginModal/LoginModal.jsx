
import Image from 'next/image';
import styles from './LoginModal.module.css';

const LoginModal = ({onClose, onPress}) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.close}>
          <button className={styles.btn} onClick={onClose}>
            <Image
              src={'/close.svg'}
              width={20}
              height={20}
            />
          </button>
        </div>
        <div className={styles.contents}>
          <p className={styles.title}>Sign in  for a new adventure
            in BooKlip</p>
          <button className={styles.google} onClick={onPress}>
            <Image
              src={'/google.svg'}
              width={24}
              height={24}
            />
            <p>
              Continue with Google
            </p>
          </button>
          <p>
            By proceeding, you agree to Terms of Use and confirm you have read out Privacy and Cookies Statement.
            <br />
            This site is protected by the Google Privacy Policy and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
