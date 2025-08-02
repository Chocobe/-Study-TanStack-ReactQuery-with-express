import './LoginForm.css';

import { Fragment } from 'react/jsx-runtime';

import { Input } from '@/components/shadcn-ui/input';

function LoginForm() {
  const items = [
    {
      id: 'email',
      placeholder: 'Email',
    },
    {
      id: 'password',
      placeholder: 'Password',
    },
  ];

  return (
    <form
      className="LoginForm"
      onSubmit={e => e.preventDefault()}
    >
      {items.map(({ id, placeholder }) => (
        <Fragment key={id}>
          <Input
            id={id}
            className="itemInput"
            placeholder={placeholder}
          />
        </Fragment>
      ))}
    </form>
  );
}

export default LoginForm;
