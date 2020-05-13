import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CardSection from './CardSection/CardSection';
import StateSection from './StateSection/StateSection';

function App() {
  return (
    <div className="App">
      <Header />
      <CardSection />
      <StateSection />
    </div>
  );
}

export default App;
