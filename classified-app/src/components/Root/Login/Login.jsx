import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';

import TextInput from '#root/components/shared/TextInput';

const Label = styled.label`
  display: block;

  :not(:first-child) {
    margin-top: 0.75rem;
  }
`;

const LoginButton = styled.button`
  display: inline-block;
  margin-top: 0.5rem;
`;

const LabelText = styled.strong`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const CREATE_USER_SESSION = gql`
  mutation CREATE_USER_SESSION($email: String!, $password: String!) {
    createUserSession(email: $email, password: $password) {
      id
      user {
        email
        id
      }
    }
  }
`;

const Login = () => {
  const [createUserSession] = useMutation(CREATE_USER_SESSION);
  const {
    formState: { isSubmitting },
    handleSubmit,
    register
  } = useForm();

  const onSubmit = handleSubmit(async ({ email, password }) => {
    const result = await createUserSession({
      variables: {
        email,
        password
      }
    });
    console.log(result);
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>
        <LabelText>Email</LabelText>
        <TextInput
          disabled={isSubmitting}
          name='email'
          type='email'
          ref={register}
        />
      </Label>
      <Label>
        <LabelText>Password</LabelText>
        <TextInput
          disabled={isSubmitting}
          name='password'
          type='password'
          ref={register}
        />

        <LoginButton disabled={isSubmitting} type='submit'>
          Login
        </LoginButton>
      </Label>
    </form>
  );
};

export default Login;
