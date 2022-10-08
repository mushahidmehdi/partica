import React, { useState } from 'react';
import AppSelectField from '@core/formik/selectField';
import Header from '../Header';
import { useCoin } from '@core/utility/coinHook';
import styled from 'styled-components';
import upImg from 'assests/icons/up.jpeg';
import downImg from 'assests/icons/down.jpeg';

const AdminDashbord = () => {
  const [filtedCategory, setfiltedCategory] = useState([]);
  const { coinsCategories, coinsDetail } = useCoin();

  const handleChange = (params) => {
    setfiltedCategory(coinsDetail.filter((category) => category.id === params));
  };
  console.log(filtedCategory);

  const inBillions = (params) => {
    const inBillion = params[0].market_cap / 1000000000;
    return inBillion.toFixed(2);
  };

  return (
    <>
      <Header />
      <SelectFiledWrapper>
        <AppSelectField
          label='Please Choose a Category'
          data={coinsCategories}
          handleChange={handleChange}
        />
      </SelectFiledWrapper>
      {filtedCategory.length > 0 ? (
        <DetailWrapper>
          <div>
            <p>
              Top 3 Coins in
              <span>{' ' + filtedCategory[0].name}</span>
            </p>
            <h3>Total Market Cap: {inBillions(filtedCategory)}B USD</h3>
            <ImageWrapper>
              {filtedCategory[0].top_3_coins?.map((img, idx) => (
                <img src={img} alt='Top 3' key={idx} />
              ))}
            </ImageWrapper>
          </div>

          {filtedCategory[0].market_cap_change_24h > 0 ? (
            <RightWrapper down={false}>
              <span>
                Last 24 hour
                {' ' + '+' + filtedCategory[0].market_cap_change_24h.toFixed(2)}
                %
              </span>
              <TrendWrapper>
                <img src={upImg} alt='' width={300} />
              </TrendWrapper>
            </RightWrapper>
          ) : (
            <RightWrapper down={true}>
              <span>
                Last 24 hour
                {' ' + filtedCategory[0].market_cap_change_24h.toFixed(2)}%
              </span>

              <TrendWrapper>
                <img src={downImg} alt='' width={300} />
              </TrendWrapper>
            </RightWrapper>
          )}
        </DetailWrapper>
      ) : (
        <NoData>No Data Avaible</NoData>
      )}
    </>
  );
};

const DetailWrapper = styled.div`
  background-color: #1e1f25;
  width: 44rem;
  margin-inline: 1rem;
  border-radius: 0.5rem;
  margin: 2rem auto;
  max-width: 100%;
  padding-inline: 1.5rem;
  padding-block: 1rem;
  display: flex;
  justify-content: space-between;
  div > p {
    color: #f4f7f7;
    font-size: 1.5rem;
    font-weight: 600;

    span {
      font-weight: 700;
      font-size: 1.6rem;
    }
  }

  div > h3 {
    color: #f4f7f7;
    font-size: 1rem;
    font-weight: 500;
    color: #505673;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  span {
    color: #f4f7f7;
    font-size: 0.9rem;
    font-weight: 400;
    color: ${({ down }) => (down ? 'red' : 'green')};
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 22rem;
`;

const SelectFiledWrapper = styled.div`
  width: 19rem;
  margin: 0 auto;
`;

const TrendWrapper = styled.div`
  width: 11rem;
  height: 5.7rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const NoData = styled.p`
  margin: 5rem auto;
  color: #fff;
  width: 12rem;
`;

export default AdminDashbord;
