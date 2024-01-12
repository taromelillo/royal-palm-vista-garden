import { Price } from '@/interfaces';

export default class PriceDTO {
  private price;
  constructor(data: Price) {
    this.price = data.price.toFixed(2);
  }
}
