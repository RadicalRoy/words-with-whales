import React from 'react';
import Letter from '../components/Letter';

const Bench = (props) => {
    const letter = [];
    for(let i = 0; i < 7; i++) {
        letter.push(< Letter id={i} bench={props.bench[i].letter} points={props.points[i].points} pickLetter={props.pickLetter} />);
        // console.log('this is the object', props.points)
    }

    // console.log('this is props.bench', props.points);

    return (
        <div id="benchContainer">
            <div className="letter">
            {letter}
            </div>
            <button className="button" onClick={() => props.mulligan()}>mull</button>
            <button className="button">done</button>
            <button className="button" onClick={() => props.pass()} disabled={props.color !== props.turn} >pass</button>
        </div>
    )
}

export default Bench;

// points={props.points[i].points}
