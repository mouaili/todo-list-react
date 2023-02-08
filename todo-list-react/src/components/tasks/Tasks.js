import { useState } from 'react';
import Button from '../ui/buttons/Button';
import Modal from '../ui/modals/Modal';
import PageTitle from '../ui/pageTitle/PageTitle';
import TasksForm from '../ui/form/TasksForm';
import style from './Tasks.module.css';
import TasksTable from './tasksTable/TasksTable';
//import { TasksContext } from '../../context/TasksContext';
import { useSelector } from 'react-redux';

const Tasks = () => {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  //const { taskData } = useContext(TasksContext);
  const taskData = useSelector(state => state.tasks);
  console.log(taskData);

  return (
    <>
      <div className={style['tasks-header']}>
        <PageTitle
          counter={taskData.count}
          title={` Task${taskData.count > 1 ? 's' : ''}`}
        />
        <Button onClick={() => setIsNewTaskModalOpen(true)}>New Task</Button>
      </div>
      <Modal isOpen={isNewTaskModalOpen} setIsOpen={setIsNewTaskModalOpen}>
        <TasksForm closeModal={() => setIsNewTaskModalOpen(false)} />
      </Modal>
      <TasksTable />
    </>
  );
};

export default Tasks;
