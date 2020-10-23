import React from 'react';
import './App.css';
import {Chatbot} from 'react-chatbot-kit'
import config from './mainComponents/config'
import ActionProvider from './mainComponents/ActionProvider'
import MessageParser from './mainComponents/MessageParser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Chatbot config={config}
                   actionProvider={ActionProvider}
                   messageParser={MessageParser}
          />
      </header>
    </div>
  );
}

export default App;
