import React, { useState, useEffect } from "react";
import SpecialChart from "../../SpecialChart/SpecialChart";
import axios from 'axios';



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

    // useEffect(()=>{
    //     setIdentification(0)
    //     let response = axios.get(`http://localhost:8080/getById/${identification}`)
    //     console.log(response.data)
    //     setSpecial(response.data)
        
    // }, )


    return (  
        <div>
        <SpecialChart special={special}/>
        <table>
                <thead>
                    <tr>
                        <th className="GameRank">Game Rank</th>
                        <th className='Name'>Name</th>
                        <th className='Platform'>Platform</th> 
                        <th className='Year'>Year</th> 
                        <th className='Genre'>Genre</th> 
                        <th className="Publisher">Publisher</th>
                    </tr>
                </thead>
                <tbody className='Body'>
                    {gamedata.map(data => 
                        <tr key={data.id}>
                            <td>{data.game_rank}</td>
                            <td>{data.name}</td>
                            <td>{data.platform}</td>
                            <td>{data.year}</td>
                            <td>{data.genre}</td>
                            <td>{data.publisher}</td>
                            <td><button type="submit" value={data.id} onClick={handleSubmit}>Details</button></td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
}
 
export default GameData;