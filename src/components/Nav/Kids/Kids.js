import React, {Component} from 'react';



class Kids extends Component {
    constructor(){
        super()
    }

    changeAlpineBackground=(color, display, textColor, textColor2, underlineColorAlp, ucColorTour, visibility)=>{
        document.getElementById('k-navbar-alpine-special').style.background = color;
        document.getElementById('k-navbar-drop-alpine-special').style.display = display;
        document.getElementById('k-navbar-drop-nordic-content-special').style.display = 'none'
        document.getElementById('k-navbar-alpine-special2').style.color = textColor;
        document.getElementById('k-underline-move-red-alpine').style.background = underlineColorAlp;
        document.getElementById('k-underline-move-red-alpine').style.animation = 'lineMoveUp2';
        document.getElementById('k-underline-move-red-alpine').style.animationDuration = '.1s';
       
    }

    changeTouringBackground=(color, display, textColor1, textColor2, ucColorAlp, visibility)=>{
        document.getElementById('k-navbar-alpine-special').style.display = 'flex';
        document.getElementById('k-navbar-drop-nordic-content-special').style.visibility = visibility;
        document.getElementById('k-navbar-alpine-special').style.background = color;
        document.getElementById('k-navbar-drop-alpine-special').style.display = display;
        document.getElementById('k-navbar-drop-nordic-content-special').style.display = 'flex';
        document.getElementById('k-navbar-nordic-special').style.color = textColor1;
        document.getElementById('k-navbar-alpine-special2').style.color = textColor2;
        document.getElementById('k-underline-move-red-alpine').style.background = ucColorAlp;
        document.getElementById('k-underline-move-red-nordic').style.display = 'flex'
        document.getElementById('k-underline-move-red-nordic').style.background = '#CB1F3E';
    }

    changeNordicBackground=(textColor1)=>{
        document.getElementById('k-navbar-drop-nordic-content-special').style.display = 'none'
        document.getElementById('k-navbar-alpine-special').style.background = 'white';
        document.getElementById('k-navbar-drop-alpine-special').style.display = 'flex';
        document.getElementById('k-navbar-nordic-special').style.color = textColor1;
        document.getElementById('k-underline-move-red-nordic').style.background = '#f1f1f1';
        document.getElementById('k-underline-move-red-alpine').style.background = '#CB1F3E';
        document.getElementById('k-navbar-alpine-special2').style.color = '#CB1F3E';
    }

    underlineMove=()=>{
        document.getElementById('k-underline-move').style.display = 'flex';
        document.getElementById('k-underline-move-red-alpine').style.display = 'flex';
    }

    underlineDown=()=>{
        document.getElementById('k-underline-move').style.display = 'none';
    }

    tourToNord=()=>{
        document.getElementById('k-underline-move-red-nordic').style.background = '#CB1F3E';
    }

    imageMove=(animation)=>{
        document.getElementById('k-navbar-skis-pic').style.animationName = animation;
       
        document.getElementById('k-navbar-nordic-skis-pic').style.animationName = animation;
    }

    image2Move=(animation)=>{
        document.getElementById('k-navbar-bindings-pic').style.animationName = animation;
        
        document.getElementById('k-navbar-nordic-bindings-pic').style.animationName = animation;
    }

    image3Move=(animation)=>{
        document.getElementById('k-navbar-boots-pic').style.animationName = animation;
        document.getElementById('k-navbar-nordic-boots-pic').style.animationName = animation;
    }

    image4Move=(animation)=>{
        document.getElementById('k-navbar-helmets-pic').style.animationName = animation;
        document.getElementById('k-navbar-nordic-poles-pic').style.animationName = animation;
    }

    image5Move=(animation)=>{
        document.getElementById('k-navbar-goggles-pic').style.animationName = animation;  
    }

    image6Move=(animation)=>{
        document.getElementById('k-navbar-poles-pic').style.animationName = animation;
       
    }

    image7Move=(animation)=>{
        document.getElementById('k-navbar-protection-pic').style.animationName = animation;
    }

    image8Move=(animation)=>{
        document.getElementById('k-navbar-bags-pic').style.animationName = animation;
        
    }
    
    image9Move=(animation)=>{
        document.getElementById('k-navbar-apparel-pic').style.animationName = animation;
    }

   
  
