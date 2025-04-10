import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MediaCard from './components/MediaCard'
import './App.css'

function App() {
 // const [count, setCount] = useState(0)
  return  <MediaCard imageUrl='src/images/bamba.png' title='Bamba' description='bambaaaaaa'></MediaCard>;
}

export default App;
