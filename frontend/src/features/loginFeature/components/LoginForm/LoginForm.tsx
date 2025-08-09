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
      defaultValue: 'miles@gmail.com',
    },
    {
      id: 'password' as keyof TLoginFormSchema,
      type: 'password',
      autoFocus: false,
      placeholder: 'Password',
      defaultValue: 'hello-world',
    },
  ];

  return (
    <form
      className="LoginForm"
      onSubmit={e => e.preventDefault()}
    >
      {items.map(({ id, type, autoFocus, placeholder, defaultValue }) => (
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
            defaultValue={defaultValue}
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
