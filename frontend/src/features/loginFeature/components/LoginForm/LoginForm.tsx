import './LoginForm.css';

import { FormState, UseFormRegister } from 'react-hook-form';

import { Input } from '@/components/shadcn-ui/input';

import { TLoginFormSchema } from '../../schema/loginFormSchema';

type TProps = {
  register: UseFormRegister<TLoginFormSchema>;
  formState: FormState<TLoginFormSchema>;
};

function LoginForm({ register, formState }: TProps) {
  const items = [
    {
      id: 'email' as keyof TLoginFormSchema,
      type: 'text',
      autoFocus: true,
      placeholder: 'Email',
    },
    {
      id: 'password' as keyof TLoginFormSchema,
      type: 'password',
      autoFocus: false,
      placeholder: 'Password',
    },
  ];

  return (
    <form
      className="LoginForm"
      onSubmit={e => e.preventDefault()}
    >
      {items.map(({ id, type, autoFocus, placeholder }) => (
        <div
          className="item"
          key={id}
        >
          <Input
            {...register(id)}
            className="itemInput"
            type={type}
            autoFocus={autoFocus}
            autoComplete="off"
            placeholder={placeholder}
          />

          {formState.errors?.[id] && (
            <div 
              className="errorMessage"
              role="alert"
            >
              * {formState.errors[id].message}
            </div>
          )}
        </div>
      ))}
    </form>
  );
}

export default LoginForm;
