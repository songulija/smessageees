import React from 'react';
import './App.css';
import MessageScreen from './screens/MessageScreen/MessageScreen';

function App() {
  return (
    //BAM naming conventions.
    <div className="app">

      <MessageScreen />
      {/* Sidebar component which holds message rooms */}
    </div>
  );
}

export default App;
