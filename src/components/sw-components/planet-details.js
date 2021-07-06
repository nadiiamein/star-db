import React from 'react';
import ItemDetails from '../item-details/item-details';
import {withswapiService} from '../hoc-helpers';

const PlanetDetails = ({itemId}) => {
    return (

        <SwapiServiseConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
                    return(
<ItemDetails
    itemId={itemId}
getData={getPlanet}
getImageUrl={getPlanetImage}> 
<Record field="population" label="Population"/>
<Record field="rotationPeriod" label="rotation Period"/> 
<Record field="diameter" label="Diameter"/> 
</ItemDetails> 
                    )
                }
            }
        </SwapiServiseConsumer>
        );
};

export default PlanetDetails;