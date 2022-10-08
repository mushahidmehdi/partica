import React, { useState } from 'react';
import styled from 'styled-components';
import Search from '@core/Search';
import logoIcon from 'assests/icons/logo.svg';
import { useAuthUser } from '@core/utility/authHook';
import ProfileDropdown from '@core/ProfileDropdown';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase();
}

const Header = () => {
  const { user } = useAuthUser();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderWrapper>
      <Logo src={logoIcon} alt='Paratica'></Logo>
      <AccountWrapper>
        <Search />
        <Avatar onClick={() => setOpenMenu(true)}>
          <p>{capitalizeFirstLetter(user)}</p>
          {openMenu && <ProfileDropdown setOpenMenu={setOpenMenu} />}
        </Avatar>
      </AccountWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-inline: 2rem;
`;

const AccountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`;

const Logo = styled.img`
  font-size: 1.3rem;
  color: #f0f0f0;
`;

const Avatar = styled.div`
  position: relative;
  background-color: #098fdc;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99rem;
  p {
    font-size: 1.2rem;
    color: #fff;
  }
`;
