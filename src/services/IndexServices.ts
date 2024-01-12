import DAO from '@/DAO/DAO';
import DateBookedService from './DateBooked.service';

const dao = new DAO();

export const dateBookedService = new DateBookedService(dao);
