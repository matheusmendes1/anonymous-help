import React from 'react';

import { FiHome, FiBell, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content, Banner, Layer } from './styles';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';

// import avatarImg from '../../assets/avatar.png';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <>
      <Container>
        <Content>
          <nav>
            <ul>
              <li>
                <Link to="/timeline">
                  <FiHome color="#aab0e9" size={20} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/timeline">
                  <FiBell color="#aab0e9" size={20} />
                  <span>Notificações</span>
                </Link>
              </li>
              <li>
                <button type="button" onClick={signOut}>
                  <FiLogOut color="#aab0e9" size={20} />
                  <span>Sair</span>
                </button>
              </li>
            </ul>
          </nav>

          <img src={logoImg} alt="Logo Anonymous" />

          <div>
            <input type="text" placeholder="Pesquise" />

            <Link to="/profile">
              <img
                // Gambiarra
                src={`http://localhost:3333/files/${user.avatar}`}
                alt="User Avatar"
              />
            </Link>

            <button type="button">Conte algo</button>
          </div>
        </Content>
      </Container>

      <Banner>
        <Layer>
          <h1>Nós todos. Juntos.</h1>
        </Layer>
      </Banner>
    </>
  );
};

export default Header;
