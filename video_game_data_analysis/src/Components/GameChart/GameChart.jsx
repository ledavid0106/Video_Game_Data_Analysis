import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import randomColor from "randomcolor";

const GameChart = ({gamedata}) => {
    const options = {
        legend: "none",
        vAxis: {
            title: "Millions"
        }
    }
        function getGlobalSales(){
            let filteredGames = gamedata.filter(game=>game.year >= 2013);
            let platforms = filteredGames.map(game=> game.platform)
            let distinctPlatform = [...new Set(platforms)]
            let platformArrays = distinctPlatform.map(plat => {
                let allGamesForPlatform = filteredGames.filter(game=> game.platform == plat)
                // console.log(allGamesForPlatform)
                let globalSale = 0
                for (let i = 0; i < allGamesForPlatform.length;i++){
                    globalSale += allGamesForPlatform[i]["globalsales"]
                }
               return [plat, globalSale, randomColor()]
            })

            const data = [
                ['Platform', 'Global Sales in Millions', {role: "style"}],
                ...platformArrays,
              ];
            return data
            
        }

    return ( 

        <div>
        <h2>Global Sales By Console After 2012</h2> {/* //please center later// */}
        <Chart
            chartType="ColumnChart"
            data={getGlobalSales()}
            width="100%"
            height="400px"
            legendToggle
            options={options}
        />
        </div>
     );
}

 
export default GameChart;