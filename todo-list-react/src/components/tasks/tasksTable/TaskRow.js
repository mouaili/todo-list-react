import React, { useState } from 'react';
//import { TasksContext } from '../../../context/TasksContext';
import Button from '../../ui/buttons/Button';
import TasksForm from '../../ui/form/TasksForm';
import Modal from '../../ui/modals/Modal';
import { deleteTask, toggleTaskIsDone } from '../../../store/TasksSlice';
import TimerTask from '../../Timer/TimerTask';
import { useDispatch, useSelector } from 'react-redux';

const TaskRow = ({ task, index }) => {
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);
  //const { deleteTask, toggleTaskDone } = useContext(TasksContext);

  const taskData = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  console.log('from taskrow', taskData);

  const handleChangeStatus = event => {
    const value = event.target.checked;
    dispatch(toggleTaskIsDone({ taskIndex: index, isDone: value }));
    console.log({
      taskIndex: index,
      isDone: value,
    });
  };

  const handleDeleteTask = () => {
    //deleteTask(index);
    dispatch(deleteTask({ task, taskIndex: index }));
  };

  return (
    //
    <>
      <tr>
        <td>
          <input
            type='checkbox'
            checked={task.isDone}
            onChange={handleChangeStatus}
          />
        </td>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>{task.createdAt}</td>
        <td>{task.time}</td>
        <td>
          <Button onClick={() => setIsTimerModalOpen(true)}>Lanch Timer</Button>
          <Button variant='danger' onClick={handleDeleteTask}>
            Delete
          </Button>
          <Button onClick={() => setIsEditTaskModalOpen(true)}>Edit</Button>
        </td>
      </tr>
      <Modal
        index={index}
        title={task.title}
        createdAt={task.createdAt}
        isOpen={isEditTaskModalOpen}
        setIsOpen={setIsEditTaskModalOpen}
      >
        <TasksForm
          index={index}
          closeModal={() => setIsEditTaskModalOpen(false)}
          value={{
            title: task.title,
            description: task.description,
          }}
        />
      </Modal>

      <Modal
        index={index}
        title={task.title}
        isOpen={isTimerModalOpen}
        setIsOpen={setIsTimerModalOpen}
      >
        <TimerTask
          index={index}
          onCloseModal={() => setIsTimerModalOpen(false)}
        />
      </Modal>
    </>
  );
};

export default TaskRow;
