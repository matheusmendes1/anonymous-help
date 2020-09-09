import React from 'react';

import { Container, Content, Banner, Layer } from './styles';

import Header from '../../components/Header';
import Bar from '../../components/Bar';

import ProfileContent from '../../components/ProfileContent';
import TimeLineContent from '../../components/TimelineContent';
import WidgetContent from '../../components/WidgetContent';

const Timeline: React.FC = () => {
  return (
    <Container>
      <Header />

      <Banner>
        <Layer>
          <h1>Nós todos. Juntos.</h1>
        </Layer>
      </Banner>

      <Bar />

      <Content>
        <ProfileContent />
        <TimeLineContent />
        <WidgetContent />
      </Content>
    </Container>
  );
};

export default Timeline;
