import './LoginButton.css';

import { Button } from '@/components/shadcn-ui/button';

type TProps = {
  onClick: () => void;
};

function LoginButton({ onClick }: TProps) {
  return (
    <Button
      className="LoginButton"
      onClick={onClick}
    >
      Login
    </Button>
  );
}

export default LoginButton;
