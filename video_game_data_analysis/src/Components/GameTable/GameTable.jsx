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
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
}
 
export default GameTable;