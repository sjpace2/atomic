import React, {Component} from 'react';

class Home extends Component {
    constructor(){
        super()
        this.state={
            number: 1
        }
    }

    increaseNumber=()=>{
        this.setState({
            number: this.state.number+1
        })
    }




    render(){
        console.log(this.state.number)
        return(
            <div>
                Home page
                <button onClick={()=>this.increaseNumber()}>Increase Number!</button>
                {this.state.number}
            </div>
        )
    }
}

export default Home;