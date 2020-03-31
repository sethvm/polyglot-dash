import React from 'react';
import './App.css';

import Widget from './components/Widget';
import DonutChart from './components/DonutChart';
import LineChart from './components/LineChart';

import Logo from './logo.svg';

function App() {
  return (
    <div className="App">
        <div className='row'>
            <Widget header='Polyglot Dash' icon={Logo}>
                <p>A w.i.p. dashboard for data visualization</p>
            </Widget>
            <Widget header='Radial Chart' icon={Logo}>
                <p>Data Description
                    <br/>• Point 1
                    <br/>• Point 2
                    <br/>• Point 3
                </p>
                <DonutChart 
                width={200}
                height={200} />
            </Widget>
            <Widget header='Line Graph' icon={Logo}>
                <p>Data Description
                    <br/>Lorem Ipsum dolor sit amet
                </p>
                <LineChart 
                width={200}
                height={200} />
            </Widget>
        </div>
    </div>
  );
}

export default App;
