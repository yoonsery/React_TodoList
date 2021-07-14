import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdEdit } from 'react-icons/md';
import { useTodoDispatch } from '../toDoContext';

const Edit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const ToDoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove}, ${Edit} {
      display: initial;
    }
  }
  ${(props) =>
    props.done &&
    css`
      display: none;
    `}
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.input`
  flex: 1;
  font-size: 21px;
  color: #495057;
  border: none;
  outline: none;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function ToDoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  const [value, setValue] = useState(text);
  const textRef = useRef();
  const [isEditable, setIsEditable] = useState(false);

  const onChange = (e) => {
    e.preventDefault();
    if (!setIsEditable) {
      return;
    }
    const updated = textRef.current.value;
    setValue(updated);
  };

  const onBlur = () => {
    textRef.current.readOnly = true;
    if (textRef.current.value.trim() === '') {
      onRemove();
    }
  };

  const onEdit = () => {
    setIsEditable(!isEditable);
    textRef.current.focus();
    textRef.current.readOnly = false;
  };

  return (
    <ToDoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text //
        ref={textRef}
        done={done}
        value={value}
        readOnly={true}
        onChange={onChange}
        onBlur={onBlur}
        type="text"
      ></Text>
      <Edit onClick={onEdit} done={done}>
        {!done && <MdEdit />}
      </Edit>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </ToDoItemBlock>
  );
}

export default React.memo(ToDoItem);
