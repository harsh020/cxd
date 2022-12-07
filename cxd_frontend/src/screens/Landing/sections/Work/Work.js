import React, { Component } from 'react';
import { Avatar, Row, Col } from 'antd';
import { Parallax } from 'rc-scroll-anim';

import lung from 'assets/images/lung.png';
import {container_style, 
        header_style_purple, 
        header_style_white} from '../../style/sections.style'


class Work extends Component {
    render() {
        return (
            <div style={container_style}>
                <Row className='work-title' gutter={[64, 0]}>
                    <Col span={24}>
                        <div style={{paddingBottom: '4%',}}>
                            <Parallax
                                animation={{ y: -80, opacity: 1, playScale: [0.1, 0.7] }}
                                style={{ transform: 'translateY(100px)', opacity: 0}}>
                                    <span style={header_style_purple}>
                                        What
                                    </span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span style={header_style_white}>
                                        we do? 
                                    </span>
                            </Parallax>
                        </div>
                    </Col>
                </Row>

                <Row className='work-title' gutter={[64, 0]}>
                    <Col span={24}>
                        <div>
                            <Parallax
                                animation={{ y: -80, opacity: 1, playScale: [0.15, 0.65] }}
                                style={{ transform: 'translateY(100px)', opacity: 0 }}>
                                    <Avatar size={180} src={lung}/>
                            </Parallax>
                        </div>
                    </Col>
                </Row>

                <Row className='work-title' gutter={[64, 0]}>
                    <Col span={24}>
                        <div>
                            <Parallax
                                animation={{ y: -80, opacity: 1, playScale: [0, 0.4] }}
                                style={{ transform: 'translateY(100px)', opacity: 0 }}>
                                    <span style={{color: 'rgb(155, 169, 178)', fontSize: '3.5vh',}}>
                                        Currently we diagnoses chest x-rays,<br />more to come in future.
                                    </span>
                            </Parallax>
                        </div>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default Work;