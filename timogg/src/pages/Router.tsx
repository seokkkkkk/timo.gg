import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.tsx';
import LoginPage from './LoginPage.tsx';
import RegisterPage from './RegisterPage.tsx';
import MatchPage from './MatchPage';
import BoardPage from './BoardPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/board" element={<BoardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
