
import BookingSearch from '@/components/BookingSearch';
import StayCard from '@/components/StayCard';
import useStore from '@/store';
import styles from '@/styles/Stay.module.css';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

export default function Stays() {
  const { rooms, actions } = useStore((store) => store.room);
  const { getLists, getSpecificLists } = actions();
  const router = useRouter();
  
  useEffect(() => {
    getRooms(router.query.site);
  }, []);

  const getRooms = useCallback(async (site) => {
    if (site) {
      await getSpecificLists(site);
    }
    else {
      await getLists();
    }
  });

  return (
    <div className={styles.container}>
      <BookingSearch serachRooms={getRooms} />
      <div className={styles.innerContainer}>
        <div className={styles.contents}>
          {
            rooms.map((item, idx) => (
              <div className={styles.card} key={idx} >
                <StayCard room={item} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}