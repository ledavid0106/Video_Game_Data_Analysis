import React, { useState, useEffect } from "react";
import axios from 'axios';
import GameChart from "../GameChart/GameChart";
import GameTable from "../GameTable/GameTable";
import SearchBar from "../SearchBar/SearchBar";
import Evaluation from "../Evaluation/Evaluation";


const GamePage = () => {

    const [gamedata, setGameData] = useState([])
    const [searchdata, setSearchData] = useState([])


    useEffect(() => {
        getGameData();
        getSearchData();
    }, [])

    async function getGameData(){
        let response = await axios.get(`http://localhost:8080/all`)
        setGameData(response.data)
        const rankAscending = response.data.sort((a, b) => a.game_rank - b.game_rank)
        setGameData(rankAscending)

    }
    

    async function getSearchData(){
        let response = await axios.get(`http://localhost:8080/all`)
        setSearchData(response.data)
        const rankAscending = response.data.sort((a, b) => a.game_rank - b.game_rank)
        setSearchData(rankAscending)

    }

    return ( 
        <div>
            <GameChart gamedata={gamedata}/>
            <Evaluation gamedata={gamedata}/>
            <SearchBar gamedata={gamedata} searchdata={searchdata} setSearchData={setSearchData} getGameData={getGameData}/>
            <GameTable gamedata={searchdata}/>
        </div>
     );
}
 
export default GamePage;