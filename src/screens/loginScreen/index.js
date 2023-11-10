import React from 'react';
import * as yup from 'yup';
import {useSelector, useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {InputEmail, InputPassword} from '../../components';
import {StyleSheet, SafeAreaView, Button, Text} from 'react-native';
import {login} from '../../features/authslice';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:',
    ),
});

const LoginScreen = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onPressSend = formData => {
    dispatch(login({username: formData.email}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <InputEmail control={control} />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
      <InputPassword control={control} />
      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}
      <Button title="Login" onPress={handleSubmit(onPressSend)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});

export default LoginScreen;
