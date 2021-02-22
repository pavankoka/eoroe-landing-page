import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    Home,
    Wrapper,
    Login,
    Posts,
    Promotions
} from 'modules';

const Routes = () => {
    return (
        <Switch>
            <Wrapper>
                <Route exact path='/login' component={Login} />
                <Route exact path='/' component={Home} />
                <Route exact path='/posts' component={Posts} />
            </Wrapper>
            {/* <Route exact path='/' component={Promotions} /> */}
        </Switch>
    )
}

export default Routes;