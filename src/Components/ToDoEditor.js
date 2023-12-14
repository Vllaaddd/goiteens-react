import { Component } from "react";
import {styled } from 'styled-components';

const Form = styled.form`
width: 600px;
display: flex;
flex-direction: column;
padding: 16px;
border: 1px solid black;
border-radius: 4px;
margin-bottom: 20px;
`;

const Textarea = styled.textarea`
line-height: 16px;

height: 54px;
padding: 12px 16px;
border: 1px solid rgba(33, 33, 33, 0.2);
border-radius: 4px;

font: inherit;
letter-spacing: 0.01em;

resize: none;
margin-bottom: 12px;
`

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: ${p=>p.theme.colors.button};
  color:${p=>p.theme.colors.bgColor};
  font-size: 18px;

  &:hover{
    background-color: ${p=>p.theme.colors.accent};
  }
`

export class TodoEditor extends Component{
    state={
        textValue: '',
        level: 'junior',
        licence: 'false'
    }

    handleChange = (e)=> {
        this.setState({textValue: e.target.value})
    }

    handleRadioChange = (e)=> {
        this.setState({level: e.target.name})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.textValue)
    }

    handleChecked = (e)=>{
        this.setState({
            licence: e.currentTarget.checked
        })
    }

    render(){
        return (
            <Form onSubmit={this.handleSubmit}>                   
                    <Textarea value={this.state.textValue} onChange={this.handleChange}/>                    
                <Button type="submit">Create</Button> 
            </Form>
        )
    }
}