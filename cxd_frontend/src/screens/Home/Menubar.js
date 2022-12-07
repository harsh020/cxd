import React from "react";
import { Menu, Space } from "antd";
import { withRouter, Link } from "react-router-dom";
import {
    DashboardOutlined,
    UserOutlined,
    HistoryOutlined,
} from "@ant-design/icons";

const baseURL = '/app/home';

const items = [
    { title: 'Dashboard', icon: <DashboardOutlined />, url: `${baseURL}/` },
    { title: 'Profile', icon: <UserOutlined />, url:`${baseURL}/profile/` },
    { title: 'History', icon: <HistoryOutlined />, url:`${baseURL}/history` },
];

const getDefaultSelectedKey = (location) => {
    const item = items.find((item) => item.url === location.pathname);
    if (item) {
        return item.url;
    }
    return `${baseURL}/`;
}

const Menubar = ({ location }) => {
    return (
        <Space size='large'>
            <Menu
                theme='light'
                mode='inline'
                defaultSelectedKeys={[getDefaultSelectedKey(location)]}
            >
                {console.log('in menu')}

                {items.map((value, index) => (
                    <Menu.Item key={value.url} icon={value.icon}>
                        <span>{value.title}</span>
                        <Link to={value.url} />
                    </Menu.Item>
                ))}

            </Menu>
        </Space>
    )
}

export default withRouter(Menubar);

