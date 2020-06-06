import React, { Component } from 'react';

class ButtonVariationsOutput extends Component {
    static defaultProps = {
        buttonVariations: [ 'Big', 'Small' ],
        buttonStates: [ 'Idle', 'Hover', 'Pressed', 'Disabled' ],
        buttonName: 'Button',
    };


    render() {
        let buttonOutput = ( variationArray, stateArray ) => {
            // output title row for button variations
            return <div className={ 'btn-' + this.props.buttonName.toLowerCase() }>
                <div>
                    <h3>{ this.props.buttonName }</h3>
                </div>
                <div className='row'>
                    <div className='col'>
                    </div>
                    { variationArray.map( ( variation ) => {
                        return <div className='col'>
                            <h3>{ variation }</h3>
                        </div>;
                    } )
                    }
                </div>

                {/*create a row for each state e.g. hover*/ }
                { stateArray.map( ( state ) => {
                    return <div className='row'>
                        <div className='col'>
                            <h3>{ state }</h3>
                        </div>

                        {/*output 1 button for each variation e.g. big/small*/ }
                        { variationArray.map( ( variation ) => {
                            return <div className='col'>
                                <a href={'/'} className={ 'btn btn-' + variation }>Button</a>
                            </div>;
                        } ) }
                    </div>;
                } ) }
            </div>;
        };

        return (
            <div>
                { buttonOutput( this.props.buttonVariations, this.props.buttonStates ) }
            </div>
        );
    };
}

export default ButtonVariationsOutput;