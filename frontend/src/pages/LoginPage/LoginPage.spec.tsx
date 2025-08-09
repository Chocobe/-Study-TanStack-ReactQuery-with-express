import { PropsWithChildren } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router';

import AppQueryClientProvider from '@/lib/tanstack-query/AppQueryClientProvider';
import routePathFactory from '@/routes/routePathFactory';
import { customRender, screen } from '@/tests/testUtils';

import LoginPage from './LoginPage';

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <AppQueryClientProvider>
              {children}
            </AppQueryClientProvider>
          }
        />

        <Route
          path={routePathFactory.todoListPage()}
          element={<h1>Todo List Page</h1>}
        />
      </Routes>
    </MemoryRouter>
  );
};

describe('LoginPage', () => {
  it('email 을 입력할 수 있다.', async () => {
    const { user } = customRender(
      <LoginPage />,
      { wrapper: Wrapper }
    );

    const $inputEmail = screen.getByPlaceholderText('Email');
    await user.type($inputEmail, 'miles@gmail.com');

    expect($inputEmail).toHaveValue('miles@gmail.com');
  });

  it('password 를 입력할 수 있다.', async () => {
    const { user } = customRender(
      <LoginPage />,
      { wrapper: Wrapper }
    );

    const $inputPassword = screen.getByPlaceholderText('Password');
    await user.type($inputPassword, 'hello-world');
    expect($inputPassword).toHaveValue('hello-world');
  });

  it('이메일 형식이 아닌 상태로 로그인 시, 안내 메시지가 노출된다.', async () => {
    const { user } = customRender(
      <LoginPage />,
      { wrapper: Wrapper }
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
      <LoginPage />,
      { wrapper: Wrapper }
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
});
