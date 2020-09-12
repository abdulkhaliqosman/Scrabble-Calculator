import React from 'react';

import ScrabbleTile from './scrabbletile'

interface IScrabbleRackState
{
    tiles: string[];
}

export default class ScrabbleRack extends React.Component<{}, IScrabbleRackState>
{
    constructor(props : any)
    {
        super(props);
        this.state = {
            tiles: this.generateTiles()

        };
    }

    generateTiles()
    {
        const alphas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const ARRAY_LENGTH = 10;

        let result : string[] = Array.from(Array(ARRAY_LENGTH)).map(x=>Math.random()).map(x=>{ let out = Math.trunc(x*26); return alphas[out]});
        return result;
    }

    render()
    {
        let tiles = this.state.tiles.map((value=><ScrabbleTile letter={value}></ScrabbleTile>));
        return <div>
            Rack
            {tiles}
            </ div>;
    }
}