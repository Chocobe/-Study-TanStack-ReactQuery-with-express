import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { loginApi } from '@/apis/authApis/authApis';

import { loginFormSchema } from '../schema/loginFormSchema';

const useLoginForm = () => {
  const loginForm = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = loginForm.handleSubmit(async data => {
    console.group('onSubmit()');
    console.log('email: ', data.email);
    console.log('password: ', data.password);
    console.groupEnd();

    const response = await loginApi({
      payload: {
        email: data.email,
        password: data.password,
      },
    });

    const responseData = response.data;

    console.log('responseData: ', responseData);
  });

  return {
    loginForm,
    onSubmit,
  };
};

export default useLoginForm;
