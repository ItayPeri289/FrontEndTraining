import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MediaCard from './components/MediaCard'
import './App.css';
import productsArray from './data/Products.json';
import MenuBar from './components/MenuBar';
import Tabs from './components/Tabs';

function App() {
  return  (
    <div>
      <MenuBar/>
    <div><Tabs/></div>
    <div className='items'>
    {Array.from({length: productsArray.length}).map((_, index) => (
      <MediaCard imageUrl={productsArray[index].image} description={productsArray[index].description} title={productsArray[index].name} price={productsArray[index].price}/>
    ))}
    {/* change the map so medicard recieve products as props instead of each field */}
    </div>
  </div>
  );
}

export default App;
