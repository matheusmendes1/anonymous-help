import styled from 'styled-components';

import bannerImg from '../../assets/banner.jpg';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1320px;
  margin: 0 auto;
  padding: 0 30px;
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
