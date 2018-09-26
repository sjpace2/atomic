import React, {Component} from 'react';
import homePic from './../../images/home/bent_chetler_ski_0.jpg';

class Home extends Component {
   
    render(){
       
        return(
            <div className='home-background'>
                 <img src={homePic} alt="bent chetler"/> 
            </div>
        )
    }
}

export default Home;