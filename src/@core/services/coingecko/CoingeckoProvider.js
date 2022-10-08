import { createContext, useContext, useEffect, useState } from 'react';
import { CoingeckoUrls } from 'shared';
import callApi, { ApiMethod } from '@core/services/Api';

const CoingeckoContext = createContext();
const CoingeckoActions = createContext();

const Coingecko = ({ children }) => {
  const [coinsCategories, setCoinsCategories] = useState([]);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [coinsDetail, setCoinsDetail] = useState([]);
  const [btc, setBtc] = useState();

  useEffect(() => {
    callApi(CoingeckoUrls.CATEGORIES, ApiMethod.GET, '', (data) =>
      setCoinsCategories(data)
    );

    callApi(CoingeckoUrls.TRENDING, ApiMethod.GET, '', ({ coins }) =>
      setTrendingCoins(coins)
    );

    callApi(CoingeckoUrls.CATEGORIES_DETAIL, ApiMethod.GET, '', (data) =>
      setCoinsDetail(data)
    );

    callApi(CoingeckoUrls.BITCOIN_USD, ApiMethod.GET, '', ({ bitcoin }) => {
      setBtc(bitcoin.usd);
    });
  }, []);

  return (
    <CoingeckoContext.Provider
      value={{ coinsCategories, trendingCoins, coinsDetail, btc }}
    >
      <CoingeckoActions.Provider value={{}}>
        {children}
      </CoingeckoActions.Provider>
    </CoingeckoContext.Provider>
  );
};

export const useCoingecko = () => useContext(CoingeckoContext);
export const useCoingeckoActions = () => useContext(CoingeckoActions);

export default Coingecko;
