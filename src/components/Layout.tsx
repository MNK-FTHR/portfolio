import React from 'react';
import ThemeToggle from './ThemeToggle';
import ChangeColorButtons from './ChangeColorButtons';

function Layout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <ThemeToggle />
      <ChangeColorButtons />
      {children}
    </div>
  );
}

export default Layout;
