import * as React from 'react';
import productsArray from '../data/Products.json'
import MediaCard from '../components/MediaCard'
import './AllCards.css';

export default function AllCards() {

  return(
    <div className='items'>
    {Array.from({length: productsArray.length}).map((_, index) => (
      <MediaCard imageUrl={productsArray[index].image} description={productsArray[index].description} title={productsArray[index].name} price={productsArray[index].price}/>
    ))}
    {/* change the map so medicard recieve products as props instead of each field */}
    </div>
  );
}