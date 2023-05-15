import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './pages/Main';
import NotFoundPage from './pages/NotFoundPage'
import React, { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'MavelWebsite';
  },[]);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Main/:ruta" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;