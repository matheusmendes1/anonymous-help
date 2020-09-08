import React from 'react';

import { Container } from './styles';
import Header from '../../components/Header';
import Bar from '../../components/Bar';

const Timeline: React.FC = () => {
  return (
    <Container>
      <Header />
      <Bar />
    </Container>
  );
};

export default Timeline;
