import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import {
    Home,
    Wrapper,
} from 'modules';
import homeActions from 'redux/actions/home';
const {
    setDevice
} = homeActions;

function Routes({ dispatch }) {

    useEffect(() => {
        dispatch(setDevice({ isMobile }));
    }, []);

    return (
        <Switch>
            <Wrapper>
                <Route exact path='/' component={Home} />
            </Wrapper>
        </Switch>
    )
}

const mapStateToProps = () => {
    return {
    };
}

export default connect(mapStateToProps, undefined)(Routes);