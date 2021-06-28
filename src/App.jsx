import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ToDoTemplate from './components/toDoTemplate';
import ToDoHead from './components/toDoHead';
import ToDoList from './components/toDoList';
import ToDoCreate from './components/toDoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoTemplate>
        <ToDoHead />
        <ToDoList />
        <ToDoCreate />
      </ToDoTemplate>
    </>
  );
}

export default App;
