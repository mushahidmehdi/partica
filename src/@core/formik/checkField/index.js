/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {useField} from 'formik';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const AppTextField = ({label, sx, inputSx, ...props}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <TextFieldWrapper errorText={errorText} sx={sx} inputSx={inputSx}>
      <input {...props} {...field} type='checkbox' />
      <label htmlFor={label}>{label}</label>
      {errorText ? (
        <motion.div
          animate={{y: 0, opacity: 1}}
          transition={{delay: 0.1}}
          initial={{y: -60, opacity: 0}}
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
  align-items: center;

  > label {
    font-size: 1rem;
    margin-inline-start: 0.5rem;
    color: #4a5568;
    line-height: 24px;
  }

  > input[type='checkbox'] {
    height: 1.2rem;
    width: 1.2rem;
    max-width: 100%;
    border: ${({errorText}) =>
      errorText ? `1px solid #EA3B3B` : `1px solid #0466CC`};
    border-color: #0466cc;
    background: linear-gradient(0deg, #ffffff, #ffffff),
      linear-gradient(0deg, #d0d5dd, #d0d5dd);

    ${({inputSx}) => inputSx}
  }
  > div > span {
    color: #ea3b3b;
    font-size: 1rem;
    margin-inline-start: 0.1rem;
  }
  ${({sx}) => sx}
`;

export default AppTextField;
