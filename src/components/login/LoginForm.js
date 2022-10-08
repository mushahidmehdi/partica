import React from 'react';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import styled from 'styled-components';
import AppTextField from '@core/formik/inputField/AppTextField';
import { CustomButton } from '@core/button';
import { useAuthMethod } from '@core/utility/authHook';

const validationSchema = yup.object({
  username: yup.string().required('Please enter your username'),
  password: yup.string().required('Please create a password'),
});

const SignUpForm = () => {
  const { signIn } = useAuthMethod();

  return (
    <Formik
      validateOnChange={true}
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        signIn(data);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form
          noValidate
          autoComplete='off'
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '25.5rem',
            margin: '0 auto',
            maxWidth: '100%',
          }}
        >
          <AppTextField
            sx={{
              marginTop: '-1rem',

              width: '100%',
            }}
            label='Username'
            name='username'
            placeholder='Enter your Username'
            inputSx={{
              width: '100%',
            }}
          />

          <AppTextField
            sx={{
              width: '100%',
            }}
            label='Password'
            type='password'
            name='password'
            placeholder='Enter a Password'
            inputSx={{
              width: '100%',
            }}
          />

          <RememberForget>
            <div>
              <input type='checkbox' />
              <span> Remember Me </span>
            </div>
            <div>
              <p>Forget Password</p>
            </div>
          </RememberForget>

          <CustomButton
            color={'#fff'}
            type='submit'
            disabled={isSubmitting}
            text='Login'
          />
        </Form>
      )}
    </Formik>
  );
};

const RememberForget = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;

  div {
    display: flex;
    > span {
      font-size: 0.95rem;
      margin-inline-start: 0.6rem;
      color: ${({ theme }) => theme.clr[100]};
    }
    > p {
      font-size: 16px;
      font-weight: 300;
      line-height: 24px;
      color: ${({ theme }) => theme.primary.default};
    }
  }
`;

const DonthaveAccount = styled.div`
  display: flex;
  justify-content: center;
  margin-block: 2rem;

  > span {
    font-family: Albert Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.clr[400]};
    margin-inline-end: 0.5rem;
  }

  > p {
    font-family: Albert Sans;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: ${({ theme }) => theme.primary.default};
    cursor: pointer;
  }
`;

export default SignUpForm;
