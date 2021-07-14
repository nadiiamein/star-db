import React from 'react';
import { SwapiServiseConsumer } from '../svapi-service-context';

const withSwapiService = (mapMethodsToProps) => (Wrapped) => 
 {
    return (props) => {
        return (
        <SwapiServiseConsumer>
            {
                (swapiService) => {
                    const serviceProps = mapMethodsToProps(swapiService);
                    return (
                        <Wrapped {...props} {...serviceProps}/>
                    );
                }
            }
        </SwapiServiseConsumer>
        );
    }
};

export default withSwapiService;