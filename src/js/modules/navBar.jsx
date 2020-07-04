import React, { Component } from 'react';
import { Link } from 'gatsby';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className='navbar-nav mr-auto navbar-mobile d-lg-none d-flex position-absolute flex-row flex-wrap w-100 h-33'>
                        <li className={'col-6'}><Link to='/home' className='nav-link'> Home </Link></li>
                        <li className={'col-6'}><Link to='/#projects' className='nav-link'> Projects </Link></li>
                        <li className={'col-6'}><Link to='/#technologies' className='nav-link'> Technologies </Link></li>
                        <li className={'col-6'}><Link to='/#about' className='nav-link'> About </Link></li>
                        <li className={'col-6'}><Link to='/cv' className='nav-link'> My CV </Link></li>
                        <li className={'col-6'}><Link to='/baseplate' className='nav-link'> Baseplate </Link></li>
                    </ul>
                </nav>
                <nav>
                    <ul className='navbar-nav mr-auto navbar-desktop d-none d-lg-block'>
                        <li><Link to='/home' className='nav-link'> Home </Link></li>
                        <li><Link to='/#projects' className='nav-link'> Projects </Link></li>
                        <li><Link to='/#technologies' className='nav-link'> Technologies </Link></li>
                        <li><Link to='/#about' className='nav-link'> About </Link></li>
                        <li><Link to='/cv' className='nav-link'> My CV </Link></li>
                        <li><Link to='/baseplate' className='nav-link'> Baseplate </Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}