import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'antd';
import TweenOne from 'rc-tween-one';

import SignUp from '../../modals/SignUp';
import { banner_container_style,
         banner_header_style,
         banner_text_style} from '../../style/sections.style';


class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show:  false,
            modalVisible: false,
        }
    }

    componentDidMount() {
        this.setState({show: true})
    }

    showModal() {
        this.setState({modalVisible: !this.state.modalVisible})
    }

    render() {
        return (
            <div style={banner_container_style}>
                <TweenOne className="banner-user-text" 
                animation={{ y: 40, opacity: 0, type: 'from', delay: 200, duration: 500,}}
                >
                    {
                        this.state.show ? 
                            <div>
                                <Row className='banner' gutter={[64, 0]}>
                                    <Col span={24}>
                                        <div>
                                            <span style={banner_header_style}>
                                                Welcome to 
                                            </span>
                                            &nbsp;&nbsp;&nbsp;
                                            <span style={banner_text_style}>
                                                cxd
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                
                                <Row className='banner-text' gutter={[64, 0]}>
                                    <Col span={24}>
                                        <div>
                                            <span style={{color: 'rgb(155, 169, 178)', fontSize: '3.5vh',}}>
                                                A medical web application, currently diagnoses chest x-rays.
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                
                                <br /><br />
                                <Row className="banner-buttons" gutter={[15, 20]}>
                                    <Col span={12}>
                                        <div style={{float: 'right'}}>
                                            <Button type="primary" size="large" onClick={() => this.showModal()} style={{background: 'rgb(101, 102, 246)', border: 'None',}}>
                                                <span>Get Started</span>
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div style={{float: 'left'}}>
                                            <Button type="primary" size="large" href="https://github.com/harshSoni082/medical" target="_blank" style={{background: 'rgba(255, 255, 255, 0.1)', border: 'None'}}>
                                                View on Github
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        : 
                            null
                    }
                </TweenOne>
                {this.state.modalVisible && <SignUp visible={this.state.modalVisible} callback={this.showModal.bind(this)} />}
            </div>
        );
    }
}

export default Banner;