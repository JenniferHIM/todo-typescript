import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {ITodo} from 'redux-toolkit/interfaces';
import {addTodos} from '../redux-toolkit/slice';
import styles from '../styles/main.module.scss';

const Todos: React.FC = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const add = (): void => {
    if (todo === '') {
      alert('Input is empty');
    } else {
      const todoItem: ITodo = {
        id: Math.floor(Math.random() * 1000),
        value: todo,
        completed: false,
        disabled: false,
      };
      dispatch(addTodos(todoItem));
      setTodo('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };

  return (
    <div className={styles.addTodos}>
      <input className={styles.todoInput} type="text" onChange={(e) => handleChange(e)} value={todo} />
      <button className={styles.addBtn} onClick={add}>
        Add
      </button>
      <br />
    </div>
  );
};

export default Todos;
