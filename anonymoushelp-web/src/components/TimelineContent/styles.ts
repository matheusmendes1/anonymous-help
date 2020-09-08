import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  flex: 1;
  background: #fff;
  margin: 10px 20px 0;

  nav {
    border-bottom: 1px solid #e6ecf0;
    padding: 10px 15px;

    a {
      text-decoration: none;
      color: #aab0e9;
      font-size: 18px;
      font-weight: bold;
      margin-left: 20px;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.1, '#aab0e9')};
      }

      &::first-child {
        margin: 0;
      }
    }
  }

  ul {
    list-style: none;

    li {
      border-bottom: 1px solid #e6ecf0;
      padding: 10px 15px;

      display: flex;

      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }

      .info {
        margin-left: 10px;
        display: flex;
        flex-direction: column;

        strong {
          font-size: 14px;
          color: #1f2226;

          span {
            font-weight: normal;
            font-size: 14px;
            color: #7b8b9a;

            p {
              font-size: 14px;
              color: #2d2d2d;
              margin-top: 5px;
            }
          }
        }
      }

      .actions {
        display: flex;
        margin-top: 20px;

        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #aab0e9;
          font-weight: bold;
          font-size: 12px;
          margin-left: 10px;
          transition: color 0.3s;

          &:hover {
            color: ${shade(0.1, '#aab0e9')};
          }

          &::first-child {
            margin-left: 0;
          }

          svg {
            margin-right: 5px;
          }
        }
      }
    }
  }
`;
