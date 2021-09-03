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
            item: action.payload.item,
          };
        }
        return todo;
      }),

    // completed
    completeTodos: (state, action: PayloadAction<boolean>) =>
      state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      }),
  },
});

export const {addTodos, removeTodos, updateTodos, completeTodos} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
