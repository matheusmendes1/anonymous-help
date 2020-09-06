import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #aab0e9;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.3, '#aab0e9')};
  }
`;
