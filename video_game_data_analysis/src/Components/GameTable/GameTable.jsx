import React, { useState, useEffect } from "react";
import axios from 'axios';
import GameData from "./GameData/GameData";


const GameTable = ({gamedata}) => {
    return (
        <div>
            <GameData gamedata={gamedata} />
        </div>
    );
}
 
export default GameTable;