import PriceModel from '@/DAO/models/Price.model';
import Repository from './Repository';

export default class PriceService extends Repository {
  constructor(dao: any) {
    super(dao, PriceModel.model);
  }
}
