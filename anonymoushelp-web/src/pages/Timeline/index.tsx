import React from 'react';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import Bar from '../../components/Bar';

import ProfileContent from '../../components/ProfileContent';
import TimeLineContent from '../../components/TimelineContent';
import WidgetContent from '../../components/WidgetContent';

const Timeline: React.FC = () => {
  return (
    <Container>
      <Header />
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
