import styled from 'styled-components';
import { shade } from 'polished';

import searchImg from '../../assets/search.svg';

export const Container = styled.div`
  height: 80px;
  background: rgba(170, 176, 233, 1);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 20px;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  nav {
    ul {
      display: flex;
      list-style: none;

      li {
        display: flex;
        align-items: center;

        margin-left: 30px;

        &:first-child {
          margin: 0;
        }

        span {
          margin-left: 7px;
          font-size: 16px;
          color: #fff;
          font-weight: 600;
          letter-spacing: 1px;
          transition: color 0.3s;

          &:hover {
            color: ${shade(0.3, '#FFF')};
            cursor: pointer;
          }
        }
      }
    }
  }

  img {
    width: 50px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      margin: 0 15px;
    }

    button {
      height: 34px;
      background: #fff;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 90px;
      font-weight: bold;
      font-size: 14px;
      color: #aab0e9;
      border: 0;
      border-radius: 16px;
      transition: color 0.3s;
      transition: background-color 0.3s;

      &:hover {
        background: ${shade(0.3, '#aab0e9')};
        color: #fff;
      }
    }

    input {
      width: 220px;
      border: 1px solid #aab0e9;
      height: 34px;
      padding: 0 30px 0 12px;
      border-radius: 10px;
      color: #aab0e9;
      font-size: 12px;
      font-weight: 600;
      background: url(${searchImg}) no-repeat 190px center;
      background-color: #fff;
      cursor: pointer;
    }
  }
`;
