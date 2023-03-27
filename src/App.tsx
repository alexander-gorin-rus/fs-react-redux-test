import React, { useState } from 'react';
import './App.css';
import ChecksList from './components/checksList';
import ChequeFom from './components/chequeForm';

function App() {
  const [showChequeFromModal, toggleChequeFromModal] = useState(false);
  // const toggleChequePopup = () => setShowChequeFromModal(!showChequeFromModal);
  return (
    <div className="App">
      <ChecksList />
      <div onClick={() => toggleChequeFromModal(!showChequeFromModal)}>
        {showChequeFromModal ? (
          <span>Свернуть</span>
        ) : (
          <span>Форма для заполнения чека</span>
        )}
      </div>
      {showChequeFromModal && (
        <ChequeFom />
      )}
    </div>
  );
}

export default App;
