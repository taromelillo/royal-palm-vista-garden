export default class DateBookedModel {
  static get model() {
    return 'bookings';
  }

  static get schema() {
    return {
      name: String,
      day: {
        seconds: Number,
        nanoseconds: Number,
      },
    };
  }
}
