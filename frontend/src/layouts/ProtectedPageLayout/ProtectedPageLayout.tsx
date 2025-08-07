import './ProtectedPageLayout.css';

import { PropsWithChildren } from 'react';

import ProtectedPageHeader from './components/ProtectedPageHeader/ProtectedPageHeader';

function ProtectedPageLayout({ children }: PropsWithChildren) {
  return (
    <div className="ProtectedPageLayout">
      <div className="headerWrapper">
        <ProtectedPageHeader />
      </div>

      <div className="scrollWrapper">
        <div className="content">
          {children}
        </div>

        <div className="footerWrapper">
          <footer className="footer">
            Footer
          </footer>
        </div>
      </div>
    </div>
  );
}

export default ProtectedPageLayout;
