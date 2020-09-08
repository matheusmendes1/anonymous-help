import styled from 'styled-components';

export const Container = styled.div`
  width: 260px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 5px solid #fff;
    margin-top: -130px;
  }

  h1 {
    font-size: 21px;
    color: #1f2226;
    margin-top: 10px;
  }

  span {
    font-size: 14px;
    color: #2d2d2d;
    font-weight: 500;
  }

  p {
    font-size: 14px;
    margin-top: 15px;
    color: #2d2d2d;
    font-weight: 500;
  }

  ul {
    margin-top: 20px;
    list-style: none;

    li {
      font-size: 14px;
      color: #2d2d2d;

      display: flex;
      align-items: center;
      margin-top: 5px;

      &::first-child {
        margin: 0;
      }

      svg {
        margin-right: 10px;
        color: #aab0e9;
      }
    }
  }

  .widget {
    margin-top: 20px;

    strong {
      font-weight: normal;
      color: #aab0e9;
      font-size: 14px;

      display: flex;
      align-items: center;
    }

    svg {
      margin-right: 10px;
    }
  }

  .followers {
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 45px;
        height: 45px;
        background: #d0d5d9;
        border-radius: 50%;
        flex-shrink: 0;
        flex-grow: 1;
        margin: 0 5px 10px 0;
      }
    }
  }
`;
