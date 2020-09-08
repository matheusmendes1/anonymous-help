import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 59px;
  background: #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
  padding: 0 560px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  ul {
    list-style: none;
    display: flex;
    height: 100%;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 15px;
      position: relative;

      span {
        font-size: 13px;
        color: #2d2d2d;
        font-weight: 500;
      }

      strong {
        font-size: 16px;
        color: #2d2d2d;
        font-weight: 600;
        margin-top: 2px;
      }
    }
  }

  div {
    display: flex;

    button {
      height: 34px;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 90px;
      font-weight: bold;
      font-size: 14px;
      color: #aab0e9;
      background: #e4e6eb;
      border: 0;
      border-radius: 16px;

      transition: background-color 0.3s;

      &:hover {
        background: ${shade(0.1, '#aab0e9')};
        color: #fff;
      }
    }
  }
`;
