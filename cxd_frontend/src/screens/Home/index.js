import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './modules/dashboard/dashboard';
import Profile from './modules/profile/profile';
import History from './modules/history/history';
import APP_SIDEBAR from 'layout/Sider';
import Menubar from './Menubar';


const { Content } = Layout;

const baseURL = '/app/home';

class Home extends React.Component {
    render() {
        const user = this.props.user;
        const fullName = user.name + ' ' + user.last_name;
        const role = user.user_profile && user.user_profile.occupation;

        return(
            <React.Fragment>
                <Layout>
                    <APP_SIDEBAR fullName={fullName}>
                        <Menubar />
                    </APP_SIDEBAR>
                    <Content style={{padding: 24,}}>
                        <Switch>
                            <Route
                                exact
                                path={`${baseURL}`}
                                title="Dashboard"
                                render={
                                    (props) => <Dashboard {...this.props} {...props} />
                                }
                            />

                            <Route
                                exact
                                path={`${baseURL}/profile/`}
                                title="Profile"
                                render={
                                    (props) => <Profile user={user} {...props} />
                                } 
                            />

                            <Route
                                exact
                                path={`${baseURL}/history/`}
                                title="History"
                                render={
                                    (props) => <History {...props} />
                                } 
                            />
                        </Switch>
                    </Content>
                </Layout>
            </React.Fragment>
        );
    }
}


export default Home;