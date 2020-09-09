import styled from 'styled-components';
import { shade } from 'polished';

import ProfileImg from '../../assets/share-background.jpg';

export const Container = styled.div`
  height: 100vh;
  background: url(${ProfileImg}) no-repeat center;
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
  margin: auto;

  form {
    margin: 80px 0;
    width: 480px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1,
    h2 {
      margin-bottom: 24px;
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

    button {
      margin-top: 24px;
    }
  }
`;
