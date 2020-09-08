import React from 'react';

import { GoLocation, GoLink, GoClock, GoPerson } from 'react-icons/go';
import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

const ProfileContent: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <img src={`http://localhost:3333/files/${user.avatar}`} alt={user.name} />

      <h1>@misterjohndoe</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec eu nisl
        eget augue venenatis pretium tincidunt sit amet lacus. Aenean tristique
        eros sit amet est suscipit, quis scelerisque risus posuere.
      </p>

      <ul>
        <li>
          <GoLocation size={20} />
          Namur, Belgium
        </li>

        <li>
          <GoLink size={20} />
          exibit.be
        </li>

        <li>
          <GoClock size={20} />
          Joined June 2007
        </li>
      </ul>

      <div className="widget followers">
        <strong>
          <GoPerson size={20} />
          73 pessoas que você tem conexão
        </strong>

        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </Container>
  );
};

export default ProfileContent;
