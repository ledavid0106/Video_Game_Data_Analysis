import React from "react";
import GameData from "./GameData/GameData";


const GameTable = ({gamedata}) => {
    return (
        <div>
            <GameData gamedata={gamedata} />
        </div>
    );
}
 
export default GameTable;