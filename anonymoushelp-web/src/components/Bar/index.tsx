import React from 'react';

import { Container, Content } from './styles';

const Bar: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <ul>
            <li>
              <span>Conexões</span>
              <strong>500</strong>
            </li>
            <li>
              <span>Compartilhamentos</span>
              <strong>30</strong>
            </li>
            <li>
              <span>Ajudas</span>
              <strong>25</strong>
            </li>
            <li>
              <span>Favoritos</span>
              <strong>78</strong>
            </li>
          </ul>

          <div>
            <button type="button">Conecte-se</button>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default Bar;
