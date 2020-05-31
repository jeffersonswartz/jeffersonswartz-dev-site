import React from 'react';
import './Taskbar.css';
import { TaskBar } from '@react95/core';
import StartMenu from '../StartMenu/StartMenu';

const Taskbar: React.FC = () => (
    <TaskBar list={(<StartMenu />)}/>
);

export default Taskbar;
