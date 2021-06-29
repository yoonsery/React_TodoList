import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ToDoTemplate from './components/toDoTemplate';
import ToDoHead from './components/toDoHead';
import ToDoList from './components/toDoList';
import ToDoCreate from './components/toDoCreate';
import { TodoProvider } from './toDoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <ToDoTemplate>
        <ToDoHead />
        <ToDoList />
        <ToDoCreate />
      </ToDoTemplate>
    </TodoProvider>
  );
}

export default App;
