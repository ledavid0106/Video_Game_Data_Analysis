import React, { useState, useEffect } from "react";
import axios from 'axios';
import GameChart from "../GameChart/GameChart";
import GameTable from "../GameTable/GameTable";


const GamePage = ({}) => {

    const [gamedata, setGameData] = useState([])
    
    useEffect(() => {
        getGameData();
    }, [])

    async function getGameData(){
        let response = await axios.get(`http://localhost:8080/all`)
        console.log(response)
        setGameData(response.data)
    }


    return ( 
        <div>
            <GameChart gamedata={gamedata}/>
            <GameTable gamedata={gamedata}/>
        </div>
     );
}
 
export default GamePage;