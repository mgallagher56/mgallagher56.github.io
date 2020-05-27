import React, {Component} from "react";

class BaseplateColors extends Component {
    componentDidMount() {
        console.log('I was triggered during componentDidMount')
    }

    render() {
        console.log('I was triggered during render')
        return (
            <div> I am the App component </div>
        )
    }
//     constructor( props ) {
//         super( props );
//         this.state = {
//             result: sass.rendersync( {
//                 file: '../../scss/conf/_colors.json'
//             } )
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <p>
//                     { this.state.result }
//                 </p>
//             </div>
//         )
//     }
}
//
export default BaseplateColors;
