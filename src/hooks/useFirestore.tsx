'use client';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '@/config/firebase';

interface FirestoreProps {
  database: string;
}

interface Data {
  id: string;
  day: string;
}

const useFirestore = ({ database }: FirestoreProps) => {
  const [data, setData] = useState({ bookings: Array<Object>() });

  const getData = (database: string) => {
    const collect = collection(db, database);
    getDocs(collect).then((res) => {
      const arrayData = res.docs.map((data) => {
        return { ...data.data(), id: data.id };
      });
      setData({ bookings: [arrayData] });
    });
  };

  useEffect(() => {
    getData(database);
  }, [database]);
  return [data];
};

export default useFirestore;
