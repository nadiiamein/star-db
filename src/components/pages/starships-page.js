import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({ history }) => {
return (
    <StarshipList 
    onItenSelected={(id) => {history.push(id);}} />
);  
};
    
export default withRouter(StarshipsPage);

