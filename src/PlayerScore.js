
const PlayerScore = ({ score, index }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{score.n}</td>
            <td>{score.s}</td>
        </tr>
    )
};

export default PlayerScore;