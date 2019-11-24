import React from 'react';
import {
  BrowserRouter,
} from "react-router-dom";
import Router from './Router';

function App() {
  return (
    <>
    <header>
      Story Time
    </header>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </>
  );
}

export default App;
