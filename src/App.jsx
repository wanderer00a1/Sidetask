import { useState } from 'react'
import './App.css'
import Colorboxes from './colorboxes';
function App() {
  const colr=
    ["#f4a261", "#264653", "#e76f51", "#2a9d8f", "#e9c46a", "#8ab17d", "#ff6b6b", "#6a0572", "#3d348b", "#ffbe0b"]
  return (
    <div>
      <Colorboxes colors={colr}/>
    </div>
  )
}

export default App
