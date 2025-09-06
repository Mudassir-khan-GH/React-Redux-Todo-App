import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
        const todo ={
            id : nanoid(),
            text : action.payload.text,
            completed : false
        }
        state.value.push(todo)
        
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter(task => task.id !== action.payload.id)
    },
    updateTodo:(state,action) => {
        state.value.map(task => (task.id === action.payload.id) ? task.text = action.payload.text : task.text);
    },
    toggleCompleted: (state, action) => {
        state.value.map(task => (task.id === action.payload.id) ? task.completed = !task.completed : task.completed);
    }

  },
})


export const { addTodo , removeTodo , updateTodo , toggleCompleted } = todoSlice.actions

export default todoSlice.reducer