/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaRegHeart, FaRegComment } from 'react-icons/fa';
import { Container } from './styles';

import avatarImg from '../../assets/avatar.png';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface Post {
  id: string;
  content: string;
  owner_id: string;
  number_likes: number;
  number_comments: number;
  created_at: Date;
}

const TimelineContent: React.FC = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api
      .get('/posts', {
        params: {
          owner_id: user.id,
        },
      })
      .then(response => {
        setPosts(response.data);
      });
  }, [user.id]);

  return (
    <Container>
      <nav>
        <Link to="/">Compartilhamentos</Link>
        <Link to="/">Comunidade</Link>
        <Link to="/">Respostas</Link>
      </nav>

      {posts && posts.length === 0 ? (
        <p className="noPosts">
          Você ainda não compartilhou. Sinta-se a vontade caso queira.
        </p>
      ) : (
        <ul className="tweets">
          {posts.map(post => (
            <li key={post.id}>
              <img src={avatarImg} alt="Avatar" />

              <div className="info">
                <strong>
                  <span>@Exibit</span>
                </strong>
                <p>{post.content}</p>

                <div className="actions">
                  <Link to="/">
                    <FaRegComment size={18} />
                    <span>{post.number_comments}</span>
                  </Link>
                  <Link to="/">
                    <FaRegHeart size={18} />
                    <span>{post.number_likes}</span>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default TimelineContent;
