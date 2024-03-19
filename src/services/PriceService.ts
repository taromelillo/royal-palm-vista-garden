import { db } from '@/config/firebase';
import { Price } from '@/store';
import {
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

const priceCollectionRef = collection(db, 'prices');

export const createPrice = async (
  price: Omit<Price, 'id'>
): Promise<DocumentData> => {
  return await addDoc(priceCollectionRef, price);
};

export const fetchPrices = async (): Promise<Price[]> => {
  const snapshot = await getDocs(priceCollectionRef);
  return snapshot.docs.map((doc) => {
    const data = doc.data() as Price;
    return { ...data, id: doc.id };
  });
};

export const updatePrice = async (
  id: string,
  update: Partial<Omit<Price, 'id'>>
): Promise<void> => {
  const priceDoc = doc(db, 'prices', id);
  await updateDoc(priceDoc, update);
};

export const deletePrice = async (id: string): Promise<void> => {
  const priceDoc = doc(db, 'prices', id);
  await deleteDoc(priceDoc);
};
