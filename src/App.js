import './App.css';
import Header from "./Header";
import HighScoreTable from "./HighScoreTable";
import scores from "./data/score"

function App() {
  return (
    <div className="App">
      <Header />
      <HighScoreTable allScores={scores}/>
    </div>
  );
}

export default App;
