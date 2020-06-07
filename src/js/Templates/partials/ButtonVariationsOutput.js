import React, { Component } from 'react';
import Button from '../../components/Button';

class ButtonVariationsOutput extends Component {
    static defaultProps = {
        buttonVariations: [ 'Big', 'Small' ],
        buttonStates: [ 'Idle', 'Hover', 'Pressed', 'Disabled' ],
        buttonName: 'Button',
    };


    render() {
        //outputs a button for each variation type
        let outputButtonVariation = ( variationArray ) => {
            return <>
                { variationArray.map( ( variation ) => {
                    return <div className='col d-flex '>
                        <Button addClasses={'btn-' + variation.toLowerCase()} />
                    </div>;
                } ) }
            </>;
        }

        // create a row for each state e.g. hover
        let returnButtonVariations = ( stateArray, variationArray ) => {
            return <>
                { stateArray.map( ( state ) => {
                    return <div className='row my-1 align-items-center  '>
                        <div className='col text-center'>
                            <h3>{ state }</h3>
                        </div>

                        { outputButtonVariation( variationArray ) }
                    </div>;
                } ) }
            </>;
        }

        let returnVariationCol = ( variationArray ) => {
            return <>
                { variationArray.map( ( variation ) => {
                    return <div className='col'>
                        <h3>{ variation }</h3>
                    </div>;
                } )
                }
            </>;
        }

        // returns
        let buttonOutput = ( variationArray, stateArray ) => {
            // output title row for button variations
            return <div className={ 'btn-' + this.props.buttonName.toLowerCase() }>
                <h3>{ this.props.buttonName }</h3>
                <div className='row'>
                    <div className='col'>
                    </div>
                    { returnVariationCol( variationArray ) }
                </div>

                { returnButtonVariations( stateArray, variationArray ) }
            </div>;
        };

        return (
            <div className={'col-12 my-2 py-2 px-1 col-md-5  buttonContainer'}>
                { buttonOutput( this.props.buttonVariations, this.props.buttonStates ) }
            </div>
        );
    };
}

export default ButtonVariationsOutput;