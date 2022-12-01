import React, { useState } from "react";



const GameData = ({gamedata}) => {

    // const [identification, setIdentification] = useState([])
    // const getData = async (id) => {
    //     const response = await axios.get(`http://localhost:8080/getById/${id}`)
    //     setIdentification(response.data)
    // }
    

    return (  
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
                            {/* <td><button onClick={getData} >Details</button></td> */}
                        </tr>)}
                </tbody>
            </table>
    );
}
 
export default GameData;