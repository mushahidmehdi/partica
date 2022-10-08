import React, { useState } from 'react';
import Coin from './Coin';
import styled from 'styled-components';
import Pagination from '@core/pagination';

const CoinsTable = ({ data }) => {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    rowPerPage: 18,
  });

  const { currentPage, rowPerPage } = pagination;
  const indexOfLastPost = currentPage * rowPerPage;
  const indexOfFirstPost = indexOfLastPost - rowPerPage;
  const currentRows = data?.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <CoinsTableWrapper>
      <Heading>Top Trending Coin on Coingecko</Heading>
      <Titles>
        <CellTitle flex={0.1}>
          <p>Score</p>
        </CellTitle>
        <CellTitle flex={0.35}>
          <p>Assests</p>
        </CellTitle>
        <CellTitle flex={0.25}>
          <p>Price BTC</p>
        </CellTitle>
        <CellTitle flex={0.25}>
          <p>Market Rank</p>
        </CellTitle>
      </Titles>
      <Hr />
      {currentRows?.map(({ item }, idx) => (
        <Coin key={idx} coin={item} />
      ))}

      {rowPerPage < data?.length && (
        <Pagination
          currentPage={currentPage}
          totalRows={data?.length}
          setPagination={setPagination}
          rowPerPage={rowPerPage}
        />
      )}
    </CoinsTableWrapper>
  );
};

const CoinsTableWrapper = styled.section`
  max-width: 96%;
  background-color: #21242c;
  border-radius: 1rem;
  margin: 0 auto;
`;

const Titles = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  border-radius: 0.5rem;
  padding-inline: 2rem;
  padding-block: 1rem;
  @media only screen and (max-width: 56em) {
    display: none;
  }
`;

const Hr = styled.div`
  width: 97%;
  height: 0.1rem;
  background-color: #525875;
  margin: 0 auto;
`;

const CellTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: ${({ flex }) => flex};

  > p {
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    color: #525875;
  }
`;

const Heading = styled.h4`
  color: #dfdfe0;
  padding-inline: 2rem;
  padding-block: 1rem;
  line-height: 1.5rem;
`;

export default CoinsTable;
