import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MediaCard from './components/MediaCard'
import './App.css';
import productsArray from './data/Products.json';
import MenuBar from './components/MenuBar';
import NavigationBar from './components/NavigationBar';

function App() {
  return  (
    <div>
      <MenuBar/>
    <div><NavigationBar/></div>
    <div className='items'>
    {Array.from({length: productsArray.length}).map((_, index) => (
      <MediaCard imageUrl={productsArray[index].image} description={productsArray[index].description} title={productsArray[index].name} price={productsArray[index].price}/>
    ))}
    </div>
  </div>
  );
}

export default App;
