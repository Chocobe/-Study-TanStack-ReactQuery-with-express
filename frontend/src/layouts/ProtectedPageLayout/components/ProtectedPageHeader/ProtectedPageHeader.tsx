import './ProtectedPageHeader.css';

import ReactLogo from '@/assets/react.svg?react';
import LogoutButton from '@/features/logoutFeature/components/LogoutButton/LogoutButton';

function ProtectedPageHeader() {
  return (
    <header className="ProtectedPageHeader">
      <div className="leftSide">
        <ReactLogo className="logo" />

        <h2 className="appName">
          Miles Todo List
        </h2>
      </div>

      <div className="rightSide">
        <LogoutButton />
      </div>
    </header>
  );
}

export default ProtectedPageHeader;
