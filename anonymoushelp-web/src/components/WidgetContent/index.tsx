import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import avatarImg from '../../assets/avatar.png';

const WidgetContent: React.FC = () => {
  return (
    <Container>
      <div className="widget follow">
        <div className="title">
          <strong>Quem me conectar</strong>
          <Link to="/">Refresh</Link>
          <Link to="/">View all</Link>
        </div>

        <ul>
          <li>
            <div className="profile">
              <img src={avatarImg} alt="Avatar" />

              <div className="info">
                <strong>
                  <span>@spade_be</span>
                </strong>
                <button type="button">Conectar</button>
              </div>
            </div>

            <Link to="/">X</Link>
          </li>

          <li>
            <div className="profile">
              <img src={avatarImg} alt="Avatar" />

              <div className="info">
                <strong>
                  <span>@another_man</span>
                </strong>
                <button type="button">Conectar</button>
              </div>
            </div>

            <Link to="/">X</Link>
          </li>

          <li>
            <div className="profile">
              <img src={avatarImg} alt="Avatar" />

              <div className="info">
                <strong>
                  <span>@another_woman</span>
                </strong>
                <button type="button">Conectar</button>
              </div>
            </div>

            <Link to="/">X</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default WidgetContent;
