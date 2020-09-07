import React from 'react';

import { FiHome, FiBell, FiInbox } from 'react-icons/fi';
import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

import avatarImg from '../../assets/avatar.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <nav>
          <ul>
            <li>
              <FiHome color="#FFF" size={20} />
              <span>Home</span>
            </li>
            <li>
              <FiBell color="#FFF" size={20} />
              <span>Notificações</span>
            </li>
            <li>
              <FiInbox color="#FFF" size={20} />
              <span>Mensagens</span>
            </li>
          </ul>
        </nav>

        <img src={logoImg} alt="Logo Anonymous" />

        <div>
          <input type="text" placeholder="Pesquise" />
          <img src={avatarImg} alt="User Avatar" />
          <button type="button">Conte algo</button>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
