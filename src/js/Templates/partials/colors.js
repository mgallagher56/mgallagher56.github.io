import React, { Component } from "react";
import * as data from '../../../conf/_colors.json';

class BaseplateColors extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            classColors: Object.entries( data.colors ),
            mappedColors:Object.entries( data.map ),
        }
    }

    render() {
        let colorOutput = this.state.classColors.map( ( value, key, map ) => {
            let swatchStyle = {
                background: value[1],
                height: '100px',
                borderRadius: '5px'
            }
            return <div className='row d-flex my-5'>
                <div className='col d-flex align-items-center'>
                    <p>{this.state.mappedColors[key][1]['name']}</p>
                </div>
                <div className='col color' style={ swatchStyle }></div>
            </div>
        } )

        console.log(this.state.mappedColors[0])



        return (
            <div className='swatch my-5'>
                <h3>Swatch</h3>
                <div className='col-4 primaryColors'>
                    <h4>Primary Colors</h4>
                    { colorOutput }
                </div>
                <div className='col-4 secondaryColors'></div>
                <div className='col-4 tertiaryColors'></div>
            </div>
        )
    }
}

export default BaseplateColors;
