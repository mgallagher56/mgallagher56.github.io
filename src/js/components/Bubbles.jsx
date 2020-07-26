import React, { Component } from 'react';
import bubbleImg from './../../img/bubble.png';
import bubbleBlue from './../../img/bubble-blue.png';
import bubbleMint from './../../img/bubble-mint.png'
import bubbleOrange from './../../img/bubble-orange.png'
import bubblePink from './../../img/bubble-pink.png'
import bubbleYellow from './../../img/bubble-yellow.png'
import Button from './Button';
import { array } from 'prop-types';



export default class Bubbles extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            randNumber: Math.floor( Math.random() * 20 ) + 10,
            multiplier: []
        }
    }

    componentDidMount() {
        function range(size, startAt = 1) {
            return [...Array(size).keys()].map(i => i + startAt);
        }

        this.setState( ({
            multiplier: range(this.state.randNumber)
        }) );
    }

    render() {
        return (
                this.state.multiplier.map(
                    () => ( <div>
                            <img src={ bubbleImg } className={ 'bubble' } alt={ 'bubble' } />
                            <img src={ bubbleBlue } className={ 'bubble' } alt={ 'bubble' }/>
                            <img src={ bubbleMint } className={ 'bubble' } alt={ 'bubble' }/>
                            <img src={ bubbleOrange } className={ 'bubble' } alt={ 'bubble' }/>
                            <img src={ bubblePink } className={ 'bubble' } alt={ 'bubble' }/>
                            <img src={ bubbleYellow } className={ 'bubble' } alt={ 'bubble'} />
                        </div>
                    )
                )
        )
    }
}