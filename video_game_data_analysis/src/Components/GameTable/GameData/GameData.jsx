import React, { useState, useEffect } from "react";
import SpecialChart from "../../SpecialChart/SpecialChart";
import axios from 'axios';
import randomColor from "randomcolor";


const GameData = ({gamedata}) => {

    const [identification, setIdentification] = useState(0)
    const [special, setSpecial] = useState([])

    const handleSubmit = (event) => {
        setIdentification(event.target.value)
        getSpecialData()
    }

    useEffect(()=>{
        getSpecialData();
    },[]);
    
    async function getSpecialData(){
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
                            <td><button type="submit" value={data.id} onClick={handleSubmit}>Details {data.id}</button></td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
}
 
export default GameData;