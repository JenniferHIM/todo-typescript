import React, {FC} from 'react';
import {motion} from 'framer-motion';
import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';
import styles from './styles/main.module.scss';

const App: FC = () => (
  <div className={styles.App}>
    <motion.h1
      initial={{y: -200}}
      animate={{y: 0}}
      transition={{type: 'spring', duration: 0.5}}
      whileHover={{scale: 0.7}}
    >
      Todo App
    </motion.h1>

    <motion.div initial={{y: 1000}} animate={{y: 0}} transition={{type: 'spring', duration: 1}}>
      <Todos />
      <DisplayTodos />
    </motion.div>
  </div>
);

export default App;
