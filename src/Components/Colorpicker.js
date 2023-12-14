import { Component } from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    pading: 10px;
`;

const Title = styled.h2`
    line-height: 1.3;
`;

const Option = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    margin: 6px;
    padding: 0 10px;
    background-color: ${({backgroundColor})=>backgroundColor};
    border: ${({currentIdx, idx}) => currentIdx === idx ? '3px solid black' : '0'};

    transition: transform 250ms linear;

    &:hover{
        transform: translateY(-50%)
    }
`;

export default class ColorPicker extends Component{

    state={
        currentOptionIdx: 0,
    }

    handleActive = (idx) => {
        this.setState({
            currentOptionIdx: idx,
        })
    } 

    render(){
        return (
            <Container>
                <Title>Color Picker</Title>
                <div>
                    {this.props.options.map((option, idx) => {
                        return <Option key = {option.label} onClick={()=>this.handleActive(idx)} idx={idx} currentIdx={this.state.currentOptionIdx} backgroundColor={option.color}>{option.label}</Option>
                    })}
                </div>
            </Container>
        )
    }
}