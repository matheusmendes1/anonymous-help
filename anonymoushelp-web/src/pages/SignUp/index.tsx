import React, { useCallback, useRef } from 'react';
import { FiArrowLeftCircle, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, AnimationContainer } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignUpFormData {
  name: string;
  // eslint-disable-next-line camelcase
  avatar_name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          avatar_name: Yup.string().required('Nome de avatar obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Informe um email válido'),
          password: Yup.string().min(
            6,
            'Sua senha deve conter no mínimo 6 dígitos',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode entrar no Anonymous Help!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro ao cadastrar',
          description: 'Houve um erro ao fazer cadastro. Tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Anonymous Help" />

          <h1>Anonymous Help</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input icon={FiUser} name="name" placeholder="Nome" />
            <Input
              icon={FiUser}
              name="avatar_name"
              placeholder="Nome de avatar"
            />
            <Input icon={FiMail} name="email" placeholder="Email" />

            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeftCircle />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
