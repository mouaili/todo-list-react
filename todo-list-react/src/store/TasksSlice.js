import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  tasks: [],
  count: 0,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: INITIAL_STATE,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        ...action.payload,
        createdAt: new Date().getTime(),
        isDone: false,
      });
      state.count = state.tasks.length;
    },
    deleteTask: (state, action) => {
      state.tasks.splice(+action.payload, 1);
      state.count = state.tasks.length;
    },
    editTask: (state, action) => {
      const editedTask = state.tasks.map((task, index) => {
        if (index === action.payload.taskIndex) {
          task = { ...task, ...action.payload.task };
        }
        return task;
      });
      return {
        tasks: editedTask,
        count: editedTask.length,
      };
    },
    toggleTaskIsDone: (state, action) => {
      const editedTask = state.tasks.map((task, index) => {
        if (index === action.payload.taskIndex) {
          task = {
            ...task,
            isDone: !task.isDone,
            action: action.payload.action,
          };
        }
        return task;
      });
      return {
        tasks: editedTask,
        count: editedTask.length,
      };
    },
  },
});

export const { addTask, deleteTask, editTask, toggleTaskIsDone } =
  tasksSlice.actions;
console.log('ASSTASK>>>>>>>>>>>>>>>>>>>', addTask);

export default tasksSlice.reducer;
