import { styled } from "styled-components"
import Event from "./Event";

const StyledList = styled.ul`
    margin-top: 40px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    background: ${props => props.theme.eventsBoardBg};
    border: 1px solid ${props => props.theme.eventsBoardBorder}
`;

export default function EventsBoard({events}){
    return(
        <StyledList>
            {events && events.map(el => (
                <Event key={el.name} data={el} />
            ))}
        </StyledList>
    )
}