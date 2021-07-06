import React from 'react';
import ItemDetails from '../item-details/item-details';
import {withSwapiService}from '../hoc-helpers';

const StarshipDetails = ({itemId}) => {

    return (
        <SwapiServiseConsumer>
            {
                ({getStarship, getStarshipImage}) => {
                    return (
                        <ItemDetails
                        itemId={itemId}
                        getData={getPerson}
                        getImageUrl={getPersonImage} >
                
                        <Record field="gender" label="Gender"/>
                       <Record field="eyeColor" label="Eye Color"/> 
                      </ItemDetails>
                    );
                }
            }
        </SwapiServiseConsumer>
       
    );
};

export default StarshipDetails;