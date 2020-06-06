import React, { Component } from 'react';
import * as colors from '../../../conf/_colors.json';
import * as colorSwatch from '../../../conf/_colorsSwatch.json';


class BaseplateColors extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            classColors: Object.entries( colors.default ),
            mappedColors: Object.entries( colorSwatch.default),
        };
    }

    render() {
        let primaryColors = [];
        let secondaryColors = [];
        let tertiaryColors = [];

        // sort colors into groups
        this.state.mappedColors.forEach( ( value, key ) => {
            switch ( value[1]['type'] ) {
                case 'primary' :
                default:
                    primaryColors.push( value );
                    break;
                case 'secondary' :
                    secondaryColors.push( value );
                    break;
                case 'tertiary' :
                    tertiaryColors.push( value );
                    break;
            }
        } );

        // output colors with name & color swatch
        let colourOutput = ( sortedColorArray, colors ) => {

            // loop through sorted color array, match name to hex color
            return sortedColorArray.map( ( colorArray, key ) => {

                // set style for each swatch
                let swatchStyle = {
                    background: '',
                    height: '100px',
                    borderRadius: '5px',
                    border: '1px solid white'
                };
                console.log(primaryColors);

                //set color for each swatch square
                colors.forEach( ( color, colorKey ) => {
                    if ( colorArray[0] === color[0] ) {
                        swatchStyle.background = colors[colorKey][1];
                    }
                } );

                //return markup to output
                return <div className='row d-flex my-5'>
                    <div className='col d-flex align-items-center'>
                        <p> { colorArray[1]['name'] }</p>
                    </div>
                    <div className='col color' style={ swatchStyle }></div>
                </div>;
            } );
        };


        return (
            <div className='swatch my-5'>
                <h3>Swatch</h3>
                <div className='col-4 primaryColors'>
                    <h4>Primary Colors</h4>
                    { colourOutput( primaryColors, this.state.classColors ) }
                </div>
                <div className='col-4 secondaryColors'></div>
                <div className='col-4 tertiaryColors'></div>
            </div>
        );
    }
}

export default BaseplateColors;
