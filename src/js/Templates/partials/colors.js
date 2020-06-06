import React, { Component } from 'react';
import * as colors from '../../../conf/_colors.json';
import * as colorSwatch from '../../../conf/_colorsSwatch.json';


class BaseplateColors extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            classColors: Object.entries( colors.default ),
            mappedColors: Object.entries( colorSwatch.default ),
        };
    }

    render() {
        let colorObj = {
            primary: [],
            shade: [],
            standard: [],
        };

        // sort colors into groups
        this.state.mappedColors.forEach( ( value, key ) => {
            switch ( value[1]['type'] ) {
                case 'primary' :
                default:
                    colorObj.primary.push( value );
                    break;
                case 'secondary' :
                    colorObj.shade.push( value );
                    break;
                case 'tertiary' :
                    colorObj.standard.push( value );
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
                    border: '1px solid white',
                };

                //set color for each swatch square
                colors.forEach( ( color, colorKey ) => {
                    if ( colorArray[0] === color[0] ) {
                        swatchStyle.background = colors[colorKey][1];
                    }
                } );

                //return markup to output
                return <div className='row my-3 mx-1'>
                    <div className='col d-flex align-items-center justify-content-center'>
                        <p> { colorArray[1]['name'] }</p>
                    </div>
                    <div className='col color' style={ swatchStyle }></div>
                </div>;
            } );
        };

        return (
            <div className=' swatch my-3'>
                <h3>Swatch</h3>
                <div className={ 'row d-flex my-3 ' }>
                    { // loop through colors object & output each in a column
                        Object.keys( colorObj ).map( ( objectKey ) => {
                        return <div className={ 'col text-center ' + objectKey + 'Color' }>
                            <h4>{ objectKey.charAt(0).toUpperCase() + objectKey.slice(1) }</h4>
                            { colourOutput( colorObj[objectKey], this.state.classColors ) }
                        </div>;
                    } )
                    }
                </div>
            </div>
        );
    }
}

export default BaseplateColors;
