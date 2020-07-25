import React, { Component } from 'react';
import NavBar from '../js/modules/navBar';
import '../scss/styles.scss';


class IndexPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className={ 'container' }>
                    <h3>Header</h3>
                    <h3>Projects</h3>
                    <h3>Technologies</h3>
                    <h3>About Me</h3>
                    <h3>Socials</h3>
                </div>
                <div>Icons made by <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>Freepik</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a></div>
            </div>
        );
    }
}

export default IndexPage;