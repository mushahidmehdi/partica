/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AppTextField = ({ label, sx, inputSx, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <TextFieldWrapper errorText={errorText} sx={sx} inputSx={inputSx}>
      <label htmlFor={label}>{label}</label>
      <input {...props} {...field} />
      {errorText ? (
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          initial={{ y: -60, opacity: 0 }}
        >
          <span>{errorText}</span>
        </motion.div>
      ) : (
        ''
      )}
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
    color: #f0f0f0;
    margin-block-end: 0.3rem;
    line-height: 24px;
    font-weight: 400;
  }

  > input {
    height: 2.5rem;
    width: 20.6666666667rem;
    max-width: 100%;
    border: none;
    font-size: 1rem;
    color: #f0f0f0;
    border-radius: 0.5rem;
    padding: 1.2rem 0.5rem;
    text-indent: 0.6rem;
    background-color: #21242c;

    ::placeholder {
      color: ${({ theme, errorText }) =>
        errorText ? '#EA3B3B' : theme.clr[100]};
      font-family: Albert Sans;
      text-indent: 0.6rem;
    }

    :focus {
      outline: none;
      border: none;
      background-color: #11242c;
    }

    ${({ inputSx }) => inputSx}
  }
  > div {
    margin-block: 0.5rem;
    > span {
      color: #ea3b3b;
      font-size: 1rem;
      margin-inline-start: 0.1rem;
    }
  }

  ${({ sx }) => sx}
`;

export default AppTextField;
