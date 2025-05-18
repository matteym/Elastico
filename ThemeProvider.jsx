// ThemeProvider.jsx
import React, { createContext, useContext } from 'react';
import theme from './theme';

const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);

// Pas d'export de 'theme' ici, toujours utiliser 'import theme from "./theme"' pour le thème statique.
