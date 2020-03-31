import React from 'react';
import './App.css';

import Widget from './components/Widget';
import DonutChart from './components/DonutChart';
import LineChart from './components/LineChart';

import Logo from './logo.svg';

function App() {
  return (
    <div className="App">
        <div className='App-header'>
            <Widget header='Polyglot Dash' icon={Logo}>
                <p>A w.i.p. dashboard for data visualization</p>
            </Widget>
            <Widget header='Radial Chart' icon={Logo}>
                <p>Lorem Ipsum Description</p>
                <DonutChart 
                width={200}
                height={200} />
            </Widget>
            <Widget header='Line Graph' icon={Logo}>
                <p>Lorem Ipsum Description</p>
                <LineChart 
                width={200}
                height={200} />
            </Widget>
        </div>
    </div>
  );
}

export default App;
