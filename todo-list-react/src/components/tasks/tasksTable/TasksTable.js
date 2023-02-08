import style from './TasksTable.module.css';
import TaskRow from './TaskRow';
//import { TasksContext } from '../../../context/TasksContext';
import { useSelector } from 'react-redux';

const TasksTable = () => {
  //const { taskData } = useContext(TasksContext);
  const taskData = useSelector(state => state.tasks);
  console.log(taskData.tasks);

  return (
    <div className={`${style['tasks-table-container']}`}>
      <table className={`${style['tasks-table']}`}>
        <thead>
          <tr>
            <th>Status</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created at</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {taskData &&
            taskData.tasks &&
            taskData.tasks.map((task, index) => {
              console.log(task.index);

              return (
                <TaskRow
                  index={index}
                  key={Date.parse(task.createdAt) - index}
                  task={task}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TasksTable;
