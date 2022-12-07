import React, { Component } from 'react';
import { Spin } from 'antd';

import { getUser } from './redux/user/user.action';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isLoggingOut: false,
    }
  }

  componentDidMount() {
    this.props.getUser().then(response => {
      console.log(this.props.user.data);
      if(response.status === 200) {
        this.setState({
          isLoggedIn: true,
        })
        window.location.assign("home/");
      }
      else {
        this.setState({
          isLoggingOut: true,
        })
        console.log(response);
        window.location.assign("landing/");
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        {
          (this.state.isLoggedIn || this.state.isLoggingOut) &&
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'100vh',}}>
            <Spin tip="Loading..." size="large" />
          </div>
        }
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
)(App);
