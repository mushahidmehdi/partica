import styled from 'styled-components';
import LoginImage from 'assests/icons/login.jpeg';
import SignUpForm from './LoginForm';
import Alert from '@core/alert';

const Signup = () => {
  return (
    <Container>
      <DesktopImage>
        <img src={LoginImage} alt='' />
      </DesktopImage>

      <FormContainer>
        <Heading>
          <h5>Login</h5>
          <p>Welcome back! Please enter your details.</p>
        </Heading>
        <SignUpForm />
      </FormContainer>
      <Alert />
    </Container>
  );
};

const Container = styled.section`
  max-width: 184em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-inline: 1.25rem;

  @media only screen and (min-width: 69em) {
    flex-direction: row-reverse;
  }
`;
const DesktopImage = styled.div`
  display: flex;
  width: 55%;

  @media only screen and (max-width: 68.99em) {
    display: none;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 45%;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  width: 25.5rem;
  max-width: 100%;
  margin: 2rem auto;
  padding-inline: 0.6rem;
  padding-block: 1.6rem;
  > p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.8rem;
    color: #4a5568;
  }
  h5 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.5rem;
    color: #f0f0f0;
  }
`;

export default Signup;
