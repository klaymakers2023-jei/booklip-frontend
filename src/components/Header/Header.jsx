import { useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import Search from '../Search';
import Logo from '../../../public/Booklip_Logo.png';
import ProfileDropDown from '../ProfileDropDown';

import styles from './Header.module.css';
import LoginModal from '../LoginModal';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);

  const handleSearch = (v) => {
    console.log(v);
    setSearchValue(v);
  }

  const handleModal = () => {
    setIsModal(!isModal);
  }

  const handleLoginModal = () => {
    setIsLoginModal(!isLoginModal);
  }

  const handleLogin = () => {
    setIsLoginModal(!isLoginModal);
    setIsLogin(!isLogin);
  }

  const handleSignOut = () => {
    setIsLogin(!isLogin);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.LogoContainer}>
            <Link href={'/'} className={styles.logo}>
              <div
                style={{
                  backgroundImage: `url(${Logo.src})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  width: "100%",
                  height: '100%'
                  // width: "100vw",
                }}
              />
            </Link>
          </div>
          <div>
            <Search />
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.btn}>Host</button>
            {
              isLogin ? (
                <Image
                  src={'/profile.svg'}
                  style={{ cursor: 'pointer' }}
                  width={40}
                  height={40}
                  onClick={handleModal}
                />
              ) : (
                <button
                    className={cx(styles.btn, styles.login)}
                    onClick={handleLoginModal}
                  >
                    Login
                  </button>
              )
            }
          </div>
          {
            isModal && (
              <ProfileDropDown onClose={handleModal} onPress={handleSignOut} />
            )
          }
        </div>
      </div>
      {
        isLoginModal && (
          <LoginModal onClose={handleLoginModal} onPress={handleLogin} />
        )
      }
    </>
  );
}

export default Header;
