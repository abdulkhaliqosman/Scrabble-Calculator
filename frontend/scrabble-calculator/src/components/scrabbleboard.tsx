import React from 'react';

import ScrabbleRack from './scrabblerack'
import ResetButton from './resetbutton'

export default class ScrabbleBoard extends React.Component
{
    constructor(props : any)
    {
        super(props);
    }

    render()
    {
        return <div>
            Board
            <div>
                <ScrabbleRack />
            </ div>
            <div>
                <ResetButton />
            </div>
            </ div>;
    }
}