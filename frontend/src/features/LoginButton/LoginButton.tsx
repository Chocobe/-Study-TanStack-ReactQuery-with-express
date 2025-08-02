import './LoginButton.css';

import { Button } from '@/components/shadcn-ui/button';

function LoginButton() {
  return (
    <Button
      className="LoginButton"
      onClick={() => console.log('onSubmit()')}
    >
      Login
    </Button>
  );
}

export default LoginButton;
