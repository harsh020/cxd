import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Bar } from '@ant-design/charts';

import DIAGNOSIS_API from 'apis/diagnosisAPI';

class HistoryPlots extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const results = this.props.results;
        console.log(results);
        const configs = new Array();
        const dates = new Array();

        for(var idx in results) {
            const item = JSON.parse(JSON.stringify(results[idx]))
            const data = new Array();
            console.log(item);
            if(item) {
                var result = item['result']
                console.log(result);
                for(var key in result) {
                    data.push( { type: key, value: result[key] } );
                }
            }
            
            const config = {
                data,
                xField: 'value',
                yField: 'type',
                seriesField: 'type',
                legend: {
                    position: 'top',
                  },
                
            };
            configs.push(config);
            const date = new Date(item['created']).toLocaleDateString()
            dates.push(date);
        }

        console.log(configs);

        const row_div = {
            width: '100%',
            backgroundColor: 'white',
            padding: '20px 20px 5px 40px',
            borderRadius: '5px',
            /* box-shadow: 20px 20px 100px rgba(0, 0, 0, 0.5); */
            /* box-shadow: 1px 1px 5px 0.2px rgba(128, 128, 128, 0.2); */
            /* border: 1px solid rgb(230, 230, 230, 0.8); */
        }

        return (
            <div>
                <Row gutter={[16, 16]} justify="start">
                    {
                        configs.map((value, index) => (
                            <Col key={index} span={6}>
                                <div style={row_div}>
                                    <Bar {...value} />
                                    <br />
                                    <div><p style={{fontFamily: 'Arial', fontSize: '12px'}}>Created: {dates[index]}</p></div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        );
    }
}

export default HistoryPlots;