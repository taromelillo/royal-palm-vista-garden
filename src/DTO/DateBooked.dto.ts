import { DateBooked } from '@/interfaces';
import moment from 'moment';

export default class DateBookedDTO {
  private id;
  private name;
  private day;

  constructor(data: DateBooked) {
    this.id = data.id;
    this.name = data.name;
    this.day = moment.unix(data.day.seconds).toDate().toDateString();
  }
}
