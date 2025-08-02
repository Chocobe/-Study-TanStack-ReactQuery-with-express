import './LoginPage.css';

import { FormProvider } from 'react-hook-form';

import ReactLogo from '@/assets/react.svg?react';
import LoginButton from '@/features/loginFeature/components/LoginButton/LoginButton';
import LoginForm from '@/features/loginFeature/components/LoginForm/LoginForm';
import useLoginForm from '@/features/loginFeature/hooks/useLoginForm';

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
