import React from 'react';

const Team = (props) => {
    const totalBudget = props.selectedPlayer.reduce((total, player) => total + player.salary, 0); // find totalBudget using reduce()

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <ul>
                        {
                            props.selectedPlayer.map(addPlayer => <li>{addPlayer.name}<ul><li>Salary : {addPlayer.salary} (BDT)</li></ul></li>)    // here we show player name and player bid.(auction money)
                        }
                    </ul>
                    <h5>Total Budget : {totalBudget} (BDT)</h5>
                </div>
            </div>
        </div>
    );
};

export default Team;