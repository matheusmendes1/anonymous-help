import styled from 'styled-components';
import { shade } from 'polished';

import searchImg from '../../assets/search.svg';
import bannerImg from '../../assets/banner.jpg';

export const Container = styled.div`
  height: 65px;
  background: #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
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
      align-items: center;
      justify-content: center;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: 30px;

        &::first-child {
          margin: 0;
        }

        button {
          margin-left: 7px;

          font-size: 16px;
          color: #2d2d2d;
          font-weight: 500;
          letter-spacing: 1px;
          transition: color 0.3s;
          background: transparent;
          border: 0;

          &:hover {
            color: ${shade(0.1, '#aab0e9')};
            cursor: pointer;
          }

          span {
            margin-left: 5px;
          }
        }

        a {
          text-decoration: none;

          span {
            margin-left: 7px;
            font-size: 16px;
            color: #2d2d2d;
            font-weight: 500;
            letter-spacing: 1px;
            transition: color 0.3s;

            &:hover {
              color: #aab0e9;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  img {
    width: 50px;
    cursor: pointer;
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

      &:hover {
        opacity: 0.6;
      }
    }

    button {
      height: 34px;
      background: #e4e6eb;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 90px;
      font-weight: 500;
      font-size: 14px;
      color: #aab0e9;
      border: 0;
      border-radius: 16px;
      transition: color 0.3s;
      transition: background-color 0.3s;

      &:hover {
        background: ${shade(0.1, '#aab0e9')};
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
      font-weight: 500;
      background: url(${searchImg}) no-repeat 190px center;
      background-color: #e4e6eb;
      cursor: pointer;

      &::placeholder {
        color: #aab0e9;
      }
    }
  }
`;

export const Banner = styled.div`
  height: 340px;
  width: 100%;
  background: url(${bannerImg}) no-repeat center;

  color: #f0f2f5;
`;

export const Layer = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
