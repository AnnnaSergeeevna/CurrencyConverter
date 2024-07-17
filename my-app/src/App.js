import React from 'react';
import CurrencyConverter from './components/CurrencyConverter.tsx';
import imgCurr from './assets/currency_exchange.svg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imgCurr} className='currLogo' alt="Currency Exchange" />
        <h1>Currency Converter</h1>
        <CurrencyConverter />
      </header>
    </div>
  );
}

export default App;

