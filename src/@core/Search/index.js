import React from 'react';
import searchIcon from 'assests/icons/search-normal-light-clr.svg';
import styled from 'styled-components';

const TrackingSearch = ({ sx }) => {
  return (
    <Searched sx={sx}>
      <div>
        <img src={searchIcon} alt='' width={22} height={22} />
      </div>
      <input placeholder='Search' />
    </Searched>
  );
};

const Searched = styled.div`
  max-width: 18rem;
  border-radius: 99rem;
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
  background-color: #21242c;

  > div {
    margin-inline-start: 1rem;
  }
  > input {
    padding: 0.8rem;
    width: 100%;
    font-size: 1rem;
    font-weight: 300;
    outline: none;
    border: none;
    background-color: transparent;
    color: #fff;

    ::placeholder {
      color: ${({ theme }) => theme.clr[100]};
      font-weight: 300;
      font-size: 1rem;
      font-family: 'Albert Sans';
    }
  }
  ${({ sx }) => sx}

  @media only screen and (max-width: 29rem) {
    display: none;
  }
`;

export default TrackingSearch;
