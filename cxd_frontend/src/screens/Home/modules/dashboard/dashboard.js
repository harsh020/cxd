import React from 'react';
import { Avatar, Row, Col } from 'antd';

import UPLOAD_FORM from './components/uploadForm';
import PIE_PLOT from './components/piePlot';
import './style/dashboard.style.css';

import { loadDiagnosisResultSuccess } from 'redux/diagnosis/diagnosis.action';
import { connect } from 'react-redux';


class Dashboard extends React.Component {
    render() {
        const page_design = {
            // padding: '2%',
            // backgroundImage: 'linear-gradient(135deg, #7f7fd5, #86a8e7, #91eae4)',
        };

        const logo = {
            className: 'logo',
            text: 'cxd',
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

        const cxd_style = {
            position: 'absolute',
            top: '20%',
            left: '65%',
            // boxShadow: '10px 10px 15px gray',
        }

        return(
            <div className='dashboard-container' style={page_design}>
                <Row gutter={[16, 16]} justify="space-around">
                    <Col key="0" span={24}>
                        <div className={logo.className} style={logo_style}>
                            <span>{logo.text}</span>
                        </div>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col key="0" span={12}>
                        <div className='row-div'>
                            <UPLOAD_FORM />
                        </div>  
                    </Col>

                    <Col key="1" span={12}>
                        <div className='row-div'>
                            <PIE_PLOT/>
                        </div>
                        
                    </Col>
                </Row>

                
            </div>
        );
    }
}


export default Dashboard;