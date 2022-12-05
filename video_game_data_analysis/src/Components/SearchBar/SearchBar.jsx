import React, { useState } from "react";
import './SearchBar.css'


const SearchBar = ({searchdata, setSearchData, gamedata, getGameData}) => {
    const [searchterm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        searchForGame();

    }
    
    function searchForGame(){
        let result = searchdata.filter(function(data){
            if(data.name.includes(searchterm)){
                return true
            }
            if(data.platform.includes(searchterm)){
                return true
            }
            if(data.genre.includes(searchterm)){
                return true
            }
            if(data.publisher.includes(searchterm)){
                return true
            }
            else{
                return false;
            }
        })
        setSearchData(result)
    }
    function reset(){
        setSearchData(gamedata)
    }

    return ( 
        <div className="Bar">
            <input type="text" placeholder="Search..." value={searchterm} onChange={(event) => setSearchTerm(event.target.value)} />
            <button type="submit" onClick={handleSubmit}>Search</button>
            <button onClick={reset}>Reset</button>
        </div>
     );
}
 
export default SearchBar;