import React from 'react';
import { Pie } from '@ant-design/charts';
import '../style/dashboard.style.css';

import HELPERS from 'utils/helpers';


class PIE_PLOT extends React.Component{
    render() {
        console.log('in pie plot re rendering');
        const result = HELPERS.localStorageServices.getData('diagnosis');
        console.log(result);
        const data = new Array();
        if(result) {
            for(var key in result) {
                data.push( { type: key, value: result[key] } );
            }
        }
        
        const config = {
            height: 250,
            forceFit: true,
            radius: 0.8,
            pixelRatio: 2,
            data,
            title: {
                visible: false,
                text: 'Disease Distrbution',
            },
            legend: {
                visible: true,
            },
            angleField: 'value',
            colorField: 'type',
        };

        return(
            <div>
                <div>
                    <span>
                        <h1>Diagnosis Result</h1>
                    </span>
                </div>
                <br />
                {data && <Pie {...config} />}
                <br />
                <div>
                    <span>
                        {!data && <p>Kindly upload image to see result.</p>}
                        {data && <p>&nbsp;</p>}
                    </span>
                </div>
            </div>
        );
    }
}


export default PIE_PLOT;