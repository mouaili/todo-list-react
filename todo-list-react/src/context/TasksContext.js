import { createContext, useReducer } from 'react';

const TasksContext = createContext({
  tasksData: {
    tasks: [],
    count: 0,
  },
  addTask: task => {},
  deleteTask: taskId => {},
  editTask: ({ taskIndex, task }) => {},
  toggleTaskDone: ({ taskIndex, isDone }) => {},
});

export { TasksContext };

const INITIAL_TASKS = {
  tasks: [],
  count: 0,
};

const tasksReducer = (state, action) => {
  if (action.type === 'ADD_TASK' && action.value) {
    const tasks = [...state.tasks, action.value];
    return {
      tasks,
      count: tasks.length,
    };
  }

  if (action.type === 'DELETE_TASK' && !isNaN(+action.value)) {
    const tasks = [...state.tasks];
    tasks.splice(+action.value, 1);
    return {
      tasks,
      count: tasks.length,
    };
  }

  if (
    action.type === 'EDIT_TASK' &&
    action.value &&
    !isNaN(+action.value.taskIndex)
  ) {
    const tasks = [...state.tasks];
    tasks[+action.value.taskIndex] = {
      ...tasks[+action.value.taskIndex],
      ...action.value.task,
    };
    return {
      tasks,
      count: tasks.length,
    };
  }

  if (
    action.type === 'TOGGLE_STATUS' &&
    action.value &&
    !isNaN(+action.value.taskIndex)
  ) {
    const tasks = [...state.tasks];
    tasks[+action.value.taskIndex] = {
      ...tasks[+action.value.taskIndex],
      isDone: action.value.isDone,
    };

    return {
      tasks,
      count: tasks.length,
    };
  }

  return state ? state : INITIAL_TASKS;
};

const TasksContextProvider = ({ children }) => {
  const [taskData, dispatchTaskData] = useReducer(tasksReducer, INITIAL_TASKS);

  const addTask = task => {
    dispatchTaskData({
      type: 'ADD_TASK',
      value: task,
    });
  };

  const deleteTask = taskId => {
    dispatchTaskData({
      type: 'DELETE_TASK',
      value: taskId,
    });
  };

  const editTask = ({ taskIndex, task }) => {
    dispatchTaskData({
      type: 'EDIT_TASK',
      value: {
        taskIndex,
        task,
      },
    });
  };

  const toggleTaskDone = ({ taskIndex, isDone }) => {
    dispatchTaskData({
      type: 'TOGGLE_STATUS',
      value: {
        taskIndex,
        isDone,
      },
    });
  };

  const value = {
    taskData,
    addTask,
    deleteTask,
    editTask,
    toggleTaskDone,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export default TasksContextProvider;
