import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITodo, IItem} from './interfaces';

const initialState: Array<ITodo> = [];

const addTodoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<ITodo>) => {
      state.push(action.payload);
      return state;
    },

    removeTodos: (state, action: PayloadAction<number>) => state.filter((item) => item.id !== action.payload),

    updateTodos: (state, action: PayloadAction<IItem>) =>
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            value: action.payload.item,
          };
        }
        return todo;
      }),

    // completed
    completeTodos: (state, action: PayloadAction<number>) =>
      state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
  },
});

export const {addTodos, removeTodos, updateTodos, completeTodos} = addTodoReducer.actions;
export default addTodoReducer.reducer;
