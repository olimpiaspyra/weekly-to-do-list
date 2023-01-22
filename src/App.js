import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Container from './components/Container/Container';
import Home from './components/Home/Home';
import List from './components/List/List';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list/:listId' element={<List />} />
      </Routes>
    </Container>
  );
}

export default App;
