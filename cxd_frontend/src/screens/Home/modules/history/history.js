import React, { Component } from 'react';
import { Row, Col, Spin } from 'antd';

import HistoryPlots from './components/historyPlots';
import DIAGNOSIS_API from 'apis/diagnosisAPI';

class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            diagnosis: []
        }
    }

    componentDidMount() {
        this._getDiagnosis();
    }

    _getDiagnosis() {
        DIAGNOSIS_API.getDiagnosisDetails().then(response => {
            console.log(response);
            this.setState({loading: false, diagnosis: response.data})
        })
    }
    
    render() {
        const {loading, diagnosis} = this.state;
        console.log('results');
        console.log(diagnosis);
        // alert('results');
        const logo = {
            className: 'logo',
            text: 'History',
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
        return (
            <div>
                <Row gutter={[16, 16]} justify="space-around">
                    <Col key="0" span={24}>
                        <div className={logo.className} style={logo_style}>
                            <span>{logo.text}</span>
                        </div>
                    </Col>
                </Row>

                {
                    loading ?
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'60vh'}}>
                        <Spin tip="Loading..." size="large" />
                    </div>
                    :
                    <HistoryPlots results={diagnosis} />
                }
            </div>
        );
    }
}


export default History;