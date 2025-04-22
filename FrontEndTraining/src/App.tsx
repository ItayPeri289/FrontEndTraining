import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MenuBar from './components/MenuBar';
import Tabs from './components/Tabs';

function App() {
  return  (
    <div>
      <MenuBar/>
    <div><Tabs/></div>
  </div>
  );
}

export default App;
