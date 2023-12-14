import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  width: 600px;
`
const Item = styled.li`
  display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid black;
`
const Text = styled.p`
  margin-top: 0;
    margin-bottom: 0;
    margin-right: 10px;
    text-decoration: ${p => p.completed ? 'line-through' : 'none'};
`
const Button = styled.button`
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

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <Item key={id}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <Text completed={completed}>{text}</Text>
        <Button
          type='button'
          onClick={() => onDeleteTodo(id)}
        >
          Delete
          </Button>
      </Item>
    ))}
  </List>
);

export default TodoList;