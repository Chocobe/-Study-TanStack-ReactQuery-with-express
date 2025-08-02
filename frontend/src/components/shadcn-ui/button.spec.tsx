import { customRender, screen } from '@/tests/testUtils';

import { Button } from './button';

describe('Button component', () => {
  it('버튼 텍스트가 노출된다.', () => {
    customRender(<Button>Click me!</Button>);

    const $button = screen.getByRole('button', { name: 'Click me!'});
    expect($button).toBeInTheDocument();
  });

  it('버튼 클릭 시, onClick() 함수가 호출된다.', async () => {
    const onClickFn = vi.fn();

    const { user } = customRender(
      <Button
        onClick={onClickFn}
      >
        Click me!
      </Button>
    );

    const $button = screen.getByRole('button', { name: 'Click me!' });
    await user.click($button);
    expect(onClickFn).toHaveBeenCalled();
  });

  it('disabled 시, 클릭할 수 없다.', async () => {
    const onClickFn = vi.fn();

    const { user } = customRender(
      <Button
        disabled
        onClick={onClickFn}
      >
        Click me!
      </Button>
    );

    const $button = screen.getByRole('button', { name: 'Click me!' });
    await user.click($button);
    expect(onClickFn).not.toHaveBeenCalled();
  });
});
