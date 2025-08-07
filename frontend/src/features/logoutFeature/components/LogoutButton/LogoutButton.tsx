import './LogoutButton.css';

import { Button } from '@/components/shadcn-ui/button';

import useLogoutButton from '../../hooks/useLogoutButton';

function LogoutButton() {
  const { onLogout } = useLogoutButton();

  return (
    <Button
      className="LogoutButton"
      onClick={onLogout}
    >
      Logout
    </Button>
  );
}

export default LogoutButton;
