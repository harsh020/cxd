import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import Home from 'screens/Home/index';
import Landing from 'screens/Landing/index';
import PrivateRoute from 'routes/PrivateRoute';

import { getUser } from './redux/user/user.action';
import { connect } from 'react-redux';

class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isLogInFailed: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoggedIn: localStorage.getItem('isLoggedIn') });
    }

    render() {
        const user = this.props.user.data;
        return (
            <React.Fragment>
                <BrowserRouter history={this.props.history}>
                    <Switch>
                        <Route
                            exact
                            path='/'
                        >
                            <Redirect
                                to='/app/' 
                            />
                        </Route>

                        <Route 
                            exact
                            path='/app/'
                            render={(props) => (
                                <App {...this.state} 
                                {...props}
                                />
                            )}
                        />

                        <Route 
                            exact
                            path='/app/landing/'
                            component={Landing}
                            fallback='/app/'
                        />

                        <PrivateRoute
                            isAuthenticated={true}
                            component={Home}
                            fallback='/app/'
                            path='/app/home/'
                            user={user}
                        />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
       user: state.user,
    }
};

const mapDipatchToProps = {
    getUser,
};

export default connect(
    mapStateToProps,
    mapDipatchToProps,
)(AppRouter);