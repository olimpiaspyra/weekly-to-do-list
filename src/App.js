import React from 'react';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import List from './components/List/List';
import Search from './components/Search/Search';

function App() {
  return (
    <Container>
      <Header />
      <Search />
      <List />
    </Container>
  );
}

export default App;
