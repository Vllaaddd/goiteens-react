import { styled } from "styled-components";

const StyledWrapper = styled.div`
    width: 300px;
    height: 150px;
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;
`;

const StyledList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export default function Student({student}){
    return(
        <StyledWrapper>
            <h2>{student.name}</h2>
            <p>Age: {student.age}</p>
            {student.isStudent !== false && (
                <p>Student</p>
            )}
            <StyledList>
                Hobbies: 
                {student.hobbies && student.hobbies.map(el => (
                    <li key={el}>{el}</li>
                ))}
            </StyledList>
            <p>Address: {student.address.city}</p>
        </StyledWrapper>
    )
}