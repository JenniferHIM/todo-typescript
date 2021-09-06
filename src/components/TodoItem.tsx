import React, {useRef, useState} from 'react';
import {AiFillEdit} from 'react-icons/ai';
import {IoCheckmarkDoneSharp, IoClose} from 'react-icons/io5';
import {useDispatch} from 'react-redux';
import {ITodo} from 'redux-toolkit/interfaces';
import {removeTodos, updateTodos, completeTodos} from '../redux-toolkit/slice';
import styles from '../styles/main.module.scss';

type TodoItemProps = {
  item: ITodo;
};

const TodoItem: React.FC<TodoItemProps> = ({item}) => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isEdited, setIsEdited] = useState(false);

  const changeFocus = (): void => {
    setIsEdited((prev) => !prev);
    if (inputRef.current) {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  };

  const update = (id: number, e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && inputRef.current) {
      // here 13 is key code for enter key
      dispatch(updateTodos({id, item: inputRef.current.value}));
      inputRef.current.disabled = true;
      setIsEdited(false);
    }
  };

  return (
    <li key={item.id} className={styles.card}>
      {!isEdited ? (
        <div>{item.value}</div>
      ) : (
        <textarea
          ref={inputRef}
          disabled={inputRef.current?.disabled}
          defaultValue={item.value}
          onKeyPress={(e) => update(item.id, e)}
        />
      )}
      <div className={styles.Btns}>
        <button onClick={changeFocus}>
          <AiFillEdit />
        </button>
        {item.completed === false && (
          <button style={{color: 'green'}} onClick={() => dispatch(completeTodos(item.id))}>
            <IoCheckmarkDoneSharp />
          </button>
        )}
        <button style={{color: 'red'}} onClick={() => dispatch(removeTodos(item.id))}>
          <IoClose />
        </button>
      </div>
      {item.completed && (
        <span className={styles.completed} onClick={() => dispatch(completeTodos(item.id))}>
          Toggle
        </span>
      )}
    </li>
  );
};

export default TodoItem;
