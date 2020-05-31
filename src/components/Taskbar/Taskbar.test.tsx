import React from 'react';
import ReactDOM from 'react-dom';
import Taskbar from './Taskbar';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Taskbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});