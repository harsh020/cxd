import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, isAuthenticated, fallback, user, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                isAuthenticated ?
                    <Component
                        user={user}
                        {...props}
                    />
                    :
                    <Redirect
                        to={{
                            pathname: fallback,
                            state: {from: props.location}
                        }}
                    />
            )} 
        />
    );
} 

export default PrivateRoute;