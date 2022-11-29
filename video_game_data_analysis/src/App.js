import GameChart from "./Components/GameChart/GameChart";
import GameTable from "./Components/GameTable/GameTable";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <GameChart/>
      <GameTable />
    </div>
  );
}

export default App;
