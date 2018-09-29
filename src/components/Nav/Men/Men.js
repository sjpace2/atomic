import React, {Component} from 'react';


class Men extends Component {
    constructor(){
        super()
    }

    changeAlpineBackground=(color, display, textColor, textColor2, underlineColorAlp, ucColorTour)=>{
        document.getElementById('navbar-alpine-special').style.background = color;
        document.getElementById('navbar-drop-alpine-special').style.display = display;
        document.getElementById('navbar-drop-nordic-content-special').style.display = 'none'
        document.getElementById('navbar-alpine-special2').style.color = textColor;
        document.getElementById('navbar-touring-special').style.color = textColor2; 
        document.getElementById('underline-move-red-alpine').style.background = underlineColorAlp;
        document.getElementById('underline-move-red-touring').style.display = 'flex';
        document.getElementById('underline-move-red-touring').style.background = ucColorTour;
        // document.getElementById('underline-move-red-nordic').style.background = '#CB1F3E';
    }

    changeTouringBackground=(color, display, textColor1, textColor2, ucColorAlp)=>{
        document.getElementById('navbar-alpine-special').style.display = 'flex';
        document.getElementById('navbar-drop-touring-special').style.display = 'flex';
        document.getElementById('navbar-alpine-special').style.background = color;
        document.getElementById('navbar-drop-alpine-special').style.display = display;
        document.getElementById('navbar-drop-touring-content-special').style.display = 'none';
        document.getElementById('navbar-drop-nordic-content-special').style.display = 'flex';
        document.getElementById('navbar-nordic-special').style.color = textColor1;
        document.getElementById('navbar-alpine-special2').style.color = textColor2;
        document.getElementById('underline-move-red-alpine').style.background = ucColorAlp;
        document.getElementById('underline-move-red-nordic').style.display = 'flex'
        document.getElementById('underline-move-red-nordic').style.background = '#CB1F3E';
    }

    changeNordicBackground=(textColor1)=>{
        document.getElementById('navbar-drop-nordic-content-special').style.display = 'none'
        document.getElementById('navbar-drop-touring-content-special').style.display = 'flex'
        document.getElementById('navbar-alpine-special').style.background = 'white';
        document.getElementById('navbar-drop-alpine-special').style.display = 'flex';
        document.getElementById('navbar-nordic-special').style.color = textColor1;
        document.getElementById('underline-move-red-nordic').style.background = '#f1f1f1';
        document.getElementById('underline-move-red-touring').style.background = '#CB1F3E';
    }

    underlineMove=()=>{
        document.getElementById('underline-move').style.display = 'flex';
        document.getElementById('underline-move-red-alpine').style.display = 'flex';
    }

    underlineDown=()=>{
        document.getElementById('underline-move').style.display = 'none';
    }

