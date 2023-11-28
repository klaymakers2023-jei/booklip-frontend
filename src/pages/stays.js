
import BookingSearch from '@/components/BookingSearch';
import StayCard from '@/components/StayCard';
import styles from '@/styles/Stay.module.css';

const dummy_data = [
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'popular',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'popular',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'popular',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'popular',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'popular',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'popular',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'popular',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'popular',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'popular',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'popular',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'popular',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'popular',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'popular',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'popular',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'popular',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
  {
    type: 'new',
    name: 'Name of the Hotel',
    location: 'City Name, City Name, Country',
    price: 160,
  },
]

export default function Stays() {
  return (
    <div className={styles.container}>
      <BookingSearch />
      <div className={styles.innerContainer}>
        <div className={styles.contents}>
          {
            dummy_data.map((item, idx) => (
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