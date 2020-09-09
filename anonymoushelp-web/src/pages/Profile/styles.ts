import styled from 'styled-components';
import { shade } from 'polished';

import ProfileImg from '../../assets/profile-background.jpg';

export const Container = styled.div`
  height: 100vh;
  background: url(${ProfileImg}) no-repeat center;

  header {
    width: 100%;
    height: 115px;

    display: flex;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.5);
    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #fff;
        width: 32px;
        height: 32px;

        transition: color 0.3s;

        &:hover {
          color: ${shade(0.2, '#AAB0E9')};
        }
      }
    }
  }
`;

export const Layer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: -176px auto 0;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: center;
      color: #fff;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }

    input {
      &::placeholder {
        color: #aab0e9;
      }
    }

    input[name='old_password'] {
      margin-top: 24px;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #aab0e9;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    transition: background-color 0.2s;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.3, '#AAB0E9')};
    }
  }
`;
