import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import randomColor from "randomcolor";

const GameChart = ({gamedata}) => {
  
        function getGlobalSales(){
            let filteredGames = gamedata.filter(game=>game.year >= 2013);
            let platforms = filteredGames.map(game=> game.platform)
            let distinctPlatform = [...new Set(platforms)]
            let platformArrays = distinctPlatform.map(plat => {
                let allGamesForPlatform = filteredGames.filter(game=> game.platform == plat)
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

    const options = {
        title:"Global Sales By Console After 2012"

    }
    return ( 

        <div>

        <Chart
            options={options}
            chartType="ColumnChart"
            data={getGlobalSales()}
            width="100%"
            height="400px"
            legendToggle
        />
        </div>
     );
}

 
export default GameChart;