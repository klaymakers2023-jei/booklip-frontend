import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Search from '@/components/Search'
import MainSection from '@/components/MainSection'

import 'swiper/css';
import MainSecondSection from '@/components/MainSecondSection'
import useStore from '@/store'
import { useCallback, useEffect } from 'react'

export default function Home() {
  const { actions } = useStore((store) => store.accmmodation);
  const { getLists } = actions();
  
  useEffect(() => {
    getAccommodations();  
  }, []);

  const getAccommodations = useCallback(async () => {
    await getLists();
  });
  
  return (
    <>
      <Head>
        <title>Booklip</title>
        <meta name="description" content="Generated by JEI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/booklip.png" />
      </Head>
      <main>
        <MainSection />
        <MainSecondSection />
      </main>
    </>
  )
}
