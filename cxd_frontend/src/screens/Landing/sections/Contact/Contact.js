import React, { Component } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Parallax } from 'rc-scroll-anim';

import {container_style, 
        header_style_purple, 
        header_style_white} from '../../style/sections.style'


class Contact extends Component {
    render() {
        const form_style = {
            width: '40%',
            display: 'inline-block',
        }

        return (
            <div style={container_style}>
                <Row className='contact-title' gutter={[64, 0]}>
                    <Col span={24}>
                        <div style={{paddingBottom: '2%',}}>
                            <Parallax
                                animation={{ y: -80, opacity: 1, playScale: [0.1, 0.7] }}
                                style={{ transform: 'translateY(100px)', opacity: 0}}>
                                    <span style={header_style_purple}>
                                        Contact
                                    </span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span style={header_style_white}>
                                        Us
                                    </span>
                            </Parallax>
                        </div>
                    </Col>
                </Row>

                <Row className='contact-title' gutter={[64, 0]}>
                    <Col span={24}>
                        <div style={{boxSizing: 'border-box',}}>
                            <Parallax
                                animation={{ y: -80, opacity: 1, playScale: [0.1, 0.7] }}
                                style={{ transform: 'translateY(100px)', opacity: 0}}>
                                    <div> 
                                        <Form name='form_contact' onFinish={this._submit} style={form_style}>
                                            <Form.Item
                                                name="email"
                                                rules={[{ required: true, message: 'Please input email!' }]}
                                            >
                                                <Input 
                                                    size="large" 
                                                    placeholder="Email Address" 
                                                    prefix={<UserOutlined />} 
                                                    allowClear={true}
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                name="tell"
                                                rules={[{ required: true, message: 'You don\'t have anything to tell!' }]}
                                            >
                                                <Input 
                                                    size="large" 
                                                    placeholder="Tell us" 
                                                    prefix={<QuestionCircleOutlined />} 
                                                    allowClear={true}
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                name="what"
                                                rules={[{ required: false}]}
                                            >
                                                <Input.TextArea 
                                                    rows={5} 
                                                    placeholder="Describe it" 
                                                />
                                            </Form.Item>

                                            <Form.Item>
                                            <Button type="primary" size="large" htmlType="submit" style={{background: 'rgb(101, 102, 246)', border: 'None', width: '100%'}}>
                                                <span>Submit</span>
                                            </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                            </Parallax>
                        </div>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default Contact;