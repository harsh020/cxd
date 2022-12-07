import React, { Component } from 'react';
import { Avatar, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Parallax } from 'rc-scroll-anim';

import {container_style, 
        header_style_purple, 
        header_style_white} from '../../style/sections.style'


class Team extends Component {
    render() {
        return (
            <div style={container_style}>
                <Row className='team-title' gutter={[64, 0]}>
                    <Col span={24}>
                        <div style={{paddingBottom: '4%',}}>
                            <Parallax
                                animation={{ y: -80, opacity: 1, playScale: [0.1, 0.7] }}
                                style={{ transform: 'translateY(100px)', opacity: 0}}>
                                    <span style={header_style_white}>
                                        Our
                                    </span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span style={header_style_purple}>
                                        Team
                                    </span>
                            </Parallax>
                        </div>
                    </Col>
                </Row>

                <Row className='team-title' gutter={[64, 0]}>
                    <Col span={24}>
                        <div>
                            <Parallax
                                animation={{ y: -80, opacity: 1, playScale: [0.15, 0.65] }}
                                style={{ transform: 'translateY(100px)', opacity: 0 }}>
                                    <Avatar size={180} icon={<UserOutlined />}/>
                            </Parallax>
                        </div>
                    </Col>
                </Row>

                <Row className='team-title' gutter={[64, 0]}>
                    <Col span={24}>
                        <div style={{boxSizing: 'border-box',}}>
                            <Parallax
                                animation={{ y: -60, opacity: 1, playScale: [0, 0.4] }}
                                style={{ transform: 'translateY(120px)', opacity: 0}}>
                                    <span style={{color: 'rgb(155, 169, 178)', fontSize: '3.5vh',}}>
                                        Harsh Soni<br />Developer
                                    </span>
                            </Parallax>
                        </div>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default Team;