import React from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import Win95 from './components/Win95/Win95';
import './App.css';

function App() {

    return (
        <ThemeProvider>
            <GlobalStyle></GlobalStyle>
            <Win95>React95 Example</Win95>
        </ThemeProvider>
    );
}

export default App;
