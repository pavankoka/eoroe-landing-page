import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    Home,
    Wrapper,
} from 'modules';

const Routes = () => {
    return (
        <Switch>
            <Wrapper>
                <Route exact path='/' component={Home} />
            </Wrapper>
        </Switch>
    )
}

export default Routes;