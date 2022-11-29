import React, { useState } from 'react';
import { Chart } from "react-google-charts";


const GameChart = ({gamedata}) => {

    const data = [
        ['Platform', 'Global Sales', {role: "style"}],
        []
    ]

    return ( 
        <Chart
            chartType="ColumnChart"
            data={data}
            width="100%"
            height="400px"
            legendToggle
        />
     );
}
 
export default GameChart;