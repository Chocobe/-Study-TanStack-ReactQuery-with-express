import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { loginFormSchema } from '../schema/loginFormSchema';

const useLoginForm = () => {
  const loginForm = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = loginForm.handleSubmit(data => {
    console.group('onSubmit()');
    console.log('email: ', data.email);
    console.log('password: ', data.password);
    console.groupEnd();
  });

  return {
    loginForm,
    onSubmit,
  };
};

export default useLoginForm;
