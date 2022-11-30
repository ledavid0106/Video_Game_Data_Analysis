import React, { useState, useEffect } from "react";
import axios from 'axios';
import GameChart from "../GameChart/GameChart";
import GameTable from "../GameTable/GameTable";
import SearchBar from "../SearchBar/SearchBar";


const GamePage = ({}) => {

    const [gamedata, setGameData] = useState([])
    const [searchdata, setSearchData] = useState([])


    useEffect(() => {
        getGameData();
        getSearchData();
    }, [])

    async function getGameData(){
        let response = await axios.get(`http://localhost:8080/all`)
        console.log(response)
        setGameData(response.data)
    }

    async function getSearchData(){
        let response = await axios.get(`http://localhost:8080/all`)
        console.log(response)
        setSearchData(response.data)
    }


    return ( 
        <div>
            <GameChart gamedata={gamedata}/>
            <SearchBar searchdata={searchdata} setSearchData={setSearchData}/>
            <GameTable gamedata={searchdata}/>
        </div>
     );
}
 
export default GamePage;