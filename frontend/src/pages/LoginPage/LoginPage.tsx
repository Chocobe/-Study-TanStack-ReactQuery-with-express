import './LoginPage.css';

import ReactLogo from '@/assets/react.svg?react';
import LoginButton from '@/features/LoginButton/LoginButton';
import LoginForm from '@/features/LoginForm/LoginForm';

function LoginPage() {
  return (
    <div className="LoginPage">
      <main className="LoginPage-main">
        <div className="LoginPage-main-header">
          <ReactLogo className="logo" />
          <h2 className="title">
            Miles Todo List
          </h2>
        </div>

        <div className="LoginPage-main-formWrapper">
          <LoginForm />
        </div>

        <div className="LoginPage-main-actionsWrapper">
          <LoginButton />
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
