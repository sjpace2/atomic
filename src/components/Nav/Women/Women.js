import React, {Component} from 'react';


class Women extends Component {
    constructor(){
        super()
    }

    changeAlpineBackground=(color, display)=>{
        document.getElementById('w-navbar-alpine-special').style.background = color;
        document.getElementById('w-navbar-drop-alpine-special').style.display = display;
        document.getElementById('w-navbar-drop-nordic-content-special').style.display = 'none'
       
    }

    changeTouringBackground=(color, display)=>{
        document.getElementById('w-navbar-alpine-special').style.display = 'flex';
        document.getElementById('w-navbar-drop-touring-special').style.display = 'flex';
        document.getElementById('w-navbar-alpine-special').style.background = color;
        document.getElementById('w-navbar-drop-alpine-special').style.display = display;
        document.getElementById('w-navbar-drop-touring-content-special').style.display = 'none';
        document.getElementById('w-navbar-drop-nordic-content-special').style.display = 'flex';
    }

    changeNordicBackground=()=>{
        document.getElementById('w-navbar-drop-nordic-content-special').style.display = 'none'
        document.getElementById('w-navbar-drop-touring-content-special').style.display = 'flex'
        document.getElementById('w-navbar-alpine-special').style.background = 'white';
        document.getElementById('w-navbar-drop-alpine-special').style.display = 'flex';
    }


    render(){
        return(
            <div  className='w-navbar-button-women'>Women
            <div className='w-navbar-dropdown'>
                <div className='w-navbar-drop-content'>
                    <div className='w-navbar-drop-alpine' id='w-navbar-alpine-special'>
                        <div className='w-navbar-alpine'>
                            Alpine
                        </div>
                        <div className='w-navbar-drop-alpine-content' id='w-navbar-drop-alpine-special'>
                            <div>
                                <img src={require("./../../../images/women/alpine/skis.png")} alt="skis"/>
                                <li>Skis</li>
                            </div>
                           <div>
                                <img src={require("./../../../images/women/alpine/bindings.png")} alt="bindings"/>
                                <li>Ski Bindings</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/women/alpine/boots.png")} alt="boots"/>
                                <li>Ski Boots</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/women/alpine/helmet.png")} alt="helmets"/>
                                <li>Ski Helmets</li>
                            </div>
                            <div>
                                <img id='w-navbar-goggles' src={require("./../../../images/women/alpine/goggles.png")} alt="goggles"/>
                                <li>Ski Goggles</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/women/alpine/poles.png")} alt="poles"/>
                                <li>Ski Poles</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/women/alpine/belt thing.png")} alt="protection"/>
                                <li>Ski Protection</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/women/alpine/packs.png")} alt="bags"/>
                                <li>Ski Bags & Packs</li>
                            </div>
                           <div>
                                <img src={require("./../../../images/women/alpine/clothing.png")} alt="apparel"/>
                                <li>Apparel</li>
                            </div>
                        </div>
                    </div>
                    <div className='w-navbar-drop-touring' id='w-navbar-drop-touring-special' onMouseOver={()=>this.changeAlpineBackground('none', 'none')} onMouseLeave={()=>this.changeAlpineBackground('white', 'flex')}>
                        <div className='w-navbar-touring'>
                            Touring
                        </div>
                        <div className='w-navbar-drop-touring-content' id='w-navbar-drop-touring-content-special'>
                        <div>
                                <img src={require("./../../../images/women/touring/skis.png")} alt="skis"/>
                                <li>Touring Ski</li>
                            </div>
                           <div>
                                <img src={require("./../../../images/women/touring/skins.png")} alt="skins"/>
                                <li>Touring Skins</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/women/touring/bindings.png")} alt="bindings"/>
                                <li>Touring Bindings</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/women/touring/boots.png")} alt="boots"/>
                                <li>Touring Boots</li>
                            </div>
                            <div>
                                <img id='w-navbar-goggles' src={require("./../../../images/women/touring/helmets.png")} alt="helmets"/>
                                <li>Touring Helmets</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/women/touring/poles.png")} alt="poles"/>
                                <li>Touring Poles</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/women/touring/packs.png")} alt="bags"/>
                                <li>Ski Bags & Packs</li>
                            </div>
                           <div>
                                <img src={require("./../../../images/women/touring/clothing.png")} alt="apparel"/>
                                <li>Apparel</li>
                            </div>
                        </div>
                    </div>
                    <div className='w-navbar-drop-nordic' onMouseOver={()=>this.changeTouringBackground('none', 'none')} onMouseLeave={()=>this.changeNordicBackground('white', 'flex')}>
                        <div className='w-navbar-nordic'>
                            Nordic
                        </div>
                        <div className='w-navbar-drop-nordic-content' id='w-navbar-drop-nordic-content-special'>
                        <div>
                                <img src={require("./../../../images/women/crosscountry/skis.png")} alt="ski"/>
                                <li>Crosscountry Ski</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/women/crosscountry/bindings.png")} alt="bindings"/>
                                <li>Crosscountry Bindings</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/women/crosscountry/boots.png")} alt="boots"/>
                                <li>Crosscountry Boots</li>
                            </div>
                            <div>
                                <img id='w-navbar-goggles' src={require("./../../../images/women/crosscountry/poles.png")} alt="poles"/>
                                <li>Crosscountry Poles</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/women/crosscountry/packs.png")} alt="bags"/>
                                <li>Crosscountry Bags</li>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        )
    }
}

export default Women;