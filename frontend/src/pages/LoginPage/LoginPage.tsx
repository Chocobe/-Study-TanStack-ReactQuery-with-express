import './LoginPage.css';

import { FormProvider } from 'react-hook-form';

import ReactLogo from '@/assets/react.svg?react';
import LoginButton from '@/features/LoginButton/LoginButton';
import useLoginForm from '@/features/LoginForm/hooks/useLoginForm';
import LoginForm from '@/features/LoginForm/LoginForm';

function LoginPage() {
  const { loginForm, onSubmit } = useLoginForm();

  return (
    <FormProvider {...loginForm}>
      <div className="LoginPage">
        <main className="LoginPage-main">
          <div className="LoginPage-main-header">
            <ReactLogo className="logo" />
            <h2 className="title">
              Miles Todo List
            </h2>
          </div>

          <div className="LoginPage-main-formWrapper">
            <LoginForm
              register={loginForm.register}
              formState={loginForm.formState}
            />
          </div>

          <div className="LoginPage-main-actionsWrapper">
            <LoginButton onClick={onSubmit} />
          </div>
        </main>
      </div>
    </FormProvider>
  );
}

export default LoginPage;
