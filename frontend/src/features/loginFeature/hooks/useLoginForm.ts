import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { loginFormSchema } from '../schema/loginFormSchema';
import useLoginMutation from '../mutations/useLoginMutation';

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
