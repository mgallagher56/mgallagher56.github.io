import React, { Component, useRef, useEffect } from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import  {TweenLite, TimelineMax, } from 'gsap';

export default class NavBar extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            menuToggle: false,
            navHeight: '',
            clickCount: 0
        };
        this.nav = React.createRef();
        this.tl = new TimelineMax({paused: true});
        this.handleClick = this.handleClick.bind( this );
    }

    handleClick(e) {
        e.stopPropagation();
        this.setState( prevState => ({
            menuToggle: !prevState.menuToggle,
        }) );
        if (this.state.clickCount === 0) {
            this.navAnimation()
            this.setState( ({
                clickCount: 1,
            }) );
        } else {
            this.setState( ({
                clickCount: 0,
            }) );
        }
    }

    navAnimation = () => {
        this.tl.fromTo( this.listItems, { y: '100vh', }, {
            y: 0,
            duration: .5,
            ease: 'ease',
            stagger: 0.15
        } ).play()
        }

    componentDidMount() {
        this.setState( ({
            navHeight: document.getElementById( 'nav-toggle' ).offsetHeight.toString() + 'px',
        }) );

        let navItems = this.nav.current.children;
        this.listItems = [];
        let listLength = navItems.length;

        for (let i = 0; i < listLength; i++ ) {
            let tempList = navItems[i];
            let sublistLength = tempList.children.length;
            for (let j = 0; j < sublistLength; j++ ) {
                this.listItems.push( tempList.children[j] );
            }
        }

        if (this.state.playNav) {

        }

        // this.tl.staggerTo(this.navItems, 0.5, {y: 0, autoAlpha: 1}, 0.1);
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
                    <ul style={ mobileNavStyle } ref={this.nav}
                        className={ `navbar-mobile flex-row flex-wrap w-100 position-fixed ${ this.state.menuToggle ? 'open' : '' }` }>
                        <div className={ 'row w-100' }>
                            <li className={ 'menu-item col-6 home' }><AniLink fade duration={1} color="mediumspringgreen" to='/' className='nav-link'><p> Home </p>
                            </AniLink></li>
                            <li className={ 'menu-item col-6 projects' }><AniLink  paintDrip duration={1}  color="mediumspringgreen" to='/#projects' className='nav-link'>
                                <p> Projects </p></AniLink></li>
                        </div>
                        <div className={ 'row w-100' }>
                            <li className={ 'menu-item col-6 technologies' }><AniLink  paintDrip duration={1}  color="mediumspringgreen" to='/#technologies'
                                                                                   className='nav-link'>
                                <p> Technologies</p></AniLink></li>
                            <li className={ 'menu-item col-6 about' }><AniLink  paintDrip duration={1}  color="mediumspringgreen" to='/#about' className='nav-link'>
                                <p> About </p></AniLink></li>
                        </div>
                        <div className={ 'row w-100' }>
                            <li className={ 'menu-item col-6 cv' }><AniLink  paintDrip duration={1}  color="mediumspringgreen" to='/cv' className='nav-link'><p> My CV </p>
                            </AniLink></li>
                            <li className={ 'menu-item col-6 baseplate' }><AniLink  paintDrip duration={1}  color="mediumspringgreen" to='/baseplate' className='nav-link'>
                                <p> Baseplate </p></AniLink></li>
                        </div>
                        <div className={ 'row w-100' }>
                            <li className={ 'menu-item col-6' }><AniLink  paintDrip duration={1}  color="mediumspringgreen" to='/placeholder1' className='nav-link'>
                                <p> placeholder1 </p></AniLink></li>
                            <li className={ 'menu-item col-6' }><AniLink  paintDrip duration={1}  color="mediumspringgreen" to='/placeholder2' className='nav-link'>
                                <p> placeholder2 </p></AniLink></li>
                        </div>
                    </ul>
                </nav>
                <nav>
                    <ul className='navbar-nav mr-auto navbar-desktop d-none d-lg-block'>
                        <li><AniLink  paintDrip duration={1}  color="mediumspringgreen" to='/' className='nav-link'> Home </AniLink></li>
                        <li><AniLink  paintDrip duration={1}  color="mediumspringgreen" to='/#projects' className='nav-link'> Projects </AniLink></li>
                        <li><AniLink  paintDrip duration={1}  color="mediumspringgreen" to='/#technologies' className='nav-link'> Technologies </AniLink></li>
                        <li><AniLink  paintDrip duration={1}  color="mediumspringgreen" to='/#about' className='nav-link'> About </AniLink></li>
                        <li><AniLink  paintDrip duration={1}  color="mediumspringgreen" to='/cv' className='nav-link'> My CV </AniLink></li>
                        <li><AniLink  paintDrip duration={1}  color="mediumspringgreen" to='/baseplate' className='nav-link'> Baseplate </AniLink></li>
                        <li><AniLink  paintDrip duration={1}  color="mediumspringgreen" to='/placeholder1' className='nav-link'> placeholder1 </AniLink></li>
                        <li><AniLink  paintDrip duration={1}  color="mediumspringgreen" to='/placeholder2' className='nav-link'> placeholder2 </AniLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}