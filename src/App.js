import React from 'react';
import Home from './pages/Home';
import Nav from './components/Nav';
import Globalstyle from './components/Globalstyle';

function App() {
  return (
    <>
      <Globalstyle />
      <Nav />
      <Home />
    </>
  );
}

export default App;
