import React from 'react';
import styled from 'styled-components';

export const CustomButton = ({
  bg,
  clr,
  icon,
  borderClr,
  hoverBorderClr,
  hoverBg,
  hoverClr,
  boxShadow,
  type,
  text,
  onClick,
  sx,
}) => {
  return (
    <ButtonContainer
      onClick={onClick}
      boxShadow={boxShadow}
      bg={bg}
      clr={clr}
      borderClr={borderClr}
      icon={icon}
      hoverBorderClr={hoverBorderClr}
      hoverClr={hoverClr}
      hoverBg={hoverBg}
      type={type}
      text={text}
      sx={sx}
    >
      {icon ? (
        <IconImage>
          <img src={icon} alt='' objectFit='contain' width={20} height={20} />
        </IconImage>
      ) : (
        ''
      )}
      <span>{text}</span>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  display: flex;
  max-width: 47rem;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1rem;
  border-radius: 0.6rem;
  background-color: ${({ bg, theme }) => (bg ? bg : theme.primary.shade[600])};
  color: ${({ clr }) => (clr ? clr : '#fff')};
  font-weight: 400;
  font-size: 1rem;
  border: 1.4px solid
    ${({ borderClr }) => (borderClr ? borderClr : 'transparent')};
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? '0px 1px 2px 0px #1018280d' : ''};

  > span {
    margin-inline: ${({ text }) => (text ? '1.3rem' : '')};
  }

  &:hover {
    cursor: pointer;
  }
  ${({ sx }) => sx}
`;

const IconImage = styled.div`
  display: flex;
  align-items: center;
  ${({ icon }) => icon !== '' && `width : 1.2rem; margin-inline-end: 0.1rem`}
`;
