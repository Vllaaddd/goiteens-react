import styled from "styled-components";

const FilterLabel = styled.label`
display: inline-flex;
align-items: center;
padding: 15px;
margin: 30px;
`

const FilterField = styled.input`
margin-left: 15px;
width: 240px;
height: 32px;
border-radius: 5px;
`

export const Filter = ({ value, onChange }) => (
    <FilterLabel>
      Фільтр по іменi
      <FilterField type="text" value={value} onChange={onChange} />
    </FilterLabel>
);