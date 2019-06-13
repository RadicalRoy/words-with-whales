import React from 'react';
import Letter from '../components/Letter';

const Bench = (props) => {
    const letter = [];
    for(let i = 0; i < 7; i++) {
        const isDisabled = props.usedTiles.reduce((acc, ele) => {return ele.benchId == i ? true : acc}, false);
        letter.push(< Letter id={i} letter={props.bench[i].letter} points={props.bench[i].points} pickLetter={props.pickLetter} isDisabled={isDisabled}/>);
        // console.log('this is the object', props.points)
    }

    // console.log('this is props.bench', props.points);

    return (
        <div>
            <div>
            {letter}
            </div>
            <button onClick={() => props.mulligan()}>mull</button>
            <button onClick={() => props.done()}>done</button>
            <button onClick={() => props.pass()} disabled={props.color !== props.turn} >pass</button>
        </div>
    )
}

export default Bench;
