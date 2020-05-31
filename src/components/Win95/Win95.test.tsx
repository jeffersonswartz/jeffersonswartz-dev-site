import React from 'react';
import ReactDOM from 'react-dom';
import Win95 from './Win95';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Win95 />, div);
  ReactDOM.unmountComponentAtNode(div);
});