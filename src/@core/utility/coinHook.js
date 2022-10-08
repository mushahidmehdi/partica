import {
  useCoingeckoActions,
  useCoingecko,
} from '@core/services/coingecko/CoingeckoProvider';
import filterCategory from './filterCategory';

export const useCoin = () => {
  const { coinsCategories, trendingCoins, coinsDetail, btc } = useCoingecko();
  return { coinsCategories, coinsDetail, trendingCoins, btc };
};

export const useCoinActions = () => {
  const {} = useCoingeckoActions();

  return { filterCategory };
};