    alpToTour=()=>{
        document.getElementById('underline-move-red-touring').style.background = '#CB1F3E';
    }
    tourToNord=()=>{
        document.getElementById('underline-move-red-nordic').style.background = '#CB1F3E';
    }

  
    render(){
        return(
        <div>
            <div className='navbar-button-men' onMouseOver={()=>this.underlineMove()} onMouseLeave={()=>this.underlineDown()}>Men
              <div className='underline' id='underline-move'></div>
                <div className='navbar-dropdown'>
                  <div className='navbar-drop-content'>
                    <div className='navbar-drop-alpine' id='navbar-alpine-special' onMouseLeave={()=>this.alpToTour()}>
                        <div className='navbar-alpine' id='navbar-alpine-special2'>
                            Alpine
                            <div className='underline-red' id='underline-move-red-alpine'></div>
                        </div>
                        
                        <div className='navbar-drop-alpine-content' id='navbar-drop-alpine-special'>
                            <div>
                                <img src={require("./../../../images/men/alpine/menRedSkis.png")} alt="skis"/>
                                <li>Skis</li>
                            </div>
                           <div>
                                <img src={require("./../../../images/men/alpine/men bindings.png")} alt="bindings"/>
                                <li>Ski Bindings</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/alpine/men boots.png")} alt="boots"/>
                                <li>Ski Boots</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/alpine/men helmet.png")} alt="helmets"/>
                                <li>Ski Helmets</li>
                            </div>
                            <div>
                                <img id='navbar-goggles' src={require("./../../../images/men/alpine/men goggles.png")} alt="goggles"/>
                                <li>Ski Goggles</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/alpine/men poles.png")} alt="poles"/>
                                <li>Ski Poles</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/alpine/men bag.png")} alt="protection"/>
                                <li>Ski Protection</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/alpine/men backpack.png")} alt="bags"/>
                                <li>Ski Bags & Packs</li>
                            </div>
                           <div>
                                <img src={require("./../../../images/men/alpine/men clothing.png")} alt="apparel"/>
                                <li>Apparel</li>
                            </div>
                        </div>
                    </div>
                    <div className='navbar-drop-touring' id='navbar-drop-touring-special' onMouseOver={()=>this.changeAlpineBackground('none', 'none', '#333', '#CB1F3E', '#f1f1f1')} onMouseLeave={()=>this.changeAlpineBackground('white', 'flex', '#CB1F3E', '#333', '#CB1F3E', '#f1f1f1')}>
                        <div className='navbar-touring' id='navbar-touring-special'>
                            Touring
                            <div className='underline-red' id='underline-move-red-touring'></div>
                        </div>
                        <div className='navbar-drop-touring-content' id='navbar-drop-touring-content-special'>
                        <div>
                                <img src={require("./../../../images/men/touring/touring skis.png")} alt="skis"/>
                                <li>Touring Ski</li>
                            </div>
                           <div>
                                <img src={require("./../../../images/men/touring/touring skins.png")} alt="skins"/>
                                <li>Touring Skins</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/touring/touring bindings.png")} alt="bindings"/>
                                <li>Touring Bindings</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/touring/touring boot.png")} alt="boots"/>
                                <li>Touring Boots</li>
                            </div>
                            <div>
                                <img id='navbar-goggles' src={require("./../../../images/men/touring/touring helmet.png")} alt="helmets"/>
                                <li>Touring Helmets</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/touring/touring poles.png")} alt="poles"/>
                                <li>Touring Poles</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/touring/touring backpack.png")} alt="bags"/>
                                <li>Ski Bags & Packs</li>
                            </div>
                           <div>
                                <img src={require("./../../../images/men/touring/touring jacket.png")} alt="apparel"/>
                                <li>Apparel</li>
                            </div>
                        </div>
                    </div>
                    <div className='navbar-drop-nordic' onMouseOver={()=>this.changeTouringBackground('none', 'none', '#CB1F3E', '#333', '#f1f1f1')} onMouseLeave={()=>this.changeNordicBackground('#333')}>
                        <div className='navbar-nordic' id='navbar-nordic-special'>
                            Nordic
                            <div className='underline-red' id='underline-move-red-nordic'></div>
                        </div>
                        <div className='navbar-drop-nordic-content' id='navbar-drop-nordic-content-special'>
                        <div>
                                <img src={require("./../../../images/men/crosscountry/xc skis.png")} alt="ski"/>
                                <li>Crosscountry Ski</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/crosscountry/xc binding.png")} alt="bindings"/>
                                <li>Crosscountry Bindings</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/crosscountry/xc boot.png")} alt="boots"/>
                                <li>Crosscountry Boots</li>
                            </div>
                            <div>
                                <img id='navbar-goggles' src={require("./../../../images/men/crosscountry/xc poles.png")} alt="poles"/>
                                <li>Crosscountry Poles</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/crosscountry/xc bag.png")} alt="bags"/>
                                <li>Crosscountry Bags</li>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
          </div>
        </div>
        )
    }
}

export default Men;