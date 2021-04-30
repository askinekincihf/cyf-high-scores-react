import PlayerScore from "./PlayerScore";
import SortButton from "./SortButton";

const HighScoreTable = ({ allScores, sort }) => {
    console.log(sort, "pressed")
    return (
        allScores.sort((country1, country2) => {
            return country1.name.localeCompare(country2.name);
        })
            .map((score, index) => {
                return (
                    <div className="row mt-5 mx-5 mb-5">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title" key={index}>High Scores: {score.name}</h5>
                                    <table className="table table-responsive table-hover table-bordered border-success">
                                        <thead>
                                            <tr>
                                                <th scope="col">Rank</th>
                                                <th scope="col">Player</th>
                                                <th scope="col">Score</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sort ? score.scores.sort((firstScore, secondScore) => {
                                                return secondScore.s - firstScore.s;
                                            }) : score.scores.sort((firstScore, secondScore) => {
                                                return firstScore.s - secondScore.s;
                                            })
                                                .map((score, index) => {
                                                    return <PlayerScore score={score}
                                                        index={index} />
                                                })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
    )
}

export default HighScoreTable;