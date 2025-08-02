import './LoginForm.css';

import { FormState, UseFormRegister } from 'react-hook-form';

import { Input } from '@/components/shadcn-ui/input';

import { TLoginFormSchema } from './schema/loginFormSchema';

type TProps = {
  register: UseFormRegister<TLoginFormSchema>;
  formState: FormState<TLoginFormSchema>;
};

function LoginForm({ register, formState }: TProps) {
  const items = [
    {
      id: 'email' as keyof TLoginFormSchema,
      placeholder: 'Email',
    },
    {
      id: 'password' as keyof TLoginFormSchema,
      placeholder: 'Password',
    },
  ];

  return (
    <form
      className="LoginForm"
      onSubmit={e => e.preventDefault()}
    >
      {items.map(({ id, placeholder }) => (
        <div
          className="item"
          key={id}
        >
          <Input
            {...register(id)}
            className="itemInput"
            placeholder={placeholder}
          />

          {formState.errors?.[id] && (
            <div className="errorMessage">
              * {formState.errors[id].message}
            </div>
          )}
        </div>
      ))}
    </form>
  );
}

export default LoginForm;
