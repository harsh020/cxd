import React from 'react';
import { Descriptions, Row, Col } from 'antd';

import './style/profile.style.css';


class Profile extends React.Component {
    render() {
        const logo = {
            className: 'logo',
            text: 'Profile',
        }

        const logo_style = {
            color: 'white',
            fontSize: '10vh',
            fontFamily: 'Monoton',
            padding: '2% 5%',
            borderRadius: '5px',
            backgroundImage: 'linear-gradient(135deg, #7f7fd5, #86a8e7, #91eae4)',
            // fontWeight: 700,
            // border: '2px solid white',
        }

        const fullName = this.props.user.first_name + ' ' + this.props.user.last_name;
        const email = this.props.user.email;
        const mobile = this.props.user.user_profile.mobile;
        const dob = this.props.user.user_profile.date_of_birth;
        const role = this.props.user.user_profile.department;
        const address = this.props.user.user_profile.address;
        console.log(email);

        return (
            <div className='profile-container'>
                <Row gutter={[16, 16]} justify="space-around">
                    <Col key="0" span={24}>
                        <div className={logo.className} style={logo_style}>
                            <span>{logo.text}</span>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} justify='space-around'>
                    <Col span={24}>
                        <div className='profile-div'>
                            <Descriptions title="" bordered={true}>
                                <Descriptions.Item label="Name">{fullName}</Descriptions.Item>
                                <Descriptions.Item label="Date of Birth">{dob}</Descriptions.Item>
                                <Descriptions.Item label="Mobile No.">{mobile}</Descriptions.Item>
                                <Descriptions.Item label="Email">{email}</Descriptions.Item>
                                <Descriptions.Item label="Address">{address}</Descriptions.Item>
                                <Descriptions.Item label="Role">{role}</Descriptions.Item>
                            </Descriptions>
                        </div>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default Profile;