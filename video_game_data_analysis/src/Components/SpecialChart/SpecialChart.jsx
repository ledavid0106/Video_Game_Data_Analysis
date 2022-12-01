

import { Chart } from "react-google-charts";
import randomColor from "randomcolor";


const SpecialChart = ({special}) => {



    function getDetails(){
        let details = special.map(detail=> {
            return [detail.name, detail.northamericasales, detail.europesales, detail.japansales, detail.othersales, detail.globalsales, randomColor()]
        })
        const data = [
            ["Name", "North American Sales", "Europe Sales", "Japan Sales", "Other Sales", "Global Sales", {role: "style"}],
            ...details,
        ]
        return data
    }
    return ( 

        <div>
        <h2>Game Details</h2> {/* //please center later// */}
        <Chart
            chartType="ColumnChart"
            data={getDetails()}
            width="100%"
            height="400px"
            legendToggle
        />
        </div>
     );
}

 
export default SpecialChart;