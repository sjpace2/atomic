import React, {Component} from 'react';
import justAtomic from './../../images/just atomic.png';
import justLogo from './../../images/just logo.png';
import Men from './Men/Men';
import Women from './Women/Women';
import Kids from './Kids/Kids';

class Nav extends Component {

    render(){
        return(
        <div className='navbar'> 
            <div className='navbar-left'>
                <img className='nav-logo' src={justLogo} alt="logo"/>   
                <i className="fas fa-bars"></i>
                <img className='nav-atomic' src={justAtomic} alt="atomic"/>
            </div>
            <div className='navbar-button'>
                <Men/>
            </div>
            <div className='w-navbar-button'>
                <Women/>
            </div>
            <div className='navbar-button'>
                <Kids/>
            </div>
            <div className='navbar-button'>
                Athletes
            </div>
            <div className='navbar-button'>
                Atomic World
            </div>
        
            <i className="fas fa-search"></i>
                    
        </div>
        )
    }
}

export default Nav;