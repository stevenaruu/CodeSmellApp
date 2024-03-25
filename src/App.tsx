import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/home_page/HomePage';
import SmellPage from './views/smell_page/SmellPage';
import CodePage from './views/code_page/CodePage';

function App() {
  return (
    <Routes>
      <Route path='*' element={<HomePage />}/>
      <Route path='/smell/:name' element={<SmellPage />}/>
      <Route path='/smell/:name/:type' element={<CodePage />}/>
    </Routes>
  );
}

export default App;
