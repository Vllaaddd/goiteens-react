import { styled } from "styled-components"

const StyledTitle = styled.h2`
    display: block;
    padding: 10px;
    background: ${props => props.theme.titleBgColor};
    text-align: center;
    border: 1px solid ${props => props.theme.titleBorderColor};
    color: ${props => props.theme.titleColor};
`;

export default function PageTitle({title}){
    return(
        <StyledTitle>{title}</StyledTitle>
    )
}