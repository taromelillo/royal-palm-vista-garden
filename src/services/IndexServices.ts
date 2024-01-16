import DAO from '@/DAO/DAO';
import DateBookedService from './DateBooked.service';
import PriceService from './Price.service';

const dao = new DAO();

export const dateBookedService = new DateBookedService(dao);
export const priceService = new PriceService(dao);
