import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MediaCard from './components/MediaCard'
import './App.css';
import productsArray from './data/Products.json';

function App() {
  return  (
    <div>
    {Array.from({length: productsArray.length}).map((_, index) => (
      <MediaCard imageUrl={productsArray[index].image} description={productsArray[index].description} title={productsArray[index].name}/>
    ))}
  </div>
  );
}

export default App;
