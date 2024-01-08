import { db } from '@/config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import moment from 'moment';
import { useEffect, useState } from 'react';

const useDateBooked = () => {
  const [datesBooked, setDatesBooked] = useState<Array<Date>>([]);

  useEffect(() => {
    const collect = collection(db, 'bookings');
    getDocs(collect).then((res) => {
      const array = res.docs.map((res) => {
        return moment.unix(res.data().day.seconds).toDate();
      });
      setDatesBooked(array);
    });
  }, []);

  return datesBooked;
};

export default useDateBooked;
