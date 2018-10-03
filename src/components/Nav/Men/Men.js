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
        document.getElementById('underline-move-red-alpine').style.animation = 'lineMoveUp2';
        document.getElementById('underline-move-red-alpine').style.animationDuration = '.1s';
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
        document.getElementById('underline-move-red-alpine').style.background = '#CB1F3E';
        document.getElementById('navbar-alpine-special2').style.color = '#CB1F3E';
    }

    underlineMove=()=>{
        document.getElementById('underline-move').style.display = 'flex';
        document.getElementById('underline-move-red-alpine').style.display = 'flex';
    }

    underlineDown=()=>{
        document.getElementById('underline-move').style.display = 'none';
    }

    tourToNord=()=>{
        document.getElementById('underline-move-red-nordic').style.background = '#CB1F3E';
    }

    imageMove=(animation)=>{
        document.getElementById('navbar-skis-pic').style.animationName = animation;
        document.getElementById('navbar-touring-skis-pic').style.animationName = animation;
        document.getElementById('navbar-nordic-skis-pic').style.animationName = animation;
    }

    image2Move=(animation)=>{
        document.getElementById('navbar-bindings-pic').style.animationName = animation;
        document.getElementById('navbar-touring-skins-pic').style.animationName = animation;
        document.getElementById('navbar-nordic-bindings-pic').style.animationName = animation;
    }

    image3Move=(animation)=>{
        document.getElementById('navbar-boots-pic').style.animationName = animation;
        document.getElementById('navbar-touring-bindings-pic').style.animationName = animation;
        document.getElementById('navbar-nordic-boots-pic').style.animationName = animation;
    }

    image4Move=(animation)=>{
        document.getElementById('navbar-helmets-pic').style.animationName = animation;
        document.getElementById('navbar-touring-boots-pic').style.animationName = animation;
        document.getElementById('navbar-nordic-poles-pic').style.animationName = animation;
    }

    image5Move=(animation)=>{
        document.getElementById('navbar-goggles-pic').style.animationName = animation;
        document.getElementById('navbar-touring-helmets-pic').style.animationName = animation;
        document.getElementById('navbar-nordic-bags-pic').style.animationName = animation;
    }

    image6Move=(animation)=>{
        document.getElementById('navbar-poles-pic').style.animationName = animation;
        document.getElementById('navbar-touring-poles-pic').style.animationName = animation;
    }

    image7Move=(animation)=>{
        document.getElementById('navbar-protection-pic').style.animationName = animation;
        document.getElementById('navbar-touring-packs-pic').style.animationName = animation;
    }

    image8Move=(animation)=>{
        document.getElementById('navbar-bags-pic').style.animationName = animation;
        document.getElementById('navbar-touring-apparel-pic').style.animationName = animation;
    }
    
    image9Move=(animation)=>{
        document.getElementById('navbar-apparel-pic').style.animationName = animation;
    }
    

  
    render(){
        return(
        <div>
            <div className='navbar-button-men' onMouseOver={()=>this.underlineMove()} onMouseLeave={()=>this.underlineDown()}>Men
              <div className='underline' id='underline-move'></div>
                <div className='navbar-dropdown'>
                  <div className='navbar-drop-content'>
                    <div className='navbar-drop-alpine' id='navbar-alpine-special'>
                        <div className='navbar-alpine' id='navbar-alpine-special2'>
                            Alpine
                            <div className='underline-red' id='underline-move-red-alpine'></div>
                        </div>
                        
                        <div className='navbar-drop-alpine-content' id='navbar-drop-alpine-special'>
                            <div>
                                <img src={require("./../../../images/men/alpine/menRedSkis.png")} className='navbar-image' id='navbar-skis-pic' alt="skis" onMouseOver={()=>this.imageMove("imageMove")} onMouseLeave={()=>this.imageMove("none")}/>
                                <li>Skis</li>
                            </div>
                           <div>
                                <img src={require("./../../../images/men/alpine/men bindings.png")} alt="bindings" className='navbar-image' id='navbar-bindings-pic' alt="skis" onMouseOver={()=>this.image2Move("imageMove")} onMouseLeave={()=>this.image2Move("none")}/>
                                <li>Ski Bindings</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/alpine/men boots.png")} alt="boots" className='navbar-image' id='navbar-boots-pic' alt="skis" onMouseOver={()=>this.image3Move("imageMove")} onMouseLeave={()=>this.image3Move("none")}/>
                                <li>Ski Boots</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/alpine/men helmet.png")} alt="helmets" className='navbar-image' id='navbar-helmets-pic' alt="skis" onMouseOver={()=>this.image4Move("imageMove")} onMouseLeave={()=>this.image4Move("none")}/>
                                <li>Ski Helmets</li>
                            </div>
                            <div>
                                <img id='navbar-goggles' src={require("./../../../images/men/alpine/men goggles.png")} alt="goggles" className='navbar-image' id='navbar-goggles-pic' alt="skis" onMouseOver={()=>this.image5Move("imageMove")} onMouseLeave={()=>this.image5Move("none")}/>
                                <li>Ski Goggles</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/alpine/men poles.png")} alt="poles" className='navbar-image' id='navbar-poles-pic' alt="skis" onMouseOver={()=>this.image6Move("imageMove")} onMouseLeave={()=>this.image6Move("none")}/>
                                <li>Ski Poles</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/alpine/men bag.png")} alt="protection" className='navbar-image' id='navbar-protection-pic' alt="skis" onMouseOver={()=>this.image7Move("imageMove")} onMouseLeave={()=>this.image7Move("none")}/>
                                <li>Ski Protection</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/alpine/men backpack.png")} alt="bags" className='navbar-image' id='navbar-bags-pic' alt="skis" onMouseOver={()=>this.image8Move("imageMove")} onMouseLeave={()=>this.image8Move("none")}/>
                                <li>Ski Bags & Packs</li>
                            </div>
                           <div>
                                <img src={require("./../../../images/men/alpine/men clothing.png")} alt="apparel" className='navbar-image' id='navbar-apparel-pic' alt="skis" onMouseOver={()=>this.image9Move("imageMove")} onMouseLeave={()=>this.image9Move("none")}/>
                                <li>Apparel</li>
                            </div>
                        </div>
                    </div>
                    <div className='navbar-drop-touring' id='navbar-drop-touring-special' onMouseOver={()=>this.changeAlpineBackground('none', 'none', '#333', '#CB1F3E', '#f1f1f1', '#CB1F3E')} onMouseLeave={()=>this.changeAlpineBackground('white', 'flex', '#CB1F3E', '#333', '#CB1F3E', '#f1f1f1')}>
                        <div className='navbar-touring' id='navbar-touring-special'>
                            Touring
                            <div className='underline-red' id='underline-move-red-touring'></div>
                        </div>
                        <div className='navbar-drop-touring-content' id='navbar-drop-touring-content-special'>
                        <div>
                                <img src={require("./../../../images/men/touring/touring skis.png")} alt="skis" className='navbar-image' id='navbar-touring-skis-pic' alt="skis" onMouseOver={()=>this.imageMove("imageMove")} onMouseLeave={()=>this.imageMove("none")}/>
                                <li>Touring Ski</li>
                            </div>
                           <div>
                                <img src={require("./../../../images/men/touring/touring skins.png")} alt="skins" className='navbar-image' id='navbar-touring-skins-pic' alt="skis" onMouseOver={()=>this.image2Move("imageMove")} onMouseLeave={()=>this.image2Move("none")}/>
                                <li>Touring Skins</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/touring/touring bindings.png")} alt="bindings" className='navbar-image' id='navbar-touring-bindings-pic' alt="skis" onMouseOver={()=>this.image3Move("imageMove")} onMouseLeave={()=>this.image3Move("none")}/>
                                <li>Touring Bindings</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/touring/touring boot.png")} alt="boots" className='navbar-image' id='navbar-touring-boots-pic' alt="skis" onMouseOver={()=>this.image4Move("imageMove")} onMouseLeave={()=>this.image4Move("none")}/>
                                <li>Touring Boots</li>
                            </div>
                            <div>
                                <img id='navbar-goggles' src={require("./../../../images/men/touring/touring helmet.png")} alt="helmets" className='navbar-image' id='navbar-touring-helmets-pic' alt="skis" onMouseOver={()=>this.image5Move("imageMove")} onMouseLeave={()=>this.image5Move("none")}/>
                                <li>Touring Helmets</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/touring/touring poles.png")} alt="poles" className='navbar-image' id='navbar-touring-poles-pic' alt="skis" onMouseOver={()=>this.image6Move("imageMove")} onMouseLeave={()=>this.image6Move("none")}/>
                                <li>Touring Poles</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/touring/touring backpack.png")} alt="bags" className='navbar-image' id='navbar-touring-packs-pic' alt="skis" onMouseOver={()=>this.image7Move("imageMove")} onMouseLeave={()=>this.image7Move("none")} />
                                <li>Ski Bags & Packs</li>
                            </div>
                           <div>
                                <img src={require("./../../../images/men/touring/touring jacket.png")} alt="apparel" className='navbar-image' id='navbar-touring-apparel-pic' alt="skis" onMouseOver={()=>this.image8Move("imageMove")} onMouseLeave={()=>this.image8Move("none")}/>
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
                                <img src={require("./../../../images/men/crosscountry/xc skis.png")} alt="ski" className='navbar-image' id='navbar-nordic-skis-pic' alt="skis" onMouseOver={()=>this.imageMove("imageMove")} onMouseLeave={()=>this.imageMove("none")}/>
                                <li>Crosscountry Ski</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/crosscountry/xc binding.png")} alt="bindings" className='navbar-image' id='navbar-nordic-bindings-pic' alt="skis" onMouseOver={()=>this.image2Move("imageMove")} onMouseLeave={()=>this.image2Move("none")}/>
                                <li>Crosscountry Bindings</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/crosscountry/xc boot.png")} alt="boots" className='navbar-image' id='navbar-nordic-boots-pic' alt="skis" onMouseOver={()=>this.image3Move("imageMove")} onMouseLeave={()=>this.image3Move("none")}/>
                                <li>Crosscountry Boots</li>
                            </div>
                            <div>
                                <img id='navbar-goggles' src={require("./../../../images/men/crosscountry/xc poles.png")} alt="poles" className='navbar-image' id='navbar-nordic-poles-pic' alt="skis" onMouseOver={()=>this.image4Move("imageMove")} onMouseLeave={()=>this.image4Move("none")}/>
                                <li>Crosscountry Poles</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/men/crosscountry/xc bag.png")} alt="bags" className='navbar-image' id='navbar-nordic-bags-pic' alt="skis" onMouseOver={()=>this.image5Move("imageMove")} onMouseLeave={()=>this.image5Move("none")}/>
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