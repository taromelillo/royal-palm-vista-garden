import DateBookedModel from '@/DAO/models/DateBooked.model';
import Repository from './Repository';

export default class DateBookedService extends Repository {
  constructor(dao: any) {
    super(dao, DateBookedModel.model);
  }
}
