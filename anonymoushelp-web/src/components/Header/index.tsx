import React from 'react';

import { FiHome, FiBell, FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';

// import avatarImg from '../../assets/avatar.png';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Content>
        <nav>
          <ul>
            <li>
              <Link to="/timeline">
                <FiHome color="#FFF" size={20} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/timeline">
                <FiBell color="#FFF" size={20} />
                <span>Notificações</span>
              </Link>
            </li>
            <li>
              <button type="button" onClick={signOut}>
                <FiPower color="#FFF" size={20} />
                <span>Sair</span>
              </button>
            </li>
          </ul>
        </nav>

        <img src={logoImg} alt="Logo Anonymous" />

        <div>
          <input type="text" placeholder="Pesquise" />

          <Link to="/profile">
            <img src={user.avatar} alt="User Avatar" />
          </Link>

          <button type="button">Conte algo</button>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
