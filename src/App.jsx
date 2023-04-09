import React from 'react';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

const App = () => {
  return (
    <div>
      <Header></Header>
      {/* <Button name="Sort by date"></Button>
      <Button name="See More"></Button> */}
      <Card></Card>
      
    </div>
  );
};

export default App;