import React, { Component } from 'react';
import { Link } from 'gatsby';

export default class NavBar extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            menuToggle: false,
            navHeight: '',
        };
        this.handleClick = this.handleClick.bind( this );
    }

    handleClick(e) {
        e.stopPropagation();
        this.setState( prevState => ({
            menuToggle: !prevState.menuToggle,
        }) );
    }

    componentDidMount() {
        this.setState( ({
            navHeight: document.getElementById( 'nav-toggle' ).offsetHeight.toString() + 'px',
        }) );
    }

    render() {
        let mobileNavStyle = {
            height: `calc(100vh - ${this.state.navHeight})`
        };
        return (
            <div>
                <nav className={ 'nav-mobile d-lg-none position-relative w-100' }>
                    <div id={ 'nav-toggle' } className={ 'collapsable-nav d-lg-none' }>
                        <span onClick={ this.handleClick }>
                        </span>
                    </div>
                    <ul style={ mobileNavStyle }
                        className={ `navbar-mobile flex-row flex-wrap w-100 position-fixed ${ this.state.menuToggle ? 'open' : '' }` }>
                        <div className={ 'row w-100' }>
                            <li className={ 'menu-item col-6 home' }><Link to='/' className='nav-link'><p> Home </p>
                            </Link></li>
                            <li className={ 'menu-item col-6 projects' }><Link to='/#projects' className='nav-link'>
                                <p> Projects </p></Link></li>
                        </div>
                        <div className={ 'row w-100' }>
                            <li className={ 'menu-item col-6 technologies' }><Link to='/#technologies'
                                                                                   className='nav-link'>
                                <p> Technologies</p></Link></li>
                            <li className={ 'menu-item col-6 about' }><Link to='/#about' className='nav-link'>
                                <p> About </p></Link></li>
                        </div>
                        <div className={ 'row w-100' }>
                            <li className={ 'menu-item col-6 cv' }><Link to='/cv' className='nav-link'><p> My CV </p>
                            </Link></li>
                            <li className={ 'menu-item col-6 baseplate' }><Link to='/baseplate' className='nav-link'>
                                <p> Baseplate </p></Link></li>
                        </div>
                        <div className={ 'row w-100' }>
                            <li className={ 'menu-item col-6' }><Link to='/placeholder1' className='nav-link'>
                                <p> placeholder1 </p></Link></li>
                            <li className={ 'menu-item col-6' }><Link to='/placeholder2' className='nav-link'>
                                <p> placeholder2 </p></Link></li>
                        </div>
                    </ul>
                </nav>
                <nav>
                    <ul className='navbar-nav mr-auto navbar-desktop d-none d-lg-block'>
                        <li><Link to='/' className='nav-link'> Home </Link></li>
                        <li><Link to='/#projects' className='nav-link'> Projects </Link></li>
                        <li><Link to='/#technologies' className='nav-link'> Technologies </Link></li>
                        <li><Link to='/#about' className='nav-link'> About </Link></li>
                        <li><Link to='/cv' className='nav-link'> My CV </Link></li>
                        <li><Link to='/baseplate' className='nav-link'> Baseplate </Link></li>
                        <li><Link to='/placeholder1' className='nav-link'> placeholder1 </Link></li>
                        <li><Link to='/placeholder2' className='nav-link'> placeholder2 </Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}