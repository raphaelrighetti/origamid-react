import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = React.useState(0);

  function handleBuyClick() {
    setCounter(counter + 1);
  }

  function Button() {
    return (
      <button onClick={handleBuyClick}>Buy</button>
    );
  }

  return (
    <main className="container main">
      <p>Total: <span>{counter}</span></p>
      <p>Price: <span>R$ {counter * 250}</span></p>
      <Button />
    </main>
  );
}

export default App;
