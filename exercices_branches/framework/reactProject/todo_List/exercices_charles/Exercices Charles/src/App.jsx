

// Bonus


import { useState } from 'react';
import './App.css';
import { SeeName } from './components/SeeName';

export default function App() {
const names = ["Thomas", "Tristan", "Lionnel"];

  return( 
  <>
    <SeeName names={names} />
  </>
  )
}

