import React from 'react';

// import './PlayerInfo.css'

const PlayerInfo = (props) => {     // use destructuring below.
    const { name, salary } = props.player;
    return (
        <div className="">
            <div className="player-container">
                <div className="card card-container rounded">
                    <div className="card-body">
                        <h4 className="card-title">Name : {name}</h4>
                        <h4>Bid : {salary} (BDT)</h4>
                        <button onClick={() => props.handleAddPlayer(props.player)} className="btn btn-primary">Add Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerInfo;