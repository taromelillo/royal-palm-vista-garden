import { fetchPrices } from '@/services/PriceService';
import { usePriceStore } from '@/store';
import { useEffect, useState } from 'react';

export const useFetchPrices = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>({});

  const setPrices = usePriceStore((state) => state.setPrices);
  const prices = usePriceStore((state) => state.prices);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const prices = await fetchPrices();
        console.log(prices);

        setIsLoading(false);
        if (prices) setPrices(prices);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    })();
  }, []);

  return { prices, isLoading, error };
};
