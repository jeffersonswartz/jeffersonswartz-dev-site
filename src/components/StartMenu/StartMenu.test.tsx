import React from 'react';
import ReactDOM from 'react-dom';
import StartMenu from './StartMenu';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StartMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});