import React, {Component} from 'react';
import justAtomic from './../../images/just atomic.png';
import justLogo from './../../images/just logo.png';

class Nav extends Component {
    render(){
        return(
        <div className='navbar'> 
            <div className='navbar-left'>
                <img className='nav-logo' src={justLogo} alt="logo"/>
                <i className="fas fa-bars"></i>
                <img className='nav-atomic' src={justAtomic} alt="atomic"/>
            </div>
            <div className='navbar-right'>
            <ul className='navbar-menu'>
               <li>Men</li>
               <li>Women</li>
               <li>Kids</li>
               <li>Athletes</li>
               <li>Atomic World</li>
            </ul>
            <i className="fas fa-search"></i>
            </div>
        </div>
        )
    }
}

export default Nav;