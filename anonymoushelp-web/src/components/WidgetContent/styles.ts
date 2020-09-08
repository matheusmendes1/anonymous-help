import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 290px;
  max-height: 40vh;
  background: #fff;
  padding: 15px;
  margin-top: 10px;

  .title {
    display: flex;
    align-items: baseline;

    strong {
      font-size: 18px;
      color: #1f2226;
    }

    a {
      color: #aab0e9;
      font-size: 12px;
      text-decoration: none;
      position: relative;
      padding-left: 10px;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.1, '#aab0e9')};
      }

      &::before {
        content: '';
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background: #222;
        position: absolute;
        left: 4px;
        top: 6px;
      }
    }
  }

  ul {
    list-style: none;
    margin-top: 10px;

    li {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccd6dd;
      padding-bottom: 10px;
      margin-bottom: 10px;

      &::last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border: 0;
      }

      .profile {
        display: flex;
        align-items: center;
        border-radius: 50%;

        img {
          width: 48px;
          height: 48px;
        }

        .info {
          margin-left: 10px;
          display: flex;
          flex-direction: column;

          strong {
            font-size: 14px;
            color: #1f2326;

            span {
              font-weight: normal;
              color: #9a9a9a;
            }
          }

          button {
            height: 27px;
            margin-top: 4px;

            display: flex;
            align-items: center;
            justify-content: center;

            width: 90px;
            font-weight: bold;
            font-size: 14px;
            color: #aab0e9;
            border: 1px solid #aab0e9;
            border-radius: 16px;
            background: #fff;
            transition: background-color 0.3s;

            &:hover {
              background: ${shade(0.1, '#aab0e9')};
              color: #fff;
            }
          }
        }
      }

      > a {
        color: #ccd6dd;
        text-decoration: none;
        font-size: 15px;
      }
    }
  }
`;
