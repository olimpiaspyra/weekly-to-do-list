import React, {Fragment} from 'react';
import {Routes, Route} from 'react-router-dom';

import Container from './components/Container/Container';
import Home from './components/Home/Home';
import List from './components/List/List';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import Important from './components/Important/Important';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list/:listId' element={<List />} />
          <Route path='/important' element={<Important />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
