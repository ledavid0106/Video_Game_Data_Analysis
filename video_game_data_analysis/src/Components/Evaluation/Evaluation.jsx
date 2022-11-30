
import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import randomColor from "randomcolor";

const Evaluation = ({gamedata}) => {
    function getGlobalSales(){
        let filteredGames = gamedata.filter(game=>game.year >= 2016);
        let platforms = filteredGames.map(game=> game.platform)
        let distinctPlatform = [...new Set(platforms)]
        let platformArrays = distinctPlatform.map(plat => {
            let allGamesForPlatform = filteredGames.filter(game=> game.platform == plat)
            let globalSale = 0
            for (let i = 0; i < allGamesForPlatform.length;i++){
                globalSale += allGamesForPlatform[i]["globalsales"]
            }
           return [plat , globalSale, "red"]
        })
        const data = [
            ['Platform', 'Sales in Millions', {role: "style"}],
            ...platformArrays,
          ];
        return data
    }
    function getJapanSales(){
        let filteredGames = gamedata.filter(game=>game.year >= 2016);
        let platforms = filteredGames.map(game=> game.platform)
        let distinctPlatform = [...new Set(platforms)]
        let platformArrays = distinctPlatform.map(plat => {
            let allGamesForPlatform = filteredGames.filter(game=> game.platform == plat)
            let japanSale = 0
            for (let i = 0; i < allGamesForPlatform.length;i++){
                japanSale += allGamesForPlatform[i]["japansales"]
            }
           return [plat , japanSale, "red"]
        })
        const data = [
            ['Platform', 'Sales in Millions', {role: "style"}],
            ...platformArrays,
          ];
        return data
    }
    const japan = getJapanSales();
    const global = getGlobalSales();
    const diffdata = {
        old: global,
        new: japan,
      };
        
    return ( 

        <div>
        <h2>Japan Sales By Console After 2016</h2> {/* //please center later// */}
        <Chart
            chartType="ColumnChart"
            diffdata={diffdata}
            width="100%"
            height="400px"
            legendToggle
        />
        </div>
     );
}

 
export default Evaluation;