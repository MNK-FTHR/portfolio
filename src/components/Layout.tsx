import React from 'react';
import ThemeEditor from './ThemeEditor/ThemeEditor';

function Layout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <ThemeEditor />
      {children}
    </div>
  );
}

export default Layout;
