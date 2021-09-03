import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodos} from '../redux-toolkit/slice';
import styles from '../styles/main.module.scss';

const Todos: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const add = (): void => {
    if (todo === '') {
      alert('Input is empty');
    } else {
      const todoItem = {
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
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
