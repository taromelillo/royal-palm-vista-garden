export interface DateBooked {
  id: string;
  name: string;
  day: {
    seconds: number;
    nanoseconds: number;
  };
}

export type DateBookedType = {
  id: string;
  name: string;
  day: string;
};

export interface Price {
  price: number;
}

export type PriceType = {
  price: string;
};
