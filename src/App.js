import React from 'react';
import { Grid, Cell } from 'react-mdl'
;import './App.css';
import Navbar from './navbar';

function App() {
  return (
  <div style={{width: '80%', margin: 'auto'}}>
    <Grid className="demo-grid-1">
    <Cell col={2}><Navbar /></Cell>  
    <Cell col={2}>2</Cell>
    <Cell col={6}>6</Cell>
    <Cell col={2}>2</Cell>
</Grid>
</div>
  );
}

export default App;
