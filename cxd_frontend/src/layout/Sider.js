import React from 'react';
import { Layout, Menu, Avatar, Space } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './style/sider.style.css';
import HELPERS from 'utils/helpers';

const { Sider } = Layout;


const sider_style = {
    overflow: 'auto',
    left: 0,
    height: '100vh',
}

class APP_SIDEBAR extends React.Component {
    clearLocalStorage() {
        HELPERS.localStorageServices.clearToken();
        HELPERS.localStorageServices.clearData('diagnosis');
    }

    render() {
        return(
            <Sider theme='light' style={sider_style} width={200} defaultCollapsed={true}>
                <div className='logo' />
                
                <div className='user-avatar'>
                    <Avatar size={64} icon={ <UserOutlined />} />
                </div>

                {this.props.children}
                <Space size="large"> 
                    <Menu theme='light' mode='inline'>
                        <Menu.Item key="1" icon={ <LogoutOutlined/> } danger={true}>
                            <span>Logout</span>
                            <Link onClick={this.clearLocalStorage} to={`/app/`} />
                        </Menu.Item>
                    </Menu>
                </Space>
            </Sider>
        );
    }
}


export default APP_SIDEBAR;