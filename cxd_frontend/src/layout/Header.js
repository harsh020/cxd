import React, { Component } from 'react';
import { Layout } from 'antd';

// import 'screens/Landing/sections/Banner/node_modules/assets/style/global.style.css';


class Header extends Component {
    render() {
        const header_style = {
            backgroundColor: 'rgb(21, 23, 25)',
            // padding: '5px 64px 5px 64px', 
            position: 'relative',
            // border: '2px solid white',
        }

        const dark_header_style = {
            backgroundColor: 'rgb(21, 23, 25)',
            // padding: '5px 64px 5px 64px', 
            position: 'relative',
            // border: '2px solid white',
        }

        const logo = {
            className: 'logo',
            text: 'cxd',
        }

        const logo_style = {
            color: 'white',
            fontSize: '4vh',
            fontFamily: 'Monoton',
            // fontWeight: 700,
            marginLeft: '50%',
            // border: '2px solid white',
        }

        return (
            <Layout.Header style={header_style}>
                <div className={logo.className} style={{float: 'left',}}>
                    <span style={logo_style}>{logo.text}</span>
                </div>
                {this.props.children}
            </Layout.Header>
        );
    }
}

export default Header;