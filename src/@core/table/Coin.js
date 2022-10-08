import React from 'react';
import styled from 'styled-components';
import { useCoin } from '@core/utility/coinHook';

const Address = ({ coin }) => {
  const { btc } = useCoin();

  const usdPice = (param) => {
    const usd = btc * param;
    return usd.toFixed(6);
  };

  return (
    <CoinWrapper>
      <CoinInfoWrapper>
        <MobileDisplay>
          <NamePhone>
            <div>
              <img src={coin.large} alt='' width={30} height={30} />
              <p>{coin.symbol}</p>
            </div>
            <span>{coin.name}</span>
          </NamePhone>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <CoinBottom>
              <p>Price in USD</p>
              <span>USD {usdPice(coin.price_btc)} </span>
            </CoinBottom>
            <CoinBottom>
              <p>Market Rank</p>
              <span>{coin.market_cap_rank}</span>
            </CoinBottom>
          </div>
        </MobileDisplay>
        <DesktopDisplay>
          <TrendingContent>
            <p>{coin.score}</p>
          </TrendingContent>

          <AssestContent>
            <img src={coin.large} alt='' width={30} height={30} />
            <p>{coin.symbol}</p>
            <span>{coin.name}</span>
          </AssestContent>

          <OtherContent>
            <p>USD {usdPice(coin.price_btc)} </p>
          </OtherContent>
          <OtherContent>
            <p>{coin.market_cap_rank}</p>
          </OtherContent>
        </DesktopDisplay>
      </CoinInfoWrapper>
    </CoinWrapper>
  );
};

const CoinWrapper = styled.div`
  width: 100%;
  @media only screen and (max-width: 56em) {
    padding: 1rem;
  }
`;

const CoinInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-inline: 2rem;
  padding-block: 0.5rem;
`;

const MobileDisplay = styled.section`
  width: 100%;

  @media only screen and (min-width: 56.01em) {
    display: none;
  }
`;

const DesktopDisplay = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  gap: 0.8rem;
  padding-block: 1rem;
  @media only screen and (max-width: 56em) {
    display: none;
  }
`;

const NamePhone = styled.div`
  > div {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    > p {
      font-size: 1rem;
      font-weight: 600;
      line-height: 18px;
      color: #dfdfe0;
      width: 4rem;
    }
  }
  > span {
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    color: ${({ theme }) => theme.gray[400]};
    text-align: left;
  }
`;

const CoinBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 1rem;
  > p {
    font-size: 1rem;
    font-weight: 600;
    line-height: 18px;
    color: #dfdfe0;
    width: 8rem;
  }

  > span {
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    color: ${({ theme }) => theme.gray[400]};
    text-align: left;
  }
`;

const AssestContent = styled.div`
  display: flex;
  align-items: center;
  flex: 0.35;
  overflow: hidden;
  gap: 1rem;
  > p {
    font-size: 1rem;
    font-weight: 600;
    line-height: 18px;
    color: #dfdfe0;
    width: 4rem;
  }
  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 18px;
    color: #757b91;
  }
`;

const TrendingContent = styled.div`
  display: flex;
  flex: 0.1;
  overflow: hidden;
  align-items: center;

  > p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 18px;
    color: #dfdfe0;
  }
`;

const OtherContent = styled.div`
  display: flex;
  flex: 0.25;
  overflow: hidden;
  align-items: center;
  > p {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 18px;

    color: #96979a;
  }
`;

export default Address;