    render(){
        return(
        <div>
            <div className='k-navbar-button-kids' onMouseOver={()=>this.underlineMove()} onMouseLeave={()=>this.underlineDown()}>Kids
              <div className='k-underline' id='k-underline-move'></div>
                <div className='k-navbar-dropdown'>
                  <div className='k-navbar-drop-content'>
                    <div className='k-navbar-drop-alpine' id='k-navbar-alpine-special'>
                        <div className='k-navbar-alpine' id='k-navbar-alpine-special2'>
                            Alpine
                            <div className='k-underline-red' id='k-underline-move-red-alpine'></div>
                        </div>
                        
                        <div className='k-navbar-drop-alpine-content' id='k-navbar-drop-alpine-special'>
                            <div>
                                <img src={require("./../../../images/kids/alpine/skis.png")} className='k-navbar-image' id='k-navbar-skis-pic' alt="skis" onMouseOver={()=>this.imageMove("imageMove")} onMouseLeave={()=>this.imageMove("none")}/>
                                <li>Skis</li>
                            </div>
                           <div>
                                <img src={require("./../../../images/kids/alpine/bindings.png")} alt="bindings" className='k-navbar-image' id='k-navbar-bindings-pic' alt="skis" onMouseOver={()=>this.image2Move("imageMove")} onMouseLeave={()=>this.image2Move("none")}/>
                                <li>Ski Bindings</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/kids/alpine/boots.png")} alt="boots" className='k-navbar-image' id='k-navbar-boots-pic' alt="skis" onMouseOver={()=>this.image3Move("imageMove")} onMouseLeave={()=>this.image3Move("none")}/>
                                <li>Ski Boots</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/kids/alpine/helmets.png")} alt="helmets" className='k-navbar-image' id='k-navbar-helmets-pic' alt="skis" onMouseOver={()=>this.image4Move("imageMove")} onMouseLeave={()=>this.image4Move("none")}/>
                                <li>Ski Helmets</li>
                            </div>
                            <div>
                                <img id='k-navbar-goggles' src={require("./../../../images/kids/alpine/goggles.png")} alt="goggles" className='k-navbar-image' id='k-navbar-goggles-pic' alt="skis" onMouseOver={()=>this.image5Move("imageMove")} onMouseLeave={()=>this.image5Move("none")}/>
                                <li>Ski Goggles</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/kids/alpine/poles.png")} alt="poles" className='k-navbar-image' id='k-navbar-poles-pic' alt="skis" onMouseOver={()=>this.image6Move("imageMove")} onMouseLeave={()=>this.image6Move("none")}/>
                                <li>Ski Poles</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/kids/alpine/packs.png")} alt="protection" className='k-navbar-image' id='k-navbar-protection-pic' alt="skis" onMouseOver={()=>this.image7Move("imageMove")} onMouseLeave={()=>this.image7Move("none")}/>
                                <li>Ski Protection</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/kids/alpine/clothing.png")} alt="apparel" className='k-navbar-image' id='k-navbar-apparel-pic' alt="skis" onMouseOver={()=>this.image9Move("imageMove")} onMouseLeave={()=>this.image9Move("none")}/>
                                <li>Apparel</li>
                            </div>
                           
                        </div>                                       
                    </div>
                    <div className='k-navbar-drop-nordic' onMouseOver={()=>this.changeTouringBackground('none', 'none', '#CB1F3E', '#333', '#f1f1f1', 'visible')} onMouseLeave={()=>this.changeNordicBackground('#333', 'hidden')}>
                        <div className='k-navbar-nordic' id='k-navbar-nordic-special'>
                            Nordic
                            <div className='k-underline-red' id='k-underline-move-red-nordic'></div>
                        </div>
                        <div className='k-navbar-drop-nordic-content' id='k-navbar-drop-nordic-content-special'>
                        <div>
                                <img src={require("./../../../images/kids/nordic/skis.png")} alt="ski" className='k-navbar-image' id='k-navbar-nordic-skis-pic' alt="skis" onMouseOver={()=>this.imageMove("imageMove")} onMouseLeave={()=>this.imageMove("none")}/>
                                <li>Crosscountry Ski</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/women/crosscountry/bindings.png")} alt="bindings" className='k-navbar-image' id='k-navbar-nordic-bindings-pic' alt="skis" onMouseOver={()=>this.image2Move("imageMove")} onMouseLeave={()=>this.image2Move("none")}/>
                                <li>Crosscountry Bindings</li>
                            </div>
                            <div>
                                <img src={require("./../../../images/kids/nordic/boots.png")} alt="boots" className='k-navbar-image' id='k-navbar-nordic-boots-pic' alt="skis" onMouseOver={()=>this.image3Move("imageMove")} onMouseLeave={()=>this.image3Move("none")}/>
                                <li>Crosscountry Boots</li>
                            </div>
                            <div>
                                <img id='k-navbar-goggles' src={require("./../../../images/kids/nordic/poles.png")} alt="poles" className='k-navbar-image' id='k-navbar-nordic-poles-pic' alt="skis" onMouseOver={()=>this.image4Move("imageMove")} onMouseLeave={()=>this.image4Move("none")}/>
                                <li>Crosscountry Poles</li>
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

export default Kids;