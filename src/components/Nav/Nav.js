import React, {Component} from 'react';
import justAtomic from './../../images/just atomic.png';
import justLogo from './../../images/just logo.png';

class Nav extends Component {


    changeAlpineBackground=(color, display)=>{
        document.getElementById('navbar-alpine-special').style.background = color;
        document.getElementById('navbar-drop-alpine-special').style.display = display;
        document.getElementById('navbar-drop-nordic-content-special').style.display = 'none'
    }

    changeTouringBackground=(color, display)=>{
        document.getElementById('navbar-alpine-special').style.display = 'flex';
        document.getElementById('navbar-drop-touring-special').style.display = 'flex';
        document.getElementById('navbar-alpine-special').style.background = color;
        document.getElementById('navbar-drop-alpine-special').style.display = display;
        document.getElementById('navbar-drop-touring-content-special').style.display = 'none';
        document.getElementById('navbar-drop-nordic-content-special').style.display = 'flex';
    }

    changeNordicBackground=()=>{
        document.getElementById('navbar-drop-nordic-content-special').style.display = 'none'
        document.getElementById('navbar-drop-touring-content-special').style.display = 'flex'
        document.getElementById('navbar-alpine-special').style.background = 'white';
        document.getElementById('navbar-drop-alpine-special').style.display = 'flex';
    }

    render(){
        return(
        <div className='navbar'> 
            <div className='navbar-left'>
                <img className='nav-logo' src={justLogo} alt="logo"/>   
                <i className="fas fa-bars"></i>
                <img className='nav-atomic' src={justAtomic} alt="atomic"/>
            </div>
            <div className='navbar-button-men'>Men
                <div className='navbar-dropdown'>
                    <div className='navbar-drop-content'>
                        <div className='navbar-drop-alpine' id='navbar-alpine-special'>
                            <div className='navbar-alpine'>
                                Alpine
                            </div>
                            <div className='navbar-drop-alpine-content' id='navbar-drop-alpine-special'>
                                <div>
                                    <img src={require("./../../images/men/alpine/menRedSkis.png")} alt="skis"/>
                                    <li>Skis</li>
                                </div>
                               <div>
                                    <img src={require("./../../images/men/alpine/men bindings.png")} alt="bindings"/>
                                    <li>Ski Bindings</li>
                                </div>
                                <div>
                                    <img src={require("./../../images/men/alpine/men boots.png")} alt="boots"/>
                                    <li>Ski Boots</li>
                                </div>
                                <div>
                                    <img src={require("./../../images/men/alpine/men helmet.png")} alt="helmets"/>
                                    <li>Ski Helmets</li>
                                </div>
                                <div>
                                    <img id='navbar-goggles' src={require("./../../images/men/alpine/men goggles.png")} alt="goggles"/>
                                    <li>Ski Goggles</li>
                                </div>
                                <div>
                                    <img src={require("./../../images/men/alpine/men poles.png")} alt="poles"/>
                                    <li>Ski Poles</li>
                                </div>
                                <div>
                                    <img src={require("./../../images/men/alpine/men bag.png")} alt="protection"/>
                                    <li>Ski Protection</li>
                                </div>
                                <div>
                                    <img src={require("./../../images/men/alpine/men backpack.png")} alt="bags"/>
                                    <li>Ski Bags & Packs</li>
                                </div>
                               <div>
                                    <img src={require("./../../images/men/alpine/men clothing.png")} alt="apparel"/>
                                    <li>Apparel</li>
                                </div>
                            </div>
                        </div>
                        <div className='navbar-drop-touring' id='navbar-drop-touring-special' onMouseOver={()=>this.changeAlpineBackground('none', 'none')} onMouseLeave={()=>this.changeAlpineBackground('white', 'flex')}>
                            <div className='navbar-touring'>
                                Touring
                            </div>
                            <div className='navbar-drop-touring-content' id='navbar-drop-touring-content-special'>
                            <div>
                                    <img src={require("./../../images/men/touring/touring skis.png")} alt="skis"/>
                                    <li>Touring Ski</li>
                                </div>
                               <div>
                                    <img src={require("./../../images/men/touring/touring skins.png")} alt="skins"/>
                                    <li>Touring Skins</li>
                                </div>
                                <div>
                                    <img src={require("./../../images/men/touring/touring bindings.png")} alt="bindings"/>
                                    <li>Touring Bindings</li>
                                </div>
                                <div>
                                    <img src={require("./../../images/men/touring/touring boot.png")} alt="boots"/>
                                    <li>Touring Boots</li>
                                </div>
                                <div>
                                    <img id='navbar-goggles' src={require("./../../images/men/touring/touring helmet.png")} alt="helmets"/>
                                    <li>Touring Helmets</li>
                                </div>
                                <div>
                                    <img src={require("./../../images/men/touring/touring poles.png")} alt="poles"/>
                                    <li>Touring Poles</li>
                                </div>
                                <div>
                                    <img src={require("./../../images/men/touring/touring backpack.png")} alt="bags"/>
                                    <li>Ski Bags & Packs</li>
                                </div>
                               <div>
                                    <img src={require("./../../images/men/touring/touring jacket.png")} alt="apparel"/>
                                    <li>Apparel</li>
                                </div>
                            </div>
                        </div>
                        <div className='navbar-drop-nordic' onMouseOver={()=>this.changeTouringBackground('none', 'none')} onMouseLeave={()=>this.changeNordicBackground('white', 'flex')}>
                            <div className='navbar-nordic'>
                                Nordic
                            </div>
                            <div className='navbar-drop-nordic-content' id='navbar-drop-nordic-content-special'>
                            <div>
                                    <img src={require("./../../images/men/crosscountry/xc skis.png")} alt="ski"/>
                                    <li>Crosscountry Ski</li>
                                </div>
                                <div>
                                    <img src={require("./../../images/men/crosscountry/xc binding.png")} alt="bindings"/>
                                    <li>Crosscountry Bindings</li>
                                </div>
                                <div>
                                    <img src={require("./../../images/men/crosscountry/xc boot.png")} alt="boots"/>
                                    <li>Crosscountry Boots</li>
                                </div>
                                <div>
                                    <img id='navbar-goggles' src={require("./../../images/men/crosscountry/xc poles.png")} alt="poles"/>
                                    <li>Crosscountry Poles</li>
                                </div>
                                <div>
                                    <img src={require("./../../images/men/crosscountry/xc bag.png")} alt="bags"/>
                                    <li>Crosscountry Bags</li>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
               

            <div className='navbar-button'>Women</div>
            <div className='navbar-button'>Kids</div>
            <div className='navbar-button'>Athletes</div>
            <div className='navbar-button'>Atomic World</div>
        
            <i className="fas fa-search"></i>
            {/* </div> */}
            
        </div>
        )
    }
}

export default Nav;