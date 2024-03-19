import { Booking } from '@/store';
import { db } from '../config/firebase';
import {
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

const bookingCollectionRef = collection(db, 'bookings');

export const createBooking = async (booking: {
  name: string;
  day: Date;
}): Promise<DocumentData> => {
  return await addDoc(bookingCollectionRef, booking);
};

export const fetchBookings = async (): Promise<Booking[]> => {
  const snapshot = await getDocs(bookingCollectionRef);
  return snapshot.docs.map((doc) => {
    const data = doc.data() as Booking;
    return { ...data, id: doc.id };
  });
};

export const udpdateBooking = async (
  id: string,
  update: { name: string; day: Date }
): Promise<void> => {
  const bookingDoc = doc(db, 'bookings', id);
  await updateDoc(bookingDoc, update);
};

export const deleteBooking = async (id: string): Promise<void> => {
  const bookingDoc = doc(db, 'bookings', id);
  await deleteDoc(bookingDoc);
};
