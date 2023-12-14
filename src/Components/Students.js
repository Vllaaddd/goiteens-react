import { styled } from "styled-components"
import Student from "./Student"

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 100px;
    background: ${props => props.theme.titleBgColor};
    padding: 20px;
`;

export default function Students({students}){
    return(
        <StyledWrapper>
            {students && students.map(student => (
                <Student key={student.name} student={student} />
            ))}
        </StyledWrapper>
    )
}