import React from 'react';
import styled from 'styled-components';

const AppTextField = ({ label, data, handleChange }) => {
  return (
    <TextFieldWrapper>
      <label htmlFor={label}>{label}</label>
      <select onChange={(evt) => handleChange(evt.target.value)}>
        {data?.map((item, index) => (
          <option
            key={index}
            value={item.category_id}
            defaultValue={item?.default}
          >
            {item.name}
          </option>
        ))}
      </select>
    </TextFieldWrapper>
  );
};

const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;

  > label {
    font-size: 1rem;
    margin-inline-start: 0.1rem;
    color: #4a5568;
    margin-block-end: 0.3rem;
    line-height: 24px;
    font-weight: 400;
  }

  > select {
    height: 2.5rem;
    width: 20.6666666667rem;
    max-width: 100%;
    border: none;
    font-size: 1rem;
    color: #667085;
    outline: ${({ errorText }) =>
      errorText ? `1px solid #EA3B3B` : '1px solid #CFD5E1'};
    border-radius: 0.4rem;
    padding: 10px, 14px, 10px, 14px;
    background-color: #21242c;
    outline: none;

    ::placeholder {
      color: ${({ theme, errorText }) =>
        errorText ? '#EA3B3B' : theme.clr[100]};
      font-family: Albert Sans;
      text-indent: 0.6rem;
    }

    ${({ inputSx }) => inputSx}

    > div {
      margin-block: 0.5rem;
      > span {
        color: #ea3b3b;
        font-size: 3rem;
        margin-inline-start: 0.1rem;
      }
    }
    ${({ sx }) => sx}
  }
`;

export default AppTextField;
