import React, { useState } from 'react';
import { Chart } from "react-google-charts";


const GameChart = ({gamedata}) => {
    // let global = [];
    // function getGlobalSales(gamedata){
    //     for (const game of gamedata) {
    //         const sales = game.globalsales;
    //         global.push({sales })
    //     }
    // }
    // getGlobalSales();
    // function getGlobalSales(){
    //     gamedata.map(data=> 
    //         global += data.globalsales,
    //         console.log("here")
    //         )
    //     return global
    // }
    // getGlobalSales();
    const data = [
        ['Platform', 'Global Sales', {role: "style"}],
        ["DS", global, "#0000FF"],
        ["Copper", 8.94, "#b87333"], // RGB value
        ["Silver", 10.49, "silver"], // English color name
        ["Gold", 19.3, "gold"],
        ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
      ];

    return ( 
        <div>

        <Chart
            chartType="ColumnChart"
            data={data}
            width="100%"
            height="400px"
            legendToggle
        />
        </div>
     );
}

 
export default GameChart;