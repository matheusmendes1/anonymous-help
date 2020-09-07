import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/sign-in-background.jpg';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  img {
    width: 150px;
  }

  h1 {
    color: #fff;
  }

  form {
    margin: 50px 0 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #fff;
    }

    > a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.3, '#F4EDE8')};
      }
    }
  }

  > a {
    color: #a087d2;
    display: block;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 16px;
      margin-top: 2px;
    }

    &:hover {
      color: ${shade(0.3, '#a087d2')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
