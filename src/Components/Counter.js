import React from "react";
import Buttons from "./Buttons";
import Span from "./Span";

export default class Counter extends React.Component{

    static defaultProps = {
        initialValue: 0,
    }

    state={
        value: this.props.initialValue,
    }

    handlerIncrement = (e) => {
        this.setState((prev) => {
            return{
                value: prev.value + 1,
            }
            
        })
    }

    handlerDecrement = (e) => {
        this.setState((prev) => {
            return{
                value: prev.value - 1,
            }
            
        })
    }

    render(){
        const {handlerDecrement, handlerIncrement} = this;
        return(
            <div className="Counter__controls">
                <Span value={this.state.value} />
                <Buttons onIncrement={handlerIncrement} onDecrement={handlerDecrement} />
            </div>
        )
    }
}