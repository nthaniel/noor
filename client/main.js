import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';

ReactDOM.render(
  <a-scene>
    <a-box color="#6173F4" width="4" height="10" depth="2"></a-box>
  </a-scene>,
  document.getElementById('root')
);
