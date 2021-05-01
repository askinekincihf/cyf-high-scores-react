import React from 'react';
import PlayerScore from './PlayerScore';

const CountryScoreTable = ({ country, sortBy }) => {
    const sortedCountryScores = country.scores.sort(
        (previousScore, currentScore) => {
            if (sortBy === 'ascending') {
                return previousScore.s - currentScore.s;
            } else if (sortBy === 'descending') {
                return currentScore.s - previousScore.s;
            } else {
                return country.scores;
            }
        }
    );

    return (
        <div className='row mt-5 mx-5 mb-5'>
            <div className='col'>
                <div className='card'>
                    <div className={'card-body'}>
                        <h5 className='card-title'>High Scores: {country.name}</h5>
                        <table className='table table-responsive table-hover table-bordered border-success'>
                            <thead>
                                <tr>
                                    <th scope='col'>Rank</th>
                                    <th scope='col'>Player</th>
                                    <th scope='col'>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedCountryScores.map((score, index) => {
                                    return (
                                        <PlayerScore key={index} score={score} index={index} />
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryScoreTable;