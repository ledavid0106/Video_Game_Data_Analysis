import React, { useState, useEffect } from "react";
import SpecialChart from "../../SpecialChart/SpecialChart";
import axios from 'axios';
import './GameData.css'


const GameData = ({gamedata}) => {
    const [special, setSpecial] = useState([
        {
            "id": 1,
            "game_rank": 11,
            "name": "Nintendogs",
            "platform": "DS",
            "year": 2005,
            "genre": "Simulation",
            "publisher": "Nintendo",
            "northamericasales": 9.07,
            "europesales": 11.0,
            "japansales": 1.93,
            "othersales": 2.75,
            "globalsales": 24.76
        }
    ])

    const handleSubmit = (event) => {
        getSpecialData(event.target.value)

    }

    useEffect(()=>{
        getSpecialData();
    },[]);

    async function getSpecialData(identification){
        let response = await axios.get(`http://localhost:8080/getById/${identification}`)
        console.log(response)
        setSpecial(response.data)
    }

    return (  
        <div>
        <SpecialChart special={special}/>
        <div className="Container">
        <table className="table table-hover table-striped table-bordered table-sm table-light">
                <thead className="thead-dark">
                    <tr align="center">
                        <th className="GameRank">Game Rank</th>
                        <th className='Name'>Name</th>
                        <th className='Platform'>Platform</th> 
                        <th className='Year'>Year</th> 
                        <th className='Genre'>Genre</th> 
                        <th className="Publisher">Publisher</th>
                        <th className="Publisher">Details</th>
                    </tr>
                </thead>
                <tbody >
                    {gamedata.map(data => 
                        <tr className='Body' key={data.id}>
                            <td className="data">{data.game_rank}</td>
                            <td className="data">{data.name}</td>
                            <td className="data">{data.platform}</td>
                            <td className="data">{data.year}</td>
                            <td className="data">{data.genre}</td>
                            <td className="data">{data.publisher}</td>
                            <td><button type="submit" value={data.id} onClick={handleSubmit}>Details</button></td>
                        </tr>)}
                </tbody>
            </table>
        </div>
        </div>
    );
}
 
export default GameData;