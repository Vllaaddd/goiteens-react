import { Component } from "react";

export class Form extends Component{
    state = {
        name: '',
        tag: '',
    }

    handleInput = (ev) => {
        const {name, value} = ev.currentTarget;
        this.setState({
            [name]: value,
        })
    }
    
    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.onChange(this.state)
        this.reset();
    }

    reset = () => {
      this.setState({
        name: '',
        tag: '',
      })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Name
                    <input id='name' name='name' value={this.state.name} onChange={this.handleInput} />
                </label>
                <label>Tag
                    <input id='tag' name='tag' value={this.state.tag} onChange={this.handleInput} />
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
} 