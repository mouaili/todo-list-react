import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Button from './components/ui/buttons/Button';
import style from './context/Theme.module.css';
import { ThemeManager } from './context/Theme';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeManager);

  const toggleColorTheme = () => {
    toggleTheme();
  };

  return (
    <div className={`${style[theme]}`}>
      <Header />

      <Outlet />

      <Button variant='secondary' onClick={toggleColorTheme}>
        {theme === 'light' ? 'Dark mode' : 'Light mode'}
      </Button>
    </div>
  );
};

export default App;
