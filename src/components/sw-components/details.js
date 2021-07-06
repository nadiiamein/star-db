import React from 'react';
import ItemDetails from '../item-details/item-details';
import { SwapiServiseConsumer } from '../svapi-service-context';




const StarshipDetails = () => {
  return (
    <ItemDetails
    itemId={itemId}
getData={getStarship}
getImageUrl={getStarshipImage}> 
<Record field="model" label="Model"/>
<Record field="length" label="Length"/> 
<Record field="costInCredits" label="Cost"/> 

</ItemDetails> 
  );  
};
export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}