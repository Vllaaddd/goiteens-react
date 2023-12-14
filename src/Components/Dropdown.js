import { Component } from "react"

export default class Dropdown extends Component{

    state = {
        visible: true,
    }

    toggle = () => {
        this.setState((prev) => {
            return{
                visible: !prev.visible,
            }
            
        })
    }

    render(){
        return(
            <div className="Dropdown">
              <button
                type="button"
                className="Dropdown__toggle"
                onClick={this.toggle}
              >
              Open
              </button>
              {this.state.visible && (
                <div className="Dropdown__menu">Випадаюче меню</div>
              )}
            </div>
        )
    }
}