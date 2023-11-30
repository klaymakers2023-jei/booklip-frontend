import { useCallback, useEffect, useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react";

import useStore from '@/store';

import Search from '../Search';
import Logo from '../../../public/Booklip_Logo.png';
import ProfileDropDown from '../ProfileDropDown';
import LoginModal from '../LoginModal';

import styles from './Header.module.css';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [email, setEmail] = useState();

  const { data } = useSession();
  const { actions, userId } = useStore((store) => store.user);
  const { login } = actions();

  useEffect(() => {
    if (data) {
      setEmail(data.user?.email);
      loginUser();
    }
  }, [data]);

  const loginUser = useCallback(async () => {
    if (!email) {
      return;
    }
    await login(email);
  });

  const handleSearch = (v) => {
    setSearchValue(v);
  }

  const handleModal = () => {
    setIsModal(!isModal);
  }

  const handleLoginModal = () => {
    setIsLoginModal(!isLoginModal);
  }

  const handleLogin = () => {
    signIn();
  }

  const handleSignOut = () => {
    signOut();
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
            <Search onSearch={handleSearch} />
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.btn}>Host</button>
            {
              userId ? (
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
