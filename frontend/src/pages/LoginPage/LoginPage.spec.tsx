import { customRender, screen } from '@/tests/testUtils';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('email 을 입력할 수 있다.', async () => {
    const { user } = customRender(
      <LoginPage />
    );

    const $inputEmail = screen.getByPlaceholderText('Email');
    await user.type($inputEmail, 'miles@gmail.com');

    expect($inputEmail).toHaveValue('miles@gmail.com');
  });

  it('password 를 입력할 수 있다.', async () => {
    const { user } = customRender(
      <LoginPage />
    );

    const $inputPassword = screen.getByPlaceholderText('Password');
    await user.type($inputPassword, 'hello-world');
    expect($inputPassword).toHaveValue('hello-world');
  });

  it('이메일 형식이 아닌 상태로 로그인 시, 안내 메시지가 노출된다.', async () => {
    const { user } = customRender(
      <LoginPage />
    );

    const $loginButton = screen.getByRole('button', { name: 'Login' });
    const $inputEmail = screen.getByPlaceholderText('Email');
    await user.type($inputEmail, 'hello');
    await user.click($loginButton);

    const $errorMessage = await screen.findByRole('alert', {
      name: (_, $el) => {
        return !!$el.textContent?.includes('Email 형식을 입력해 주세요.');
      },
    });
    expect($errorMessage).toBeInTheDocument();
  });

  it('비밀번호 형식이 아닌 상태로 로그인 시, 안내 메시지가 노출된다.', async () =>  {
    const { user } = customRender(
      <LoginPage />
    );

    const $loginButton = screen.getByRole('button', { name: 'Login' });
    const $inputPassword = screen.getByPlaceholderText('Password');

    await user.type($inputPassword, 'hello');
    await user.click($loginButton);

    const $lengthErrorMessage = await screen.findByRole('alert', {
      name: (_, $el) => {
        return !!$el.textContent?.includes('비밀번호는 6글자 이상 입력해 주세요.');
      },
    });
    expect($lengthErrorMessage).toBeInTheDocument();

    await user.type($inputPassword, 'helloworld');
    await user.click($loginButton);

    const $formatErrorMessage = await screen.findByRole('alert', {
      name: (_, $el) => {
        return !!$el.textContent?.includes('특수기호를 포함시켜 주세요.');
      },
    });
    expect($formatErrorMessage).toBeInTheDocument();
  });

  it('정상적인 이메일, 비밀번호를 입력한 후 로그인 버튼 클릭 시 제출된다.', async () => {
    const { user } = customRender(
      <LoginPage />
    );

    const $inputEmail = screen.getByPlaceholderText('Email');
    const $inputPassword = screen.getByPlaceholderText('Password');
    const $loginButton = screen.getByRole('button', { name: 'Login' });

    await user.type($inputEmail, 'miles@gmail.com');
    await user.type($inputPassword, 'hello-world');
    await user.click($loginButton);
  });
});
