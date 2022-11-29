import React, { useState, useEffect } from "react";
import axios from 'axios';


const GameTable = (props) => {
    const [gamedata, setGameData] = useState([])


    async function getGameData(){
        let response = await axios.get(`http://localhost:8080/all`)
        console.log(response)
        setGameData(response.data)
    }

    useEffect(() => {
        getGameData();
    }, [])



    return (
        <div>

        </div>
    );
}
 
export default GameTable;