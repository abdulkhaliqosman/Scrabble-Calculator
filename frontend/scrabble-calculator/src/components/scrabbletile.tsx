import React from 'react';

interface IScrabbleTileProp
{
    letter: string;
}

export default class ScrabbleTile extends React.Component<IScrabbleTileProp, {}>
{
    constructor(props : any)
    {
        super(props);
    }

    render()
    {
        return (<div>Tile {this.props.letter}</ div>);
    }
}