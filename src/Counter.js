import React,{Component} from "react";

class Counter extends Component{

    constructor(){
        super()
        this.state = {
            count : 0
        }
        this.handleClickDecrease = this.handleClickDecrease.bind(this)
        this.handleClickIncrease = this.handleClickIncrease.bind(this)

    }
    handleClickIncrease(){
        this.setState( prevState => {
            return{
               count : prevState.count + 1
            }
        })
    }

    handleClickDecrease(){
        this.setState(prevState => {
            return {
                count : prevState.count -1
            }
        })
    }

    render()
    {
        return(
            <div>
                <div style={{textAlign: 'center', alignSelf : 'center'}}><br/><br/><br/><br/>
                    <h1>{this.state.count}</h1>
                    <div>
                        <button className="btn btn-primary" onClick = {this.handleClickIncrease}> Increase Value(++) </button>{'  '}
                        <button className="btn btn-primary" onClick={this.handleClickDecrease}> Decrease Value(--) </button>
                    </div>
                </div>
            </div>       
        )
        
    }
}
export default Counter