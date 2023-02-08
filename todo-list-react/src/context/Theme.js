const { createContext, useState } = require('react');

const ThemeManager = createContext('light');

export { ThemeManager };

const ThemeManagerProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeManager.Provider value={value}>{children}</ThemeManager.Provider>
  );
};

export default ThemeManagerProvider;
