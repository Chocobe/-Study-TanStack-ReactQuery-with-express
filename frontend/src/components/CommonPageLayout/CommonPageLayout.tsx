import './CommonPageLayout.css';

import { PropsWithChildren } from 'react';

function CommonPageLayout({ children }: PropsWithChildren) {
  return (
    <div className="CommonPageLayout">
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default CommonPageLayout;
