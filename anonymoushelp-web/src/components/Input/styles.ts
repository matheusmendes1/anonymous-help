import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  border: 2px solid #fff;
  padding: 16px;
  width: 100%;
  color: #191919;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `};

  ${props =>
    props.isFocused &&
    css`
      color: #e7bbda;
      border-color: #e7bbda;
    `};

  ${props =>
    props.isFilled &&
    css`
      color: #e7bbda;
    `};

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #191919;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
