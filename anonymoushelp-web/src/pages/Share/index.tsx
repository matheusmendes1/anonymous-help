/* eslint-disable camelcase */
import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Layer } from './styles';

import Button from '../../components/Button';
import TextArea from '../../components/TextArea';
import { useAuth } from '../../hooks/auth';

interface ShareFormData {
  id: string;
  content: string;
}

const Share: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const { user } = useAuth();

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(
    async (data: ShareFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          content: Yup.string().required('Compartilhe algo, por favor.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // eslint-disable-next-line no-param-reassign
        data.id = user.id;

        await api.post('/posts', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Compartilhamento realizado!',
          description: 'Ajude outras pessoas, fortaleça a rede!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro ao compartilhar',
          description: 'Você pode tentar novamente caso se sinta confortável.',
        });
      }
    },
    [addToast, history, user.id],
  );

  return (
    <Container>
      <Layer>
        <Header />
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Compartilhe</h1>
            <h2>Há pessoas querendo ajudar</h2>

            <TextArea name="content" placeholder="Expresse-se" />

            <Button type="submit">Compartilhar</Button>
          </Form>
        </Content>
      </Layer>
    </Container>
  );
};

export default Share;
