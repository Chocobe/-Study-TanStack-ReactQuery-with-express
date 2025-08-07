import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import useLoginMutation from '../mutations/useLoginMutation';
import { loginFormSchema } from '../schema/loginFormSchema';

const useLoginForm = () => {
  const loginForm = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const { mutate: mutateLogin } = useLoginMutation();

  const onSubmit = loginForm.handleSubmit(data => {
    mutateLogin({
      payload: data,
    });
  });

  return {
    loginForm,
    onSubmit,
  };
};

export default useLoginForm;
