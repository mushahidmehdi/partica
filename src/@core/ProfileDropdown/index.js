import React, { useRef, useEffect } from 'react';
import logoutImg from 'assests/icons/logout.svg';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useAuthMethod } from '@core/utility/authHook';

const Index = ({ setOpenMenu }) => {
  const logoutRef = useRef();
  const { logout } = useAuthMethod();

  useEffect(() => {
    document.addEventListener('click', closeDropdown, true);
    return () => document.removeEventListener('click', closeDropdown, true);
  }, []);

  const closeDropdown = (evt) => {
    if (logoutRef.current?.contains(evt.target)) {
      logout();
    } else {
      setOpenMenu(false);
    }
  };

  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <DropDownContainer>
        <DropDownItem ref={logoutRef}>
          <img src={logoutImg} alt='Logout' />
          <span>Logout</span>
        </DropDownItem>
      </DropDownContainer>
    </motion.div>
  );
};

const DropDownContainer = styled.div`
  background-color: #21242c;
  position: absolute;
  right: 1%;
  box-shadow: 0px 8px 16px 0px #bebebe33;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  height: 55px;
  width: 9rem;
  border-radius: 10px;
  z-index: 9;
  top: 100%;
`;

const DropDownItem = styled.div`
  cursor: pointer;
  padding-inline: 1.5rem;
  padding-block: 1rem;
  display: flex;
  align-items: center;

  > span {
    margin-inline-start: 0.7rem;
    color: ${({ theme }) => theme.clr[100]};
  }

  @media only screen and (max-width: 1076px) {
    > span {
      margin-inline-start: 0.6rem;
      font-size: 1rem;
      color: ${({ clr }) => (clr ? '#EA3B3B' : '#2D3748')};
    }
  }
`;

export default Index;
