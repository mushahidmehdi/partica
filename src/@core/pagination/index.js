import React from 'react';
import rightArrow from 'assests/icons/arrow-right.svg';
import styled from 'styled-components';

const Index = ({ currentPage, totalRows, setPagination, rowPerPage }) => {
  const numberOfPages = totalRows / rowPerPage;
  const lastPage = Math.ceil(numberOfPages);

  const incrementPaginarion = () => {
    if (lastPage > currentPage) {
      setPagination((prev) => ({
        ...prev,
        currentPage: currentPage + 1,
      }));
    }
  };

  const decrementPaginarion = () => {
    if (currentPage > 1) {
      setPagination((prev) => ({
        ...prev,
        currentPage: currentPage - 1,
      }));
    }
  };

  return (
    <PaginationWrapper>
      <PaginationArrow
        transform={'rotate(180deg)'}
        onClick={decrementPaginarion}
        curPage={currentPage}
      >
        <img src={rightArrow} alt='' />
      </PaginationArrow>
      <PaginationNumber border={true}>
        <span>{currentPage}</span>
      </PaginationNumber>
      <PaginationArrow
        onClick={incrementPaginarion}
        curPage={currentPage}
        lastPage={lastPage}
      >
        <img src={rightArrow} alt='' />
      </PaginationArrow>
      <PaginationNumber light='light'>
        <span> of {totalRows}</span>
      </PaginationNumber>
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding-block: 1rem;
`;

const PaginationArrow = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bg[200]};
  padding: 0.3rem;
  border-radius: 0.5rem;
  transform: ${({ transform }) => transform};
  opacity: ${({ transform, curPage, lastPage }) =>
    curPage === 1 && transform ? 0.2 : lastPage === curPage ? 0.2 : 1};
`;
const PaginationNumber = styled.div`
  width: ${({ border }) => border && '1.9rem'};
  height: ${({ border }) => border && '1.9rem'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.gray[400]};
  border: ${({ border }) => border && '1px solid #BEBEBE'};
`;

export default Index;
