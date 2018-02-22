import React from 'react';
import { render } from 'react-dom';
import './src/assets/styles/App.scss';

render(
  <div>
    <div id="stripe1" />
    <div id="stripe2" />
    <div className="title">
      <h3>
        Something is coming...
      </h3>
    </div>
    <div className="sub-text">
      <h5>A #dreamweave project...</h5>
    </div>
  </div>,
  document.getElementById('root')
);

