import React from 'react';
import styled from 'styled-components';
import ToDoItem from './toDoItem';

const ToDoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function ToDoList() {
  return (
    <ToDoListBlock>
      <ToDoItem text="create project" done={true} />
      <ToDoItem text="styling component" done={true} />
      <ToDoItem text="create Context" done={false} />
      <ToDoItem text="implement function" done={false} />
    </ToDoListBlock>
  );
}

export default ToDoList;
