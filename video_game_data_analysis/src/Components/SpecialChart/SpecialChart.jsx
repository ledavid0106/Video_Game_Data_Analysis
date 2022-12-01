
import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import randomColor from "randomcolor";

const SpecialChart = ({gamedata}) => {
    const [special, setSpecial] = useState([])


    useEffect(() => {

    }, [])

    async function getSpecialData(){
        let response = await axios.get(`http://localhost:8080/getById/${id}`)
        console.log(response)
        setSpecial(response.data)
    }

    return ( 

        <div>
        <h2>Global Sales By Console After 2012</h2> {/* //please center later// */}
        <Chart
            chartType="ColumnChart"
            data={getGlobalSales()}
            width="100%"
            height="400px"
            legendToggle
        />
        </div>
     );
}

 
export default SpecialChart;