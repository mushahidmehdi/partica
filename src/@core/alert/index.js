import styled, { keyframes } from 'styled-components';
import { useAlert, useAlertMethod } from '@core/utility/useAlert';
import closeSuccess from 'assests/icons/close-circle-green.svg';
import closeFail from 'assests/icons/close-circle-red.svg';

const Alert = () => {
  const { alert } = useAlert();
  const { removeAlert } = useAlertMethod();

  const AlertSuccess = ({ message, id }) => (
    <AlertWrapper>
      <AlertSuccessWrapper>
        <span>{message}</span>
        <div onClick={() => removeAlert(id)}>
          <img src={closeSuccess} alt='close' />
        </div>
      </AlertSuccessWrapper>
    </AlertWrapper>
  );

  const AlertError = ({ message, id }) => (
    <AlertWrapper>
      <AlertErrorWrapper>
        <span>{message}</span>
        <div onClick={() => removeAlert(id)}>
          <img src={closeFail} alt='close' />
        </div>
      </AlertErrorWrapper>
    </AlertWrapper>
  );
  return (
    <>
      {alert.length > 0 &&
        alert.map((item) => (
          <div key={item.id}>
            {item.alertType === 'success' ? (
              <AlertSuccess message={item.alertMessage} id={item.id} />
            ) : (
              <AlertError message={item.alertMessage} id={item.id} />
            )}
          </div>
        ))}
    </>
  );
};

const AlertWrapper = styled.section`
  position: absolute;
  z-index: 9999;
  bottom: 5%;
  right: 2%;
`;

const showAlert = keyframes`
  0%{
  }
  40% {
    transform: translateX(-10%)
  }
  80% {
    transform: translateX(0%)
  } 
  100% {
    transform: translateX(-10px)
  }
`;

const AlertSuccessWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #27c281;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  border-top-left-radius: 0.1rem;
  border-bottom-left-radius: 0.1rem;
  background: #effdf7;
  border-left: 0.6rem solid #27c281;
  animation: ${showAlert} 0.5s ease forwards;

  > div {
    border-left: 1px solid #27c281;
    display: flex;
    flex: 1;
    padding: 0.7rem 0.6rem;
    cursor: pointer;
  }

  > span {
    margin-inline: 0.9rem;
    color: #27c281;
    padding: 0.7rem 1rem;
    max-width: 100%;
    width: 15rem;
  }
`;

const AlertErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ea3b3b;
  background: #fef0f0;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  border-top-left-radius: 0.1rem;
  border-bottom-left-radius: 0.1rem;
  border-left: 0.6rem solid #ea3b3b;
  animation: ${showAlert} 0.5s ease forwards;

  > div {
    border-left: 1px solid #ea3b3b;
    display: flex;
    flex: 1;
    padding: 0.7rem 0.6rem;
    cursor: pointer;
  }

  > span {
    margin-inline: 0.9rem;
    color: #ea3b3b;
    max-width: 100%;
    width: 15rem;
  }
`;

export default Alert;
