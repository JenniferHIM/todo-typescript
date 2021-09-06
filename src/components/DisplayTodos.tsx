import React, {useState, ReactNode} from 'react';
import {useSelector} from 'react-redux';
import {motion} from 'framer-motion';
import TodoItem from './TodoItem';
import styles from '../styles/main.module.scss';
import { ITodo } from '../redux-toolkit/interfaces';

export enum sortVariant {
  active = 'active',
  completed = 'completed',
  all = 'all',
}
interface DisplayProps {
  state: string;
}

interface sortProps {
  sort: sortVariant;
  todos: ITodo[];
  children?: ReactNode;
}

const sortSwitch: React.FC = ({}) => {
  switch (sort) {
    case 'active':
      return todos.map((item) => !item.completed && <TodoItem key={item.id} item={item} />);
    case 'completed':
      return todos.map((item) => item.completed === true && <TodoItem key={item.id} item={item} />);
    case 'all':
      return todos.map((item) => <TodoItem key={item.id} item={item} />);
  };
    default: return <div>null</div>;
  };

const DisplayTodos: React.FC<DisplayProps> = ({state}) => {
  const [sort, setSort] = useState<string>('active');
  const todos = useSelector((state) => state);

  return (
    <div className={styles.displayTodos}>
      <div className={styles.buttons}>
        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => setSort('active')}>
          Active
        </motion.button>
        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => setSort('completed')}>
          Completed
        </motion.button>
        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => setSort('all')}>
          All
        </motion.button>
      </div>
      <ul>{!!todos.length && sortSwitch(sort, todos)}</ul>
    </div>
  );
};

export default DisplayTodos;
