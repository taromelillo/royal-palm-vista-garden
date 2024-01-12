import { db } from '@/config/firebase';
import BookingsModel from './models/DateBooked.model';
import { QueryDocumentSnapshot, collection, getDocs } from 'firebase/firestore';
import PriceModel from './models/Price.model';
import moment from 'moment';
import DateBookedDTO from '@/DTO/DateBooked.dto';
import PriceDTO from '@/DTO/Price.dto';
import { DateBookedType } from '@/interfaces';

const DATA_ACTIONS = {
  [BookingsModel.model]: (data: QueryDocumentSnapshot) => {
    return {
      id: data.id,
      name: data.data().name,
      day: moment.unix(data.data().day.seconds).toDate().toDateString(),
    };
  },
  [PriceModel.model]: (data: QueryDocumentSnapshot) => {
    return { price: Number(data.data().price).toFixed(2) };
  },
};

export default class DAO {
  private models;
  private actions;
  constructor() {
    this.models = {
      [BookingsModel.model]: collection(db, BookingsModel.model),
      [PriceModel.model]: collection(db, PriceModel.model),
    };

    this.actions = {
      [BookingsModel.model]: (data: any) => {
        return new DateBookedDTO(data);
      },
      [PriceModel.model]: (data: any) => {
        return new PriceDTO(data);
      },
    };
  }

  get = async (entity: string) => {
    if (!this.models[entity]) throw Error('Entity not found in models. . . ');

    const results: Array<any> = await getDocs(this.models[entity]).then(
      (res) => {
        const arrayData = res.docs.map((res) => {
          const data = { id: res.id, ...res.data() };
          return this.actions[entity](data);
        });
        return arrayData;
      }
    );
    return results;
  };
}
