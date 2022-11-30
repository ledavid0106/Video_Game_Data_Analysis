import React, { useState } from "react";



const SearchBar = ({searchdata, setSearchData}) => {
    const [searchterm, setSearchTerm] = useState('');

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
        })
        setSearchData(result)
    }


    return ( 
        <div className="Bar">
            <input type="text" placeholder="Search..." value={searchterm} onChange={(event) => setSearchTerm(event.target.value)} />
            <button type="submit" onClick={searchForGame}>search</button>
        </div>
     );
}
 
export default SearchBar;