import React from 'react';
import Table from '@core/table';
import { useCoin } from '@core/utility/coinHook';
import Header from '../Header';
import styled from 'styled-components';

const Dashboard = () => {
  const { trendingCoins } = useCoin();
  return (
    <DashboardWrapper>
      <Header />
      <Table data={trendingCoins} />
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div``;

export default Dashboard;
