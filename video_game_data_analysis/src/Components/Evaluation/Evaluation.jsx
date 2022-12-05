import React from 'react';
import { Chart } from "react-google-charts";

const Evaluation = ({gamedata}) => {
    const options = {vAxis: {title: "Millions"}}

    function getGJSales(){
        let filteredGames = gamedata.filter(game=>game.year >= 2013);
        let platforms = filteredGames.map(game=> game.platform)
        let distinctPlatform = [...new Set(platforms)]
        let platformArrays = distinctPlatform.map(plat => {
            let allGamesForPlatform = filteredGames.filter(game=> game.platform === plat)
            let japanSale = 0
            let globalSale = 0
            for (let i = 0; i < allGamesForPlatform.length;i++){
                japanSale += allGamesForPlatform[i]["japansales"]
                globalSale += allGamesForPlatform[i]["globalsales"]
            }
           return [plat , japanSale, globalSale,]
        })
        const data = [
            ['Platform', "Japan Sales", "Global Sales",],
            ...platformArrays,
          ];
        return data
    }

        
    return ( 

        <div className=' justify-content-center m-5 chart'>
        <h2>Japan Sales Vs Global Sales By Console After 2012</h2> 
        <Chart
            chartType="ColumnChart"
            data={getGJSales()}
            width="100%"
            height="400px"
            legendToggle
            options={options}
        />
        </div>
     );
}

 
export default Evaluation;