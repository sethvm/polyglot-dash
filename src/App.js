import React from 'react';
import './App.css';

import Widget from './components/Widget';

function App() {
  return (
    <div className="App">
        <div className='App-header'>
            <Widget header='Polyglot Dash'>
                <p>Flexible dashboard project</p>
            </Widget>
        </div>
    </div>
  );
}

export default App;
