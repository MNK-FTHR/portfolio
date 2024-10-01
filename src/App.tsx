import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useThemeStore } from './store/themeStore';
import Layout from './components/Layout';

const App: React.FC = () => {
  const theme = useThemeStore((state: { theme: any }) => state.theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Router basename="portfolio">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
