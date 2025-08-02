import { 
  render,
  RenderOptions,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { ReactElement } from 'react';

export { 
  act,
  screen,
  waitFor, 
  waitForElementToBeRemoved,
} from '@testing-library/react';

export const customRender = (
  ui: ReactElement,
  options?: RenderOptions
) => {
  const user = userEvent.setup();
  const { rerender } = render(ui, options);

  return {
    user,
    rerender,
  };
};
