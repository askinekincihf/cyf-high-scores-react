import './App.css';
import Header from "./Header";
import HighScoreTable from "./HighScoreTable";
import scores from "./data/score";
import SortButton from "./SortButton";

function App() {
  return (
    <div className="App">
      <Header />
      <SortButton />
      <HighScoreTable allScores={scores}/>
    </div>
  );
}

export default App;
 