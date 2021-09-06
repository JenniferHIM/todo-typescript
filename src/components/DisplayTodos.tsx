import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {motion} from 'framer-motion';
import {RootState} from 'redux-toolkit/store';
import TodoItem from './TodoItem';
import styles from '../styles/main.module.scss';
import {ITodo} from '../redux-toolkit/interfaces';

enum sortVariant {
  active,
  completed,
  all,
}

const sortSwitch = (sort: number, todos: ITodo[]) => {
  switch (sort) {
    case sortVariant.active:
      return todos.map((item) => !item.completed && <TodoItem key={item.id} item={item} />);
    case sortVariant.completed:
      return todos.map((item) => item.completed === true && <TodoItem key={item.id} item={item} />);
    case sortVariant.all:
      return todos.map((item) => <TodoItem key={item.id} item={item} />);
    default:
      return <div>null</div>;
  }
};

const DisplayTodos: React.FC = () => {
  const [sort, setSort] = useState<number>(sortVariant.active);
  const todos = useSelector((state: RootState) => state);

  return (
    <div className={styles.displayTodos}>
      <div className={styles.buttons}>
        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => setSort(sortVariant.active)}>
          Active
        </motion.button>
        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => setSort(sortVariant.completed)}>
          Completed
        </motion.button>
        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => setSort(sortVariant.all)}>
          All
        </motion.button>
      </div>
      <ul>{!!todos.length && sortSwitch(sort, todos)}</ul>
    </div>
  );
};

export default DisplayTodos;
