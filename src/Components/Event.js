import { styled } from "styled-components"
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { MdEvent } from 'react-icons/md';
import { FaClock } from 'react-icons/fa';

const StyledEvent = styled.li`
    width: 300px;
    background: ${props => props.theme.eventBg};
    border: 1px solid ${props => props.theme.eventBorder};
    list-style: none;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
    position: relative;
`;

const StyledTitle = styled.h4`
    margin-bottom: 10px;
`;

const Type = styled.p`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const StyledText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
`;

export default function Event({data}){
    const start = new Date(data.time.start).toLocaleString()
    const startTime = new Date(data.time.start)
    const endTime = new Date(data.time.end)
    const timeDifference = endTime - startTime;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    return(
        <StyledEvent>
            <StyledTitle>{data.name}</StyledTitle>
            <StyledText><FaMapMarkerAlt size={16} color="red" className="icons" />{data.location}</StyledText>
            <StyledText><FaUser size={16} color="blue" className="icons" />{data.speaker}</StyledText>
            <StyledText><MdEvent size={16} color="green" className="icons" />{start}</StyledText>
            <StyledText><FaClock size={16} color="orange" className="icons" />{hours !== 0 && (hours + ' hours ')}{minutes !== 0 && (minutes + ' minutes')}</StyledText>
            <Type>{data.type}</Type>
        </StyledEvent>
    )
}