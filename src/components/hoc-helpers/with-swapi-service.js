import React from 'react;
import { SwapiServiseConsumer } from '../svapi-service-context';

const withSwapiService = (Wrapped) =>  {
    return (props) => {
        return (
        <SwapiServiseConsumer>
            {
                (SwapiService) => {
                    return (
                        <Wrapped {...props} swapiService={swapiService}/>
                    )
                }
            }
        </SwapiServiseConsumer>
        );
    }
};

export default withSwapiService;