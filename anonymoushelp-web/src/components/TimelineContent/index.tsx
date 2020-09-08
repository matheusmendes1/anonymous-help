import React from 'react';
import { Link } from 'react-router-dom';

import { FaRegHeart, FaRegComment } from 'react-icons/fa';
import { Container } from './styles';

import avatarImg from '../../assets/avatar.png';

const TimelineContent: React.FC = () => {
  return (
    <Container>
      <nav>
        <Link to="/">Compartilhamentos</Link>
        <Link to="/">Respostas</Link>
        <Link to="/">Ajudas</Link>
      </nav>

      <ul className="tweets">
        <li>
          <img src={avatarImg} alt="Avatar" />

          <div className="info">
            <strong>
              <span>@Exibit</span>
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
              nisl eget augue venenatis pretium tincidunt sit amet lacus.
            </p>

            <div className="actions">
              <Link to="/">
                <FaRegComment size={18} />
                <span>3</span>
              </Link>
              <Link to="/">
                <FaRegHeart size={18} />
                <span>15</span>
              </Link>
            </div>
          </div>
        </li>

        <li>
          <img src={avatarImg} alt="Avatar" />

          <div className="info">
            <strong>
              <span>@Exibit</span>
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
              nisl eget augue venenatis pretium tincidunt sit amet lacus.
            </p>

            <div className="actions">
              <Link to="/">
                <FaRegComment size={18} />
                <span>3</span>
              </Link>
              <Link to="/">
                <FaRegHeart size={18} />
                <span>15</span>
              </Link>
            </div>
          </div>
        </li>

        <li>
          <img src={avatarImg} alt="Avatar" />

          <div className="info">
            <strong>
              <span>@Exibit</span>
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
              nisl eget augue venenatis pretium tincidunt sit amet lacus.
            </p>

            <div className="actions">
              <Link to="/">
                <FaRegComment size={18} />
                <span>3</span>
              </Link>
              <Link to="/">
                <FaRegHeart size={18} />
                <span>15</span>
              </Link>
            </div>
          </div>
        </li>

        <li>
          <img src={avatarImg} alt="Avatar" />

          <div className="info">
            <strong>
              <span>@Exibit</span>
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
              nisl eget augue venenatis pretium tincidunt sit amet lacus.
            </p>

            <div className="actions">
              <Link to="/">
                <FaRegComment size={18} />
                <span>3</span>
              </Link>
              <Link to="/">
                <FaRegHeart size={18} />
                <span>15</span>
              </Link>
            </div>
          </div>
        </li>

        <li>
          <img src={avatarImg} alt="Avatar" />

          <div className="info">
            <strong>
              <span>@Exibit</span>
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
              nisl eget augue venenatis pretium tincidunt sit amet lacus.
            </p>

            <div className="actions">
              <Link to="/">
                <FaRegComment size={18} />
                <span>3</span>
              </Link>
              <Link to="/">
                <FaRegHeart size={18} />
                <span>15</span>
              </Link>
            </div>
          </div>
        </li>

        <li>
          <img src={avatarImg} alt="Avatar" />

          <div className="info">
            <strong>
              <span>@Exibit</span>
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
              nisl eget augue venenatis pretium tincidunt sit amet lacus.
            </p>

            <div className="actions">
              <Link to="/">
                <FaRegComment size={18} />
                <span>3</span>
              </Link>
              <Link to="/">
                <FaRegHeart size={18} />
                <span>15</span>
              </Link>
            </div>
          </div>
        </li>

        <li>
          <img src={avatarImg} alt="Avatar" />

          <div className="info">
            <strong>
              <span>@Exibit</span>
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
              nisl eget augue venenatis pretium tincidunt sit amet lacus.
            </p>

            <div className="actions">
              <Link to="/">
                <FaRegComment size={18} />
                <span>3</span>
              </Link>
              <Link to="/">
                <FaRegHeart size={18} />
                <span>15</span>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default TimelineContent;
